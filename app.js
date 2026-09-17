/**
 * =========================================================
 *  S. M. Faruk Hasan — Executive CV Application
 *  Main Application Coordinator
 * =========================================================
 */

function init() {
  loadTheme();
  loadSavedEdits();
  checkAuth();

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
}

// Global functions for inline HTML event handlers
window.toggleTheme = toggleTheme;
window.downloadPDF = downloadPDF;
window.downloadDirectPDF = downloadDirectPDF;
window.showLoginModal = showLoginModal;
window.hideLoginModal = hideLoginModal;
window.attemptLogin = attemptLogin;
window.saveChanges = saveChanges;
window.logout = logout;

document.addEventListener('DOMContentLoaded', init);
