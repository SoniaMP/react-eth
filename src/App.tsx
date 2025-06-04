import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./components/Home";
import { ProductAdd } from "./components/ProductAdd";
import { Product } from "./components/Product";
import { Products } from "./components/Products";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <Home />,
      path: "/",
      children: [
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "products/:id",
          element: <Product />,
        },
        { path: "products/new", element: <ProductAdd /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
