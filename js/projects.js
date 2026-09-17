/**
 * =========================================================
 *  Projects Renderer & Dynamic Hydration Module
 * =========================================================
 */

function renderProjects() {
  const container = document.getElementById('manual-projects');
  if (!container || typeof PROJECTS_DATA === 'undefined') return;

  const html = PROJECTS_DATA.map((proj) => {
    const highlightsHtml = proj.highlights.map((h, i) => `
      <li class="project-highlight-item" data-editable="${proj.id}-h${i}">
        <strong class="highlight-key">${escapeHtml(h.key)}:</strong> ${escapeHtml(h.text)}
      </li>
    `).join('');

    const techTagsHtml = proj.techTags.map((tag) => `
      <span class="tech-tag">${escapeHtml(tag)}</span>
    `).join('');

    let actionHtml = '';
    if (proj.linkUrl) {
      const icon = proj.linkUrl.includes('play.google.com') ? 'fab fa-google-play' : 'fas fa-external-link-alt';
      actionHtml = `<a class="project-link" href="${escapeHtml(proj.linkUrl)}" target="_blank"><i class="${icon}"></i> ${escapeHtml(proj.linkText)}</a>`;
    } else if (proj.badgeText) {
      actionHtml = `<span class="project-badge-tag"><i class="fas fa-check-circle"></i> ${escapeHtml(proj.badgeText)}</span>`;
    }

    return `
      <div class="project-card" id="card-${proj.id}">
        <div class="project-header">
          <span class="project-name" data-editable="${proj.id}-name">${escapeHtml(proj.title)}</span>
          <span class="project-type">${escapeHtml(proj.typeBadge)}</span>
        </div>
        <p class="project-desc" data-editable="${proj.id}-desc">${escapeHtml(proj.overview)}</p>
        <ul class="project-highlights">
          ${highlightsHtml}
        </ul>
        <div class="project-tech">
          ${techTagsHtml}
        </div>
        <div class="project-footer">
          ${actionHtml}
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = html;
}
