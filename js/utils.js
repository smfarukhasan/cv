/**
 * =========================================================
 *  Utility Functions & Shared DOM Helpers
 * =========================================================
 */

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// Cached DOM elements
const dom = {
  get cvWrapper() { return $('#cv-wrapper'); },
  get loginModal() { return $('#login-modal'); },
  get loginUid() { return $('#login-uid'); },
  get loginPass() { return $('#login-pass'); },
  get loginError() { return $('#login-error'); },
  get btnLogin() { return $('#btn-login'); },
  get btnSave() { return $('#btn-save'); },
  get btnLogout() { return $('#btn-logout'); },
  get btnTheme() { return $('#btn-theme'); },
  get editIndicator() { return $('#edit-indicator'); },
  get toast() { return $('#toast'); },
};

let toastTimer = null;

function showToast(message, type = 'info') {
  const toastEl = dom.toast;
  if (!toastEl) return;
  toastEl.innerHTML = message;
  toastEl.className = `toast ${type} show`;

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastEl.classList.remove('show');
  }, 3500);
}

function escapeHtml(text) {
  if (!text) return '';
  const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
  return String(text).replace(/[&<>"']/g, (c) => map[c]);
}
