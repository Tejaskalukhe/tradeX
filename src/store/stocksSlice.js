import { createSlice } from '@reduxjs/toolkit';
import { logout } from './authSlice.js';

const initialState = {
  list: [],
  selectedStock: null,
  loading: false,
  error: null,
};

const stocksSlice = createSlice({
  name: 'stocks',
  initialState,
  reducers: {
    setStocks: (state, action) => {
      state.list = action.payload;
    },
    setSelectedStock: (state, action) => {
      state.selectedStock = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout, () => initialState);
  },
});

export const { setStocks, setSelectedStock, setLoading, setError } =
  stocksSlice.actions;

export default stocksSlice.reducer;
