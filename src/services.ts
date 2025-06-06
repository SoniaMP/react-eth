import type { IProduct } from "./interfaces";

export const getProducts = (page: number = 0, limit: number = 0) => {
  console.log(`limit = ${limit}`);
  return fetch(
    `https://dummyjson.com/products?skip=${page}&limit=${limit}`
  ).then((res) => res.json());
};

export const getProduct = (id: number) => {
  return fetch(`https://dummyjson.com/products/${id}`).then((res) =>
    res.json()
  );
};

export const addProduct = async (newProduct: IProduct) => {
  return fetch("https://dummyjson.com/products/add", {
    method: "POST",
    body: JSON.stringify(newProduct),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};
