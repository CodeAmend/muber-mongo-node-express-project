const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/muber')

const app = require('../app');

describe("The Express app", () => {

  it("handles a GET request to /api", (done) => {

    request(app)
      .get('/api')
      .end((err, response) => {
        assert(response.body.hi === 'there');
        done();
      });
  });

});
