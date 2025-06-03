/*
 * .
 *        . * .
 *      * RRRR  *   Copyright (c) 2012 - 2025
 *     .  RR  R  .  EUIPO - European Union Intellectual Property Office
 *     *  RRR    *
 *      . RR RR .   ALL RIGHTS RESERVED
 *       *. _ .*
 * .
 *  The use and distribution of this software is under the restrictions exposed in 'license.txt'
 */

import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import { getProducts } from "../services";
import type { IProduct } from "../interfaces";

const Product = () => {
  const { id = "" } = useParams();
  const { data: products, isLoading } = useQuery(["products"], getProducts);

  if (isLoading) {
    return (
      <Card sx={{ p: 2, mt: 2 }}>
        <Typography variant="caption">Loading product...</Typography>
      </Card>
    );
  }

  const product = products.find((p: IProduct) => p.id === parseInt(id));
  const { name, description, image } = product || {};

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
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default Product;
