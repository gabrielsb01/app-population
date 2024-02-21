import type { Meta, StoryObj } from "@storybook/react";

import { ModalPopulation } from "../components/Modal/ModalPopulation";

const meta = {
  title: "Components/Modal",
  component: ModalPopulation,
  tags: ["autodocs"],
  args: {
    data: {
      labels: ["2000", "2002", "2004", "2006"],
      datasets: [
        {
          label: "População",
          data: [10105, 11750, 11940, 10930],
          backgroundColor: "rgba(39, 245, 106, 0.8)",
        },
      ],
    },
    name: "jd. oliveira",
    zona: "norte",
    storybook: true,
  },
  parameters: {
    layout: "fullscren",
  },
} satisfies Meta<typeof ModalPopulation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Modal: Story = {
  args: {
    data: {
      labels: ["2000", "2002", "2004", "2006"],
      datasets: [
        {
          label: "População",
          data: [10105, 11750, 11940, 10930],
          backgroundColor: "rgba(39, 245, 106, 0.8)",
        },
      ],
    },
    name: "jd. oliveira",
    zona: "norte",
    storybook: true,
  },
};
