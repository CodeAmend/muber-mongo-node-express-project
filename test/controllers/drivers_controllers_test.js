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

  it("PUT to /api/drivers/:id ", (done) => {
    const driver = new Driver({
      email: "fake_email@faker.com",
      driving: false
    })
    driver.save()
      .then(() => {
        request(app)
          .put(`/api/drivers/${driver._id}`)
          .send({ driving: true })
          .end(() => {
            Driver.findOne({ email: "fake_email@faker.com" })
              .then(updated_driver => {
                assert(updated_driver.driving === true);
                done();
              })
          })
      })
  });

  it("DELETE to /api/drivers/:id ", (done) => {
    const driver = new Driver({ email: "test@test.com"});
    driver.save().then(() => {
      request(app)
      .delete(`/api/drivers/${driver._id}`)
      .end(() => {
        Driver.findOne({ email: "test@test.com" })
        .then((driver) => {
          assert(driver === null);
          done();
        });
      });
    });
  });

});
