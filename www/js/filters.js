/**
 * Created by cosquer on 23/09/2016.
 */
angular.module('starter.filters', [])

.filter('locationInit', function() {
  return function(input) {
    if(input == -1) {
      return "Récupération de votre position...";
    }
    return "à "+input+" km de votre position";
  }
});
