import axios from 'axios';
import { ICategory } from '../types/app';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

type CategoriesState = {
  list: ICategory[];
};

export const fetchCategories = createAsyncThunk<ICategory[], undefined, { rejectValue: string }>(
  'categories/fetchCategories',
  async function (_, { rejectWithValue }) {
    const response = await axios.get<ICategory[]>('http://localhost:3333/categories/all');

    if (response.status !== 200) {
      return rejectWithValue('error');
    }

    const data = await response.data;

    return data;
  },
);

const initialState: CategoriesState = {
  list: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchCategories.fulfilled, (state, action) => {
        state.list = action.payload;
      })
    .addCase(fetchCategories.rejected, (state) => {
        state.list = [];
      });
  },
});

export default categoriesSlice.reducer;
