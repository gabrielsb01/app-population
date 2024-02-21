import { useEffect, useState } from "react";
import { getPopulacaoBairros } from "./services/api";
import { ModalPopulation } from "./components/Modal/ModalPopulation";
import { useModal } from "./components/ui/Modal/useModal";
import { ModalWelcome } from "./components/Modal/ModalWelcome";
import { MapComponent } from "./components/Map";
import "chart.js/auto";

interface Neighborhood {
  name: string;
  zona: string;
  id: number;
}

interface PopulationData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
  }[];
}

interface IBlock {
  id_geometria: number;
  ano: string;
  populacao: number;
}

function App() {
  const [populationData, setPopulationData] = useState<PopulationData | null>(
    null
  );
  const [chosenNeighborhood, setChosenNeighborhood] = useState<Neighborhood>(
    {} as Neighborhood
  );
  const setStatus = useModal((st) => st.actions.setStatus);
  const mapCenter: [number, number] = [-23.2162, -45.9141];

  const fetchData = async (id: number) => {
    const data: PopulationData = {
      labels: [],
      datasets: [
        {
          label: "População",
          data: [],
          backgroundColor: "rgba(39, 245, 106, 0.8)",
        },
      ],
    };

    const result = await getPopulacaoBairros();
    result
      .filter((item: IBlock) => item.id_geometria === id)
      .forEach((item: IBlock) => {
        data.labels.push(item.ano);
        data.datasets[0].data.push(item.populacao);
      });

    setPopulationData(data);
  };

  useEffect(() => {
    setStatus({ name: "modal-welcome", open: true });
  }, [setStatus]);

  useEffect(() => {
    if (Object.keys(chosenNeighborhood).length > 0) {
      fetchData(chosenNeighborhood.id);
    }
  }, [chosenNeighborhood]);

  useEffect(() => {
    if (populationData) {
      setStatus({ name: "modal-population", open: true });
    }
  }, [populationData, setStatus]);

  return (
    <>
      <ModalWelcome />
      <MapComponent
        center={mapCenter}
        handlePopulation={setChosenNeighborhood}
      />
      {populationData && (
        <ModalPopulation
          data={populationData}
          name={chosenNeighborhood.name}
          zona={chosenNeighborhood.zona}
        />
      )}
    </>
  );
}

export default App;
