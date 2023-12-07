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

    removeItems: (state, action: PayloadAction<string>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      if (state.items[itemIndex].quantity === 1) {
        state.items.splice(itemIndex, 1);
      } else {
        state.items[itemIndex].quantity--;
      }
    },
  },
});

export const { addItems, removeItems } = CartSlice.actions;

export default CartSlice.reducer;
