angular.module('starter.location', ['ngCordova'])

.factory('GeoAlert', function($cordovaGeolocation) {
  console.log('GeoAlert service instantiated');
  var interval;
  var duration = 6000;
  var processing = false;
  var callback;

  // Credit: http://stackoverflow.com/a/27943/52160
  function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1);
    var a =
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon/2) * Math.sin(dLon/2)
      ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c; // Distance in km
    return d;
  }

  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }

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
        //var dist = getDistanceFromLatLonInKm(lat, long, position.coords.latitude, position.coords.longitude);
        //console.log("dist in km is "+dist);

        var currentPos = [
          {name:'You',
            lat:position.coords.latitude,
            lon:position.coords.longitude,
            label: {
              message: 'You',
              show: false,
              showOnMouseOver: true
            }
          }];
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
