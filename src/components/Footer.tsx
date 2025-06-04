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

import { Box } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      textAlign="center"
      padding={1}
      position="fixed"
      width="100%"
      sx={{
        backgroundColor: "#FAF8FD",
        bottom: 0,
      }}
    >
      <p>© 2025 Sonia Molina - Code Crypto formation. All rights reserved</p>
    </Box>
  );
};
