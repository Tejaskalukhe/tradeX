const express = require('express');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.get('/profile', protect, (req, res) => {
  res.json({ success: true, data: { user: req.user.toSafeObject() } });
});

router.put('/profile', protect, (req, res) => {
  res.status(501).json({ success: false, message: 'Profile editing is not yet implemented.' });
});

module.exports = router;
