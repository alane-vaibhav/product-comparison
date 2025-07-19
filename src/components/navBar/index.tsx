import { AppBar, IconButton } from "@mui/material";
import {
  BoxSearch,
  MainContainer,
  SearchIconWrapper,
  StyledInputBase,
} from "./style";
import { Search } from "@mui/icons-material";
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";

interface NavBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  themeMode: "light" | "dark";
  toggleTheme: () => void;
}

const NavBar = ({
  searchTerm,
  onSearchChange,
  themeMode,
  toggleTheme,
}: NavBarProps) => {
  return (
    <>
      <AppBar position="fixed">
        <MainContainer>
          <BoxSearch>
            <SearchIconWrapper>
              <Search />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </BoxSearch>
          <IconButton
            onClick={toggleTheme}
            color="inherit"
            sx={{ ml: 2 }}
            aria-label="toggle theme"
          >
            {themeMode === "dark" ? (
              <BrightnessHighIcon />
            ) : (
              <NightlightRoundIcon />
            )}
          </IconButton>
        </MainContainer>
      </AppBar>
    </>
  );
};

export default NavBar;
