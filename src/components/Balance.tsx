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
