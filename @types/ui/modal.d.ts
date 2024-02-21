export interface IModalRoot {
  children: ReactNode;
  name: string;
}
export interface IModalTrigger {
  children: ReactNode;
  asChild?: boolean;
  name: string;
  open?: boolean;
}
export interface IModalTitle {
  children: string;
  className?: string;
}
export interface IModalDescription {
  children: string;
  className?: string;
}
export interface IModalContent {
  children: ReactNode;
  className?: string;
}

export interface IModalStoreActionSetStatus {
  name: string;
  open: boolean;
}

export interface IModalStore {
  data: {
    modal: {
      [key: string]: boolean;
    };
  };
  actions: {
    setStatus(updateModal: IModalStoreActionSetStatus | false): void;
  };
}
