import { configureStore } from "@reduxjs/toolkit";

import CartReducer from "./cartSlice.ts";

export const store = configureStore({
  //   reducer: CartReducer,
});
