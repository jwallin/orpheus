var remoteService = require('./services/remoteservice');

module.exports = function(app) {
  app.get('/send/:device/:key', function(req, res) {
    var deviceName = req.params.device;
    var key = req.params.key.toUpperCase();

    remoteService.sendCommand(deviceName, key).then(function() {
      res.json(null);
    }, function(err) {
      res.status(500).json({error: err});
    });
  });
};