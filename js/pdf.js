/**
 * =========================================================
 *  PDF Generation & Download Module
 *  Uses: html2pdf.js bundle
 * =========================================================
 */

function downloadPDF() {
  showToast('📄 Generating PDF... please wait.', 'info');

  const element = dom.cvWrapper;
  const topbar = $('#topbar');
  const indicator = dom.editIndicator;

  if (topbar) topbar.style.display = 'none';
  if (indicator) indicator.classList.add('hidden');

  const opt = {
    margin: 0,
    filename: 'S_M_Faruk_Hasan_CV.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      logging: false,
      letterRendering: true,
    },
    jsPDF: {
      unit: 'mm',
      format: 'a4',
      orientation: 'portrait',
    },
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
  };

  if (typeof html2pdf === 'undefined') {
    if (topbar) topbar.style.display = '';
    if (isEditMode && indicator) indicator.classList.remove('hidden');
    showToast('❌ PDF library not loaded. Please refresh.', 'error');
    return;
  }

  html2pdf()
    .set(opt)
    .from(element)
    .save()
    .then(() => {
      if (topbar) topbar.style.display = '';
      if (isEditMode && indicator) indicator.classList.remove('hidden');
      showToast('✅ PDF downloaded successfully!', 'success');
    })
    .catch((err) => {
      if (topbar) topbar.style.display = '';
      if (isEditMode && indicator) indicator.classList.remove('hidden');
      console.error('PDF generation failed:', err);
      showToast('❌ PDF generation failed. Please try again.', 'error');
    });
}
