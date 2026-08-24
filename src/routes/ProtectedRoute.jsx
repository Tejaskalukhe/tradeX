import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function RouteLoading() {
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100" style={{ backgroundColor: 'var(--tx-bg)' }}>
      <div className="spinner-border" style={{ color: 'var(--tx-primary)' }} role="status">
        <span className="visually-hidden">Checking session</span>
      </div>
    </div>
  );
}

export default function ProtectedRoute({ children, adminOnly = false }) {
  const { isAuthenticated, role, initialized } = useSelector((state) => state.auth);
  const location = useLocation();

  if (!initialized) return <RouteLoading />;
  if (!isAuthenticated) return <Navigate to="/login" replace state={{ from: location }} />;
  if (adminOnly && role !== 'admin') return <Navigate to="/unauthorized" replace />;

  return children;
}
