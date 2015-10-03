(function() {
  'use strict';

  var loadJSON = function(url) {
    return new Promise(function(resolve, reject) {
      var req = new XMLHttpRequest();

      req.onload = function() {
        var err;

        if (req.status != 200) {
          reject(Error(req.statusText));
          return;
        }

        resolve(req.responseText);
      };

      req.open('GET', url, true);
      req.send();
    });
  };

  var sendCommand = function(device, key) {
    return loadJSON('/send/' + device + '/' + key);
  };

  document.querySelector('body').addEventListener('click', function(event) {
    if (event.target.tagName.toLowerCase() === 'button') {
      var device = event.target.dataset.device;
      var key = event.target.dataset.key;
      sendCommand(device, key);
    }
  });
})();