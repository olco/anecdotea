/**
 * Created by cosquer on 23/09/2016.
 */
angular.module('starter.filters', [])

.filter('locationInit', function(Data) {
  return function(input) {
    if(input == -1) {
      return "Récupération de votre position...";
    }
	else{
		var valeur = (input < 1) ? input * 1000 : input ;
		var unite  = (input < 1) ? "m" : "km" ;
		if(input < Data.distance) {
		  return "Vous êtes proche ! ("+valeur+" "+unite+")";
		}
		else{
		  return "à "+valeur+" "+unite+" de votre position";
		}
	}
    
  }
})


;
