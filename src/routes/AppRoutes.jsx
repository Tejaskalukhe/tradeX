import { Routes, Route } from 'react-router-dom';
import PublicLayout from '../layouts/PublicLayout.jsx';
import DashboardLayout from '../layouts/DashboardLayout.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';

// Public pages
import Home from '../pages/public/Home.jsx';
import About from '../pages/public/About.jsx';
import Login from '../pages/public/Login.jsx';
import Register from '../pages/public/Register.jsx';

// User pages
import Dashboard from '../pages/user/Dashboard.jsx';
import Markets from '../pages/user/Markets.jsx';
import StockDetails from '../pages/user/StockDetails.jsx';
import Portfolio from '../pages/user/Portfolio.jsx';
import Watchlist from '../pages/user/Watchlist.jsx';
import Transactions from '../pages/user/Transactions.jsx';
import Analytics from '../pages/user/Analytics.jsx';
import Profile from '../pages/user/Profile.jsx';

// Admin pages
import AdminDashboard from '../pages/admin/AdminDashboard.jsx';
import AdminUsers from '../pages/admin/AdminUsers.jsx';
import AdminStocks from '../pages/admin/AdminStocks.jsx';
import AdminTransactions from '../pages/admin/AdminTransactions.jsx';

// Utility pages
import Unauthorized from '../pages/Unauthorized.jsx';
import NotFound from '../pages/NotFound.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public routes */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* User routes */}
      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/markets" element={<Markets />} />
        <Route path="/stocks/:symbol" element={<StockDetails />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/profile" element={<Profile />} />
      </Route>

      {/* Admin routes */}
      <Route
        element={
          <ProtectedRoute adminOnly>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/stocks" element={<AdminStocks />} />
        <Route path="/admin/transactions" element={<AdminTransactions />} />
      </Route>

      {/* Utility routes */}
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
