/*
 * .
 *        . * .
 *      * RRRR  *   Copyright (c) 2012 - 2025
 *     .  RR  R  .  EUIPO - European Union Intellectual Property Office
 *     *  RRR    *
 *      . RR RR .   ALL RIGHTS RESERVED
 *       *. _ .*
 * .
 *  The use and distribution of this software is under the restrictions exposed in 'license.txt'
 */

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
