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

export const Balance = () => {
  return (
    <Box
      mt={2}
      p={2}
      textAlign="center"
      style={{
        backgroundColor: "#FAF8FD",
        borderRadius: "8px",
      }}
    >
      <h2>Balance</h2>
      <p>Your current balance is:</p>
      <h3>€100.00</h3>
    </Box>
  );
};
