angular.module('starter.controllers', [])

.controller('MapCtrl', function($scope, GeoAlert) {
  $scope.initPosition = {lat: 45.937987, lon: -0.955963, zoom: 13 } ;
  $scope.controls = {zoom: true, rotate: true,  attribution: true  } ;

  GeoAlert.watchPosition(function(currentPosition) {
    console.log("Callback in MapCtrl > "+currentPosition);
    $scope.markers = [] ;
    $scope.markers.push(currentPosition);
  });
})

.controller('LocationsCtrl', function($scope, Locations, Locations, GeoAlert) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.title = '<img src="img/logo.svg" height="30" style="vertical-align:middle;"/>&nbsp;Lieux à proximité' ;

  GeoAlert.watchPosition(function(currentPosition) {
    console.log("Callback in LocationDetailCtrl > " + currentPosition);
    Locations.computeAllDist(currentPosition.lat, currentPosition.lon);
  });

  //$scope.title = "<i class='ion-arrow-up-c'></i> Anecdotes"
  $scope.locations = Locations.all();
  $scope.remove = function(location) {
    Locations.remove(location);
  };
})

.controller('LocationDetailCtrl', function($scope, $stateParams, Locations, GeoAlert) {
  $scope.location = Locations.get($stateParams.locationId);

  GeoAlert.watchPosition(function(currentPosition) {
    console.log("Callback in LocationDetailCtrl > "+currentPosition);
    $scope.location.dist = Locations.computeDist($scope.location, currentPosition.lat, currentPosition.lon);

    navigator.compass.getCurrentHeading(
      function(compassHeading) {
        console.log('Heading: ' + compassHeading.magneticHeading);
        $scope.heading = Locations.computeDirection($scope.location, currentPosition.lat, currentPosition.lon, compassHeading.magneticHeading);
        console.log('Dist: ' + $scope.heading );
      },
      function (error) {
        console.log('CompassError: ' + error.code);
      });

  });
})

.controller('LocationMapCtrl', function($scope, $stateParams, Locations) {

  $scope.controls = {zoom: true, rotate: true,  attribution: true  } ;
  $scope.location = Locations.get($stateParams.locationId);
  $scope.markers = [] ;

  $scope.initPosition = {lat: $scope.location.lat, lon: $scope.location.lon, zoom: 17 } ;

  var locPos =
  { name:$scope.location.name,
    lat:$scope.location.lat,
    lon:$scope.location.lon,
    label: {
      message: '<img src="'+$scope.location.face+'" height="64px">',
      show: true,
      showOnMouseOver: true
    }
  };

  $scope.markers.push(locPos);

  $scope.go = function() {
    startApp.set({ /* params */
      "action": "VIEW",
      "uri":"geo:"+location.lon+","+location.lat+""
    }).start();

  }
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
