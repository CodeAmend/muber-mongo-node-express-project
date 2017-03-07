const Driver = require('../models/driver');

module.exports = {
  greeting(err, response) {
    response.send({ hi: "there" });
  },
  create(err, response) {
    response.send({ bye: "there"});
  }
}
