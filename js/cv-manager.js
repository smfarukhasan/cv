/**
 * =========================================================
 *  CV Manager & Download System
 *  Manages: Web CV Light/Dark, Custom CV list, Reorder (Up/Down)
 * =========================================================
 */

const STORAGE_KEY_CV = 'cv_custom_list_faruk';

const DEFAULT_CUSTOM_CVS = [
  { id: 'cv-1', name: 'S. M. Faruk Hasan (Canva Custom CV)', url: 'customized_cv/S_M_Faruk_Hasan.pdf' }
];

function getCustomCvs() {
  const raw = localStorage.getItem(STORAGE_KEY_CV);
  if (!raw) return DEFAULT_CUSTOM_CVS;
  try {
    return JSON.parse(raw);
  } catch (e) {
    return DEFAULT_CUSTOM_CVS;
  }
}

function saveCustomCvs(list) {
  localStorage.setItem(STORAGE_KEY_CV, JSON.stringify(list));
  renderCvManagerList();
  renderDownloadList();
}

/* ---- Download CV Selection Modal ---- */
function openDownloadModal() {
  renderDownloadList();
  const modal = $('#download-cv-modal');
  if (modal) modal.classList.add('active');
}

function closeDownloadModal() {
  const modal = $('#download-cv-modal');
  if (modal) modal.classList.remove('active');
}

