const express = require('express');
const { protect, authorizeRoles } = require('../middleware/auth');

const router = express.Router();
const adminOnly = [protect, authorizeRoles('admin')];

router.get('/users', ...adminOnly, (req, res) => {
  res.status(501).json({ success: false, message: 'Admin user management is not yet implemented.' });
});

router.get('/stocks', ...adminOnly, (req, res) => {
  res.status(501).json({ success: false, message: 'Admin stock management is not yet implemented.' });
});

router.get('/transactions', ...adminOnly, (req, res) => {
  res.status(501).json({ success: false, message: 'Admin transaction management is not yet implemented.' });
});

module.exports = router;
