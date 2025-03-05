import type { IdStore } from "@/store/id/id-store";

export function updatePhoto({
  photo,
  set,
}: {
  photo: Pick<IdStore, "photo">["photo"];
  set: (fn: (state: IdStore) => Partial<IdStore>) => void;
}) {
  set(() => ({ photo }));
}
