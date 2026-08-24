import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes.jsx';
import { authInitialized, getCurrentUser, logoutUser } from './store/authSlice.js';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('tx_token');
    if (token) {
      dispatch(getCurrentUser());
    } else {
      dispatch(authInitialized());
    }

    const handleExpiredSession = () => {
      dispatch(logoutUser());
      navigate('/login', { replace: true });
    };
    window.addEventListener('tx:auth-expired', handleExpiredSession);
    return () => window.removeEventListener('tx:auth-expired', handleExpiredSession);
  }, [dispatch, navigate]);

  return <AppRoutes />;
}

export default App;
