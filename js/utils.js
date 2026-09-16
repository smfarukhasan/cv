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
  get btnGhToken() { return $('#btn-gh-token'); },
  get editIndicator() { return $('#edit-indicator'); },
  get toast() { return $('#toast'); },
  get githubProjects() { return $('#github-projects'); },
  get ghLoading() { return $('#gh-loading'); },
  get ghReposCount() { return $('#gh-repos-count'); },
  get ghFollowersCount() { return $('#gh-followers-count'); },
  get ghFollowingCount() { return $('#gh-following-count'); },
  get lastUpdated() { return $('#last-updated'); },
  get tokenModal() { return $('#token-modal'); },
  get tokenInput() { return $('#token-input'); },
  get tokenStatus() { return $('#token-status'); },
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

function formatRepoName(name) {
  return name
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function escapeHtml(text) {
  if (!text) return '';
  const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
  return String(text).replace(/[&<>"']/g, (c) => map[c]);
}

function setLastUpdated() {
  const now = new Date();
  if (dom.lastUpdated) {
    dom.lastUpdated.textContent = `Last synced: ${now.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })}`;
  }
}
