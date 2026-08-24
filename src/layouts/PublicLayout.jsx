import { Outlet } from 'react-router-dom';
import PublicNavbar from '../components/layout/PublicNavbar.jsx';
import Footer from '../components/layout/Footer.jsx';

export default function PublicLayout() {
  return (
    <div className="d-flex flex-column min-vh-100 tx-hero-bg">
      <PublicNavbar />
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
