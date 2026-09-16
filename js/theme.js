/**
 * =========================================================
 *  Theme Module (Light / Dark Mode)
 * =========================================================
 */

function loadTheme() {
  const savedTheme = localStorage.getItem(CONFIG.storageKeys.theme) || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem(CONFIG.storageKeys.theme, next);
  updateThemeIcon(next);
}

function updateThemeIcon(theme) {
  const icon = dom.btnTheme ? dom.btnTheme.querySelector('i') : null;
  if (icon) {
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }
}
