import { Bar } from "react-chartjs-2";
import { ChartProps } from "@/Chart/chart";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const ChartComponent = ({ options, data }: ChartProps) => {
  return (
    <div className="w-full h-[50vh]">
      <Bar options={options} data={data} />
    </div>
  );
};
