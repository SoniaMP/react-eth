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

import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="center"
      sx={{
        mb: 2,
        width: "100%",
        backgroundColor: "lightblue",
        padding: 2,
      }}
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        Home
      </Link>
      <Link to="/products" style={{ textDecoration: "none" }}>
        Products
      </Link>
    </Stack>
  );
};
