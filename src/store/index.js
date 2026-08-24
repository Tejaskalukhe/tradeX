import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice.js';
import stocksReducer from './stocksSlice.js';
import portfolioReducer from './portfolioSlice.js';
import watchlistReducer from './watchlistSlice.js';
import transactionsReducer from './transactionsSlice.js';
import uiReducer from './uiSlice.js';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    stocks: stocksReducer,
    portfolio: portfolioReducer,
    watchlist: watchlistReducer,
    transactions: transactionsReducer,
    ui: uiReducer,
  },
});
