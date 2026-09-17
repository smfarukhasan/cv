/**
 * =========================================================
 *  A4 Print & PDF Generation Module
 *  Optimized for standard A4 paper (210mm x 297mm)
 * =========================================================
 */

function downloadPDF() {
  showToast('🖨️ Opening A4 Print / Save as PDF dialog...', 'info');
  setTimeout(() => {
    window.print();
  }, 250);
}

function downloadDirectPDF() {
  showToast('📄 Generating A4 PDF file... please wait.', 'info');
  const element = dom.cvWrapper;

  const opt = {
    margin: [6, 8, 6, 8],
    filename: 'S_M_Faruk_Hasan_CV.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      logging: false,
    },
    jsPDF: {
      unit: 'mm',
      format: 'a4',
      orientation: 'portrait',
    },
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
  };

  if (typeof html2pdf !== 'undefined') {
    html2pdf().set(opt).from(element).save()
      .then(() => showToast('✅ PDF downloaded successfully!', 'success'))
      .catch((err) => {
        console.error('PDF error:', err);
        window.print();
      });
  } else {
    window.print();
  }
}
