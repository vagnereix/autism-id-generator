import type { Identification } from "@/models/id";
import { updateData } from "@/store/id/actions/update-data";
import { updatePhoto } from "@/store/id/actions/update-photo";
import { create } from "zustand";

type State = {
  data: Partial<Identification>;
  photo: string | null;
};

type Actions = {
  setData: (data: Partial<Identification>) => void;
  setPhoto: (photo: string | null) => void;
};

export type IdStore = State & Actions;

export const useIdStore = create<IdStore>((set) => ({
  data: {
    fullName: "Seu Nome Completo Aqui",
    firstContact: {
      name: "Responsável",
      phone: "88 9 9999-9999",
    },
    secondContact: {
      name: "Responsável 2",
      phone: "88 9 9999-9999",
    },
    address: "Nova Acopiara",
    diagnosticLink: "https://link-to-your-diagnostic.com",
    additionalInfo: "",
    cid: "6A02",
    dateOfBirth: "2001-02-15",
  },
  photo: "/fallback.webp",
  setPhoto: (photo) => updatePhoto({ photo, set }),
  setData: (data) => updateData({ data, set }),
}));
