import type { Identification } from "@/models/id";
import type { IdStore } from "@/store/id/id-store";

export function updateData({
  data,
  set,
}: {
  data: Partial<Identification>;
  set: (fn: (state: IdStore) => Partial<IdStore>) => void;
}) {
  set((state) => ({
    data: { ...state.data, ...data },
  }));
}
