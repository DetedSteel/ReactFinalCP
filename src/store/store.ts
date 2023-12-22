import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './categoriesSlice';
import productsSlice from './productsSlice';
import productSlice from './productSlice';
import shopingCartSlice from './shopingCartSlice';

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    products: productsSlice,
    product: productSlice,
    shopingCart: shopingCartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
