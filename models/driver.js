const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PointSchema = mongoose.Schema({
  type: { type: String, defualt: 'Point'},
  coordinates: { type: [Number], index: '2dsphere' }
});

const DriverSchema = Schema({
  email: {
    type: String,
    required: true
  },
  driving: {
    type: Boolean,
    default: false
  },
  geometry: PointSchema
});


const Driver = mongoose.model('driver', DriverSchema);

module.exports = Driver;
