import { useTheme } from "./useTheme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    showPanel: true,
    storySort: {
      order: [
        "Core",
        ["Color System", "Typography"],
        "Components",
        [
          "Button",
          "Input",
          "CopyText",
          "Textarea",
          "Select",
          "Search",
          "Checkbox",
          "Toggle",
          "Chip",
          "PillTab",
          "slider",
          "ModalHeader",
        ],
      ],
    },
  },
};

export const decorators = [useTheme];
