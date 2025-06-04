import { delay, http, HttpResponse } from "msw";

import products from "./products.json";
import type { IProduct } from "../src/interfaces";

const productsData = [...products] as IProduct[];

export const handlers = [
  http.get("/api/products", async () => {
    console.log({ productsData });
    await delay();
    return HttpResponse.json(productsData, { status: 200 });
  }),

  http.get("/api/products/:id", async ({ params }) => {
    const { id } = params;
    const currentProduct = productsData.find(
      (product) => product.id === Number(id)
    );
    if (!currentProduct) {
      return HttpResponse.json({ error: "Product not found" }, { status: 404 });
    }

    await delay();
    return HttpResponse.json(currentProduct, { status: 200 });
  }),

  http.post("/api/products", async ({ request }) => {
    const newProduct: any = await request.json();
    productsData.push({
      id: productsData.length + 1,
      ...newProduct,
    });
    console.log({ productsData });
    await delay();
    return HttpResponse.json(newProduct, { status: 201 });
  }),
];
