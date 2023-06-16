const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
  cardHolderName: {
    type: String,
    required: true,
    trim: true
  },
  cardNumber: {
    type: String,
    required: true,
    maxlength: 16,
    pattern: /[\d ]/,
    trim: true
  },
  expiryDate: {
    type: String,
    required: true,
    maxlength: 5,
    pattern: /\d\d\/\d\d/,
    trim: true
  },
  cvc: {
    type: String,
    required: true,
    pattern: /^\d{3}$/
  },
 
}, { timestamps: true });

module.exports = mongoose.model('Card', CardSchema);
