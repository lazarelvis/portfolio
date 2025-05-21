"use client";

import html2pdf from "html2pdf.js";

export default function DownloadPDFButton() {
  const handleDownload = () => {
    const element = document.getElementById("portfolio-section");
    if (element) {
      const opt = {
        margin: 0.5,
        filename: "Lazar-Elvis-portfolio.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      };

      html2pdf().set(opt).from(element).save();
    }
  };

  return <button onClick={handleDownload}>Descarca PDF</button>;
}
