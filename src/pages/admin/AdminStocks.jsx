import { useState } from 'react';
import { Search, Plus, MoreVertical } from 'lucide-react';
import PageHeader from '../../components/common/PageHeader.jsx';
import DemoNotice from '../../components/common/DemoNotice.jsx';
import ChangeBadge from '../../components/common/ChangeBadge.jsx';
import { mockStocks, formatCurrency, formatVolume } from '../../utils/mockData.js';

export default function AdminStocks() {
  const [query, setQuery] = useState('');
  const filtered = mockStocks.filter((s) => s.symbol.toLowerCase().includes(query.toLowerCase()) || s.company.toLowerCase().includes(query.toLowerCase()));
  return (
    <div className="tx-fade-in">
      <PageHeader title="Stock Management" subtitle="Manage stocks available on the platform." actions={<button className="btn btn-primary d-flex align-items-center gap-2"><Plus size={16} /> Add Stock</button>} />
      <DemoNotice>Admin stock management is a UI placeholder.</DemoNotice>
      <div className="card p-3 p-md-4">
        <div className="d-flex flex-column flex-md-row justify-content-between gap-3 mb-4">
          <div className="position-relative flex-grow-1" style={{ maxWidth: 360 }}>
            <Search size={17} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--tx-text-muted)' }} />
            <input className="form-control ps-5" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search stocks..." />
          </div>
          <span className="tx-badge-neutral">{mockStocks.length} stocks tracked</span>
        </div>
        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Company</th>
                <th>Price</th>
                <th>Change</th>
                <th>Volume</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((s) => (
                <tr key={s.symbol}>
                  <td className="fw-bold" style={{ color: 'var(--tx-text)' }}>{s.symbol}</td>
                  <td style={{ color: 'var(--tx-text-muted)' }}>{s.company}</td>
                  <td style={{ color: 'var(--tx-text)' }}>{formatCurrency(s.price)}</td>
                  <td><ChangeBadge value={s.change} percent={s.changePercent} /></td>
                  <td style={{ color: 'var(--tx-text-muted)' }}>{formatVolume(s.volume)}</td>
                  <td><span className="tx-badge-up">Active</span></td>
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
