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

import {
  Box,
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

import { useMutation, useQuery, useQueryClient } from "react-query";
import { addProduct, getProducts } from "../services";
import type { IProduct } from "../interfaces";

const Products = () => {
  const queryClient = useQueryClient();
  const { data: products, isLoading } = useQuery(["products"], getProducts);

  const mutation = useMutation(addProduct, {
    onSuccess: () => queryClient.invalidateQueries(["products"]),
  });

  const handleAdd = () => {
    mutation.mutate({
      name: "Nuevo producto",
      description: "Descripción del producto",
    });
  };

  if (isLoading) {
    return (
      <Box p={2}>
        <Typography variant="caption">Loading products...</Typography>
      </Box>
    );
  }

  return (
    <Stack spacing={2}>
      <Stack spacing={1} direction="row" justifyContent={"flex-end"}>
        <Button variant="contained" onClick={handleAdd}>
          Add product
        </Button>
      </Stack>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Info</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((row: IProduct) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.description}</TableCell>
                <TableCell align="right">
                  <Link to={`/products/${row.id}`}>Details</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default Products;
