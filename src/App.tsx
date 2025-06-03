import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { Home } from "./components/Home";
import Products from "./components/Products";
import Product from "./components/Product";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <Home />,
      path: "/",
      children: [
        {
          path: "/products",
          element: <Products />,
          children: [
            {
              path: ":id",
              element: <Product />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
