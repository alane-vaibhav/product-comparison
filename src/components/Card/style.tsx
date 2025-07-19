import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MainContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  padding: "16px 12px",
  borderRadius: "8px",
  rowGap: "8px",
  background: "",
  width: "fit-content",
  maxWidth: "320px",
  height: "auto",
  boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.12)",
  backgroundColor: "#e0e0e0",
}));

export const BoxHeader = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
}));

export const FeatureBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  textAlign: "start",
}));

export const TypographyBrand = styled(Typography)(({ theme }: any) => ({
  color: theme?.palette?.primary?.black,
}));

export const TypographyModal = styled(Typography)(({ theme }: any) => ({
  color: theme?.palette?.primary?.black,
}));

export const TypographyPrice = styled(Typography)(({ theme }: any) => ({
  color: theme?.palette?.primary?.black,
}));

export const TypographyBattery = styled(Typography)(({ theme }: any) => ({
  color: theme?.palette?.primary?.black,
}));

export const TypographyCamera = styled(Typography)(({ theme }: any) => ({
  color: theme?.palette?.primary?.black,
}));

export const ImgMobile = styled("img")(() => ({
  height: "350px",
  width: "300px",
}));

export const SpecificationBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "baseline",
}));

export const CheckboxContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "flex-end",
  marginBottom: "8px",
}));
