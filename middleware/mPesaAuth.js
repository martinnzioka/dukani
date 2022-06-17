const Axios = require('axios').create({
    baseURL: 'https://sandbox.safaricom.co.ke'
}); 

let auth = Buffer.from(process.env.CONSUMER_KEY + ":" + process.env.CONSUMER_SECRET).toString('base64')
let oAuth = '/oauth/v1/generate?grant_type=client_credentials'
let options = {
    headers: {
        Accept: 'application/json',
        Authorization: "Basic " + auth
    }
}

// Add conditional for cheking token expiry, to avoid calling the oAuth each time.
module.exports = async function () {
    try {
        const mPesaResponse = await Axios.get(oAuth, options)
        console.log(mPesaResponse.data)
        return function (req, res, next) {
            req.mPesaAuth = mPesaResponse.data
            next()
        }
    } catch (error) {
        console.log(error)
        next(error)
    }
}