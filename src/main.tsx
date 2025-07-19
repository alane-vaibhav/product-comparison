import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "@emotion/react";
import { createAppTheme } from "./components/theme/index.tsx";

function AppWithTheme() {
  const [themeMode, setThemeMode] = useState<"light" | "dark">(() => {
    const saved = localStorage.getItem("themeMode");
    return (saved as "light" | "dark") || "light";
  });

  useEffect(() => {
    localStorage.setItem("themeMode", themeMode);
  }, [themeMode]);

  const theme = createAppTheme(themeMode);

  return (
    <ThemeProvider theme={theme}>
      <App themeMode={themeMode} setThemeMode={setThemeMode} />
    </ThemeProvider>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppWithTheme />
  </StrictMode>
);
