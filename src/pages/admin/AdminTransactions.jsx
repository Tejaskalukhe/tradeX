import { useState } from 'react';
import { Search, Download, ArrowDownRight, ArrowUpRight } from 'lucide-react';
import PageHeader from '../../components/common/PageHeader.jsx';
import DemoNotice from '../../components/common/DemoNotice.jsx';
import { mockTransactions, formatCurrency, formatDate } from '../../utils/mockData.js';

export default function AdminTransactions() {
  const [query, setQuery] = useState('');
  const filtered = mockTransactions.filter((t) => t.symbol.toLowerCase().includes(query.toLowerCase()) || t.type.includes(query.toLowerCase()));
  return (
    <div className="tx-fade-in">
      <PageHeader title="Transaction Management" subtitle="Monitor all platform trading activity." actions={<button className="btn btn-outline-primary d-flex align-items-center gap-2"><Download size={16} /> Export</button>} />
      <DemoNotice>Admin transaction data is simulated for demonstration.</DemoNotice>
      <div className="card p-3 p-md-4">
        <div className="d-flex flex-column flex-md-row justify-content-between gap-3 mb-4">
          <div className="position-relative flex-grow-1" style={{ maxWidth: 360 }}>
            <Search size={17} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--tx-text-muted)' }} />
            <input className="form-control ps-5" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by symbol or type..." />
          </div>
          <span className="tx-badge-neutral">{filtered.length} transactions</span>
        </div>
        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead>
              <tr>
                <th>ID</th>
                <th>Type</th>
                <th>Symbol</th>
                <th>Shares</th>
                <th>Price</th>
                <th>Total</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((tx) => (
                <tr key={tx.id}>
                  <td style={{ color: 'var(--tx-text-muted)', fontSize: '0.82rem' }}>{tx.id}</td>
                  <td>
                    <span className={`d-inline-flex align-items-center gap-1 ${tx.type === 'buy' ? 'tx-badge-up' : 'tx-badge-down'}`}>
                      {tx.type === 'buy' ? <ArrowDownRight size={13} /> : <ArrowUpRight size={13} />}{tx.type.toUpperCase()}
                    </span>
                  </td>
                  <td className="fw-bold" style={{ color: 'var(--tx-text)' }}>{tx.symbol}</td>
                  <td style={{ color: 'var(--tx-text)' }}>{tx.shares}</td>
                  <td style={{ color: 'var(--tx-text)' }}>{formatCurrency(tx.price)}</td>
                  <td className="fw-semibold" style={{ color: 'var(--tx-text)' }}>{formatCurrency(tx.total)}</td>
                  <td style={{ color: 'var(--tx-text-muted)', fontSize: '0.82rem' }}>{formatDate(tx.date)}</td>
                  <td><span className="tx-badge-up">{tx.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
