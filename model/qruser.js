const mongoose = require('mongoose');

const qruserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    // required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
  },
  isVerified: { 
    type: Boolean, 
    default: false 
  },
});

module.exports = mongoose.model('QrUser', qruserSchema);
