const jwt = require('jsonwebtoken');
const User = require('../models/User');

const emailPattern = /^\S+@\S+\.\S+$/;
const minimumPasswordLength = 8;

const getJwtSecret = () => {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET is not configured');
  }
  return process.env.JWT_SECRET;
};

const createToken = (user) =>
  jwt.sign(
    { sub: user._id.toString(), role: user.role },
    getJwtSecret(),
    { expiresIn: process.env.JWT_EXPIRES_IN || '1d' }
  );

const normalizeCredentials = (body = {}) => ({
  name: typeof body.name === 'string' ? body.name.trim() : '',
  email: typeof body.email === 'string' ? body.email.trim().toLowerCase() : '',
  password: typeof body.password === 'string' ? body.password : '',
});

const validateRegistration = ({ name, email, password }) => {
  if (!name) return 'Name is required.';
  if (name.length < 2) return 'Name must be at least 2 characters.';
  if (!emailPattern.test(email)) return 'Enter a valid email address.';
  if (password.length < minimumPasswordLength) return 'Password must be at least 8 characters.';
  return null;
};

const register = async (req, res, next) => {
  try {
    const credentials = normalizeCredentials(req.body);
    const validationError = validateRegistration(credentials);
    if (validationError) {
      return res.status(400).json({ success: false, message: validationError });
    }

    const user = await User.create({
      name: credentials.name,
      email: credentials.email,
      password: credentials.password,
      role: 'user',
      virtualBalance: 100000,
      isActive: true,
    });

    return res.status(201).json({
      success: true,
      message: 'Account created successfully.',
      data: { user: user.toSafeObject() },
    });
  } catch (error) {
    if (error?.code === 11000) {
      return res.status(409).json({ success: false, message: 'An account with that email already exists.' });
    }
    if (error?.name === 'ValidationError') {
      return res.status(400).json({ success: false, message: 'Please check the account details and try again.' });
    }
    return next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const credentials = normalizeCredentials(req.body);
    if (!emailPattern.test(credentials.email) || !credentials.password) {
      return res.status(401).json({ success: false, message: 'Invalid email or password.' });
    }

    const user = await User.findOne({ email: credentials.email }).select('+password');
    if (!user || !user.isActive || !(await user.comparePassword(credentials.password))) {
      return res.status(401).json({ success: false, message: 'Invalid email or password.' });
    }

    return res.json({
      success: true,
      message: 'Signed in successfully.',
      data: { token: createToken(user), user: user.toSafeObject() },
    });
  } catch (error) {
    return next(error);
  }
};

const getCurrentUser = async (req, res) => {
  res.json({ success: true, data: { user: req.user.toSafeObject() } });
};

module.exports = { register, login, getCurrentUser };
