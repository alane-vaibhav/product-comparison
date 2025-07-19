import { useMemo, useState } from "react";
import "./App.css";
import NavBar from "./components/navBar";
import MainStore from "./components/store";
import { ProductList } from "./constants";

interface AppProps {
  themeMode: "light" | "dark";
  setThemeMode: (mode: "light" | "dark") => void;
}

function App({ themeMode, setThemeMode }: AppProps) {
  const [searchProduct, setSearchProduct] = useState("");

  const filteredProducts = useMemo(() => {
    return ProductList?.filter((product) => {
      const matchesSearch =
        product?.brand?.toLowerCase().includes(searchProduct?.toLowerCase()) ||
        product?.model?.toLowerCase().includes(searchProduct?.toLowerCase()) ||
        product?.description
          .toLowerCase()
          .includes(searchProduct?.toLowerCase());

      return matchesSearch;
    });
  }, [searchProduct]);
  const toggleTheme = () => {
    setThemeMode(themeMode === "light" ? "dark" : "light");
  };

  return (
    <>
      <NavBar
        searchTerm={searchProduct}
        onSearchChange={setSearchProduct}
        themeMode={themeMode}
        toggleTheme={toggleTheme}
      />
      <MainStore products={filteredProducts} />
    </>
  );
}

export default App;
