angular.module('starter.services', ['ngCordova'])

.factory('Locations', function() {

  var locations = [{
    id: 0,
    name: 'Le pont tranbordeur',
    lastText: 'C\'est le dernier pont transbordeur en activité en France. La traservée dure 75 secondes et permet de transporter 200 personnes. Ce fut le décors de la scène inaugurale du film Les demoiselles de Rochefort.',
    face: 'img/transbordeur.jpg',
    dist: -1,
    dir: -1,
    lat:45.916711,
    lon:-0.960687
  }, {
    id: 1,
    name: 'La place Colbert',
    lastText: 'La place Colbert fut l\'un des principaux lieux de tournage du film les demoiselles de Rochefort en 1967',
    face: 'img/place_colbert.jpg',
    dist: -1,
    dir: -1,
    lat:45.936629,
    lon:-0.961625
  }, {
    id: 2,
    name: 'La corderie royale',
    lastText: 'La corderie royale mesure 374 mètres de long. Ce batiment permettait de construire des cordes mesurant l\'équivalent d\'une encablure (environ 200 mètres)',
    face: 'img/corderie.jpg',
    dist: -1,
    dir: -1,
    lat:45.937987,
    lon:-0.955963
  }, {
    id: 4,
    name: 'La porte du soleil',
    lastText: 'Le 4 mars et le 10 octobre, le soleil se léve exactement dans l\'axe du monument.',
    face: 'img/porte_soleil.jpg',
    dist: -1,
    dir: -1,
    lat:45.935073,
    lon:-0.957886
  }];

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
    return Math.round(d * 1000) / 1000 ;
  }

  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }

  function rad2deg(rad){
    return rad * (180/Math.PI)
  }

  function getDegrees(lat1, lon1, lat2, lon2, headX) {
    var dLat = deg2rad(lat2-lat1);
    var dLon = deg2rad(lon2-lon1);
    lat1 = deg2rad(lat1);
    lat2 = deg2rad(lat2);
    var y = Math.sin(dLon) * Math.cos(lat2);
    var x = Math.cos(lat1)*Math.sin(lat2) - Math.sin(lat1)*Math.cos(lat2)*Math.cos(dLon);
    var brng = rad2deg(Math.atan2(y, x));
    // fix negative degrees
    if(brng<0) {
      brng=360-Math.abs(brng);
    }
    return brng - headX;
  }

  return {
    all: function() {
      return locations;
    },
    remove: function(location) {
      locations.splice(locations.indexOf(location), 1);
    },
    get: function(locationId) {
      for (var i = 0; i < locations.length; i++) {
        if (locations[i].id === parseInt(locationId)) {
          return locations[i];
        }
      }
      return null;
    },
    computeAllDist: function(lat, lon){
      for (var i = 0; i < locations.length; i++) {
        locations[i].dist = getDistanceFromLatLonInKm(lat,lon,locations[i].lat,locations[i].lon) ;
      }
      return null;
    },
    computeDist: function(location, lat, lon){
      var dist = getDistanceFromLatLonInKm(lat,lon,location.lat,location.lon) ;
      return dist ;
    }
    ,
    computeDirection: function(location, lat, lon, headX){
      var direction = getDegrees(lat,lon,location.lat,location.lon, headX);
      return direction ;
    }
  };

});
