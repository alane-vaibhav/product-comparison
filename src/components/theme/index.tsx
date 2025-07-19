import { createTheme } from "@mui/material";
import typography from "./typography";
import { darkPalette, lightPalette } from "./palette";

// export const theme = createTheme({
//   // palette: {
//   //   mode: themeMode,
//   //   ...(themeMode === "light" ? lightPalette : darkPalette),
//   // },
//   typography: typography,
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 900,
//       lg: 1200,
//       xl: 1536,
//     },
//   },
// });

export const createAppTheme = (mode: "light" | "dark") => {
  return createTheme({
    palette: {
      ...(mode === "light" ? lightPalette : darkPalette),
    },
    typography: typography,
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });
};
export const theme = createAppTheme("light");