function renderDownloadList() {
  const container = $('#cv-download-list');
  if (!container) return;

  const customCvs = getCustomCvs();
  let html = '';

  // 1. Web CV Light
  html += `
    <div class="cv-item-card">
      <div class="cv-item-info">
        <span class="cv-serial-badge">1</span>
        <div class="cv-item-text">
          <div class="cv-item-title">Web CV (Light Mode)</div>
          <div class="cv-item-type"><i class="fas fa-sun"></i> Interactive A4 Printable Resume</div>
        </div>
      </div>
      <div class="cv-actions-group">
        <button class="cv-action-btn view" onclick="handleWebCV('light', 'view')" title="Preview in Light Mode"><i class="fas fa-eye"></i> View</button>
        <button class="cv-action-btn download" onclick="handleWebCV('light', 'download')" title="Download Light A4 PDF"><i class="fas fa-download"></i> Download</button>
      </div>
    </div>
  `;

  // 2. Web CV Dark
  html += `
    <div class="cv-item-card">
      <div class="cv-item-info">
        <span class="cv-serial-badge">2</span>
        <div class="cv-item-text">
          <div class="cv-item-title">Web CV (Dark Mode)</div>
          <div class="cv-item-type"><i class="fas fa-moon"></i> Interactive A4 Printable Resume</div>
        </div>
      </div>
      <div class="cv-actions-group">
        <button class="cv-action-btn view" onclick="handleWebCV('dark', 'view')" title="Preview in Dark Mode"><i class="fas fa-eye"></i> View</button>
        <button class="cv-action-btn download" onclick="handleWebCV('dark', 'download')" title="Download Dark A4 PDF"><i class="fas fa-download"></i> Download</button>
      </div>
    </div>
  `;

  // 3, 4, ... Custom CVs
  customCvs.forEach((cv, idx) => {
    const serial = idx + 3;
    const reorderBtns = (typeof isLoggedIn !== 'undefined' && isLoggedIn) ? `
      <button class="cv-order-btn" title="Move Up" ${idx === 0 ? 'disabled' : ''} onclick="moveCvUp(${idx})">▲</button>
      <button class="cv-order-btn" title="Move Down" ${idx === customCvs.length - 1 ? 'disabled' : ''} onclick="moveCvDown(${idx})">▼</button>
    ` : '';

    html += `
      <div class="cv-item-card">
        <div class="cv-item-info">
          <span class="cv-serial-badge">${serial}</span>
          <div class="cv-item-text">
            <div class="cv-item-title">${escapeHtml(cv.name)}</div>
            <div class="cv-item-type"><i class="fas fa-file-pdf"></i> Custom Document</div>
          </div>
        </div>
        <div class="cv-actions-group">
          ${reorderBtns}
          <button class="cv-action-btn view" onclick="handleCustomCV('${encodeURI(cv.url)}', '${escapeHtml(cv.name)}', 'view')" title="Preview PDF"><i class="fas fa-eye"></i> View</button>
          <button class="cv-action-btn download" onclick="handleCustomCV('${encodeURI(cv.url)}', '${escapeHtml(cv.name)}', 'download')" title="Download PDF"><i class="fas fa-download"></i> Download</button>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

/* ---- Web CV Action Handler ---- */
function handleWebCV(theme, action) {
  closeDownloadModal();
  const prevTheme = document.documentElement.getAttribute('data-theme');
  document.documentElement.setAttribute('data-theme', theme);

  if (action === 'download') {
    showToast(`🖨️ Opening A4 Print / Save as PDF (${theme} theme)...`, 'info');
    setTimeout(() => {
      window.print();
    }, 300);
  } else {
    showToast(`👁️ Displaying CV in ${theme} mode`, 'info');
  }
}

/* ---- Custom CV Action Handler ---- */
function handleCustomCV(url, name, action) {
  if (action === 'view') {
    openPdfPreview(url, name);
  } else {
    // Download
    const a = document.createElement('a');
    a.href = url;
    a.download = name.endsWith('.pdf') ? name : `${name}.pdf`;
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    showToast(`⬇️ Downloading "${name}"...`, 'success');
  }
}

/* ---- PDF Preview Modal ---- */
function openPdfPreview(url, title) {
  const modal = $('#preview-pdf-modal');
  const iframe = $('#preview-pdf-iframe');
  const titleEl = $('#preview-pdf-title');
  const extLink = $('#preview-pdf-ext');

  if (titleEl) titleEl.textContent = title || 'PDF Preview';
  if (extLink) extLink.href = url;
  if (iframe) iframe.src = url;
  if (modal) modal.classList.add('active');
}

function closePdfPreview() {
  const modal = $('#preview-pdf-modal');
  const iframe = $('#preview-pdf-iframe');
  if (iframe) iframe.src = 'about:blank';
  if (modal) modal.classList.remove('active');
}

/* ---- Custom CV Manager (Admin / Edit Mode) ---- */
function openCvManagerModal() {
  renderCvManagerList();
  const modal = $('#manage-cv-modal');
  if (modal) modal.classList.add('active');
}

function closeCvManagerModal() {
  const modal = $('#manage-cv-modal');
  if (modal) modal.classList.remove('active');
}

function renderCvManagerList() {
  const container = $('#cv-manage-list');
  if (!container) return;

  const list = getCustomCvs();
  if (list.length === 0) {
    container.innerHTML = '<p style="font-size:0.8rem;color:var(--content-muted);text-align:center;padding:12px;">No custom CVs added yet.</p>';
    return;
  }

  container.innerHTML = list.map((cv, idx) => `
    <div class="cv-manage-item">
      <div style="flex:1;min-width:0;">
        <div class="cv-manage-title">${idx + 3}. ${escapeHtml(cv.name)}</div>
        <div class="cv-manage-url" title="${escapeHtml(cv.url)}">${escapeHtml(cv.url)}</div>
      </div>
      <div style="display:flex;gap:4px;">
        <button class="cv-order-btn" onclick="moveCvUp(${idx})" ${idx === 0 ? 'disabled' : ''} title="Move Up (পজিশন আগে)"><i class="fas fa-arrow-up"></i></button>
        <button class="cv-order-btn" onclick="moveCvDown(${idx})" ${idx === list.length - 1 ? 'disabled' : ''} title="Move Down (পজিশন পরে)"><i class="fas fa-arrow-down"></i></button>
        <button class="cv-delete-btn" onclick="deleteCustomCv(${idx})" title="Delete CV"><i class="fas fa-trash-alt"></i></button>
      </div>
    </div>
  `).join('');
}

function addCustomCv() {
  const nameInput = $('#cv-input-name');
  const urlInput = $('#cv-input-url');
  if (!nameInput || !urlInput) return;

  const name = nameInput.value.trim();
  const url = urlInput.value.trim();

  if (!name || !url) {
    showToast('⚠️ Please enter both CV Title and Link / Path', 'error');
    return;
  }

  const list = getCustomCvs();
  list.push({ id: `cv-${Date.now()}`, name, url });
  saveCustomCvs(list);

  nameInput.value = '';
  urlInput.value = '';
  showToast(`✅ Added "${name}" successfully!`, 'success');
}

function moveCvUp(index) {
  const list = getCustomCvs();
  if (index <= 0) return;
  const temp = list[index];
  list[index] = list[index - 1];
  list[index - 1] = temp;
  saveCustomCvs(list);
  showToast('⬆️ Position updated', 'info');
}

function moveCvDown(index) {
  const list = getCustomCvs();
  if (index >= list.length - 1) return;
  const temp = list[index];
  list[index] = list[index + 1];
  list[index + 1] = temp;
  saveCustomCvs(list);
  showToast('⬇️ Position updated', 'info');
}

function deleteCustomCv(index) {
  const list = getCustomCvs();
  const removed = list.splice(index, 1);
  saveCustomCvs(list);
  showToast(`🗑️ Removed "${removed[0]?.name || 'CV'}"`, 'info');
}

/* Auto-discover newly uploaded PDFs in customized_cv folder from GitHub */
async function syncGitHubCustomCvs() {
  try {
    const res = await fetch('https://api.github.com/repos/smfarukhasan/cv/contents/customized_cv');
    if (!res.ok) return;
    const files = await res.json();
    if (!Array.isArray(files)) return;

    const list = getCustomCvs();
    let changed = false;

    files.forEach((f) => {
      if (f.name && f.name.toLowerCase().endsWith('.pdf')) {
        const path = `customized_cv/${f.name}`;
        const exists = list.some((item) => item.url === path || item.url.endsWith(f.name));
        if (!exists) {
          const title = f.name.replace(/\.pdf$/i, '').replace(/[_-]/g, ' ') + ' (Custom CV)';
          list.push({ id: `cv-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`, name: title, url: path });
          changed = true;
        }
      }
    });

    if (changed) {
      saveCustomCvs(list);
    }
  } catch (e) {
    // Graceful offline fallback
  }
}
