import { Link } from 'react-router-dom';
import { TrendingUp, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      className="pt-5 pb-4"
      style={{
        backgroundColor: '#0d1320',
        borderTop: '1px solid var(--tx-border)',
      }}
    >
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <Link to="/" className="d-flex align-items-center gap-2 mb-3">
              <TrendingUp size={28} color="var(--tx-primary)" />
              <span className="fw-bold fs-4" style={{ color: 'var(--tx-text)' }}>
                Trade<span style={{ color: 'var(--tx-primary)' }}>X</span>
              </span>
            </Link>
            <p style={{ color: 'var(--tx-text-muted)', maxWidth: 320 }}>
              A paper-trading platform that lets you practice stock trading with
              virtual funds using real market data. Learn without risk.
            </p>
          </div>
          <div className="col-lg-2 col-md-6">
            <h6 className="text-uppercase fw-bold mb-3" style={{ color: 'var(--tx-text)', fontSize: '0.8rem', letterSpacing: '0.05em' }}>
              Platform
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li><Link to="/markets" style={{ color: 'var(--tx-text-muted)' }}>Markets</Link></li>
              <li><Link to="/dashboard" style={{ color: 'var(--tx-text-muted)' }}>Dashboard</Link></li>
              <li><Link to="/portfolio" style={{ color: 'var(--tx-text-muted)' }}>Portfolio</Link></li>
              <li><Link to="/watchlist" style={{ color: 'var(--tx-text-muted)' }}>Watchlist</Link></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6">
            <h6 className="text-uppercase fw-bold mb-3" style={{ color: 'var(--tx-text)', fontSize: '0.8rem', letterSpacing: '0.05em' }}>
              Company
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li><Link to="/about" style={{ color: 'var(--tx-text-muted)' }}>About Us</Link></li>
              <li><Link to="/register" style={{ color: 'var(--tx-text-muted)' }}>Sign Up</Link></li>
              <li><Link to="/login" style={{ color: 'var(--tx-text-muted)' }}>Sign In</Link></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6">
            <h6 className="text-uppercase fw-bold mb-3" style={{ color: 'var(--tx-text)', fontSize: '0.8rem', letterSpacing: '0.05em' }}>
              Connect
            </h6>
            <div className="d-flex gap-3">
              <a href="#" style={{ color: 'var(--tx-text-muted)' }}><Twitter size={20} /></a>
              <a href="#" style={{ color: 'var(--tx-text-muted)' }}><Github size={20} /></a>
              <a href="#" style={{ color: 'var(--tx-text-muted)' }}><Linkedin size={20} /></a>
            </div>
          </div>
        </div>
        <hr style={{ borderColor: 'var(--tx-border)' }} className="my-4" />
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <p className="mb-0" style={{ color: 'var(--tx-text-muted)', fontSize: '0.85rem' }}>
            &copy; 2026 TradeX. Paper trading simulation platform. No real money is involved.
          </p>
          <p className="mb-0" style={{ color: 'var(--tx-text-muted)', fontSize: '0.85rem' }}>
            Built for educational purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}
