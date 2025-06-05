import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Home = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ my: 2 }}>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};
