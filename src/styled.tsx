import { Button, styled, type ButtonProps } from "@mui/material";
import type { LinkProps } from "react-router-dom";

export const AppBarButton = styled((props: ButtonProps & LinkProps) => (
  <Button {...props} />
))({
  color: "white",
  fontSize: "1.25rem",
  fontWeight: 500,
});
