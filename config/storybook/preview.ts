import type { Preview } from "@storybook/react";
import { ThemeDecorator } from "../../src/shared/config/StyleDecorator/StyleDecorator";
import { RouteDecorator } from "../../src/shared/config/RouteDecorator/RouteDecorator";
import { Theme } from "../../src/app/providers/ThemeProvider";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [RouteDecorator, ThemeDecorator(Theme.DARK)],
};

export default preview;
