import type { Meta, StoryObj } from "@storybook/react";

import { MapComponent } from "../components/Map";

const meta = {
  title: "Components/Map",
  component: MapComponent,
  tags: ["autodocs"],
  args: {
    center: [-23.2162, -45.9141],
    handlePopulation: () => console.log('Population handled'),
  },
  parameters: {
    layout: "fullscren",
  },
} satisfies Meta<typeof MapComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Mapa: Story = {
  args: {
    center: [-23.2162, -45.9141],
    handlePopulation: () => console.log('Population handled'),
  },
};
