var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/m-pesa', function(req, res, next) {
  res.render(`${req.mPesaAuth}`);
});

module.exports = router;
