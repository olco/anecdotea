angular.module('starter.services', ['ngCordova'])

.factory('Data', function($rootScope) {
  return {
      notification : true,
	  distance:0.09,
	  heading:0,
	  currentPosition: {
		  'lon':-1,
		  'lat':-1
	  },
	  sendCurrentPosition: function(data) {
		  $rootScope.$broadcast('currentPositionChanged', data);
	  }
  };
})

.factory('Locations', function(Data) {

  var locations = [{
    id: 0,
    name: 'Le pont tranbordeur',
    lastText: 'C\'est le dernier pont transbordeur en activité en France. La traservée dure 75 secondes et permet de transporter 200 personnes. Ce fut le décors de la scène inaugurale du film Les demoiselles de Rochefort.',
    face: 'img/transbordeur.jpg',
    dist: -1,
    dir: -1,
    lat:45.916711,
    lon:-0.960687,
	  notif:false,
    cat:'Incontournable'
  }, {
    id: 1,
    name: 'La place Colbert',
    lastText: 'La place Colbert fut l\'un des principaux lieux de tournage du film les demoiselles de Rochefort en 1967',
    face: 'img/place_colbert.jpg',
    dist: -1,
    dir: -1,
    lat:45.936629,
    lon:-0.961625,
	  notif:false,
    cat:'Incontournable'
  }, {
    id: 2,
    name: 'La corderie royale',
    lastText: 'La corderie royale mesure 374 mètres de long. Ce batiment permettait de construire des cordes mesurant l\'équivalent d\'une encablure (environ 200 mètres)',
    face: 'img/corderie.jpg',
    dist: -1,
    dir: -1,
    lat:45.937987,
    lon:-0.955963,
	  notif:false,
    cat:'Incontournable'
  }, {
    id: 4,
    name: 'La porte du soleil',
    lastText: 'Le 4 mars et le 10 octobre, le soleil se léve exactement dans l\'axe du monument.',
    face: 'img/porte_soleil.jpg',
    dist: -1,
    dir: -1,
    lat:45.935073,
    lon:-0.957886,
	  notif:false,
    cat:'Patrimoine'
  }, {
    id: 5,
    name: 'L\'école Saint-Joseph',
    lastText: 'L\'école Saint-Joseph était anciennement une chocolaterie.',
    face: 'img/ecole_st_joseph.jpg',
    dist: -1,
    dir: -1,
    lat:45.941796,
    lon:-0.969635,
	  notif:false,
    cat:'Insolite'
  }, {
    id: 6,
    name: 'L\'Hermione',
    lastText: '',
    face: 'img/hermione.jpg',
    dist: -1,
    dir: -1,
    lat:45.935255,
    lon:-0.956998,
	  notif:false,
    cat:'Incontournable'
  }, {
    id: 7,
    name: 'Ancien hopîtal',
    lastText: '',
    face: 'img/ancien_hopital.jpg',
    dist: -1,
    dir: -1,
    lat:45.942454,
    lon:-0.964031,
	  notif:false,
    cat:'Incontournable'
  }, {
    id: 8,
    name: 'Ancienne brasserie',
    lastText: 'Ce batîment abritait jadis la brasserie de La Meuse. On devine encore le logo sur la facade.',
    face: 'img/brasserie_meuse.jpg',
    dist: -1,
    dir: -1,
    lat:45.940754,
    lon:-0.967521,
	  notif:false,
    cat:'Insolite'
  }, {
    id: 9,
    name: 'Les halles',
    lastText: 'Les mardi, jeudi et samedi matin se tient l\'un des plus grand marché de la région.',
    face: 'img/halles.jpg',
    dist: -1,
    dir: -1,
    lat:45.935012,
    lon:-0.959308,
	  notif:false,
    cat:'Incontournable'
  }, {
    id: 10,
    name: 'Le musée de la marine',
    lastText: '',
    face: 'img/musee_marine.jpg',
    dist: -1,
    dir: -1,
    lat:45.934475,
    lon:-0.957966,
	  notif:false,
    cat:'Incontournable'
  }, {
    id: 11,
    name: 'Hôtel Hebre de Saint-Clément',
    lastText: '',
    face: 'img/musee_hebre.jpg',
    dist: -1,
    dir: -1,
    lat:45.935699,
    lon: -0.962597,
	  notif:false,
    cat:'Incontournable'
  }, {
    id: 12,
    name: 'La fontaine (place Colbert)',
    lastText: '',
    face: 'img/fontaine_colbert.jpg',
    dist: -1,
    dir: -1,
    lat:45.936611,
    lon: -0.961245,
	  notif:false,
    cat:'Insolite'
  }, {
    id: 13,
    name: 'Le théâtre de la coupe d\'or',
    lastText: '',
    face: 'img/theatre.jpg',
    dist: -1,
    dir: -1,
    lat:45.937866,
    lon:-0.960912,
	  notif:false,
    cat:'Incontournable'
  }, {
    id: 14,
    name: 'L\'horloge des marées',
    lastText: '',
    face: 'img/boussole_maree.jpg',
    dist: -1,
    dir: -1,
    lat:45.936629,
    lon:-0.961633,
	  notif:false,
    cat:'Insolite'
  }, {
    id: 15,
    name: 'La tour des signaux',
    lastText: '',
    face: '',
    dist: -1,
    dir: -1,
    lat:45.935961,
    lon:-0.958326,
    notif:false,
    cat:'Incontournable'
  }, {
    id: 16,
    name: 'Le Conservatoire du Bégognia',
    lastText: '',
    face: '',
    dist: -1,
    dir: -1,
    lat:45.924533,
    lon:-0.955898,
    notif:false,
    cat:'Incontournable'
  }, {
    id: 17,
    name: 'La station de lagunage',
    lastText: '',
    face: '',
    dist: -1,
    dir: -1,
    lat:45.919925,
    lon:-0.980009,
    notif:false,
    cat:'Incontournable'
  }, {
    id: 18,
    name: 'Les anciennes forges',
    lastText: '',
    face: '',
    dist: -1,
    dir: -1,
    lat:45.940292,
    lon:-0.959161,
    notif:false,
    cat:'Insolite'
  }, {
    id: 19,
    name: 'Le quai au vivre',
    lastText: '',
    face: '',
    dist: -1,
    dir: -1,
    lat:45.940292,
    lon:-0.959161,
    notif:false,
    cat:'Incontournable'
  }, {
    id: 20,
    name: 'La gare SNCF',
    lastText: '',
    face: '',
    dist: -1,
    dir: -1,
    lat:45.947265,
    lon:-0.963722,
    notif:false,
    cat:'Incontournable'
  }, {
    id: 21,
    name: 'Le port de plaisance',
    lastText: '',
    face: '',
    dist: -1,
    dir: -1,
    lat:45.944399,
    lon:-0.958749,
    notif:false,
    cat:'Incontournable'
  }, {
    id: 22,
    name: 'L\'hôtel de ville',
    lastText: '',
    face: '',
    dist: -1,
    dir: -1,
    lat:45.936723,
    lon:-0.962285,
    notif:false,
    cat:'Insolite'
  }, {
    id: 23,
    name: 'L\'Église Saint-Louis',
    lastText: '',
    face: '',
    dist: -1,
    dir: -1,
    lat:45.937326,
    lon:-0.962393,
    notif:false,
    cat:'Patrimoine'
  }, {
    id: 24,
    name: 'L\'Église Notre-Dame dite la Vieille Paroisse',
    lastText: '',
    face: '',
    dist: -1,
    dir: -1,
    lat:45.935456,
    lon:-0.967149,
    notif:false,
    cat:'Patrimoine'
  }, {
    id: 25,
    name: 'Le labyrinthe',
    lastText: '',
    face: '',
    dist: -1,
    dir: -1,
    lat:45.936953,
    lon:-0.956123,
    notif:false,
    cat:'Insolite'
  }, {
    id: 26,
    name: 'Temple Protestant',
    lastText: '',
    face: '',
    dist: -1,
    dir: -1,
    lat:45.938504,
    lon:-0.958871,
    notif:false,
    cat:'Patrimoine'
  }, {
    id: 27,
    name: 'La porte bégon',
    lastText: '',
    face: '',
    dist: -1,
    dir: -1,
    lat:45.942832,
    lon:-0.960210,
    notif:false,
    cat:'Patrimoine'
  }, {
    id: 28,
    name: 'Ancien hôpital Saint-Charles',
    lastText: '',
    face: '',
    dist: -1,
    dir: -1,
    lat:45.941089,
    lon:-0.963140,
    notif:false,
    cat:'Patrimoine'
  }, {
    id: 29,
    name: 'La clinique Pujos',
    lastText: '',
    face: '',
    dist: -1,
    dir: -1,
    lat:45.940136,
    lon:-0.958378,
    notif:false,
    cat:'Patrimoine'
  }, {
    id: 30,
    name: 'L\'école de médecine navale',
    lastText: '',
    face: '',
    dist: -1,
    dir: -1,
    lat:45.942234,
    lon:-0.965032,
    notif:false,
    cat:'Incontournable'
  }, {
    id: 31,
    name: 'Le Centre thermal',
    lastText: '',
    face: '',
    dist: -1,
    dir: -1,
    lat:45.942364,
    lon:-0.961755,
    notif:false,
    cat:'Santé et loisirs'
  }, {
    id: 32,
    name: 'L\'ancien chateau d\'eau',
    lastText: '',
    face: '',
    dist: -1,
    dir: -1,
    lat:45.941688,
    lon:-0.962306,
    notif:false,
    cat:'Patrimoine'
  }, {
    id: 33,
    name: 'Créche Sainte-Marie',
    lastText: '',
    face: '',
    dist: -1,
    dir: -1,
    lat:45.938265,
    lon:-0.958731,
    notif:false,
    cat:'Insolite'
  }, {
    id: 34,
    name: 'La vieille forme',
    lastText: '',
    face: '',
    dist: -1,
    dir: -1,
    lat:45.944729,
    lon:-0.954789,
    notif:false,
    cat:'Patrimoine'
  }, {
    id: 35,
    name: 'La Maison de Pierre Loti',
    lastText: '',
    face: '',
    dist: -1,
    dir: -1,
    lat:45.934034,
    lon:-0.962762,
    notif:false,
    cat:'Incontournable'
  }, {
    id: 36,
    name: 'Les remparts',
    lastText: '',
    face: '',
    dist: -1,
    dir: -1,
    lat:45.944790,
    lon:-0.955861,
    notif:false,
    cat:'Patrimoine'
  }, {
    id: 37,
    name: 'Caserne Latouche-Tréville',
    lastText: '',
    face: '',
    dist: -1,
    dir: -1,
    lat:45.940979,
    lon:-0.959442,
    notif:false,
    cat:'Patrimoine'
  }, {
    id: 38,
    name: 'La Forme Napoléon III',
    lastText: '',
    face: '',
    dist: -1,
    dir: -1,
    lat:45.936188,
    lon:-0.956637,
    notif:false,
    cat:'Patrimoine'
  }, {
    id: 39,
    name: 'La Maison du Roy',
    lastText: '',
    face: '',
    dist: -1,
    dir: -1,
    lat:45.936918,
    lon:-0.957241,
    notif:false,
    cat:'Patrimoine'
  }, {
    id: 40,
    name: 'Le monument à Pierre Loti',
    lastText: '',
    face: '',
    dist: -1,
    dir: -1,
    lat:45.936483,
    lon:-0.964801,
    notif:false,
    cat:'Patrimoine'
  }, {
    id: 41,
    name: 'Musée des commerces d\'autrefois',
    lastText: '',
    face: '',
    dist: -1,
    dir: -1,
    lat:45.936468,
    lon:-0.960190,
    notif:false,
    cat:'Incontournable'
  }, {
    id: 42,
    name: 'Kiosque à musique du Square Parat',
    lastText: '',
    face: '',
    dist: -1,
    dir: -1,
    lat:45.937550,
    lon:-0.966810,
    notif:false,
    cat:'Insolite'
  }, {
    id: 43,
    name: 'Le Jardin de la Marine',
    lastText: '',
    face: '',
    dist: -1,
    dir: -1,
    lat:45.939288,
    lon:-0.957136,
    notif:false,
    cat:'Incontournable'
  }, {
    id: 44,
    name: 'Le Jardin des Retours',
    lastText: '',
    face: '',
    dist: -1,
    dir: -1,
    lat:45.939524,
    lon: -0.954978,
    notif:false,
    cat:'Incontournable'
  }, {
    id: 45,
    name: 'Le potager du Roy',
    lastText: '',
    face: '',
    dist: -1,
    dir: -1,
    lat:45.938031,
    lon:-0.957904,
    notif:false,
    cat:'Insolite'
  }, {
    id: 46,
    name: 'Chemin de la Charente',
    lastText: '',
    face: '',
    dist: -1,
    dir: -1,
    lat:45.935527,
    lon:-0.955648,
    notif:false,
    cat:'Incontournable'
  }, {
    id: 47,
    name: 'Le radeau de la méduse',
    lastText: '',
    face: '',
    dist: -1,
    dir: -1,
    lat:45.934749,
    lon:-0.957849,
    notif:false,
    cat:'Insolite'
  }, {
    id: 48,
    name: 'Le puit rue Edouard Grimaux',
    lastText: '',
    face: '',
    dist: -1,
    dir: -1,
    lat:45.934213,
    lon:-0.961716,
    notif:false,
    cat:'Insolite'
  }, {
    id: 49,
    name: 'Le puit rue Victor Hugo',
    lastText: '',
    face: '',
    dist: -1,
    dir: -1,
    lat:45.938802,
    lon:-0.962897,
    notif:false,
    cat:'Insolite'
  }, {
    id: 50,
    name: 'Le puit rue Pierre Loti',
    lastText: '',
    face: '',
    dist: -1,
    dir: -1,
    lat:45.933364,
    lon:-0.962795,
    notif:false,
    cat:'Insolite'
  }, {
    id: 51,
    name: 'La Poste',
    lastText: '',
    face: '',
    dist: -1,
    dir: -1,
    lat:45.937467,
    lon:-0.964483,
    notif:false,
    cat:'Patrimoine'
  }, {
    id: 52,
    name: 'Le puit rue Pasteur',
    lastText: '',
    face: '',
    dist: -1,
    dir: -1,
    lat: 45.942571,
    lon:-0.966585,
    notif:false,
    cat:'Insolite'
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
	  var onlyOne = false ;
      for (var i = 0; i < locations.length; i++) {
        locations[i].dist = getDistanceFromLatLonInKm(lat,lon,locations[i].lat,locations[i].lon) ;
		if(Data.notification == true){
			if(locations[i].dist < Data.distance){
				if(onlyOne == false && locations[i].notif == false){
					onlyOne = true ;
					navigator.vibrate([500, 100, 500, 100, 500]);

					function alertDismissed() {
						// do something
					}

					navigator.notification.alert(
						locations[i].name+' est à proximité !',  // message
						alertDismissed,         // callback
						'Vous êtes proche !',            // title
						'Ok'                  // buttonName
					);
				}
				locations[i].notif = true ;
			}
		}
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
