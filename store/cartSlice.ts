import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartItems = {
  price: number;
  title: string;
  id: string;
};

type CartQuantity = {
  quantity: number;
};

type CartContainer = CartItems & CartQuantity;

type CartState = {
  items: CartContainer[];
};

const initialState: CartState = {
  items: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});
