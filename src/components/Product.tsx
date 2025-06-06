import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";

import { getProduct } from "../services";
import type { IProduct } from "../interfaces";

export const Product = () => {
  const { id = "" } = useParams();
  const { data: product, isLoading } = useQuery(["product", parseInt(id)], () =>
    getProduct(parseInt(id))
  );

  if (isLoading) {
    return (
      <Card sx={{ p: 2, mt: 2 }}>
        <Typography variant="caption">Loading product...</Typography>
      </Card>
    );
  }

  const { title, description, price } = product as IProduct;

  return (
    <Stack spacing={2}>
      <Card sx={{ p: 2, mt: 2 }}>
        <CardContent>
          <Typography variant="h5">{title}</Typography>
          <Typography>{description}</Typography>
          <Typography variant="body2">
            Price: <strong>{price}</strong>
          </Typography>
        </CardContent>
      </Card>
      <Box display="flex" justifyContent="flex-end">
        <Button variant="contained" component={Link} to="/">
          Back
        </Button>
      </Box>
    </Stack>
  );
};
