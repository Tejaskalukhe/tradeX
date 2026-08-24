// Placeholder mock data — replaced by backend API calls in later prompts

export const mockStocks = [
  { symbol: 'AAPL', company: 'Apple Inc.', price: 178.45, change: 2.32, changePercent: 1.32, volume: 54200000 },
  { symbol: 'MSFT', company: 'Microsoft Corp.', price: 384.76, change: 3.45, changePercent: 0.91, volume: 23100000 },
  { symbol: 'GOOGL', company: 'Alphabet Inc.', price: 142.89, change: -1.23, changePercent: -0.85, volume: 18700000 },
  { symbol: 'AMZN', company: 'Amazon.com Inc.', price: 156.32, change: 1.87, changePercent: 1.21, volume: 41200000 },
  { symbol: 'TSLA', company: 'Tesla Inc.', price: 248.5, change: -5.42, changePercent: -2.14, volume: 89000000 },
  { symbol: 'NVDA', company: 'NVIDIA Corp.', price: 474.25, change: 12.6, changePercent: 2.73, volume: 45600000 },
  { symbol: 'META', company: 'Meta Platforms', price: 352.95, change: 4.12, changePercent: 1.18, volume: 19800000 },
  { symbol: 'NFLX', company: 'Netflix Inc.', price: 463.7, change: -2.89, changePercent: -0.62, volume: 12300000 },
  { symbol: 'AMD', company: 'Advanced Micro Devices', price: 124.56, change: 3.21, changePercent: 2.64, volume: 52100000 },
  { symbol: 'INTC', company: 'Intel Corp.', price: 43.21, change: -0.78, changePercent: -1.77, volume: 32400000 },
  { symbol: 'JPM', company: 'JPMorgan Chase', price: 167.89, change: 1.45, changePercent: 0.87, volume: 15600000 },
  { symbol: 'V', company: 'Visa Inc.', price: 258.34, change: 0.89, changePercent: 0.35, volume: 9800000 },
];

export const mockPortfolioSummary = {
  totalValue: 125430.75,
  availableCash: 45230.5,
  totalInvested: 80200.25,
  totalPnl: 15230.5,
  totalPnlPercent: 18.96,
};

export const mockHoldings = [
  { symbol: 'AAPL', company: 'Apple Inc.', shares: 50, avgPrice: 165.2, currentPrice: 178.45, value: 8922.5, pnl: 662.5, pnlPercent: 8.02 },
  { symbol: 'MSFT', company: 'Microsoft Corp.', shares: 30, avgPrice: 352.1, currentPrice: 384.76, value: 11542.8, pnl: 979.8, pnlPercent: 9.28 },
  { symbol: 'NVDA', company: 'NVIDIA Corp.', shares: 80, avgPrice: 410.5, currentPrice: 474.25, value: 37940, pnl: 5100, pnlPercent: 15.54 },
  { symbol: 'TSLA', company: 'Tesla Inc.', shares: 40, avgPrice: 260.0, currentPrice: 248.5, value: 9940, pnl: -460, pnlPercent: -4.42 },
];

export const mockTransactions = [
  { id: 'tx001', type: 'buy', symbol: 'AAPL', shares: 20, price: 165.2, total: 3304.0, date: '2026-08-20T10:30:00Z', status: 'completed' },
  { id: 'tx002', type: 'buy', symbol: 'NVDA', shares: 40, price: 410.5, total: 16420.0, date: '2026-08-18T14:15:00Z', status: 'completed' },
  { id: 'tx003', type: 'sell', symbol: 'GOOGL', shares: 15, price: 145.2, total: 2178.0, date: '2026-08-15T09:45:00Z', status: 'completed' },
  { id: 'tx004', type: 'buy', symbol: 'MSFT', shares: 30, price: 352.1, total: 10563.0, date: '2026-08-12T11:20:00Z', status: 'completed' },
  { id: 'tx005', type: 'buy', symbol: 'TSLA', shares: 40, price: 260.0, total: 10400.0, date: '2026-08-10T13:00:00Z', status: 'completed' },
  { id: 'tx006', type: 'sell', symbol: 'AMD', shares: 25, price: 118.5, total: 2962.5, date: '2026-08-08T15:30:00Z', status: 'completed' },
];

export const mockWatchlist = [
  { symbol: 'AAPL', company: 'Apple Inc.', price: 178.45, change: 2.32, changePercent: 1.32 },
  { symbol: 'NVDA', company: 'NVIDIA Corp.', price: 474.25, change: 12.6, changePercent: 2.73 },
  { symbol: 'META', company: 'Meta Platforms', price: 352.95, change: 4.12, changePercent: 1.18 },
  { symbol: 'NFLX', company: 'Netflix Inc.', price: 463.7, change: -2.89, changePercent: -0.62 },
];

export const mockChartData = {
  portfolio: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    data: [95000, 98200, 101500, 99800, 105000, 112000, 118500, 125430],
  },
  stock: {
    labels: ['9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00'],
    data: [174.2, 175.1, 176.5, 175.8, 177.2, 176.9, 178.1, 177.5, 178.8, 179.2, 178.9, 178.45, 178.6, 178.45],
  },
};

export const formatCurrency = (value) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(value);

export const formatVolume = (vol) => {
  if (vol >= 1e9) return (vol / 1e9).toFixed(2) + 'B';
  if (vol >= 1e6) return (vol / 1e6).toFixed(2) + 'M';
  if (vol >= 1e3) return (vol / 1e3).toFixed(2) + 'K';
  return vol.toString();
};

export const formatDate = (dateStr) => {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};
