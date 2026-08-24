import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { Menu, Bell, LogOut, Search } from 'lucide-react';
import { toggleSidebar } from '../../store/uiSlice.js';
import { logoutUser } from '../../store/authSlice.js';

export default function TopNavbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const initials = user?.name?.split(' ').map((part) => part[0]).join('').slice(0, 2).toUpperCase() || 'TU';

  const handleLogout = async () => {
    await dispatch(logoutUser());
    navigate('/login', { replace: true });
  };

  return <div className="tx-topbar d-flex align-items-center justify-content-between px-3 px-md-4 py-2 sticky-top" style={{ height: '60px', zIndex: 900 }}><div className="d-flex align-items-center gap-3"><button className="btn btn-sm p-1 d-md-none" style={{ color: 'var(--tx-text)' }} onClick={() => dispatch(toggleSidebar())} aria-label="Toggle sidebar"><Menu size={22} /></button><div className="position-relative d-none d-md-block"><Search size={16} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--tx-text-muted)' }} /><input type="text" className="form-control form-control-sm ps-4" placeholder="Search stocks..." style={{ width: '240px', backgroundColor: 'var(--tx-surface-2)' }} /></div></div><div className="d-flex align-items-center gap-2 gap-md-3"><button className="btn btn-sm p-1 position-relative" style={{ color: 'var(--tx-text-muted)' }} aria-label="Notifications"><Bell size={20} /><span className="position-absolute top-0 start-100 translate-middle p-1 rounded-circle" style={{ backgroundColor: 'var(--tx-primary)' }}><span className="visually-hidden">New alerts</span></span></button><div className="dropdown"><button className="btn d-flex align-items-center gap-2 px-2 py-1" style={{ color: 'var(--tx-text)' }} data-bs-toggle="dropdown" aria-expanded="false"><div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '34px', height: '34px', backgroundColor: 'var(--tx-primary)', color: '#04201d', fontWeight: 700, fontSize: '0.85rem' }}>{initials}</div><span className="d-none d-md-inline fw-medium" style={{ fontSize: '0.9rem' }}>{user?.name || 'TradeX User'}</span></button><ul className="dropdown-menu dropdown-menu-end"><li><Link className="dropdown-item" to="/profile">My Profile</Link></li><li><Link className="dropdown-item" to="/dashboard">Dashboard</Link></li><li><hr className="dropdown-divider" /></li><li><button className="dropdown-item d-flex align-items-center gap-2" onClick={handleLogout}><LogOut size={16} /> Logout</button></li></ul></div></div></div>;
}
