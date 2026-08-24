import { createSlice } from '@reduxjs/toolkit';
import { logout } from './authSlice.js';

const initialState = {
  holdings: [],
  summary: {
    totalValue: 0,
    availableCash: 0,
    totalInvested: 0,
    totalPnl: 0,
  },
  loading: false,
  error: null,
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    setHoldings: (state, action) => {
      state.holdings = action.payload;
    },
    setSummary: (state, action) => {
      state.summary = action.payload;
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

export const { setHoldings, setSummary, setLoading, setError } =
  portfolioSlice.actions;

export default portfolioSlice.reducer;
