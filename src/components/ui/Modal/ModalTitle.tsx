"use client";

import type { IModalTitle } from "@/ui/modal";
import { Title } from "@radix-ui/react-dialog";
import { twMerge } from "tailwind-merge";

export function ModalTitle({ children, className }: IModalTitle) {
  return (
    <Title
      className={twMerge(
        "font-bold font-heading text-3xl text-secondary-Default w-[90%]",
        className
      )}
    >
      {children}
    </Title>
  );
}
