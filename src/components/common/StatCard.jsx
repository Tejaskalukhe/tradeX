export default function StatCard({ title, value, subtitle, icon: Icon, accent = 'primary' }) {
  const accentColors = {
    primary: 'var(--tx-primary)',
    success: 'var(--tx-success)',
    danger: 'var(--tx-danger)',
    warning: 'var(--tx-warning)',
    accent: 'var(--tx-accent)',
  };

  return (
    <div className="tx-stat-card tx-card-hover h-100">
      <div className="d-flex justify-content-between align-items-start mb-2">
        <p
          className="text-uppercase mb-0"
          style={{
            color: 'var(--tx-text-muted)',
            fontSize: '0.72rem',
            letterSpacing: '0.05em',
            fontWeight: 600,
          }}
        >
          {title}
        </p>
        {Icon && (
          <div
            className="d-flex align-items-center justify-content-center rounded-3"
            style={{
              width: '36px',
              height: '36px',
              backgroundColor: `${accentColors[accent]}15`,
            }}
          >
            <Icon size={18} style={{ color: accentColors[accent] }} />
          </div>
        )}
      </div>
      <h3 className="fw-bold mb-1" style={{ color: 'var(--tx-text)', fontSize: '1.5rem' }}>
        {value}
      </h3>
      {subtitle && (
        <p className="mb-0" style={{ color: 'var(--tx-text-muted)', fontSize: '0.82rem' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
