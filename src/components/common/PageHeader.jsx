export default function PageHeader({ title, subtitle, actions }) {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
      <div>
        <h1 className="fw-bold mb-1" style={{ color: 'var(--tx-text)', fontSize: '1.75rem' }}>
          {title}
        </h1>
        {subtitle && (
          <p className="mb-0" style={{ color: 'var(--tx-text-muted)', fontSize: '0.9rem' }}>
            {subtitle}
          </p>
        )}
      </div>
      {actions && <div className="d-flex align-items-center gap-2">{actions}</div>}
    </div>
  );
}
