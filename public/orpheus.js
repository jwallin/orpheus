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

  var getButton = function(element) {
    if (element.tagName.toLowerCase() === 'button') {
      return element;
    }
    return element.parentElement && getButton(element.parentElement);
  }

  document.querySelector('body').addEventListener('click', function(event) {
    var button = getButton(event.target);
    if (button) {
      var device = button.dataset.device;
      var key = button.dataset.key;
      sendCommand(device, key);
    }
  });
})();