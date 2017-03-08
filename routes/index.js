const DriverControllers = require('../controllers/drivers_controller');

module.exports = (app) => {

  app.get('/api', DriverControllers.greeting);
  app.post('/api/drivers', DriverControllers.create);
  app.put('/api/drivers/:id', DriverControllers.edit);
  app.delete('/api/drivers/:id', DriverControllers.delete);

}
