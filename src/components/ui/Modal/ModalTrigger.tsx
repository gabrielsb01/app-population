"use client";

import { Slot } from "@radix-ui/react-slot";

import type { IModalTrigger } from "@/ui/modal";
import { useModal } from "./useModal";

export function ModalTrigger({
  name,
  children,
  asChild = false,
  open = true,
}: IModalTrigger) {
  const Component = asChild ? Slot : "button";
  const setStatus = useModal((st) => st.actions.setStatus);

  return (
    <Component
      onClick={() => {
        setStatus({ name, open });
      }}
    >
      {children}
    </Component>
  );
}
