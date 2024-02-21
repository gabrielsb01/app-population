import type { Meta, StoryObj } from "@storybook/react";

import { ChartComponent } from "../components/Chart";

const meta = {
  title: "Components/Chart",
  component: ChartComponent,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscren",
  },
} satisfies Meta<typeof ChartComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Populacao1: Story = {
  args: {
    options: {
      maintainAspectRatio: true,
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
    },

    data: {
      labels: ["2000", "2002", "2004", "2006"],
      datasets: [
        {
          label: "População",
          data: [890, 320, 750, 432],
          backgroundColor: "rgba(39, 245, 106, 0.8)",
        },
      ],
    },
  },
};

export const Populacao2: Story = {
  args: {
    options: {
      maintainAspectRatio: true,
      plugins: {
        legend: {
          position: "left",
        },
        title: {
          display: true,
          text: "Evolução Populacional por Ano",
          font: {
            size: 12,
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
            text: "População 2",
          },
        },
      },
    },

    data: {
      labels: ["2001", "2002", "2003", "2004"],
      datasets: [
        {
          label: "População 2",
          data: [4000, 4500, 5000, 5500],
          backgroundColor: "rgba(48, 37, 190, 1)",
        },
      ],
    },
  },
};

export const Populacao3: Story = {
  args: {
    options: {
      maintainAspectRatio: true,
      plugins: {
        legend: {
          position: "bottom",
        },
        title: {
          display: true,
          text: "Evolução Populacional por Ano",
          font: {
            size: 20,
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
            text: "População 3",
          },
        },
      },
    },

    data: {
      labels: ["2000", "2002", "2004", "2006", "2008", "2010", "2012"],
      datasets: [
        {
          label: "População 3",
          data: [890, 320, 750, 432, 920, 1750, 1100],
          backgroundColor: "rgba(190, 37, 58, 1)",
        },
      ],
    },
  },
};
