angular.module('starter.controllers', [])

.controller('MapCtrl', function($scope, $rootScope, Locations, Data) {
  $scope.initPosition = {lat: 45.936629, lon: -0.955963, zoom: 10 } ;
  $scope.controls = {zoom: true, rotate: true,  attribution: true  } ;

  $scope.markers = [] ;
  $scope.allMarkers = Locations.all();

  $rootScope.$on('currentPositionChanged',
	function(event, data) {
	    $scope.markers = [] ;

		$scope.markers.push(Data.currentPosition);
	}
  );

  function showDetails(marker) {
	console.log("showDetails(marker");
	$scope.allMarkers[marker.id].label.show = true ;
  }

})

.controller('LocationsCtrl', function($scope, $ionicModal, $localStorage, $rootScope, Locations, GeoAlert, Data) {

  $scope.locations = Locations.all();

  $scope.title = '<img src="img/logo_a_rochefort.png" height="30" style="vertical-align:middle;"/>' ;


  $rootScope.$on('currentPositionChanged',
	  function(event, data) {
	    $scope.locations = Locations.all();
	  }
  );

  $scope.remove = function(location) {
    Locations.remove(location);
  };

  $scope.intro = ($localStorage.intro === undefined)?true:$localStorage.intro;

  console.log(">>>>>>> "+$scope.intro+" "+$localStorage.intro);

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
  $scope.markers = [] ;

  $scope.initPosition = {lat: $scope.location.lat, lon: $scope.location.lon, zoom: 17 } ;

  $scope.locPos = { name:$scope.location.name,
    lat:$scope.location.lat,
    lon:$scope.location.lon,
    label: {
      message: '<img src="'+$scope.location.face+'" height="64px">',
      show: true,
      showOnMouseOver: true
    }
  };

  $scope.markers.push($scope.locPos);
  $scope.markersCurrent = [] ;

  $rootScope.$on('currentPositionChanged',
    function(event, data) {
      $scope.markersCurrent = [] ;
      $scope.markersCurrent.push(Data.currentPosition);
    }
  );
})

.controller('SettingsCtrl', function($scope, $localStorage, Data) {
	$scope.notification = Data.notification ;
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
