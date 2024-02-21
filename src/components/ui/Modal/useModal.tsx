import type { IModalStore, IModalStoreActionSetStatus } from "@/ui/modal";
import { produce } from "immer";
import { create } from "zustand";

export const useModal = create<IModalStore>((set) => ({
  data: {
    modal: {},
  },

  actions: {
    setStatus: (updateModal: IModalStoreActionSetStatus | false) =>
      set((state) =>
        produce(state, (draft) => {
          const allModals = state.data.modal;

          if (!updateModal) {
            Object.keys(allModals).forEach((modalName) => {
              draft.data.modal[modalName] = false;
            });
            return;
          }

          const modal = allModals[updateModal.name];

          if (!modal) {
            draft.data.modal[updateModal.name] = updateModal.open;
            return;
          }

          draft.data.modal[updateModal.name] = updateModal.open;
        })
      ),
  },
}));
