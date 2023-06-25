const mongoose = require('mongoose');

const purchasedTokensSchema = new mongoose.Schema({
  meter_number: {
    type: String,
  },
  token: {
    type: String,
    required: true,
  },
  token_status: {
    type: String,
    enum: ['USED', 'NEW', 'EXPIRED'],
    default: 'NEW',
  },
  token_value_days: {
    type: Number,
    required: true,
  },
  purchased_date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  amount: {
    type: Number,
    required: true,
  },
});

purchasedTokensSchema.pre('save', function(next) {
  const currentDate = new Date();
  const expirationDate = new Date(this.purchased_date);
  expirationDate.setDate(expirationDate.getDate() + this.token_value_days);

  if (currentDate > expirationDate) {
    this.token_status = 'EXPIRED';
  } else if (currentDate > this.purchased_date) {
    this.token_status = 'USED';
  } else {
    this.token_status = 'NEW';
  }
  next();
});

const PurchasedToken = mongoose.model('PurchasedToken', purchasedTokensSchema);

module.exports = PurchasedToken;
