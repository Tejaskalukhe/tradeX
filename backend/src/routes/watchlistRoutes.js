const express = require('express');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.get('/', protect, (req, res) => {
  res.status(501).json({ success: false, message: 'Watchlist is not yet implemented.' });
});

router.post('/', protect, (req, res) => {
  res.status(501).json({ success: false, message: 'Adding to watchlist is not yet implemented.' });
});

router.delete('/:symbol', protect, (req, res) => {
  res.status(501).json({ success: false, message: 'Removing from watchlist is not yet implemented.' });
});

module.exports = router;
