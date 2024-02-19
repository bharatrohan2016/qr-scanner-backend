const mongoose = require('mongoose');

const qseconduserSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    // required: true,
  },
  company: {
    type: String,
    // required: true,
  },
  designation: {
    type: String,
  }
});

module.exports = mongoose.model('QSecondUser', qseconduserSchema);
