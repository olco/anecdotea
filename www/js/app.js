
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'starter.location', 'ngCordova', 'ngStorage', 'openlayers-directive', 'starter.directives', 'starter.filters' ])

.run(function($ionicPlatform, Locations, GeoAlert, Data) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }

    if (window.StatusBar) {
      StatusBar.styleDefault();
    }

    GeoAlert.watchPosition(function() {
      Locations.computeAllDist(Data.currentPosition.lat, Data.currentPosition.lon);
    });

    navigator.vibrate([500, 100, 500, 100, 500]);

  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  .state('tab.locations', {
      url: '/locations',
      views: {
        'tab-locations': {
          templateUrl: 'templates/tab-locations.html',
          controller: 'LocationsCtrl'
        }
      }
    })

  .state('tab.location-detail', {
    url: '/locations/:locationId',
    views: {
      'tab-locations': {
        templateUrl: 'templates/location-detail.html',
        controller: 'LocationDetailCtrl'
      }
    }
  })

  .state('tab.location-map', {
    url: '/locations/map/:locationId',
    views: {
      'tab-locations': {
        templateUrl: 'templates/location-map.html',
        controller: 'LocationMapCtrl'
      }
    }
  })

  .state('tab.map', {
    url: '/map',
    views: {
      'tab-map': {
        templateUrl: 'templates/tab-map.html',
        controller: 'MapCtrl'
      }
    }
  })

  .state('tab.settings', {
    url: '/settings',
    views: {
      'tab-settings': {
        templateUrl: 'templates/tab-settings.html',
        controller: 'SettingsCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise('/tab/locations');

});
