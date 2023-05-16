import { extendTheme } from "native-base";

/**
 * Define o Tema da aplicação
 */
export const THEME = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "light",
  },
  colors: {
    primary: {
      500: "#a855f7",
      600: "#9333ea",
      700: "#7e22ce",
      800: "#6b21a8",
    },
    white: "#FFFFFF",
    black: "#000000",
  },
});
