const assert = require('assert');
const mongoose = require('mongoose');
const request = require('supertest');

const app = require('../../app');

// instead of requiring Driver model directly
// this prevents any weird double instantiations.
//
const Driver = mongoose.model('driver');

describe("Drivers controller", () => {

  it("Makes a POST request to /api/drivers", (done) => {
    Driver.count()
    .then((count) => {
      request(app)
        .post('/api/drivers')
        .send({ email: 'test@email.com' })
        .end((req, response) => {
        Driver.count()
          .then((new_count) => {
            assert(new_count === count + 1)
            done();
          })
      });
    })
  });

});
