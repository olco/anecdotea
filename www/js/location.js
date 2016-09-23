angular.module('starter.location', ['ngCordova'])

.factory('GeoAlert', function($cordovaGeolocation) {
  console.log('GeoAlert service instantiated');
  var interval;
  var duration = 1000;
  var processing = false;
  var callback;

  function hb() {
    console.log('hb running');

    if(processing == true) {
      console.log('still running');
      return;
    }
    processing = true;
    console.log('getCurrentPosition');

    var posOptions = {maximumAge:Infinity, timeout: 30000, enableHighAccuracy: false};
    $cordovaGeolocation
      .getCurrentPosition(posOptions)
      .then(function (position) {
        processing = false;
        console.log(position.coords.latitude, position.coords.longitude);

        var currentPos =
          {name:'You',
            lat:position.coords.latitude,
            lon:position.coords.longitude,
            label: {
              message: 'You',
              show: false,
              showOnMouseOver: true
            }
          };
        callback(currentPos);

      }, function(error) {
        processing = false;
        console.log('code: ' + error.code    + '\n' + 'message: ' + error.message + '\n');
      });

  }

  return {
    watchPosition:function(cb) {
      callback = cb;
      interval = window.setInterval(hb, duration);
      hb();
    }
  };

});
