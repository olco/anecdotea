angular.module('starter.controllers', [])

.controller('MapCtrl', function($scope, $rootScope, Locations, Data) {

  $scope.markers = [] ;
  $scope.markers.push(Data.currentPosition);
  $scope.allMarkers = Locations.all();
  //$scope.calibrate = false ;

  $scope.initPosition = {lat: 45.936629, lon: -0.955963, zoom: 13 } ;
  $scope.controls = {zoom: true, rotate: true,  attribution: true  } ;

  $scope.showNamesButton = "Afficher les noms";
  $scope.showNames = false;

  $scope.showOrHideNames = function(){
    $scope.showNames = !$scope.showNames ;
    $scope.allMarkers.forEach(function(element, index, array){
      $scope.allMarkers[index].label = { show : $scope.showNames, message : $scope.allMarkers[index].name, showOnMouseClick: true }  ;
      $scope.showNamesButton = ($scope.showNames==false) ? "Afficher les noms" : "Masquer les noms" ;
    });
  };

  $rootScope.$on('currentPositionChanged',
    function(event, data) {
      $scope.markers = [] ;
      $scope.markers.push(Data.currentPosition);
    }
  );

  $scope.showOrHideNames();

})

.controller('LocationsCtrl', function($scope, $ionicModal, $localStorage, $rootScope, Locations, GeoAlert, Data) {

  $scope.locations = Locations.all();

  $scope.title = '<img src="img/logo.png" height="30" style="vertical-align:middle;"/>' ;

  $rootScope.$on('currentPositionChanged',
	  function(event, data) {
	    $scope.locations = Locations.all();
	  }
  );

  $scope.remove = function(location) {
    Locations.remove(location);
  };

  $scope.intro = ($localStorage.intro === undefined)?true:$localStorage.intro;


  $ionicModal.fromTemplateUrl('templates/intro.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
    if($scope.intro == true){
      $scope.modal.show();
    }
  });

  $scope.hideForever = function(location) {
    $localStorage.intro = false ;
    $scope.modal.hide();
  };

})

.controller('LocationDetailCtrl', function($scope, $rootScope, $stateParams, Locations, GeoAlert, Data) {
  $scope.location = Locations.get($stateParams.locationId);

  $rootScope.$on('currentPositionChanged',
	function(event, data) {
    $scope.location = Locations.get($stateParams.locationId);
		navigator.compass.getCurrentHeading(
		  function(compassHeading) {
			  $scope.heading = Locations.computeDirection($scope.location, Data.currentPosition.lat, Data.currentPosition.lon, compassHeading.magneticHeading);
		  },
		  function (error) {
			  console.log('CompassError: ' + error.code);
		  });
	  }
  );
})

.controller('LocationMapCtrl', function($scope, $rootScope, $stateParams, Locations, Data) {

  $scope.controls = {zoom: true, rotate: true,  attribution: true  } ;
  $scope.location = Locations.get($stateParams.locationId);

  var bestZoom = 17 ;
  if($scope.location.dist <= 0.5){bestZoom = 15 ; }
  else if($scope.location.dist <= 1){bestZoom = 14 ; }
  else if($scope.location.dist <= 3){bestZoom = 12 ; }
  else if($scope.location.dist <= 10){bestZoom = 10 ; }
  else if($scope.location.dist <= 50){bestZoom = 9 ; }
  else if($scope.location.dist <= 200){bestZoom = 6 ; }
  else if($scope.location.dist <= 500){bestZoom = 5 ; }
  else if($scope.location.dist <= 1000){bestZoom = 4 ; }
  else if($scope.location.dist <= 5000){bestZoom = 3 ; }
  else {bestZoom = 1 ; }

  $scope.initPosition = {
	  lat: $scope.location.lat,
	  lon: $scope.location.lon,
	  zoom: bestZoom
	  } ;

  $scope.locPos = { name:$scope.location.name,
    lat:$scope.location.lat,
    lon:$scope.location.lon,
    label: {
      message: '<img src="'+$scope.location.face+'" height="64px">',
      show: true,
      showOnMouseOver: true
    }
  };

  $scope.markers = [] ;
  $scope.markers.push($scope.locPos);
  $scope.markersCurrent = [] ;
  $scope.markersCurrent.push(Data.currentPosition);

  $rootScope.$on('currentPositionChanged',
    function(event, data) {
      $scope.markersCurrent = [] ;
      $scope.markersCurrent.push(Data.currentPosition);
    }
  );
})

.controller('SettingsCtrl', function($scope, $localStorage, Data) {
  $scope.notification = Data.notification ;
  $scope.distance = Data.distance * 1000;
  $scope.intro = $localStorage.intro ;

  console.log("Init scope intro "+$localStorage.intro+" "+$scope.intro);

  $scope.introChange = function() {
    $scope.intro = !$scope.intro;
    $localStorage.intro = $scope.intro ;
    console.log("Modification scope intro "+$localStorage.intro+" "+$scope.intro);
  };
})

.controller('SettingsAProposCtrl', function($scope) {

});
