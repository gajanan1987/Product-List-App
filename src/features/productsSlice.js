import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return data;
});

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    loading: false,
    error: null,
    sort: "none", // "asc" | "desc"
  },
  reducers: {
    sortProducts: (state, action) => {
      state.sort = action.payload;
      if (action.payload === "asc") {
        state.items.sort((a, b) => a.price - b.price);
      } else if (action.payload === "desc") {
        state.items.sort((a, b) => b.price - a.price);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.sort = "none";
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { sortProducts } = productsSlice.actions;
export default productsSlice.reducer;
