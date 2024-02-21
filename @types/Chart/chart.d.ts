export interface ChartProps {
  options: object;
  
  data: {
    datasets: {
      label: string;
      data: (number | [number, number] | null)[];
      backgroundColor?: string;
    }[];
    labels?: string[];
  };
}
