import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
          path: "products",
          element: <Products />,
        },
        {
          path: "products/:id",
          element: <Product />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
