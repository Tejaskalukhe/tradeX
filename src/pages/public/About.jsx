import { Link } from 'react-router-dom';
import { ShieldCheck, Target, Users, TrendingUp, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div className="tx-fade-in">
      <section className="py-5">
        <div className="container">
          <div className="text-center py-4 py-lg-5">
            <p className="text-uppercase fw-semibold mb-3" style={{ color: 'var(--tx-primary)', letterSpacing: '0.12em', fontSize: '0.8rem' }}>
              About TradeX
            </p>
            <h1 className="fw-bold mb-3" style={{ color: 'var(--tx-text)', fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
              Learn the Market.<br /><span className="tx-gradient-text">Build Your Confidence.</span>
            </h1>
            <p className="mx-auto" style={{ color: 'var(--tx-text-muted)', maxWidth: 600, fontSize: '1.05rem', lineHeight: 1.7 }}>
              TradeX is an educational paper-trading platform built to help
              aspiring investors practice their skills, test strategies, and
              understand the stock market — without financial risk.
            </p>
          </div>

          <div className="row g-4 py-4">
            {[
              { icon: ShieldCheck, title: 'Risk-Free Learning', desc: 'Every trade uses virtual funds, so you can experiment freely without worrying about losing real money.' },
              { icon: Target, title: 'Practice With Purpose', desc: 'Set goals, test strategies, and use your results to build a disciplined approach to investing.' },
              { icon: Users, title: 'Built for Everyone', desc: 'Whether you are taking your first steps or refining your edge, TradeX grows with you.' },
              { icon: TrendingUp, title: 'Data-Driven Decisions', desc: 'Use market data, watchlists, and analytics to replace guesswork with informed decisions.' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div className="col-lg-3 col-md-6" key={i}>
                  <div className="card h-100 p-4 tx-card-hover">
                    <div className="d-flex align-items-center justify-content-center rounded-3 mb-3" style={{ width: 48, height: 48, backgroundColor: 'rgba(45, 212, 191, 0.1)' }}>
                      <Icon size={23} style={{ color: 'var(--tx-primary)' }} />
                    </div>
                    <h5 className="fw-semibold mb-2" style={{ color: 'var(--tx-text)' }}>{item.title}</h5>
                    <p className="mb-0" style={{ color: 'var(--tx-text-muted)', fontSize: '0.88rem', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="row align-items-center g-5 py-5 mt-2">
            <div className="col-lg-6">
              <h2 className="fw-bold mb-3" style={{ color: 'var(--tx-text)', fontSize: '2rem' }}>A safer way to learn trading</h2>
              <p style={{ color: 'var(--tx-text-muted)', lineHeight: 1.7 }}>
                We believe the best way to learn is by doing. But when it comes
                to the stock market, learning through real mistakes can be
                costly. TradeX gives you the complete experience of researching,
                buying, selling, and tracking stocks — with a safety net.
              </p>
              <p style={{ color: 'var(--tx-text-muted)', lineHeight: 1.7 }}>
                Our platform is designed as a simulation for educational and
                portfolio demonstration purposes. It is not a brokerage and it
                never executes real stock orders or handles real money.
              </p>
              <Link to="/register" className="btn btn-primary mt-2 d-inline-flex align-items-center gap-2">Start Learning <ArrowRight size={17} /></Link>
            </div>
            <div className="col-lg-6">
              <div className="card p-4" style={{ background: 'linear-gradient(135deg, rgba(45, 212, 191, 0.08), rgba(59, 130, 246, 0.05))' }}>
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="d-flex align-items-center justify-content-center rounded-circle" style={{ width: 48, height: 48, backgroundColor: 'var(--tx-primary)' }}>
                    <TrendingUp size={24} style={{ color: '#04201d' }} />
                  </div>
                  <div>
                    <p className="mb-0 fw-bold" style={{ color: 'var(--tx-text)' }}>TradeX Mission</p>
                    <p className="mb-0" style={{ color: 'var(--tx-text-muted)', fontSize: '0.82rem' }}>Education before execution</p>
                  </div>
                </div>
                <blockquote className="mb-0" style={{ color: 'var(--tx-text)', fontSize: '1.15rem', lineHeight: 1.6 }}>
                  “Our goal is simple: make the stock market less intimidating and give everyone a safe place to start.”
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
