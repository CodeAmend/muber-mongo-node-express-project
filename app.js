const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const routes = require('./routes');

mongoose.Promise = global.Promise;

if (process.env.NODE_ENV !== 'test') {
  mongoose.connect('mongodb://localhost/muber');
}

app.use(bodyParser.json())

routes(app);

app.use((err, req, res, next) => {
  console.log("error ", err.message);
  res.status(422).send({ error: err.message });
});

module.exports = app;
