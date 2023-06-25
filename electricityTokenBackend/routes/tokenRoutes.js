const express = require('express');
const router = express.Router();
const { generateToken, getPurchasedTokensByMeterNumber } = require('../controllers/tokenModelController')

// Route to generate a token
router.post('/buy', generateToken);

// Route to get purchased tokens by meter number
router.post('/search', getPurchasedTokensByMeterNumber);

module.exports = router;
