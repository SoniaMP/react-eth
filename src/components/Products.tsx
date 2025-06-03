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

import { Box, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

const Products = () => {
  return (
    <Box>
      <Outlet />
      <Typography variant="body1">This is a simple Products table.</Typography>
    </Box>
  );
};

export default Products;
