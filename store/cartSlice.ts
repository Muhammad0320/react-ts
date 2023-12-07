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

  reducers: {
    addItems: (state, action: PayloadAction<CartItems>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.items[itemIndex].quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
  },
});

export const { addItems } = CartSlice.actions;

export default CartSlice.reducer;
