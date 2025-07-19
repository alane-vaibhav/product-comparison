export const lightPalette = {
  mode: "light" as const,
  primary: {
    dark: "#1300A9",
    main: "#4E4EEB",
    light: "#8183FF",
    bright: "#C1C1FF",
    plain: "#E1DFFF",
    border: "#4E4EFD",
  },
  secondary: {
    dim: "#650713",
    dark: "#C55153",
    main: "#FF7D7D",
    bright: "#bdbdbd",
    mediumBright: "#FF7062",
    light: "#FFB3B1",
    lighter: "#FFEBEB",
  },
  tertiary: {
    dim: "#C5C6CF",
    dark: "#E1E2EB",
    main: "#F5F5FF",
    light: "#FEFBFF",
    bright: "#F9F9F9",
  },
  natural: {
    dim: "#13131B",
    dark: "#5F5E62",
    main: "#929094",
    light: "#C8C5CA",
    bright: "#fff",
    granite: "#666",
  },
  background: {
    default: "#000000",
    paper: "#f5f5f5",
  },
  text: {
    primary: "#13131B",
    secondary: "#5F5E62",
  },
};

export const darkPalette = {
  mode: "dark" as const,
  primary: {
    dark: "#8183FF",
    main: "#0000",
    light: "#1300A9",
    bright: "#C1C1FF",
    plain: "#2A2A3A",
    border: "#4E4EFD",
  },
  secondary: {
    dim: "#FFB3B1",
    dark: "#FF7D7D",
    main: "#FF7378",
    bright: "#000000",
    mediumBright: "#FF7062",
    light: "#650713",
    lighter: "#2A1A1A",
  },
  tertiary: {
    dim: "#2A2A3A",
    dark: "#1A1A2A",
    main: "#0F0F1A",
    light: "#05050A",
    bright: "#1A1A2A",
  },
  natural: {
    dim: "#E1E2EB",
    dark: "#C8C5CA",
    main: "#929094",
    light: "#5F5E62",
    bright: "#13131B",
    granite: "#999",
  },
  background: {
    default: "#fff",
    paper: "#1A1A2A",
  },
  text: {
    primary: "#ffffff",
    secondary: "#C8C5CA",
  },
};

// Keep the default export for backward compatibility
export default lightPalette;
