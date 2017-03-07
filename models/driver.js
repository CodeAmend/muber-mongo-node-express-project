const mongoose = require('mongoose');

cons Schema = mongoose.Schema;

const DriverSchema = Schema({
  email: {
    type: String,
    required: true
  },
  driving: {
    type: Boolean,
    default: false
  },
  // loction: ???
});


const Driver = mongose.model('driver', DriverSchema);

module.exports = Driver;
