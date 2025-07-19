import {
  BoxHeader,
  CheckboxContainer,
  FeatureBox,
  ImgMobile,
  MainContainer,
  SpecificationBox,
  TypographyBattery,
  TypographyBrand,
  TypographyCamera,
  TypographyModal,
  TypographyPrice,
} from "./style";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import BatteryStdOutlinedIcon from "@mui/icons-material/BatteryStdOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import { Checkbox } from "@mui/material";

interface Product {
  id: number;
  brand: string;
  model: string;
  price: string;
  battery: string;
  camera: string;
  space: string;
  img: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
  isSelected: boolean;
  onSelectChange: (productId: number, selected: boolean) => void;
}

const ProductCard = ({
  product,
  isSelected,
  onSelectChange,
}: ProductCardProps) => {
  return (
    <>
      <MainContainer key={product?.id}>
        <CheckboxContainer>
          <Checkbox
            checked={isSelected}
            onChange={(e) => onSelectChange(product?.id, e.target.checked)}
            color="primary"
          />
        </CheckboxContainer>
        <BoxHeader>
          <TypographyBrand variant="h2">{product?.brand}</TypographyBrand>
          <TypographyModal variant="h2">{product?.model}</TypographyModal>
        </BoxHeader>
        <ImgMobile src={product?.img} alt="" />
        <FeatureBox>
          <SpecificationBox>
            <CurrencyRupeeOutlinedIcon />
            <TypographyPrice variant="h6">{product?.price}</TypographyPrice>
            <BatteryStdOutlinedIcon />
            <TypographyBattery variant="h6">
              {product.battery}
            </TypographyBattery>
          </SpecificationBox>
          <SpecificationBox>
            <TypographyCamera variant="h6">
              <CameraAltOutlinedIcon />
              {product.camera}
            </TypographyCamera>
          </SpecificationBox>
          <SpecificationBox>
            <TypographyCamera variant="h6">{product.space}</TypographyCamera>
          </SpecificationBox>
        </FeatureBox>
      </MainContainer>
    </>
  );
};

export default ProductCard;
