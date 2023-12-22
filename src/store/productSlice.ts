import axios from 'axios';
import { IProduct } from '../types/app';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

type ProductState = {
  products: IProduct[];
};

export const fetchProduct = createAsyncThunk<
  IProduct[],
  { id: number | string },
  { rejectValue: string }
>('products/fetchProduct', async function ({ id }, { rejectWithValue }) {
  const response = await axios.get<IProduct[]>(`http://localhost:3333/products/${id}`);

  if (response.status !== 200) {
    return rejectWithValue('error');
  }

  const data = await response.data;

  data.map(e => {
    e.isShown = true;
  });
  return data;
});

const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    filter2: (
      state,
      action: { payload: { filtered: boolean; from: number; to: number } },
    ) => {
      const data = state.products.map(e => {
        if (e.price >= action.payload.from && e.price <= action.payload.to) {
          if (action.payload.filtered) {
            if (e.discont_price) {
              e.isShown = true;
            } else {
              e.isShown = false;
            }
          } else {
            e.isShown = true;
          }
        } else {
          e.isShown = false;
        }
        return e;
      });
      state.products = data;
    },
    sort2: (state, action: { payload: { sort: string } }) => {
      let sortFn = (a: IProduct, b: IProduct) => {
        return a.id - b.id;
      };

      switch (action.payload.sort) {
        case 'asc':
          sortFn = (a: IProduct, b: IProduct) => {
            return a.price - b.price;
          };
          break;
        case 'desc':
          sortFn = (a: IProduct, b: IProduct) => {
            return b.price - a.price;
          };
          break;
        default:
          break;
      }

      const data = state.products.sort((a, b) => {
        return sortFn(a, b);
      });
      state.products = data;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProduct.fulfilled, (state, action) => {
        const data = action.payload;

        data.map(e => {
          e.isShown = true;
        });

        state.products = data;
      })
      .addCase(fetchProduct.rejected, state => {
        state.products = [];
      });
  },
});

export const { filter2, sort2 } = productSlice.actions;

export default productSlice.reducer;
