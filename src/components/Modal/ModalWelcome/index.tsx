"use client";

import { Modal } from "../../ui/Modal";

export function ModalWelcome() {
  return (
    <Modal.Root name="modal-welcome">
      <Modal.Content className="max-w-full w-4/5">
        <Modal.Title>Bem-vindo ao Mapa de Evolução Populacional!</Modal.Title>
        <p>
          Explore as mudanças da população ao clicar nos bairros em destaque.
        </p>
      </Modal.Content>
    </Modal.Root>
  );
}
