import { Box, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

export const MainContainer = styled(Toolbar)(({ theme }: { theme: any }) => ({
  " &.MuiToolbar-root": {
    background: `${theme.palette.secondary.bright} !important`,
  },
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 16px",
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: "4px",
  height: "100%",
  color: theme?.palette?.background?.default,
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    width: "100%",
    padding: "4px 20px",
    borderRadius: "4px",
    color: theme.palette.background.default,
    border: `1px solid ${theme.palette.background.default}`,
  },
}));

export const BoxSearch = styled(Box)(({ theme }: any) => ({
  display: "flex",
  flexDirection: "row",
  gap: "4px",
  justifyContent: "space-between",
  width: "fit-content",
  textAlign: "center",
  alignItems: "center",
}));

export const FilterContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}));
