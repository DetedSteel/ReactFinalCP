import axios from 'axios';
import { ICategory, IProduct } from '../types/app';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

type ProductsState = {
  category: ICategory;
  data: IProduct[];
};

export const fetchProducts = createAsyncThunk<
  ProductsState,
  { id: number },
  { rejectValue: string }
>('products/fetchProducts', async function (arg, { rejectWithValue }) {
  const response = await axios.get<ProductsState>(`http://localhost:3333/categories/${arg.id}`);

  if (response.status !== 200) {
    return rejectWithValue('error');
  }
  const data = await response.data;
  return data;
});

const initialState: ProductsState = {
  category: {},
  data: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    filter: (state, action: { payload: { filtered: boolean; from: number; to: number } }) => {
      const data = state.data.map(e => {
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
      state.data = data;
    },
    sort: (state, action: { payload: { sort: string } }) => {
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

      const data = state.data.sort((a, b) => {
        return sortFn(a, b);
      });
      state.data = data;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        const { data } = action.payload;

        data.map(e => {
          e.isShown = true;
        });

        state.data = data;
        state.category = action.payload.category;
      })
      .addCase(fetchProducts.rejected, state => {
        state.data = [];
      });
  },
});

export const { filter, sort } = productsSlice.actions;

export default productsSlice.reducer;
