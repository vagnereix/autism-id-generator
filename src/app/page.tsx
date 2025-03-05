/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";

import { usePDFGenerator } from "@/hooks/use-pdf-generator";
import { IdCard } from "@/features/id/components/id-card";
import { IdForm } from "@/features/id/components/id-form";

export default function IdCardGenerator() {
  const { targetRef, generatePDF } = usePDFGenerator("autism-id-card");

  return (
    <div className="grid sm:grid-cols-2 flex-col md:flex-row md:gap-8 md:justify-between md:p-6">
      <div className="p-6 md:p-0">
        <IdForm />
      </div>

      <div className="p-6 ml-16 my-6 md:my-0 rounded-l-xl w-full sm:w-[50dvw] sm:ml-auto shadow-2xl h-fit">
        <h2 className="text-2xl font-bold mb-4 break-words w-full">
          Pré-visualização
        </h2>

        <div
          ref={targetRef}
          className="flex flex-col gap-4 md:flex-row md:flex-wrap"
        >
          <IdCard />
        </div>

        <Button className="mt-6" onClick={generatePDF}>
          Imprimir Crachá
        </Button>
      </div>
    </div>
  );
}
