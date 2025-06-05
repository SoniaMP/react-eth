import AccountIcon from "@mui/icons-material/AccountBalanceOutlined";
import { AppBar, Container, Stack } from "@mui/material";
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
            <AccountIcon sx={{ fontSize: 40, color: "white" }} />
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
