import { Link } from 'react-router-dom';
import { TrendingUp } from 'lucide-react';

export default function PublicNavbar() {
  return (
    <nav
      className="navbar navbar-expand-lg sticky-top"
      style={{
        backgroundColor: 'rgba(10, 14, 23, 0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--tx-border)',
      }}
    >
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <TrendingUp size={28} color="var(--tx-primary)" />
          <span className="fw-bold fs-4" style={{ color: 'var(--tx-text)' }}>
            Trade<span style={{ color: 'var(--tx-primary)' }}>X</span>
          </span>
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#publicNav"
          aria-controls="publicNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
        </button>
        <div className="collapse navbar-collapse" id="publicNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ color: 'var(--tx-text-muted)' }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" style={{ color: 'var(--tx-text-muted)' }}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login" style={{ color: 'var(--tx-text-muted)' }}>
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="btn btn-primary btn-sm px-3"
                to="/register"
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
