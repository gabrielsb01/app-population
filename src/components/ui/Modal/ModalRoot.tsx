"use client";

import type { IModalRoot } from "@/ui/modal";
import * as Dialog from "@radix-ui/react-dialog";
import { useModal } from "./useModal";

export function ModalRoot({ children, name }: IModalRoot) {
  const modal = useModal((st) => st.data.modal);
  const setStatus = useModal((st) => st.actions.setStatus);
  const open = modal[name] || false;

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(open) => {
        setStatus({ name, open });
      }}
    >
      <Dialog.Portal>
        <div className=" bg-neutral-Black/80 data-[state=open]:animate-overlayShow fixed inset-0 h-full w-full z-[1000]" />
        {children}
      </Dialog.Portal>
    </Dialog.Root>
  );
}
