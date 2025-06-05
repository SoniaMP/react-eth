import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import { getProducts } from "../services";
import type { IProduct } from "../interfaces";
import defaultProducts from "../data/products.json";

export const Product = () => {
  const { id = "" } = useParams();
  const { data: products = defaultProducts, isLoading } = useQuery(
    ["products"],
    getProducts
  );

  if (isLoading) {
    return (
      <Card sx={{ p: 2, mt: 2 }}>
        <Typography variant="caption">Loading product...</Typography>
      </Card>
    );
  }

  const product: IProduct = products.find(
    (p: IProduct) => p.id === parseInt(id)
  );
  const { name, price, image } = product || {};

  return (
    <Card sx={{ p: 2, mt: 2 }}>
      <CardMedia
        component="img"
        height="240"
        image={image}
        alt={name}
        sx={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography>{name}</Typography>
        <Typography variant="body2">{price}</Typography>
      </CardContent>
    </Card>
  );
};
