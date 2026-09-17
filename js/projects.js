/**
 * =========================================================
 *  Projects Renderer & Reordering Module
 * =========================================================
 */

const STORAGE_KEY_PROJECTS_ORDER = 'cv_projects_order_faruk';

function getOrderedProjects() {
  if (typeof PROJECTS_DATA === 'undefined') return [];
  const rawOrder = localStorage.getItem(STORAGE_KEY_PROJECTS_ORDER);
  if (!rawOrder) return [...PROJECTS_DATA];
  try {
    const orderIds = JSON.parse(rawOrder);
    const map = new Map(PROJECTS_DATA.map(p => [p.id, p]));
    const ordered = [];
    orderIds.forEach(id => {
      if (map.has(id)) {
        ordered.push(map.get(id));
        map.delete(id);
      }
    });
    map.forEach(p => ordered.push(p));
    return ordered;
  } catch (e) {
    return [...PROJECTS_DATA];
  }
}

function moveProject(projId, direction) {
  const projects = getOrderedProjects();
  const index = projects.findIndex(p => p.id === projId);
  if (index === -1) return;
  const targetIndex = index + direction;
  if (targetIndex < 0 || targetIndex >= projects.length) return;

  const temp = projects[index];
  projects[index] = projects[targetIndex];
  projects[targetIndex] = temp;

  const newOrderIds = projects.map(p => p.id);
  localStorage.setItem(STORAGE_KEY_PROJECTS_ORDER, JSON.stringify(newOrderIds));

  renderProjects();
  if (typeof loadSavedEdits === 'function') loadSavedEdits();
  if (typeof isEditMode !== 'undefined' && isEditMode) {
    $$('[data-editable]').forEach(el => el.setAttribute('contenteditable', 'true'));
  }
  if (typeof showToast === 'function') {
    showToast('↕️ Project position updated!', 'info');
  }
}

function renderProjects() {
  const container = document.getElementById('manual-projects');
  if (!container) return;
  const projects = getOrderedProjects();
  const total = projects.length;

  const html = projects.map((proj, idx) => {
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
          <div class="project-title-wrap">
            <span class="project-name" data-editable="${proj.id}-name">${escapeHtml(proj.title)}</span>
            <div class="project-order-controls">
              <button type="button" class="proj-order-btn" title="Move Up" ${idx === 0 ? 'disabled' : ''} onclick="moveProject('${proj.id}', -1)">▲</button>
              <button type="button" class="proj-order-btn" title="Move Down" ${idx === total - 1 ? 'disabled' : ''} onclick="moveProject('${proj.id}', 1)">▼</button>
            </div>
          </div>
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
