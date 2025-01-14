// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import '@mantine/carousel/styles.css';

import "./src/styles/global.css";

import { MantineProvider } from "@mantine/core";
import { theme } from "./src/theme";
import React from "react";

export const wrapPageElement = ({ element }) => {
  return <MantineProvider theme={theme}>{element}</MantineProvider>;
};
