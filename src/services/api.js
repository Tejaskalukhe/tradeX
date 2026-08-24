import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('tx_token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const status = error.response?.status;
    const isAuthRequest = ['/auth/login', '/auth/register'].some((path) => error.config?.url?.includes(path));
    if (status === 401 && !isAuthRequest) {
      localStorage.removeItem('tx_token');
      window.dispatchEvent(new Event('tx:auth-expired'));
    }

    const normalizedError = new Error(
      error.response?.data?.message || 'The request could not be completed.'
    );
    normalizedError.status = status;
    return Promise.reject(normalizedError);
  }
);

export default api;
