angular.module('starter.location', ['ngCordova'])

.factory('GeoAlert', function($cordovaGeolocation, Data) {
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

    var posOptions = {maximumAge:3000, timeout: 30000, enableHighAccuracy: true};
    $cordovaGeolocation
      .getCurrentPosition(posOptions)
      .then(function (position) {
        processing = false;
        //console.log(position.coords.latitude, position.coords.longitude);

        var currentPos =
          {
            lat:position.coords.latitude,
            lon:position.coords.longitude,
			style: {
				image: {
                    icon: {
                        anchor: [0.5, 1],
                        anchorXUnits: 'fraction',
                        anchorYUnits: 'fraction',
                        opacity: 0.90,
                        src: 'img/currentLoc.png'
                    }
                }
			}

          };

		Data.currentPosition = currentPos ;
		Data.sendCurrentPosition("");
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
