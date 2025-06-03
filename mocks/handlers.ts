import { delay, http, HttpResponse } from "msw";

import products from "./products.json";

const productsData = products;

export const handlers = [
  http.get("/api/products", async () => {
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
    productsData.push({ id: productsData.length + 1, ...newProduct });
    await delay();
    return HttpResponse.json(newProduct, { status: 201 });
  }),
];
