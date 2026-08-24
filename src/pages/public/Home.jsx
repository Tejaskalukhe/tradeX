import { Link } from 'react-router-dom';
import {
  TrendingUp,
  UserPlus,
  Wallet,
  Search,
  ArrowRightLeft,
  LineChart,
  BarChart3,
  Briefcase,
  Star,
  History,
  PieChart,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';

const steps = [
  { icon: UserPlus, title: 'Create Account', desc: 'Sign up for free and get instant access to the trading platform.' },
  { icon: Wallet, title: 'Get Virtual Funds', desc: 'Start with $100,000 in virtual money to practice trading strategies.' },
  { icon: Search, title: 'Analyze Stocks', desc: 'Browse real market data, study charts, and research companies.' },
  { icon: ArrowRightLeft, title: 'Buy & Sell', desc: 'Execute paper trades with a single click — no real money involved.' },
  { icon: LineChart, title: 'Track Performance', desc: 'Monitor your portfolio growth and refine your strategy over time.' },
];

const features = [
  { icon: BarChart3, title: 'Paper Trading', desc: 'Practice trading with virtual funds in a risk-free environment.' },
  { icon: TrendingUp, title: 'Market Data', desc: 'Access real-time stock prices and market movements.' },
  { icon: Briefcase, title: 'Portfolio Tracking', desc: 'Monitor your holdings, gains, and losses in one place.' },
  { icon: Star, title: 'Watchlists', desc: 'Build personalized watchlists to track stocks you care about.' },
  { icon: PieChart, title: 'Performance Analytics', desc: 'Visualize your trading performance with detailed charts.' },
  { icon: History, title: 'Transaction History', desc: 'Review every trade you have made with a complete audit trail.' },
];

export default function Home() {
  return (
    <div className="tx-fade-in">
      {/* Hero Section */}
      <section className="py-5 py-lg-6">
        <div className="container">
          <div className="row align-items-center g-5 min-vh-75">
            <div className="col-lg-6 text-center text-lg-start">
              <div
                className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-4"
                style={{
                  backgroundColor: 'rgba(45, 212, 191, 0.1)',
                  border: '1px solid rgba(45, 212, 191, 0.25)',
                }}
              >
                <ShieldCheck size={14} style={{ color: 'var(--tx-primary)' }} />
                <span style={{ color: 'var(--tx-primary)', fontSize: '0.82rem', fontWeight: 600 }}>
                  100% Risk-Free Paper Trading
                </span>
              </div>
              <h1 className="fw-bold mb-3" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1, color: 'var(--tx-text)' }}>
                Trade Smarter.<br />
                <span className="tx-gradient-text">Learn Without Risk.</span>
              </h1>
              <p className="mb-4" style={{ color: 'var(--tx-text-muted)', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: 480 }}>
                TradeX is a paper-trading platform that lets users practice stock
                trading with virtual funds using market data. Build confidence,
                test strategies, and grow — without risking a single dollar.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                <Link to="/register" className="btn btn-primary btn-lg px-4 d-inline-flex align-items-center justify-content-center gap-2">
                  Start Trading <ArrowRight size={18} />
                </Link>
                <Link to="/markets" className="btn btn-outline-primary btn-lg px-4">
                  Explore Markets
                </Link>
              </div>
              <div className="d-flex gap-4 mt-4 justify-content-center justify-content-lg-start">
                <div>
                  <p className="fw-bold mb-0" style={{ color: 'var(--tx-text)', fontSize: '1.5rem' }}>$100K</p>
                  <p style={{ color: 'var(--tx-text-muted)', fontSize: '0.82rem' }}>Virtual Funds</p>
                </div>
                <div>
                  <p className="fw-bold mb-0" style={{ color: 'var(--tx-text)', fontSize: '1.5rem' }}>12+</p>
                  <p style={{ color: 'var(--tx-text-muted)', fontSize: '0.82rem' }}>Stocks Available</p>
                </div>
                <div>
                  <p className="fw-bold mb-0" style={{ color: 'var(--tx-text)', fontSize: '1.5rem' }}>$0</p>
                  <p style={{ color: 'var(--tx-text-muted)', fontSize: '0.82rem' }}>Real Money Risk</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="card p-4 position-relative"
                style={{
                  backgroundColor: 'var(--tx-surface)',
                  border: '1px solid var(--tx-border)',
                  borderRadius: '16px',
                }}
              >
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="d-flex align-items-center gap-2">
                    <TrendingUp size={20} style={{ color: 'var(--tx-primary)' }} />
                    <span className="fw-semibold" style={{ color: 'var(--tx-text)' }}>Portfolio Preview</span>
                  </div>
                  <span className="tx-badge-up">+18.96%</span>
                </div>
                <div className="row g-3 mb-3">
                  <div className="col-6">
                    <div className="p-3 rounded-3" style={{ backgroundColor: 'var(--tx-surface-2)' }}>
                      <p style={{ color: 'var(--tx-text-muted)', fontSize: '0.75rem', marginBottom: 4 }}>Total Value</p>
                      <p className="fw-bold mb-0" style={{ color: 'var(--tx-text)' }}>$125,430.75</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 rounded-3" style={{ backgroundColor: 'var(--tx-surface-2)' }}>
                      <p style={{ color: 'var(--tx-text-muted)', fontSize: '0.75rem', marginBottom: 4 }}>Available Cash</p>
                      <p className="fw-bold mb-0" style={{ color: 'var(--tx-text)' }}>$45,230.50</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column gap-2">
                  {[
                    { sym: 'NVDA', name: 'NVIDIA Corp.', price: '$474.25', chg: '+2.73%', up: true },
                    { sym: 'AAPL', name: 'Apple Inc.', price: '$178.45', chg: '+1.32%', up: true },
                    { sym: 'TSLA', name: 'Tesla Inc.', price: '$248.50', chg: '-2.14%', up: false },
                  ].map((s) => (
                    <div
                      key={s.sym}
                      className="d-flex justify-content-between align-items-center p-2 rounded-3"
                      style={{ backgroundColor: 'var(--tx-surface-2)' }}
                    >
                      <div className="d-flex align-items-center gap-2">
                        <div
                          className="d-flex align-items-center justify-content-center rounded-3 fw-bold"
                          style={{
                            width: '36px',
                            height: '36px',
                            backgroundColor: 'var(--tx-border)',
                            color: 'var(--tx-text)',
                            fontSize: '0.7rem',
                          }}
                        >
                          {s.sym}
                        </div>
                        <div>
                          <p className="mb-0 fw-semibold" style={{ color: 'var(--tx-text)', fontSize: '0.85rem' }}>{s.name}</p>
                          <p className="mb-0" style={{ color: 'var(--tx-text-muted)', fontSize: '0.75rem' }}>{s.price}</p>
                        </div>
                      </div>
                      <span className={s.up ? 'tx-badge-up' : 'tx-badge-down'}>{s.chg}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How TradeX Works */}
      <section className="py-5 tx-section-bg">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-2" style={{ color: 'var(--tx-text)', fontSize: '2rem' }}>
              How TradeX Works
            </h2>
            <p style={{ color: 'var(--tx-text-muted)' }}>Five simple steps to start your trading journey</p>
          </div>
          <div className="row g-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="col-lg col-md-6">
                  <div className="card h-100 tx-card-hover p-4 text-center">
                    <div
                      className="d-flex align-items-center justify-content-center rounded-circle mx-auto mb-3"
                      style={{
                        width: '56px',
                        height: '56px',
                        backgroundColor: 'rgba(45, 212, 191, 0.1)',
                      }}
                    >
                      <Icon size={26} style={{ color: 'var(--tx-primary)' }} />
                    </div>
                    <div
                      className="position-absolute top-0 end-0 m-3 fw-bold"
                      style={{ color: 'var(--tx-border)', fontSize: '2rem' }}
                    >
                      {i + 1}
                    </div>
                    <h5 className="fw-semibold mb-2" style={{ color: 'var(--tx-text)' }}>{step.title}</h5>
                    <p className="mb-0" style={{ color: 'var(--tx-text-muted)', fontSize: '0.88rem' }}>{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-2" style={{ color: 'var(--tx-text)', fontSize: '2rem' }}>
              Key Features
            </h2>
            <p style={{ color: 'var(--tx-text-muted)' }}>Everything you need to become a better trader</p>
          </div>
          <div className="row g-4">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="col-lg-4 col-md-6">
                  <div className="card h-100 tx-card-hover p-4">
                    <div
                      className="d-flex align-items-center justify-content-center rounded-3 mb-3"
                      style={{
                        width: '48px',
                        height: '48px',
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                      }}
                    >
                      <Icon size={22} style={{ color: 'var(--tx-accent)' }} />
                    </div>
                    <h5 className="fw-semibold mb-2" style={{ color: 'var(--tx-text)' }}>{f.title}</h5>
                    <p className="mb-0" style={{ color: 'var(--tx-text-muted)', fontSize: '0.88rem' }}>{f.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why TradeX */}
      <section className="py-5 tx-section-bg">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <h2 className="fw-bold mb-3" style={{ color: 'var(--tx-text)', fontSize: '2rem' }}>
                Why TradeX?
              </h2>
              <p style={{ color: 'var(--tx-text-muted)', fontSize: '1rem', lineHeight: 1.7 }}>
                Trading in the stock market can be intimidating — especially for
                beginners. TradeX removes the fear factor by giving you a safe
                environment to practice with virtual funds. You can test your
                trading strategies, learn how the market works, and build
                confidence — all without risking real money.
              </p>
              <p style={{ color: 'var(--tx-text-muted)', fontSize: '1rem', lineHeight: 1.7 }}>
                Whether you are a student learning about financial markets or
                an aspiring trader honing your skills, TradeX provides the tools
                and data you need to make smarter decisions.
              </p>
              <Link to="/register" className="btn btn-primary btn-lg mt-3 px-4 d-inline-flex align-items-center gap-2">
                Get Started Free <ArrowRight size={18} />
              </Link>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                {[
                  { title: 'Risk-Free', desc: 'Practice with $100K virtual funds', icon: ShieldCheck },
                  { title: 'Real Data', desc: 'Based on real market movements', icon: BarChart3 },
                  { title: 'Detailed Analytics', desc: 'Track every trade and its outcome', icon: PieChart },
                  { title: 'Beginner Friendly', desc: 'No prior experience needed', icon: UserPlus },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="col-6">
                      <div className="card h-100 p-3 tx-card-hover">
                        <Icon size={24} style={{ color: 'var(--tx-primary)' }} className="mb-2" />
                        <h6 className="fw-semibold mb-1" style={{ color: 'var(--tx-text)' }}>{item.title}</h6>
                        <p className="mb-0" style={{ color: 'var(--tx-text-muted)', fontSize: '0.8rem' }}>{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5">
        <div className="container">
          <div
            className="text-center p-5 rounded-4"
            style={{
              background: 'linear-gradient(135deg, rgba(45, 212, 191, 0.1), rgba(59, 130, 246, 0.08))',
              border: '1px solid var(--tx-border)',
            }}
          >
            <h2 className="fw-bold mb-2" style={{ color: 'var(--tx-text)', fontSize: '2rem' }}>
              Ready to Start Trading?
            </h2>
            <p className="mb-4" style={{ color: 'var(--tx-text-muted)' }}>
              Join TradeX today and get $100,000 in virtual funds to practice with.
            </p>
            <Link to="/register" className="btn btn-primary btn-lg px-5">
              Create Free Account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
