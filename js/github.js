/**
 * =========================================================
 *  GitHub Integration Module
 *  Handles: Token management, Public & Private repos, Live stats
 * =========================================================
 */

let ghToken = null;

function loadGhToken() {
  ghToken = localStorage.getItem(CONFIG.storageKeys.ghToken) || null;
}

function showTokenModal() {
  if (!dom.tokenModal) return;
  dom.tokenModal.classList.add('active');
  if (dom.tokenInput) dom.tokenInput.value = ghToken || '';
  updateTokenStatus();
  setTimeout(() => dom.tokenInput && dom.tokenInput.focus(), 300);
}

function hideTokenModal() {
  if (dom.tokenModal) dom.tokenModal.classList.remove('active');
}

function saveGhToken() {
  const token = dom.tokenInput ? dom.tokenInput.value.trim() : '';
  if (token) {
    ghToken = token;
    localStorage.setItem(CONFIG.storageKeys.ghToken, token);
    hideTokenModal();
    showToast('🔑 GitHub token saved! Refreshing repos...', 'success');
    fetchGitHubProfile();
    fetchGitHubRepos();
  } else {
    ghToken = null;
    localStorage.removeItem(CONFIG.storageKeys.ghToken);
    hideTokenModal();
    showToast('🔓 GitHub token removed. Showing public repos only.', 'info');
    fetchGitHubProfile();
    fetchGitHubRepos();
  }
}

function removeGhToken() {
  ghToken = null;
  localStorage.removeItem(CONFIG.storageKeys.ghToken);
  if (dom.tokenInput) dom.tokenInput.value = '';
  updateTokenStatus();
  showToast('🔓 Token removed. Showing public repos only.', 'info');
  fetchGitHubProfile();
  fetchGitHubRepos();
}

function updateTokenStatus() {
  if (!dom.tokenStatus) return;
  if (ghToken) {
    dom.tokenStatus.innerHTML = '<i class="fas fa-check-circle" style="color:#4ade80;"></i> Token is set — Private repos will be shown';
    dom.tokenStatus.style.color = '#4ade80';
  } else {
    dom.tokenStatus.innerHTML = '<i class="fas fa-info-circle" style="color:var(--content-muted);"></i> No token — Only public repos shown';
    dom.tokenStatus.style.color = 'var(--content-muted)';
  }
}

function getGitHubHeaders() {
  const headers = { Accept: 'application/vnd.github.v3+json' };
  if (ghToken) {
    headers['Authorization'] = `token ${ghToken}`;
  }
  return headers;
}

async function fetchGitHubProfile() {
  try {
    const url = ghToken
      ? `${CONFIG.githubApiBase}/user`
      : `${CONFIG.githubApiBase}/users/${CONFIG.githubUsername}`;

    const res = await fetch(url, { headers: getGitHubHeaders() });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    if (dom.ghReposCount) {
      dom.ghReposCount.textContent = ghToken
        ? (data.total_private_repos || 0) + (data.public_repos || 0)
        : data.public_repos || 0;
    }
    if (dom.ghFollowersCount) dom.ghFollowersCount.textContent = data.followers || 0;
    if (dom.ghFollowingCount) dom.ghFollowingCount.textContent = data.following || 0;
  } catch (err) {
    console.warn('GitHub profile fetch failed:', err);
  }
}

async function fetchGitHubRepos() {
  try {
    let url;
    if (ghToken) {
      url = `${CONFIG.githubApiBase}/user/repos?per_page=100&sort=pushed&direction=desc&visibility=all`;
    } else {
      url = `${CONFIG.githubApiBase}/users/${CONFIG.githubUsername}/repos?per_page=100&sort=pushed&direction=desc`;
    }

    const res = await fetch(url, { headers: getGitHubHeaders() });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const repos = await res.json();

    const filtered = repos.filter(
      (r) =>
        r.owner &&
        r.owner.login.toLowerCase() === CONFIG.githubUsername.toLowerCase() &&
        !r.fork &&
        !CONFIG.manualProjectRepos.includes(r.name)
    );

    renderGitHubProjects(filtered);

    const privateCount = filtered.filter((r) => r.private).length;
    const publicCount = filtered.filter((r) => !r.private).length;

    if (dom.ghLoading) {
      if (ghToken && privateCount > 0) {
        dom.ghLoading.textContent = `(${filtered.length} repos — ${publicCount} public, ${privateCount} private)`;
      } else {
        dom.ghLoading.textContent = `(${filtered.length} repos)`;
      }
    }
  } catch (err) {
    console.warn('GitHub repos fetch failed:', err);
    if (dom.githubProjects) {
      dom.githubProjects.innerHTML =
        '<p style="color:var(--content-muted);font-size:0.82rem;grid-column:1/-1;">⚠️ Could not load GitHub repositories. Please refresh to try again.</p>';
    }
    if (dom.ghLoading) dom.ghLoading.textContent = '(failed)';
  }
}

function renderGitHubProjects(repos) {
  if (!dom.githubProjects) return;
  dom.githubProjects.innerHTML = '';

  if (repos.length === 0) {
    dom.githubProjects.innerHTML =
      '<p style="color:var(--content-muted);font-size:0.82rem;grid-column:1/-1;">No additional GitHub repositories found.</p>';
    return;
  }

  repos.forEach((repo) => {
    const card = document.createElement('div');
    card.className = 'gh-project-card';

    const langColor = LANG_COLORS[repo.language] || '#8b949e';
    const description = repo.description || formatRepoName(repo.name);
    const updatedDate = new Date(repo.updated_at).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
    });

    const privateBadge = repo.private
      ? '<span class="private-badge"><i class="fas fa-lock"></i> Private</span>'
      : '';

    card.innerHTML = `
      <div class="gh-project-name">
        <span class="repo-icon"><i class="fas fa-code-branch"></i></span>
        ${escapeHtml(formatRepoName(repo.name))}
        ${privateBadge}
      </div>
      <p class="gh-project-desc">${escapeHtml(description)}</p>
      <div class="gh-project-meta">
        ${
          repo.language
            ? `<span><span class="gh-lang-dot" style="background:${langColor}"></span>${repo.language}</span>`
            : ''
        }
        <span><i class="fas fa-star" style="color:#f1e05a;"></i> ${repo.stargazers_count}</span>
        <span>Updated ${updatedDate}</span>
        ${
          !repo.private
            ? `<a class="gh-project-link" href="${repo.html_url}" target="_blank"><i class="fas fa-external-link-alt"></i> View</a>`
            : '<span class="gh-project-link" style="opacity:0.5;cursor:default;"><i class="fas fa-lock"></i> Private</span>'
        }
      </div>
    `;

    dom.githubProjects.appendChild(card);
  });
}
