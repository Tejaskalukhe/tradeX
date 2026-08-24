import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TrendingUp, Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { toast } from 'react-toastify';
import { loginUser, clearAuthError } from '../../store/authSlice.js';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { loading, error } = useSelector((state) => state.auth);
  const [form, setForm] = useState({ email: '', password: '', remember: false });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((previous) => ({ ...previous, [name]: type === 'checkbox' ? checked : value }));
    setErrors((previous) => ({ ...previous, [name]: '' }));
    if (error) dispatch(clearAuthError());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = {};
    if (!form.email.trim()) nextErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = 'Enter a valid email address';
    if (!form.password) nextErrors.password = 'Password is required';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    try {
      const result = await dispatch(loginUser({ email: form.email, password: form.password })).unwrap();
      toast.success('Welcome back to TradeX.');
      const destination = result.data.user.role === 'admin' ? '/admin' : location.state?.from?.pathname || '/dashboard';
      navigate(destination, { replace: true });
    } catch {
      // The server returns one neutral message for every failed credential check.
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-5 col-md-7">
          <div className="text-center mb-4">
            <Link to="/" className="d-inline-flex align-items-center gap-2 mb-4"><TrendingUp size={30} color="var(--tx-primary)" /><span className="fw-bold fs-4" style={{ color: 'var(--tx-text)' }}>Trade<span style={{ color: 'var(--tx-primary)' }}>X</span></span></Link>
            <h1 className="fw-bold mb-2" style={{ color: 'var(--tx-text)', fontSize: '1.75rem' }}>Welcome back</h1>
            <p style={{ color: 'var(--tx-text-muted)' }}>Sign in to continue your trading journey</p>
          </div>
          <div className="card p-4 p-md-5">
            {error && <div className="alert alert-danger" role="alert">{error}</div>}
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-3"><label htmlFor="email" className="form-label" style={{ color: 'var(--tx-text)' }}>Email address</label><div className="position-relative"><Mail size={17} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--tx-text-muted)' }} /><input id="email" name="email" type="email" value={form.email} onChange={handleChange} className={`form-control ps-5 ${errors.email ? 'is-invalid' : ''}`} placeholder="you@example.com" />{errors.email && <div className="invalid-feedback">{errors.email}</div>}</div></div>
              <div className="mb-3"><div className="d-flex justify-content-between"><label htmlFor="password" className="form-label" style={{ color: 'var(--tx-text)' }}>Password</label><span style={{ color: 'var(--tx-text-muted)', fontSize: '0.82rem' }}>Secure sign-in</span></div><div className="position-relative"><Lock size={17} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--tx-text-muted)' }} /><input id="password" name="password" type={showPassword ? 'text' : 'password'} value={form.password} onChange={handleChange} className={`form-control ps-5 pe-5 ${errors.password ? 'is-invalid' : ''}`} placeholder="Enter your password" /> <button type="button" className="btn p-0" onClick={() => setShowPassword((value) => !value)} style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--tx-text-muted)' }} aria-label={showPassword ? 'Hide password' : 'Show password'}>{showPassword ? <EyeOff size={17} /> : <Eye size={17} />}</button>{errors.password && <div className="invalid-feedback">{errors.password}</div>}</div></div>
              <div className="form-check mb-4"><input className="form-check-input" type="checkbox" id="remember" name="remember" checked={form.remember} onChange={handleChange} /><label className="form-check-label" htmlFor="remember" style={{ color: 'var(--tx-text-muted)', fontSize: '0.88rem' }}>Remember me</label></div>
              <button type="submit" disabled={loading} className="btn btn-primary w-100 py-2 d-flex align-items-center justify-content-center gap-2">{loading ? <><span className="spinner-border spinner-border-sm" role="status" /> Signing in...</> : <>Sign In <ArrowRight size={17} /></>}</button>
            </form>
            <div className="text-center mt-4"><p className="mb-0" style={{ color: 'var(--tx-text-muted)', fontSize: '0.88rem' }}>Don&apos;t have an account? <Link to="/register" style={{ color: 'var(--tx-primary)', fontWeight: 600 }}>Create one</Link></p></div>
          </div>
          <p className="text-center mt-3" style={{ color: 'var(--tx-text-muted)', fontSize: '0.75rem' }}>This is a paper-trading simulation. No real money is involved.</p>
        </div>
      </div>
    </div>
  );
}
