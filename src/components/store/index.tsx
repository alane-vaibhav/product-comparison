import { useEffect, useState } from "react";
import { ProductList } from "../../constants";
import ProductCard from "../Card";
import {
  CompareButtonContainer,
  DrawerDrawer,
  MainContainer,
  ModalContainer,
} from "./style";
import {
  Button,
  IconButton,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface MainStoreProps {
  products: any[];
}

const initialFields = [
  { key: "brand", label: "Brand" },
  { key: "model", label: "Model" },
  { key: "price", label: "Price" },
  { key: "space", label: "Storage" },
  { key: "camera", label: "Camera" },
  { key: "battery", label: "Battery" },
  { key: "description", label: "Description" },
];

const MainStore = ({ products }: MainStoreProps) => {
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [selectedProductsData, setSelectedProductsData] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const [fields, setFields] = useState(initialFields);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme?.breakpoints?.down("md"));

  const handleRemoveField = (key: string) => {
    setFields(fields.filter((field) => field.key !== key));
  };

  useEffect(() => {
    const storedData = localStorage.getItem("Preselected Item");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      if (Array.isArray(parsedData) && parsedData.length > 0) {
        setSelectedProductsData(parsedData);
        const productIds = parsedData.map((product: any) => product.id);
        setSelectedProducts(productIds);
        setOpen(true);
      }
    }
  }, []);

  const handleProductSelect = (productId: number, selected: boolean) => {
    if (selected) {
      if (selectedProducts?.length < 3) {
        setSelectedProducts([...selectedProducts, productId]);
      }
    } else {
      setSelectedProducts(selectedProducts?.filter((id) => id !== productId));
    }
  };

  const handleCompare = () => {
    const selectedProductData = ProductList?.filter((product) =>
      selectedProducts.includes(product.id)
    );
    setSelectedProductsData(selectedProductData);
    localStorage.setItem(
      "Preselected Item",
      JSON.stringify(selectedProductData)
    );
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <MainContainer>
        {products?.map((product: any, index: number) => (
          <ProductCard
            key={product?.id || index}
            product={product}
            isSelected={selectedProducts?.includes(product?.id)}
            onSelectChange={handleProductSelect}
          />
        ))}
      </MainContainer>
      {products?.length === 0 && (
        <Typography variant="h6">
          No products found matching your search criteria.
        </Typography>
      )}
      <CompareButtonContainer>
        <Button
          variant="contained"
          color="primary"
          disabled={selectedProducts?.length < 2}
          onClick={handleCompare}
        >
          Compare {selectedProducts?.length} Product
          {selectedProducts?.length !== 1 ? "s" : ""}
        </Button>
      </CompareButtonContainer>
      {!isMobile ? (
        <Modal open={open} onClose={handleClose}>
          <ModalContainer>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Compare Products
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>Field</TableCell>
                    {selectedProductsData?.map((product) => (
                      <TableCell
                        key={product.id}
                        align="center"
                        sx={{ fontWeight: "bold" }}
                      >
                        {product.model}
                      </TableCell>
                    ))}
                    <TableCell sx={{ fontWeight: "bold" }}>Delete</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {fields.map((field) => (
                    <TableRow key={field.key}>
                      <TableCell
                        sx={{ fontWeight: "bold", textAlign: "start" }}
                      >
                        {field.label}
                      </TableCell>
                      {selectedProductsData.map((product) => (
                        <TableCell key={product.id + field.key}>
                          {product[field.key] ?? "-"}
                        </TableCell>
                      ))}
                      <TableCell>
                        <IconButton
                          onClick={() => handleRemoveField(field.key)}
                        >
                          <DeleteIcon color="error" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </ModalContainer>
        </Modal>
      ) : (
        <DrawerDrawer
          open={open}
          anchor="bottom"
          transitionDuration={1000}
          onClose={handleClose}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            Compare Products
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>Field</TableCell>
                  {selectedProductsData?.map((product) => (
                    <TableCell
                      key={product.id}
                      align="center"
                      sx={{ fontWeight: "bold" }}
                    >
                      {product.model}
                    </TableCell>
                  ))}
                  <TableCell sx={{ fontWeight: "bold" }}>Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {fields.map((field) => (
                  <TableRow key={field.key}>
                    <TableCell sx={{ fontWeight: "bold", textAlign: "start" }}>
                      {field.label}
                    </TableCell>
                    {selectedProductsData.map((product) => (
                      <TableCell key={product.id + field.key}>
                        {product[field.key] ?? "-"}
                      </TableCell>
                    ))}
                    <TableCell>
                      <IconButton onClick={() => handleRemoveField(field.key)}>
                        <DeleteIcon color="error" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DrawerDrawer>
      )}
    </>
  );
};

export default MainStore;
