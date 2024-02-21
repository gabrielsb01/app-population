export interface IPopulation {
  data: {
    datasets: {
      label: string;
      data: (number | [number, number] | null)[];
      backgroundColor?: string;
    }[];
    labels?: string[];
  };
  name: string;
  zona: string;
  storybook?: boolean;
}
