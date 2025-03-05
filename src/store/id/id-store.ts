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
  },
  photo: "/fallback.webp",
  setPhoto: (photo) => updatePhoto({ photo, set }),
  setData: (data) => updateData({ data, set }),
}));
