import { useEffect } from "react";
import { ChartComponent } from "../../Chart";
import { Modal } from "../../ui/Modal";
import { IPopulation } from "@/Modal/modal";
import { useModal } from "../../ui/Modal/useModal";

export function ModalPopulation({
  data,
  name,
  zona,
  storybook = false,
}: IPopulation) {
  const setStatus = useModal((st) => st.actions.setStatus);

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Evolução Populacional por Ano",
        font: {
          size: 16,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Ano",
        },
      },
      y: {
        title: {
          display: true,
          text: "População",
        },
      },
    },
  };

  useEffect(() => {
    if (storybook) setStatus({ name: "modal-population", open: true });
  }, [storybook, setStatus]);

  return (
    <Modal.Root name="modal-population">
      <Modal.Content className="max-w-full w-4/5">
        <Modal.Title>Evolução Populacional</Modal.Title>
        <p>
          {name} - Zona {zona}
        </p>
        <p>
          Este gráfico mostra a evolução da população ao longo dos anos no
          bairro {name}, localizado na Zona {zona}.
        </p>
        <ChartComponent options={options} data={data} />
      </Modal.Content>
    </Modal.Root>
  );
}
