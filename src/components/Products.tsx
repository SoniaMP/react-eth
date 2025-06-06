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
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

import { useQuery } from "react-query";
import { getProducts } from "../services";
import type { IProduct } from "../interfaces";
import { useState } from "react";

export const Products = () => {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const { data, isLoading } = useQuery(
    ["products", page, rowsPerPage],
    () => getProducts(page, rowsPerPage),
    { keepPreviousData: true }
  );
  const { products = [], total = 0 } = data || {};

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
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
        <Button component={Link} to="/products/new" variant="contained">
          <Typography>Add product</Typography>
        </Button>
      </Stack>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 480 }}>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((row: IProduct) => (
              <TableRow
                key={row.title}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.title}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.description}</TableCell>
                <TableCell align="right">
                  <Link to={`/products/${row.id}`}>Details</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={total}
        rowsPerPage={rowsPerPage}
        page={page}
        showFirstButton
        showLastButton
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Stack>
  );
};
