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

import { Box, Container, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export const Home = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Box p={2}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h3">Welcome to the Home Page</Typography>
          <Header />
          <Outlet />
        </Box>
      </Box>
    </Container>
  );
};
