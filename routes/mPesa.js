var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/m-pesa', function(req, res, next) {
  res.json(req.mPesaAuth['access_token']);
});

module.exports = router;
