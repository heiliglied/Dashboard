const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const sampleSchema = new mongoose.Schema({
  fname: {
    type: String,
    trim: true
  },
  lname: {
    type: String,
    trim: true
  },
  Created: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('Sample', sampleSchema);