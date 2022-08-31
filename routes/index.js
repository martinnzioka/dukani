const express = require('express');
const router = express.Router();
// const mPesaOAuth = require('./middlewares/mPesaAuth');
//const { mpesaExpress, payLater, refund, authorization } = require('./../controllers/mpesa')

/* GET Checkout page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Checkout Form', welcomeNote: 'Thank You for Patreonage', total: 20, currency: 'USD' });
});

/* GET M-PESA Access Token. 
router.get('/mpesa/token', function(req, res, next) {
  res.json(req.mPesaAuth['access_token']);
}); */

/* POST M-PESA Express[(STK Push) LIPA NA MPESA ONLINE]. */
//router.post('/mpesa/express', authorization, mpesaExpress);

/* POST Client to Business. */
//router.post('/mpesa/pay-later', authorization, payLater);

/* POST Business to Client. */
//router.post('/mpesa/refund', authorization, refund );

module.exports = router;