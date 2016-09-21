angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('MapCtrl', function($scope, GeoAlert) {
  $scope.initPosition = {lat: 45.937987, lon: -0.955963, zoom: 13 } ;
  $scope.controls = {zoom: true, rotate: true,  attribution: true  } ;

  GeoAlert.watchPosition(function(currentPosition) {
    console.log("Callback > "+currentPosition);
    $scope.markers = currentPosition;
  });
})

.controller('LocationsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.title = "<i class='ion-arrow-up-c'></i> Anecdotes"
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
