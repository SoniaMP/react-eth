import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

import type { IProduct } from "../interfaces";
import { addProduct } from "../services";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

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
      title: formData.title,
      price: formData.price,
      description: formData.description,
    };
    mutation.mutate(newProduct);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <TextField
          placeholder="Product Name"
          {...register("title", { required: true })}
        />
        {errors.title && (
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
        <TextField
          placeholder="Product description"
          {...register("description")}
        />
        <Box display="flex" justifyContent="flex-end">
          <Button type="submit" variant="contained">
            Add Product
          </Button>
        </Box>
      </Stack>
    </form>
  );
};
