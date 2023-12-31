import { configureStore } from "@reduxjs/toolkit";

import CartReducer from "./cartSlice.ts";

export const store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type CartDispatch = typeof store.dispatch;
