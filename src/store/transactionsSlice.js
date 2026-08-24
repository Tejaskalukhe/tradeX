import { createSlice } from '@reduxjs/toolkit';
import { logout } from './authSlice.js';

const initialState = {
  list: [],
  loading: false,
  error: null,
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    setTransactions: (state, action) => {
      state.list = action.payload;
    },
    addTransaction: (state, action) => {
      state.list.unshift(action.payload);
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

export const { setTransactions, addTransaction, setLoading, setError } =
  transactionsSlice.actions;

export default transactionsSlice.reducer;
