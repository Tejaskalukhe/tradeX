import { Link, useLocation } from 'react-router-dom';
import {
  TrendingUp,
  LayoutDashboard,
  BarChart3,
  Briefcase,
  Star,
  ArrowLeftRight,
  PieChart,
  User,
  Users,
  Boxes,
  Receipt,
} from 'lucide-react';

const userNavItems = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/markets', label: 'Markets', icon: BarChart3 },
  { to: '/portfolio', label: 'Portfolio', icon: Briefcase },
  { to: '/watchlist', label: 'Watchlist', icon: Star },
  { to: '/transactions', label: 'Transactions', icon: ArrowLeftRight },
  { to: '/analytics', label: 'Analytics', icon: PieChart },
  { to: '/profile', label: 'Profile', icon: User },
];

const adminNavItems = [
  { to: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/admin/users', label: 'Users', icon: Users },
  { to: '/admin/stocks', label: 'Stocks', icon: Boxes },
  { to: '/admin/transactions', label: 'Transactions', icon: Receipt },
];

export default function Sidebar({ role = 'user' }) {
  const location = useLocation();
  const items = role === 'admin' ? adminNavItems : userNavItems;

  return (
    <div className="d-flex flex-column h-100">
      {/* Logo */}
      <Link
        to="/"
        className="d-flex align-items-center gap-2 px-3 py-3"
        style={{ borderBottom: '1px solid var(--tx-border)' }}
      >
        <TrendingUp size={26} color="var(--tx-primary)" />
        <span className="fw-bold fs-5" style={{ color: 'var(--tx-text)' }}>
          Trade<span style={{ color: 'var(--tx-primary)' }}>X</span>
        </span>
      </Link>

      {/* Nav items */}
      <div className="flex-grow-1 p-3 tx-scroll-thin" style={{ overflowY: 'auto' }}>
        <p
          className="text-uppercase mb-2 px-2"
          style={{
            color: 'var(--tx-text-muted)',
            fontSize: '0.7rem',
            letterSpacing: '0.08em',
            fontWeight: 600,
          }}
        >
          {role === 'admin' ? 'Administration' : 'Menu'}
        </p>
        <div className="d-flex flex-column gap-1">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`tx-nav-link ${isActive ? 'active' : ''}`}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Bottom section */}
      <div className="p-3" style={{ borderTop: '1px solid var(--tx-border)' }}>
        <div
          className="p-3 rounded-3"
          style={{ backgroundColor: 'var(--tx-surface-2)' }}
        >
          <p className="mb-1 fw-semibold" style={{ color: 'var(--tx-text)', fontSize: '0.85rem' }}>
            Paper Trading Mode
          </p>
          <p className="mb-0" style={{ color: 'var(--tx-text-muted)', fontSize: '0.75rem' }}>
            Virtual funds only. No real money.
          </p>
        </div>
      </div>
    </div>
  );
}
