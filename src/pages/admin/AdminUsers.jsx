import { useState } from 'react';
import { Search, UserPlus, MoreVertical, Shield, User } from 'lucide-react';
import PageHeader from '../../components/common/PageHeader.jsx';
import DemoNotice from '../../components/common/DemoNotice.jsx';

const mockUsers = [
  { id: 1, name: 'Alex Thompson', email: 'alex.t@example.com', role: 'user', status: 'active', trades: 42, joined: '2026-07-15' },
  { id: 2, name: 'Sarah Kim', email: 'sarah.k@example.com', role: 'user', status: 'active', trades: 28, joined: '2026-07-20' },
  { id: 3, name: 'Mike Johnson', email: 'mike.j@example.com', role: 'user', status: 'active', trades: 15, joined: '2026-08-01' },
  { id: 4, name: 'Emma Wilson', email: 'emma.w@example.com', role: 'user', status: 'inactive', trades: 8, joined: '2026-08-05' },
  { id: 5, name: 'John Davis', email: 'john.d@example.com', role: 'admin', status: 'active', trades: 0, joined: '2026-06-01' },
  { id: 6, name: 'Lisa Chen', email: 'lisa.c@example.com', role: 'user', status: 'active', trades: 56, joined: '2026-06-10' },
];

export default function AdminUsers() {
  const [query, setQuery] = useState('');
  const filtered = mockUsers.filter((u) => u.name.toLowerCase().includes(query.toLowerCase()) || u.email.toLowerCase().includes(query.toLowerCase()));
  return (
    <div className="tx-fade-in">
      <PageHeader title="User Management" subtitle="View and manage platform users." actions={<button className="btn btn-primary d-flex align-items-center gap-2"><UserPlus size={16} /> Add User</button>} />
      <DemoNotice>Admin user management is a UI placeholder.</DemoNotice>
      <div className="card p-3 p-md-4">
        <div className="position-relative mb-4" style={{ maxWidth: 360 }}>
          <Search size={17} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--tx-text-muted)' }} />
          <input className="form-control ps-5" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search users by name or email" />
        </div>
        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead>
              <tr>
                <th>User</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Trades</th>
                <th>Joined</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((u) => (
                <tr key={u.id}>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <div className="d-flex align-items-center justify-content-center rounded-circle" style={{ width: 36, height: 36, backgroundColor: 'var(--tx-surface-2)', color: 'var(--tx-text)', fontSize: '0.7rem', fontWeight: 600 }}>
                        {u.name.split(' ').map((n) => n[0]).join('')}
                      </div>
                      <span className="fw-semibold" style={{ color: 'var(--tx-text)' }}>{u.name}</span>
                    </div>
                  </td>
                  <td style={{ color: 'var(--tx-text-muted)' }}>{u.email}</td>
                  <td>
                    {u.role === 'admin' ? (
                      <span className="tx-badge-up d-inline-flex align-items-center gap-1"><Shield size={12} /> Admin</span>
                    ) : (
                      <span className="tx-badge-neutral d-inline-flex align-items-center gap-1"><User size={12} /> User</span>
                    )}
                  </td>
                  <td><span className={u.status === 'active' ? 'tx-badge-up' : 'tx-badge-down'}>{u.status}</span></td>
                  <td style={{ color: 'var(--tx-text)' }}>{u.trades}</td>
                  <td style={{ color: 'var(--tx-text-muted)', fontSize: '0.82rem' }}>{u.joined}</td>
                  <td className="text-end"><button className="btn btn-sm p-1" style={{ color: 'var(--tx-text-muted)' }}><MoreVertical size={16} /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
