import type { Meta, StoryObj } from "@storybook/svelte";
import TitleHeading from "$lib/components/storybook/TitleHeading.svelte";

const meta: Meta<TitleHeading> = {
  component: TitleHeading,
  argTypes: {
    heading: { control: "text", description: "Text to display in the heading" },
    level: {
      control: { type: "radio" },
      options: [1, 2, 3, 4, 5, 6],
      description: "Heading level (h1 to h6)",
    },
  },
};

export default meta;

type Story = StoryObj<typeof TitleHeading>;

export const Default: Story = {
  args: {
    heading: "SPŠT Knižnica",
    level: 1,
  },
};