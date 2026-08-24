export default function DemoNotice({ children = 'This page uses placeholder data. Backend integration will be added in a later update.' }) {
  return (
    <div
      className="d-flex align-items-center gap-2 px-3 py-2 rounded-3 mb-4"
      style={{
        backgroundColor: 'rgba(245, 158, 11, 0.1)',
        border: '1px solid rgba(245, 158, 11, 0.25)',
      }}
    >
      <span
        style={{
          color: 'var(--tx-warning)',
          fontWeight: 600,
          fontSize: '0.8rem',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}
      >
        Demo
      </span>
      <span style={{ color: 'var(--tx-text-muted)', fontSize: '0.85rem' }}>
        {children}
      </span>
    </div>
  );
}
