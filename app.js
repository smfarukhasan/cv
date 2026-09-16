/**
 * =========================================================
 *  S. M. Faruk Hasan — Dynamic CV Application (Main Entry)
 * =========================================================
 */

function init() {
  loadTheme();
  loadSavedEdits();
  loadGhToken();
  checkAuth();
  fetchGitHubProfile();
  fetchGitHubRepos();
  setLastUpdated();

  // Keyboard accessibility
  if (dom.loginPass) {
    dom.loginPass.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') attemptLogin();
    });
  }
  if (dom.loginUid) {
    dom.loginUid.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && dom.loginPass) dom.loginPass.focus();
    });
  }
  if (dom.tokenInput) {
    dom.tokenInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') saveGhToken();
    });
  }
}

// Global functions for inline HTML event handlers
window.toggleTheme = toggleTheme;
window.downloadPDF = downloadPDF;
window.showLoginModal = showLoginModal;
window.hideLoginModal = hideLoginModal;
window.attemptLogin = attemptLogin;
window.saveChanges = saveChanges;
window.logout = logout;
window.showTokenModal = showTokenModal;
window.hideTokenModal = hideTokenModal;
window.saveGhToken = saveGhToken;
window.removeGhToken = removeGhToken;

document.addEventListener('DOMContentLoaded', init);
