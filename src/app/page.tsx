/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { QRCodeSVG } from "qrcode.react";
import { Margin, Resolution, usePDF, type Options } from "react-to-pdf";

import html2canvas from "html2canvas";

const options: Options = {
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
};

export default function IdCardGenerator() {
  const { toPDF, targetRef } = usePDF({
    filename: "cartao-identificacao-autismo.pdf",
  });

  const [formData, setFormData] = useState({
    fullName: "Anny Queiroz dos Reis",
    firstContact: {
      name: "Andreina Queiroz",
      phone: "88 99736-5272",
    },
    secondContact: {
      name: "Vagneuton Reis",
      phone: "88 99954-6683",
    },
    address: "Nova Acopiara",
    diagnosticLink:
      "https://drive.google.com/file/d/1hcjEiTPz9_RCUuUZqf6kOK6Lb5SZDOnz/view?usp=sharing",
    additionalInfo: "",
    cid: "6A02",
    dateOfBirth: "2001-02-15",
  });
  const [photo, setPhoto] = useState<string | null>("/fallback.webp");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPhoto(e.target?.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const generatePDF = async () => {
    // if (targetRef.current) {
    //   const canvas = await html2canvas(targetRef.current, {
    //     useCORS: true,
    //     scale: 2, // aumenta a qualidade da imagem
    //     logging: false,
    //     allowTaint: true,
    //   });

    //   const image = canvas.toDataURL("image/png", 1.0);

    //   const link = document.createElement("a");
    //   link.download = "cartao-identificacao-autismo.png";
    //   link.href = image;
    //   link.click();
    // }

    toPDF(options);
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 p-8">
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Formulário</h2>

        <form className="space-y-4">
          <div>
            <Label htmlFor="fullName">Nome Completo</Label>
            <Input
              id="fullName"
              name="fullName"
              defaultValue={formData.fullName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label htmlFor="cid">CID-11</Label>
            <Input
              id="cid"
              name="cid"
              defaultValue={formData.cid}
              onChange={handleInputChange}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstContactName">Responsável</Label>
              <Input
                id="firstContactName"
                name="firstContactName"
                defaultValue={formData.firstContact.name}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <Label htmlFor="firstContactPhone">Telefone</Label>
              <Input
                id="firstContactPhone"
                name="firstContactPhone"
                defaultValue={formData.firstContact.phone}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="secondContactName">Responsável</Label>
              <Input
                id="secondContactName"
                name="secondContactName"
                defaultValue={formData.secondContact.name}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <Label htmlFor="secondContactPhone">Telefone</Label>
              <Input
                id="secondContactPhone"
                name="secondContactPhone"
                defaultValue={formData.secondContact.phone}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div>
            <Label htmlFor="address">Endereço</Label>
            <Input
              id="address"
              name="address"
              defaultValue={formData.address}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label htmlFor="diagnosticLink">Link do Diagnóstico</Label>
            <Input
              id="diagnosticLink"
              name="diagnosticLink"
              defaultValue={formData.diagnosticLink}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label htmlFor="additionalInfo">Informações Adicionais</Label>
            <Textarea
              id="additionalInfo"
              name="additionalInfo"
              defaultValue={formData.additionalInfo}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Label htmlFor="photo">Foto 3x4</Label>
            <Input
              id="photo"
              name="photo"
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
            />
          </div>
        </form>
      </div>

      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Pré-visualização do Crachá</h2>

        <div ref={targetRef} className="flex flex-col gap-4 md:flex-row">
          {/* Front side */}
          <div className="before:bg-contain before:opacity-20 before:-z-10 before:bg-pieces before:absolute before:inset-0 border p-4 w-[5.5cm] h-[8.5cm] relative rounded-lg shadow-md overflow-hidden">
            <img
              src="/simbol-1.png"
              alt="Símbolo do Autismo"
              className="w-10 absolute rotate-45 top-1 left-[.5] object-cover"
            />
            <img
              src="/coracao.png"
              alt="Símbolo do Autismo"
              className="size-10 absolute right-7 top-32 -rotate-12"
            />
            <div className="absolute -z-10 -bottom-16 left-0 right-0 flex justify-center">
              <img
                src="/piece.png"
                alt="Peça de Quebra-cabeça"
                className="w-28 object-cover"
              />
              <img
                src="/piece.png"
                alt="Peça de Quebra-cabeça"
                width={120}
                height={30}
                className="-ml-[28px] rotate-180 w-28 object-cover"
              />
              <img
                src="/piece.png"
                alt="Peça de Quebra-cabeça"
                className="-ml-[28px] w-28 object-cover"
              />
            </div>

            <section className="w-full flex flex-col items-center gap-2 mt-4 justify-center absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2">
              <strong className="w-2/3 leading-tight font-semibold text-center p-1 py-[.5] text-blue-700 text-xs text-balance rounded-sm uppercase">
                Transtorno do Espectro Autista
                {formData.cid && (
                  <p className="font-medium text-[8px]">
                    CID-11: {formData.cid}
                  </p>
                )}
              </strong>

              {photo && (
                <img
                  src={photo}
                  alt="Foto 3x4"
                  className="w-20 aspect-[3/4] mx-auto object-cover rounded-lg"
                />
              )}

              <strong className="p-4 leading-tight py-[.5] text-blue-700 text-sm text-center font-semibold rounded-sm text-balance">
                {formData.fullName}
              </strong>

              <span className="text-[8px] space-y-1 w-full text-center px-2 text-balance leading-tight">
                <span className="block">
                  Tenho direito ao atendimento prioritário:
                </span>
                <strong>Lei Federal Nº 14.626/2023</strong>
              </span>
            </section>
          </div>

          {/* Back side */}
          <div className="before:bg-contain before:opacity-20 before:-z-10 before:bg-pieces before:absolute before:inset-0 text-center border shadow-md p-4 w-[5.5cm] h-[8.5cm] relative rounded-lg overflow-hidden">
            <img
              src="/simbol-2.png"
              alt="Símbolo do Autismo"
              width={40}
              height={40}
              className="absolute bottom-0 right-0"
            />
            <img
              src="/coracao.png"
              alt="Símbolo do Autismo"
              width={40}
              height={40}
              className="absolute -left-2 top-16 -rotate-12"
            />
            <div className="absolute -z-10 -top-16 left-0 right-0 flex justify-center drop-shadow-sm">
              <img
                src="/piece.png"
                alt="Peça de Quebra-cabeça"
                className="w-28 object-cover"
              />
              <img
                src="/piece.png"
                alt="Peça de Quebra-cabeça"
                className="-ml-[28px] rotate-180 w-28 object-cover"
              />
              <img
                src="/piece.png"
                alt="Peça de Quebra-cabeça"
                className="-ml-[28px] w-28 object-cover"
              />
            </div>

            <div className="flex justify-center mt-8 [&_svg_>_path:first-of-type]:fill-transparent">
              <QRCodeSVG value={formData.diagnosticLink} size={60} />
            </div>

            <div className="text-center -mt-2 mb-2 h-fit">
              <span className="font-medium text-[8px] uppercase leading-none">
                Laudo médico
              </span>
            </div>

            <strong className="text-center block text-[10px] mb-2">
              Contato(s) de emergência:
            </strong>

            <div className="mb-2 text-[10px] space-y-1 text-center text-balance bg-blue-700 text-gray-50 rounded-sm p-1">
              <p className="flex flex-col">
                <span>
                  <strong>{formData.firstContact.name}</strong>:{" "}
                  {formData.firstContact.phone}
                </span>
                <span>
                  <strong>{formData.secondContact.name}</strong>:{" "}
                  {formData.secondContact.phone}
                </span>
              </p>
            </div>

            <div className="mb-2 text-left text-[10px] text-balance rounded-md grid grid-cols-2">
              <div>
                <span className="text-left block text-[10px] font-medium">
                  Nascimento:
                </span>
                <p className="text-[10px]">08/11/2018</p>
              </div>
              <div>
                <span className="text-left block text-[10px] font-medium">
                  CPF:
                </span>
                <p className="text-[10px]">100.980.103-10</p>
              </div>
            </div>
          </div>
        </div>

        <Button className="mt-6" onClick={generatePDF}>
          Imprimir Crachá
        </Button>
      </div>
    </div>
  );
}
