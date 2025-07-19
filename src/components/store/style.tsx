import { Box, Drawer } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";

export const MainContainer = styled(Box)(({ theme }: any) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "16px",
  padding: "30px 40px",
  boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.12)",
  overflow: "auto",
  background: `${theme.palette.secondary?.bright}`,
  maxWidth: "1224px",
  justifyContent: "center",
  margin: "100px auto",
  borderRadius: "8px",
}));

export const CompareButtonContainer = styled(Box)(({ theme }: any) => ({
  position: "fixed",
  bottom: "20px",
  right: "20px",
  zIndex: 1000,
  background: `${theme.palette.secondary.bright}`,
}));

export const CompareButton = styled(Box)(({ theme }: any) => ({
  color: `${theme.palette.text.primary} !important`,
}));

export const ModalContainer = styled(Box)(({ theme }: any) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  position: "absolute" as "absolute",
  background: theme?.palette?.natural?.bright,
  borderRadius: "8px",
  flexDirection: "column",
  minWidth: "fit-content",
}));

export const PDPage = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
}));

export const ContentBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  borderRight: "1px solid grey",
  padding: "8px",
}));

export const Typographytext = styled(Box)(() => ({
  marginTop: "20px",
}));

export const CloseIconIcon = styled(CloseIcon)(() => ({
  height: "18px",
  width: "18px",
}));

export const BoxButtonWrapper = styled(CloseIcon)(() => ({
  display: "flex",
  justifyContent: "end",
  alignItems: "end",
  height: "24px",
}));

export const LabelBox = styled(CloseIcon)(() => ({
  display: "flex",
  flexDirection: "row",
  columnGap: "8px",
  height: "24px",
  border: "1px solid grey",
}));

export const DrawerDrawer = styled(Drawer)(() => ({
  "& .MuiDrawer-paper": {
    height: "auto",
    width: "100vw",
    maxWidth: "none",
    borderRadius: "8px 8px 0 0",
    overflow: "auto",
    marginTop: "40px",
    maxHeight: "90%",
  },
}));
