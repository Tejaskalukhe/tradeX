import { Link } from 'react-router-dom';
import { ShieldAlert, ArrowLeft, Home } from 'lucide-react';

export default function Unauthorized() {
  return <div className="d-flex align-items-center justify-content-center min-vh-100 tx-hero-bg"><div className="text-center px-4"><div className="d-flex align-items-center justify-content-center rounded-circle mx-auto mb-4" style={{ width: 80, height: 80, backgroundColor: 'rgba(239, 68, 68, 0.12)' }}><ShieldAlert size={40} style={{ color: 'var(--tx-danger)' }} /></div><h1 className="fw-bold mb-2" style={{ color: 'var(--tx-text)', fontSize: '2.5rem' }}>Access Denied</h1><p className="mb-4" style={{ color: 'var(--tx-text-muted)', maxWidth: 400 }}>You don&apos;t have permission to access this page.</p><div className="d-flex justify-content-center gap-2"><Link to="/dashboard" className="btn btn-primary d-inline-flex align-items-center gap-2"><ArrowLeft size={17} /> Back to Dashboard</Link><Link to="/" className="btn btn-outline-primary d-inline-flex align-items-center gap-2"><Home size={17} /> Go Home</Link></div></div></div>;
}
