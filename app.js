/**
 * =========================================================
 *  S. M. Faruk Hasan — Executive CV Application
 *  Main Application Coordinator
 * =========================================================
 */

function init() {
  loadTheme();
  if (typeof renderProjects === 'function') renderProjects();
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

// CV Manager & Download Modal functions
window.openDownloadModal = openDownloadModal;
window.closeDownloadModal = closeDownloadModal;
window.handleWebCV = handleWebCV;
window.handleCustomCV = handleCustomCV;
window.openCvManagerModal = openCvManagerModal;
window.closeCvManagerModal = closeCvManagerModal;
window.addCustomCv = addCustomCv;
window.moveCvUp = moveCvUp;
window.moveCvDown = moveCvDown;
window.deleteCustomCv = deleteCustomCv;
window.closePdfPreview = closePdfPreview;

document.addEventListener('DOMContentLoaded', init);
