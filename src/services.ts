import type { IProduct } from "./interfaces";

export const getProducts = async () => {
  return fetch("/api/products").then((res) => res.json());
};

export const addProduct = async (newProduct: IProduct) => {
  return fetch("/api/products", {
    method: "POST",
    body: JSON.stringify(newProduct),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};
