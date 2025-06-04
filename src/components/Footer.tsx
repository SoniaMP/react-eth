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
