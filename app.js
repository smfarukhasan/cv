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
  if (typeof syncGitHubCustomCvs === 'function') syncGitHubCustomCvs();

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

  // Portfolio button instant prefetch & prerender on interaction
  const portfolioBtn = document.getElementById('btn-portfolio');
  if (portfolioBtn) {
    const triggerPrerender = () => {
      if (!document.querySelector('link[data-portfolio-prerender]')) {
        const link = document.createElement('link');
        link.rel = 'prerender';
        link.href = 'https://smfarukhasan.bro.bd/';
        link.setAttribute('data-portfolio-prerender', 'true');
        document.head.appendChild(link);
      }
    };
    portfolioBtn.addEventListener('mouseenter', triggerPrerender, { passive: true });
    portfolioBtn.addEventListener('touchstart', triggerPrerender, { passive: true });
    portfolioBtn.addEventListener('focus', triggerPrerender, { passive: true });
  }
}

// Global functions for inline HTML event handlers
window.toggleTheme = toggleTheme;
window.toggleEditMode = toggleEditMode;
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
