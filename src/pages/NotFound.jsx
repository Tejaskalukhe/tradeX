import { Link } from 'react-router-dom';
import { Compass, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 tx-hero-bg">
      <div className="text-center px-4">
        <div className="d-flex align-items-center justify-content-center rounded-circle mx-auto mb-4" style={{ width: 80, height: 80, backgroundColor: 'rgba(45, 212, 191, 0.12)' }}>
          <Compass size={40} style={{ color: 'var(--tx-primary)' }} />
        </div>
        <h1 className="fw-bold mb-2" style={{ color: 'var(--tx-text)', fontSize: '3rem' }}>404</h1>
        <p className="mb-4" style={{ color: 'var(--tx-text-muted)', maxWidth: 400 }}>
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary d-inline-flex align-items-center gap-2">
          <ArrowLeft size={17} /> Back to Home
        </Link>
      </div>
    </div>
  );
}
