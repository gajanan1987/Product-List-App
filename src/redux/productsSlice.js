import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
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

export const selectProducts = (state) => state.products;
export const selectLoading = (state) => state.products.loading;
export const selectError = (state) => state.products.error;

export const selectSortedProducts = createSelector(
  [selectProducts, (_, sortOrder) => sortOrder],
  (state, sortOrder) => {
    if (!sortOrder) return state.items;
    return [...state.items].sort((a, b) =>
      sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );
  }
);

// export const { } = productsSlice.actions;
export default productsSlice.reducer;
