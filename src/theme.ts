import { createTheme, DEFAULT_THEME, mergeMantineTheme } from "@mantine/core";

const themeOverride = createTheme({
  primaryColor: "royal-blue",
  defaultRadius: 16,
  colors: {
    "black-pearl": [
      "#f1f6fe",
      "#e2edfc",
      "#bed9f9",
      "#84baf5",
      "#4397ed",
      "#1a79dd",
      "#0d5ebc",
      "#0c4a98",
      "#0e417e",
      "#113769",
      "#061224", // default
    ],
    "royal-blue": [
      "#eef8ff",
      "#d9efff",
      "#bbe4ff",
      "#8cd4ff",
      "#55baff",
      "#2e9bff",
      "#177cf9",
      "#1064e5", // default
      "#1451b9",
      "#164692",
      "#132c58",
    ],
    "aqua-haze": [
      "#f4fafb",
      "#ebf5f6", // default
      "#cee8e9",
      "#a3d6d6",
      "#71bfbf",
      "#4fa8a8",
      "#3d898c",
      "#326f72",
      "#2d5d5f",
      "#294e51",
      "#1b3336",
    ],
    solitude: [
      "#f1f8fe",
      "#deeefc", // default
      "#bee1f9",
      "#84c8f5",
      "#43aeed",
      "#1a93dd",
      "#0d74bc",
      "#0c5d98",
      "#0e507e",
      "#114369",
      "#0c2a45",
    ],
    iceberg: [
      "#f1faf9",
      "#d8f1f0", // default
      "#bbe6e6",
      "#8cd4d3",
      "#56baba",
      "#3a9ea0",
      "#338287",
      "#2f696f",
      "#2d575d",
      "#2a4a4f",
      "#173035",
    ],
  },
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);
