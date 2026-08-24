const express = require('express');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.get('/', protect, (req, res) => {
  res.status(501).json({ success: false, message: 'Transactions are not yet implemented.' });
});

router.post('/buy', protect, (req, res) => {
  res.status(501).json({ success: false, message: 'Buying is not yet implemented.' });
});

router.post('/sell', protect, (req, res) => {
  res.status(501).json({ success: false, message: 'Selling is not yet implemented.' });
});

module.exports = router;
