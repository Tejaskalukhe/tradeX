import { createSlice } from '@reduxjs/toolkit';
import { logout } from './authSlice.js';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState,
  reducers: {
    setWatchlist: (state, action) => {
      state.items = action.payload;
    },
    addToWatchlist: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromWatchlist: (state, action) => {
      state.items = state.items.filter((item) => item.symbol !== action.payload);
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

export const {
  setWatchlist,
  addToWatchlist,
  removeFromWatchlist,
  setLoading,
  setError,
} = watchlistSlice.actions;

export default watchlistSlice.reducer;
