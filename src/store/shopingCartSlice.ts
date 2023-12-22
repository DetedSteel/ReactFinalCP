import { ICartItem } from '../types/app';
import { createSlice } from '@reduxjs/toolkit';

type CartState = {
  items: ICartItem[];
  totalPrice: number;
};

const localState: CartState = {
  items: [],
  totalPrice: 0,
};

for (let i = 0; i < localStorage.length; i++) {
  if (parseInt(localStorage.key(i) ?? 'a')) {
    localState.items.push(JSON.parse(localStorage.getItem(localStorage.key(i) ?? '') ?? ''));
  }
}

localState.totalPrice = parseFloat(localStorage.getItem('totalPrice') ?? '0');

const initialState: CartState = localState;

const cartSlice = createSlice({
  name: 'shopingCart',
  initialState,
  reducers: {
    addToCart: (state, action: { payload: ICartItem }) => {
      if (state.items.find(e => e.product.id === action.payload.product.id)) {
        state.items.map(e => {
          if (e.product.id === action.payload.product.id) {
            state.totalPrice += e.product.discont_price ? e.product.discont_price : e.product.price;
            e.count += action.payload.count;
          }
          localStorage.setItem(`${e.product.id}`, JSON.stringify(e));
          localStorage.setItem('totalPrice', state.totalPrice.toString());
          return e;
        });
      } else {
        state.items.push(action.payload);
        state.totalPrice += action.payload.product.discont_price
          ? action.payload.product.discont_price * action.payload.count
          : action.payload.product.price * action.payload.count;
        localStorage.setItem(`${action.payload.id}`, JSON.stringify(action.payload));
        localStorage.setItem('totalPrice', state.totalPrice.toString());
      }
    },
    removeFromCart: (state, action: { payload: number }) => {
      state.items.map(e => {
        if (e.product.id === action.payload) {
          state.totalPrice -= e.product.discont_price
            ? e.product.discont_price * e.count
            : e.product.price * e.count;
          e.count++;
        }
        return e;
      });
      state.items = state.items.filter(e => {
        if (e.id === action.payload) {
          localStorage.removeItem(e.id.toString());
          localStorage.setItem('totalPrice', state.totalPrice.toString());
          return false;
        } else {
          return true;
        }
      });
    },
    changeCount: (state, action: { payload: { id: number; count: number } }) => {
      state.items = state.items.map(e => {
        if (e.id === action.payload.id) {
          e.count += action.payload.count;
          state.totalPrice += e.product.discont_price
            ? e.product.discont_price * action.payload.count
            : e.product.price * action.payload.count;
        }
        localStorage.setItem(`${action.payload.id}`, JSON.stringify(e));
        localStorage.setItem('totalPrice', state.totalPrice.toString());
        return e;
      });
      state.items = state.items.filter(e => {
        if (e.count === 0) {
          localStorage.removeItem(e.id.toString());
          return false;
        } else {
          return true;
        }
      });
    },
  },
});

export const { addToCart, removeFromCart, changeCount } = cartSlice.actions;

export default cartSlice.reducer;
