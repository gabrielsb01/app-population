import { ModalContent } from "./ModalContent";
import { ModalDescription } from "./ModalDescription";
import { ModalRoot } from "./ModalRoot";
import { ModalTitle } from "./ModalTitle";
import { ModalTrigger } from "./ModalTrigger";
import { useModal } from "./useModal";

export const Modal = {
  Root: ModalRoot,
  Trigger: ModalTrigger,
  Content: ModalContent,
  Title: ModalTitle,
  Description: ModalDescription,
  store: useModal,
};
