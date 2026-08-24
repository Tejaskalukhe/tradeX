import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TrendingUp, User, Mail, Lock, Eye, EyeOff, ArrowRight, Check } from 'lucide-react';
import { toast } from 'react-toastify';
import { registerUser } from '../../store/authSlice.js';

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);
  const [form, setForm] = useState({ fullName: '', email: '', password: '', confirmPassword: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setForm((previous) => ({ ...previous, [event.target.name]: event.target.value }));
    setErrors((previous) => ({ ...previous, [event.target.name]: '' }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = {};
    if (!form.fullName.trim()) nextErrors.fullName = 'Full name is required';
    else if (form.fullName.trim().length < 2) nextErrors.fullName = 'Full name must be at least 2 characters';
    if (!form.email.trim()) nextErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = 'Enter a valid email address';
    if (!form.password) nextErrors.password = 'Password is required';
    else if (form.password.length < 8) nextErrors.password = 'Password must be at least 8 characters';
    if (!form.confirmPassword) nextErrors.confirmPassword = 'Please confirm your password';
    else if (form.password !== form.confirmPassword) nextErrors.confirmPassword = 'Passwords do not match';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    try {
      await dispatch(registerUser({ name: form.fullName, email: form.email, password: form.password })).unwrap();
      toast.success('Account created. Sign in to continue.');
      navigate('/login', { replace: true });
    } catch {
      // The server error is displayed above the form without exposing database details.
    }
  };

  return (
    <div className="container py-5"><div className="row justify-content-center"><div className="col-lg-5 col-md-7"><div className="text-center mb-4"><Link to="/" className="d-inline-flex align-items-center gap-2 mb-4"><TrendingUp size={30} color="var(--tx-primary)" /><span className="fw-bold fs-4" style={{ color: 'var(--tx-text)' }}>Trade<span style={{ color: 'var(--tx-primary)' }}>X</span></span></Link><h1 className="fw-bold mb-2" style={{ color: 'var(--tx-text)', fontSize: '1.75rem' }}>Create your account</h1><p style={{ color: 'var(--tx-text-muted)' }}>Start practicing smarter today</p></div><div className="card p-4 p-md-5">{error && <div className="alert alert-danger" role="alert">{error}</div>}<form onSubmit={handleSubmit} noValidate><div className="mb-3"><label htmlFor="fullName" className="form-label" style={{ color: 'var(--tx-text)' }}>Full name</label><div className="position-relative"><User size={17} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--tx-text-muted)' }} /><input id="fullName" name="fullName" type="text" value={form.fullName} onChange={handleChange} className={`form-control ps-5 ${errors.fullName ? 'is-invalid' : ''}`} placeholder="Your full name" />{errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}</div></div><div className="mb-3"><label htmlFor="email" className="form-label" style={{ color: 'var(--tx-text)' }}>Email address</label><div className="position-relative"><Mail size={17} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--tx-text-muted)' }} /><input id="email" name="email" type="email" value={form.email} onChange={handleChange} className={`form-control ps-5 ${errors.email ? 'is-invalid' : ''}`} placeholder="you@example.com" />{errors.email && <div className="invalid-feedback">{errors.email}</div>}</div></div><div className="mb-3"><label htmlFor="password" className="form-label" style={{ color: 'var(--tx-text)' }}>Password</label><div className="position-relative"><Lock size={17} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--tx-text-muted)' }} /><input id="password" name="password" type={showPassword ? 'text' : 'password'} value={form.password} onChange={handleChange} className={`form-control ps-5 pe-5 ${errors.password ? 'is-invalid' : ''}`} placeholder="At least 8 characters" /><button type="button" className="btn p-0" onClick={() => setShowPassword((value) => !value)} style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--tx-text-muted)' }}>{showPassword ? <EyeOff size={17} /> : <Eye size={17} />}</button>{errors.password && <div className="invalid-feedback">{errors.password}</div>}</div></div><div className="mb-3"><label htmlFor="confirmPassword" className="form-label" style={{ color: 'var(--tx-text)' }}>Confirm password</label><div className="position-relative"><Lock size={17} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--tx-text-muted)' }} /><input id="confirmPassword" name="confirmPassword" type={showConfirm ? 'text' : 'password'} value={form.confirmPassword} onChange={handleChange} className={`form-control ps-5 pe-5 ${errors.confirmPassword ? 'is-invalid' : ''}`} placeholder="Repeat your password" /><button type="button" className="btn p-0" onClick={() => setShowConfirm((value) => !value)} style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--tx-text-muted)' }}>{showConfirm ? <EyeOff size={17} /> : <Eye size={17} />}</button>{errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}</div></div><div className="d-flex align-items-start gap-2 mb-4"><Check size={16} style={{ color: 'var(--tx-primary)', marginTop: 3 }} /><span style={{ color: 'var(--tx-text-muted)', fontSize: '0.78rem' }}>By creating an account, you agree that TradeX is a paper-trading simulation only and does not execute real trades.</span></div><button type="submit" disabled={loading} className="btn btn-primary w-100 py-2 d-flex align-items-center justify-content-center gap-2">{loading ? <><span className="spinner-border spinner-border-sm" role="status" /> Creating account...</> : <>Create Account <ArrowRight size={17} /></>}</button></form><div className="text-center mt-4"><p className="mb-0" style={{ color: 'var(--tx-text-muted)', fontSize: '0.88rem' }}>Already have an account? <Link to="/login" style={{ color: 'var(--tx-primary)', fontWeight: 600 }}>Sign in</Link></p></div></div></div></div></div>
  );
}
