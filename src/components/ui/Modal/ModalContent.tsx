"use client";

import type { IModalContent } from "@/ui/modal";
import { Content, Close } from "@radix-ui/react-dialog";
import { twMerge } from "tailwind-merge";

export function ModalContent({ children, className }: IModalContent) {
  return (
    <Content
      className={twMerge(
        "modal bg-neutral-Background z-[1001] data-[state=open]:animate-contentShow shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] w-full max-w-md p-6 rounded-md fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 = focus:outline-none",
        className
      )}
    >
      <div className="w-full h-full flex flex-col gap-4">{children}</div>
      <Close asChild>
        <button
          className="group outline-none absolute top-7 right-6 inline-flex h-[25px] w-[25px] appearance-none items-center justify-center"
          aria-label="Close"
        >
          <span className="w-[3px] h-full bg-secondary-Default rotate-45 origin-center rounded-full absolute left-[11px] transition-all ease-out group-hover:scale-y-125 group-active:scale-y-90" />
          <span className="w-[3px] h-full bg-secondary-Default -rotate-45 origin-center rounded-full absolute transition-all group-hover:scale-y-125 group-active:scale-y-90" />
        </button>
      </Close>
    </Content>
  );
}
