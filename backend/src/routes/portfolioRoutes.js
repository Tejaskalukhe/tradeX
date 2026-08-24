const express = require('express');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.get('/', protect, (req, res) => {
  res.status(501).json({ success: false, message: 'Portfolio is not yet implemented.' });
});

router.get('/summary', protect, (req, res) => {
  res.status(501).json({ success: false, message: 'Portfolio summary is not yet implemented.' });
});

module.exports = router;
