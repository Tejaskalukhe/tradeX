const express = require('express');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.get('/', protect, (req, res) => {
  res.status(501).json({ success: false, message: 'Stocks list is not yet implemented.' });
});

router.get('/:symbol', protect, (req, res) => {
  res.status(501).json({ success: false, message: 'Stock details are not yet implemented.' });
});

module.exports = router;
