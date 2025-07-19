import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { ProductList } from "../../constants";

const initialFields = [
  { key: "brand", label: "Brand" },
  { key: "model", label: "Model" },
  { key: "price", label: "Price" },
  { key: "space", label: "Storage" },
  { key: "camera", label: "Camera" },
  { key: "battery", label: "Battery" },
  { key: "description", label: "Description" },
];

const ProductComparisonTable = () => {
  const [products] = useState(ProductList.slice(0, 3)); // up to 3 products
  const [fields, setFields] = useState(initialFields);

  const handleRemoveField = (key: string) => {
    setFields(fields.filter((field) => field.key !== key));
  };

  return (
    <>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Compare Products
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Field</TableCell>
              {products.map((product) => (
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
                <TableCell sx={{ fontWeight: "bold" }}>{field.label}</TableCell>
                {products.map((product) => (
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
    </>
  );
};

export default ProductComparisonTable;
