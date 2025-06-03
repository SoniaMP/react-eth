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

import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Stack
      spacing={2}
      sx={{ mt: 4 }}
      direction={{ xs: "column", sm: "row" }}
      justifyContent="center"
    >
      <Link to="/products" style={{ textDecoration: "none" }}>
        <Typography variant="button" color="primary">
          Go to Products
        </Typography>
      </Link>
      <Link to="/products/1" style={{ textDecoration: "none" }}>
        <Typography variant="button" color="primary">
          View Product 1
        </Typography>
      </Link>
      <Link to="/products/2" style={{ textDecoration: "none" }}>
        <Typography variant="button" color="primary">
          View Product 2
        </Typography>
      </Link>
    </Stack>
  );
};
