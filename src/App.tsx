import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./components/Home";
import { ProductAdd } from "./components/ProductAdd";
import { Product } from "./components/Product";
import { Products } from "./components/Products";
import { Balance } from "./components/Balance";

export const App = () => {
  const router = createBrowserRouter([
    {
      element: <Home />,
      path: "/",
      children: [
        {
          path: "",
          element: <Products />,
        },
        {
          path: "products/:id",
          element: <Product />,
        },
        {
          path: "products/new",
          element: <ProductAdd />,
        },
        {
          path: "balance",
          element: <Balance />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
