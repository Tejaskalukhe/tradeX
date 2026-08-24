// 404 API middleware — handles unmatched API routes
module.exports = (req, res) => {
  res.status(404).json({ message: `Route not found: ${req.originalUrl}` });
};
