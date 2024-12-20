import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button, ButtonSize, ThemeButton } from "./Button";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Primary",
  },
};

export const Clear: Story = {
  args: {
    children: "Clear",
    theme: ThemeButton.CLEAR,
  },
};

export const ClearInverted: Story = {
  args: {
    children: "ClearInverted",
    theme: ThemeButton.CLEAR_INVERTED,
  },
};

export const Outline: Story = {
  args: {
    children: "OUTLINE",
    theme: ThemeButton.OUTLINE,
  },
};

export const OutlineSizeM: Story = {
  args: {
    children: "OUTLINE",
    size: ButtonSize.M,
  },
};

export const OutlineSizeL: Story = {
  args: {
    children: "OUTLINE",
    size: ButtonSize.L,
  },
};

export const OutlineSizeXL: Story = {
  args: {
    children: "OUTLINE",
    size: ButtonSize.XL,
  },
};

export const Background: Story = {
  args: {
    children: "BACKGROUND",
    theme: ThemeButton.BACKGROUND,
  },
};

export const BackgroundInverted: Story = {
  args: {
    children: "BackgroundInverted",
    theme: ThemeButton.BACKGROUND_INVERTED,
  },
};

export const BackgroundInvertedSquare: Story = {
  args: {
    children: ">",
    square: true,
    theme: ThemeButton.BACKGROUND_INVERTED,
  },
};

export const BackgroundInvertedSquareXL: Story = {
  args: {
    children: ">",
    square: true,
    size: ButtonSize.XL,
    theme: ThemeButton.BACKGROUND_INVERTED,
  },
};
