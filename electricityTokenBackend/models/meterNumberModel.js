const mongoose = require('mongoose');

const meterNumberSchema = new mongoose.Schema({
  meterNumber: {
    type: Number,
    required: true,
    unique: true,
  },
});

const MeterNumber = mongoose.model('MeterNumber', meterNumberSchema);

module.exports = MeterNumber;
