const express = require('express');
const router = express.Router();

/* GET Admin page. */
router.get('/admin', function(req, res, next) {
  res.render('admin', { title: 'ADMIN: Checkout Dukani', token: '' });
});

module.exports = router;