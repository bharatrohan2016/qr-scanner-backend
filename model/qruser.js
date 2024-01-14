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
    unique: true
  },
  otp: {
    type: String,
  },
});

module.exports = mongoose.model('QrUser', qruserSchema);
