import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loadState } from './storage';

export const CART_PERSISTENT_STATE = 'cartData';

export interface CartItem {
  id: number;
  count: number;
}
export interface CartState {
  items: CartItem[];
}

const initialState: CartState = loadState<CartState>(CART_PERSISTENT_STATE) ?? {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    add: (state, action: PayloadAction<number>) => {
      const existed = state.items.find((i) => i.id === action.payload);
      // Если товар уже существует в корзине, ничего не делаем
      if (existed) {
        return;
      }
      // Если товара нет в корзине, добавляем его
      state.items.push({ id: action.payload, count: 1 });
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
