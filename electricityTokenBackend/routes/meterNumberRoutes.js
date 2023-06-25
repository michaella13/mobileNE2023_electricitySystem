const express = require('express');
const router = express.Router();
const { addMeterNumber, getAllMeterNumbers } = require('../controllers/meterNumberController');

// Route to add a new meter number
router.post('/', addMeterNumber);

// Route to get all meter numbers
router.get('/', getAllMeterNumbers);

module.exports = router;
