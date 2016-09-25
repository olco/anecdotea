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

.controller('LocationsCtrl', function($scope, $rootScope, Locations, GeoAlert, Data) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

	
  $scope.locations = Locations.all();
  
  $scope.title = '<img src="img/logo_a_rochefort.png" height="30" style="vertical-align:middle;"/>' ;

  /*GeoAlert.watchPosition(function() {
    //Locations.computeAllDist(Data.currentPosition.lat, Data.currentPosition.lon);
	$scope.locations = Locations.all();
  });*/
  
  $rootScope.$on('currentPositionChanged', 
	function(event, data) { 
	    $scope.locations = Locations.all();
	}
  );

  //$scope.title = "<i class='ion-arrow-up-c'></i> Anecdotes"
  
  $scope.remove = function(location) {
    Locations.remove(location);
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
  
  /*GeoAlert.watchPosition(function(currentPosition) {
    //$scope.location.dist = Locations.computeDist($scope.location, currentPosition.lat, currentPosition.lon);
	$scope.location = Locations.get($stateParams.locationId);

    navigator.compass.getCurrentHeading(
      function(compassHeading) {
        $scope.heading = Locations.computeDirection($scope.location, currentPosition.lat, currentPosition.lon, compassHeading.magneticHeading);
      },
      function (error) {
        console.log('CompassError: ' + error.code);
      });

  });*/
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
  }; ;
  
  $scope.markers.push($scope.locPos);
  $scope.markersCurrent = [] ;
  
  $rootScope.$on('currentPositionChanged', 
	function(event, data) { 
	    $scope.markersCurrent = [] ;
	
		$scope.markersCurrent.push(Data.currentPosition);
	}
  );

})

.controller('SettingsCtrl', function($scope, Data) {
	$scope.notification = Data.notification ;
	$scope.distance = Data.distance * 1000;
});
