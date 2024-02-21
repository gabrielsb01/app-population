"use client";

import type { IModalDescription } from "@/ui/modal";
import { Description } from "@radix-ui/react-dialog";
import { twMerge } from "tailwind-merge";

export function ModalDescription({ children, className }: IModalDescription) {
  return (
    <Description
      className={twMerge("text-text-Secondary text-base", className)}
    >
      {children}
    </Description>
  );
}
