import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import projectReducer from "./projectSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    project: projectReducer,
  },
});

export default store;
