import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authService } from '../services/index.js';

const storedToken = localStorage.getItem('tx_token');

const initialState = {
  user: null,
  token: storedToken,
  isAuthenticated: false,
  role: 'user',
  loading: Boolean(storedToken),
  initialized: false,
  error: null,
};

const getErrorMessage = (error) => error?.message || 'Something went wrong. Please try again.';

export const registerUser = createAsyncThunk('auth/register', async (userData, { rejectWithValue }) => {
  try {
    return await authService.register(userData);
  } catch (error) {
    return rejectWithValue(getErrorMessage(error));
  }
});

export const loginUser = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const response = await authService.login(credentials);
    const { token } = response.data;
    localStorage.setItem('tx_token', token);
    return response;
  } catch (error) {
    localStorage.removeItem('tx_token');
    return rejectWithValue(getErrorMessage(error));
  }
});

export const getCurrentUser = createAsyncThunk('auth/getCurrentUser', async (_, { rejectWithValue }) => {
  try {
    return await authService.getCurrentUser();
  } catch (error) {
    localStorage.removeItem('tx_token');
    return rejectWithValue(getErrorMessage(error));
  }
});

export const logoutUser = createAsyncThunk('auth/logout', async (_, { dispatch }) => {
  localStorage.removeItem('tx_token');
  dispatch(logout());
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authInitialized: (state) => {
      state.initialized = true;
      state.loading = false;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.role = 'user';
      state.loading = false;
      state.initialized = true;
      state.error = null;
    },
    clearAuthError: (state) => {
      state.error = null;
    },
    updateProfile: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const { user, token } = action.payload.data;
        state.user = user;
        state.token = token;
        state.role = user.role;
        state.isAuthenticated = true;
        state.initialized = true;
        state.loading = false;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.initialized = true;
        state.isAuthenticated = false;
        state.error = action.payload;
      })
      .addCase(getCurrentUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        const { user } = action.payload.data;
        state.user = user;
        state.role = user.role;
        state.isAuthenticated = true;
        state.initialized = true;
        state.loading = false;
        state.error = null;
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
        state.role = 'user';
        state.initialized = true;
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { authInitialized, logout, clearAuthError, updateProfile } = authSlice.actions;
export default authSlice.reducer;
