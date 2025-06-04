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

import { AppBar, Box, Container, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { AppBarButton } from "../styled";

export const Header = () => {
  return (
    <AppBar position="static" sx={{ py: 2 }}>
      <Container maxWidth="xl">
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          className="navbar navbar-expand-lg navbar-light bg-light"
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <Box
              component="img"
              src="/google-keep.svg"
              alt="Logo"
              sx={{ height: 40 }}
            />
          </Link>
          <AppBarButton component={Link} variant="text" to="/">
            Home
          </AppBarButton>
          <AppBarButton component={Link} variant="text" to="/balance">
            Balance ETH
          </AppBarButton>
        </Stack>
      </Container>
    </AppBar>
  );
};
