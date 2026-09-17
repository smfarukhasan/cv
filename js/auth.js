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
    isLoggedIn = true;
    localStorage.setItem(CONFIG.storageKeys.auth, 'true');
    hideLoginModal();
    enterEditMode();
    showToast('✅ Login successful! You can now edit the CV.', 'success');
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
    isLoggedIn = true;
    enterEditMode();
  }
}

function logout() {
  isLoggedIn = false;
  localStorage.removeItem(CONFIG.storageKeys.auth);
  exitEditMode();
  showToast('🔒 Logged out successfully.', 'info');
}

function enterEditMode() {
  isEditMode = true;
  if (dom.cvWrapper) dom.cvWrapper.classList.add('edit-mode');
  if (dom.btnLogin) dom.btnLogin.classList.add('hidden');
  if (dom.btnSave) dom.btnSave.classList.remove('hidden');
  if (dom.btnLogout) dom.btnLogout.classList.remove('hidden');
  if (dom.editIndicator) dom.editIndicator.classList.remove('hidden');

  $$('[data-editable]').forEach((el) => {
    el.setAttribute('contenteditable', 'true');
  });
}

function exitEditMode() {
  isEditMode = false;
  if (dom.cvWrapper) dom.cvWrapper.classList.remove('edit-mode');
  if (dom.btnLogin) dom.btnLogin.classList.remove('hidden');
  if (dom.btnSave) dom.btnSave.classList.add('hidden');
  if (dom.btnLogout) dom.btnLogout.classList.add('hidden');
  if (dom.editIndicator) dom.editIndicator.classList.add('hidden');

  $$('[data-editable]').forEach((el) => {
    el.removeAttribute('contenteditable');
  });
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
