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

import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

import type { IProduct } from "../interfaces";
import { addProduct } from "../services";
import { Button, Stack, TextField, Typography } from "@mui/material";

export const ProductAdd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProduct>();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const mutation = useMutation(addProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
      navigate("/");
    },
  });

  const onSubmit = (formData: IProduct) => {
    const newProduct = {
      name: formData.name,
      price: formData.price,
      image: formData.image || "https://via.placeholder.com/150",
    };
    console.log("Adding product:", newProduct);
    mutation.mutate(newProduct);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <TextField
          placeholder="Product Name"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <Typography variant="caption" color="error" fontWeight={700}>
            Name is required
          </Typography>
        )}
        <TextField
          placeholder="Product price"
          {...register("price", { required: true })}
        />
        {errors.price && (
          <Typography variant="caption" color="error" fontWeight={700}>
            Price is required
          </Typography>
        )}
        <TextField placeholder="Image URL" {...register("image")} />
        <Button type="submit">Add Product</Button>
      </Stack>
    </form>
  );
};
