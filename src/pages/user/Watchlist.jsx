import { Link } from 'react-router-dom';
import { Star, Search, Trash2 } from 'lucide-react';
import { toast } from 'react-toastify';
import PageHeader from '../../components/common/PageHeader.jsx';
import DemoNotice from '../../components/common/DemoNotice.jsx';
import ChangeBadge from '../../components/common/ChangeBadge.jsx';
import { mockWatchlist, formatCurrency } from '../../utils/mockData.js';

export default function Watchlist() {
  const remove = (symbol) => toast.info(`${symbol} will be removed when watchlist storage is connected.`);
  return <div className="tx-fade-in"><PageHeader title="Watchlist" subtitle="Keep an eye on the stocks that matter to you." actions={<button className="btn btn-primary d-flex align-items-center gap-2"><Search size={16} /> Browse Markets</button>} /><DemoNotice /><div className="card p-3 p-md-4"><div className="d-flex align-items-center gap-2 mb-4"><Star size={20} style={{ color: 'var(--tx-warning)' }} fill="var(--tx-warning)" /><h5 className="fw-semibold mb-0" style={{ color: 'var(--tx-text)' }}>My Watchlist</h5><span className="tx-badge-neutral">{mockWatchlist.length} stocks</span></div><div className="table-responsive"><table className="table table-hover align-middle"><thead><tr><th>Stock</th><th>Price</th><th>Change</th><th>Change %</th><th>Signal</th><th></th></tr></thead><tbody>{mockWatchlist.map((stock) => <tr key={stock.symbol}><td><Link to={`/stocks/${stock.symbol}`}><span className="fw-bold" style={{ color: 'var(--tx-text)' }}>{stock.symbol}</span><span className="d-block" style={{ color: 'var(--tx-text-muted)', fontSize: '0.75rem' }}>{stock.company}</span></Link></td><td className="fw-semibold" style={{ color: 'var(--tx-text)' }}>{formatCurrency(stock.price)}</td><td><ChangeBadge value={stock.change} /></td><td><ChangeBadge value={stock.change} percent={stock.changePercent} /></td><td><span className={stock.change > 0 ? 'tx-badge-up' : 'tx-badge-down'}>{stock.change > 0 ? 'Bullish' : 'Bearish'}</span></td><td className="text-end"><button className="btn btn-sm btn-outline-danger" onClick={() => remove(stock.symbol)} aria-label={`Remove ${stock.symbol}`}><Trash2 size={15} /></button></td></tr>)}</tbody></table></div></div></div>;
}
