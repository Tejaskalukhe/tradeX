import { createSlice } from '@reduxjs/toolkit';
import { logout } from './authSlice.js';

const initialState = {
  sidebarOpen: false,
  theme: 'dark',
  notifications: [],
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    setSidebar: (state, action) => {
      state.sidebarOpen = action.payload;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
    },
    addNotification: (state, action) => {
      state.notifications.push(action.payload);
    },
    clearNotifications: (state) => {
      state.notifications = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout, () => initialState);
  },
});

export const {
  toggleSidebar,
  setSidebar,
  toggleTheme,
  addNotification,
  clearNotifications,
} = uiSlice.actions;

export default uiSlice.reducer;
