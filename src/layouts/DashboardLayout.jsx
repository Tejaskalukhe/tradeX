import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Sidebar from '../components/layout/Sidebar.jsx';
import TopNavbar from '../components/layout/TopNavbar.jsx';
import { setSidebar } from '../store/uiSlice.js';

export default function DashboardLayout() {
  const { sidebarOpen } = useSelector((state) => state.ui);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => { dispatch(setSidebar(false)); }, [location.pathname, dispatch]);

  return <div className="d-flex min-vh-100" style={{ backgroundColor: 'var(--tx-bg)' }}><div className="tx-sidebar tx-sidebar-desktop position-fixed top-0 start-0 vh-100" style={{ width: '250px', zIndex: 1000 }}><Sidebar role={user?.role} /></div>{sidebarOpen && <div className="tx-sidebar-overlay position-fixed top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1040 }} onClick={() => dispatch(setSidebar(false))} />}{<div className={`tx-sidebar tx-sidebar-mobile position-fixed top-0 start-0 vh-100 ${sidebarOpen ? 'open' : ''}`} style={{ width: '250px', zIndex: 1050 }}><Sidebar role={user?.role} /></div>}<div className="d-flex flex-column flex-grow-1" style={{ marginLeft: window.innerWidth > 768 ? '250px' : '0' }}><TopNavbar /><main className="p-3 p-md-4 flex-grow-1"><Outlet /></main></div></div>;
}
