import { Users, Boxes, Receipt, DollarSign, TrendingUp, Activity } from 'lucide-react';
import { Line } from 'react-chartjs-2';
import PageHeader from '../../components/common/PageHeader.jsx';
import DemoNotice from '../../components/common/DemoNotice.jsx';
import StatCard from '../../components/common/StatCard.jsx';
import { mockChartData, formatCurrency } from '../../utils/mockData.js';

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false } },
  scales: {
    x: { grid: { display: false }, ticks: { color: '#8b949e' } },
    y: { grid: { color: '#1f2a3a' }, ticks: { color: '#8b949e', callback: (v) => `$${(v / 1000).toFixed(0)}K` } },
  },
};

export default function AdminDashboard() {
  const chartData = {
    labels: mockChartData.portfolio.labels,
    datasets: [{
      data: mockChartData.portfolio.data.map((v) => v * 3),
      borderColor: '#3b82f6',
      backgroundColor: 'rgba(59,130,246,0.08)',
      fill: true,
      tension: 0.4,
      pointRadius: 0,
    }],
  };

  return (
    <div className="tx-fade-in">
      <PageHeader title="Admin Dashboard" subtitle="Platform overview and system metrics." actions={<span className="tx-badge-neutral d-inline-flex align-items-center gap-1"><Activity size={13} /> System operational</span>} />
      <DemoNotice>Admin data is simulated for layout demonstration.</DemoNotice>
      <div className="row g-3 mb-4">
        <div className="col-xl-3 col-sm-6"><StatCard title="Total Users" value="1,248" subtitle="+42 this week" icon={Users} accent="primary" /></div>
        <div className="col-xl-3 col-sm-6"><StatCard title="Tracked Stocks" value="12" subtitle="Across all sectors" icon={Boxes} accent="accent" /></div>
        <div className="col-xl-3 col-sm-6"><StatCard title="Total Transactions" value="8,920" subtitle="+312 today" icon={Receipt} accent="warning" /></div>
        <div className="col-xl-3 col-sm-6"><StatCard title="Platform Volume" value={formatCurrency(4520000)} subtitle="Simulated value" icon={DollarSign} accent="success" /></div>
      </div>
      <div className="row g-4">
        <div className="col-lg-8">
          <div className="card p-4 h-100">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <h5 className="fw-semibold mb-1" style={{ color: 'var(--tx-text)' }}>Platform Activity</h5>
                <p className="mb-0" style={{ color: 'var(--tx-text-muted)', fontSize: '0.8rem' }}>Simulated trading volume over time</p>
              </div>
              <TrendingUp size={20} style={{ color: 'var(--tx-accent)' }} />
            </div>
            <div style={{ height: 280 }}><Line data={chartData} options={chartOptions} /></div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card p-4 h-100">
            <h5 className="fw-semibold mb-3" style={{ color: 'var(--tx-text)' }}>Recent Activity</h5>
            <div className="d-flex flex-column gap-3">
              {[
                { user: 'alex_t', action: 'bought AAPL', time: '2 min ago' },
                { user: 'sarah_k', action: 'registered', time: '15 min ago' },
                { user: 'mike_j', action: 'sold NVDA', time: '32 min ago' },
                { user: 'emma_w', action: 'added to watchlist', time: '1 hr ago' },
                { user: 'john_d', action: 'bought TSLA', time: '2 hr ago' },
              ].map((a, i) => (
                <div key={i} className="d-flex align-items-center gap-2">
                  <div className="d-flex align-items-center justify-content-center rounded-circle" style={{ width: 32, height: 32, backgroundColor: 'var(--tx-surface-2)', color: 'var(--tx-text)', fontSize: '0.7rem', fontWeight: 600 }}>
                    {a.user.slice(0, 2).toUpperCase()}
                  </div>
                  <div className="flex-grow-1">
                    <p className="mb-0" style={{ color: 'var(--tx-text)', fontSize: '0.82rem' }}><span className="fw-semibold">{a.user}</span> {a.action}</p>
                    <p className="mb-0" style={{ color: 'var(--tx-text-muted)', fontSize: '0.72rem' }}>{a.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
