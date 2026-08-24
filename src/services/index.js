import api from './api.js';

export const authService = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
  getCurrentUser: () => api.get('/auth/me'),
  getProfile: () => api.get('/users/profile'),
};

export const stockService = {
  getStocks: (params) => api.get('/stocks', { params }),
  getStock: (symbol) => api.get(`/stocks/${symbol}`),
};

export const portfolioService = {
  getPortfolio: () => api.get('/portfolio'),
  getSummary: () => api.get('/portfolio/summary'),
};

export const transactionService = {
  getTransactions: (params) => api.get('/transactions', { params }),
  buyStock: (data) => api.post('/transactions/buy', data),
  sellStock: (data) => api.post('/transactions/sell', data),
};

export const watchlistService = {
  getWatchlist: () => api.get('/watchlist'),
  addStock: (symbol) => api.post('/watchlist', { symbol }),
  removeStock: (symbol) => api.delete(`/watchlist/${symbol}`),
};

export const adminService = {
  getUsers: () => api.get('/admin/users'),
  getStocks: () => api.get('/admin/stocks'),
  getTransactions: () => api.get('/admin/transactions'),
};
