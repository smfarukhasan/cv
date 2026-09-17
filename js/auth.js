/**
 * =========================================================
 *  Authentication & In-Place Editing Module
 * =========================================================
 */

let isLoggedIn = false;
let isEditMode = false;

function showLoginModal() {
  if (!dom.loginModal) return;
  dom.loginModal.classList.add('active');
  if (dom.loginUid) dom.loginUid.value = '';
  if (dom.loginPass) dom.loginPass.value = '';
  if (dom.loginError) dom.loginError.classList.remove('show');
  setTimeout(() => dom.loginUid && dom.loginUid.focus(), 300);
}

function hideLoginModal() {
  if (dom.loginModal) dom.loginModal.classList.remove('active');
}

function attemptLogin() {
  const uid = dom.loginUid ? dom.loginUid.value.trim() : '';
  const pass = dom.loginPass ? dom.loginPass.value.trim() : '';

  if (uid === CONFIG.credentials.uid && pass === CONFIG.credentials.pass) {
    localStorage.setItem(CONFIG.storageKeys.auth, 'true');
    hideLoginModal();
    setLoggedInUI(true);
    showToast('✅ Logged in successfully! Text is locked by default.', 'success');
  } else {
    if (dom.loginError) dom.loginError.classList.add('show');
    if (dom.loginPass) {
      dom.loginPass.value = '';
      dom.loginPass.focus();
    }
  }
}

function checkAuth() {
  if (localStorage.getItem(CONFIG.storageKeys.auth) === 'true') {
    setLoggedInUI(true);
  }
}

function logout() {
  localStorage.removeItem(CONFIG.storageKeys.auth);
  setLoggedInUI(false);
  showToast('🔒 Logged out successfully.', 'info');
}

function setLoggedInUI(state) {
  isLoggedIn = state;
  if (dom.btnLogin) dom.btnLogin.classList.toggle('hidden', state);
  if (dom.btnSave) dom.btnSave.classList.toggle('hidden', !state);
  if (dom.btnLogout) dom.btnLogout.classList.toggle('hidden', !state);
  const btnManage = $('#btn-manage-cv');
  if (btnManage) btnManage.classList.toggle('hidden', !state);
  if (dom.cvWrapper) dom.cvWrapper.classList.toggle('logged-in', state);

  if (dom.editIndicator) {
    dom.editIndicator.classList.toggle('hidden', !state);
  }

  // Always default edit mode to inactive on login or logout
  setEditMode(false);

  // Refresh download list to show or hide inline reordering controls
  if (typeof renderDownloadList === 'function') renderDownloadList();
}

function setEditMode(enable) {
  isEditMode = enable;
  if (dom.cvWrapper) dom.cvWrapper.classList.toggle('edit-mode', enable);

  const indicator = dom.editIndicator;
  const indicatorText = $('#edit-indicator-text');

  if (indicator) {
    indicator.classList.toggle('inactive', !enable);
    if (indicatorText) {
      indicatorText.textContent = enable
        ? 'Edit Mode: ON (Click to Disable)'
        : 'Edit Mode: OFF (Click to Enable)';
    }
    const icon = indicator.querySelector('i');
    if (icon) {
      icon.className = enable ? 'fas fa-check-circle' : 'fas fa-pencil-alt';
    }
  }

  $$('[data-editable]').forEach((el) => {
    if (enable) {
      el.setAttribute('contenteditable', 'true');
    } else {
      el.removeAttribute('contenteditable');
    }
  });
}

function toggleEditMode() {
  if (!isLoggedIn) return;
  setEditMode(!isEditMode);
  if (isEditMode) {
    showToast('✏️ Edit mode enabled. Click any text to edit.', 'success');
  } else {
    showToast('🔒 Edit mode disabled. Text is locked.', 'info');
  }
}

function saveChanges() {
  const edits = {};
  $$('[data-editable]').forEach((el) => {
    const key = el.getAttribute('data-editable');
    edits[key] = el.innerHTML;
  });
  localStorage.setItem(CONFIG.storageKeys.edits, JSON.stringify(edits));
  showToast('💾 Changes saved successfully!', 'success');
}

function loadSavedEdits() {
  const raw = localStorage.getItem(CONFIG.storageKeys.edits);
  if (!raw) return;
  try {
    const edits = JSON.parse(raw);
    Object.entries(edits).forEach(([key, value]) => {
      const el = $(`[data-editable="${key}"]`);
      if (el) el.innerHTML = value;
    });
  } catch (e) {
    console.warn('Failed to load saved edits:', e);
  }
}
