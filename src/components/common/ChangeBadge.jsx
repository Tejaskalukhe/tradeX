import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

export default function ChangeBadge({ value, percent, size = 'sm' }) {
  const isUp = value > 0;
  const isDown = value < 0;
  const isFlat = value === 0;

  const Icon = isUp ? TrendingUp : isDown ? TrendingDown : Minus;
  const cls = isUp ? 'tx-badge-up' : isDown ? 'tx-badge-down' : 'tx-badge-neutral';

  const text = percent !== undefined ? `${isUp ? '+' : ''}${percent.toFixed(2)}%` : `${isUp ? '+' : ''}${value.toFixed(2)}`;

  return (
    <span className={`d-inline-flex align-items-center gap-1 ${cls}`} style={{ fontSize: size === 'sm' ? '0.8rem' : '0.95rem' }}>
      <Icon size={size === 'sm' ? 12 : 16} />
      {text}
    </span>
  );
}
