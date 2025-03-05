/* eslint-disable @next/next/no-img-element */
import { useIdStore } from "@/store/id/id-store";
import { QRCodeSVG } from "qrcode.react";

export function IdCard() {
  const { data, photo } = useIdStore();

  return (
    <>
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
            {data?.cid && (
              <p className="font-medium text-[8px]">CID-11: {data?.cid}</p>
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
            {data?.fullName}
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
          <QRCodeSVG value={data?.diagnosticLink ?? ""} size={60} />
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
              <strong>{data.firstContact?.name}</strong>:{" "}
              {data.firstContact?.phone}
            </span>
            <span>
              <strong>{data.secondContact?.name}</strong>:{" "}
              {data.secondContact?.phone}
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
    </>
  );
}
