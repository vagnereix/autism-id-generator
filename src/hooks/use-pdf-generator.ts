import { Margin, Resolution, usePDF, type Options } from "react-to-pdf";

const PDF_OPTIONS = {
  resolution: Resolution.EXTREME,
  page: {
    margin: Margin.MEDIUM,
  },
  canvas: {
    mimeType: "image/png",
    qualityRatio: 1,
  },
  overrides: {
    pdf: {
      compress: false,
    },
    canvas: {
      useCORS: true,
    },
  },
} satisfies Options;

export function usePDFGenerator(filename: string) {
  const { toPDF, targetRef } = usePDF({
    filename: `${filename}.pdf`,
  });

  async function generatePDF() {
    toPDF(PDF_OPTIONS);
  }

  return {
    targetRef,
    generatePDF,
  };
}
