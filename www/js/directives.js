/**
 * Created by cosquer on 23/09/2016.
 */
var module = angular.module('starter.directives', []);

module.directive('rotate', function() {
  return {
    link: function(scope, element, attrs) {
      // watch the degrees attribute, and update the UI when it changes
      scope.$watch(attrs.degrees, function(rotateDegrees) {
        console.log(rotateDegrees);
        //transform the css to rotate based on the new rotateDegrees
        element.css({
          'transition':'all linear 0.5s',
          'moz-transform': 'rotate(' + rotateDegrees + 'deg)',
          '-webkit-transform': 'rotate(' + rotateDegrees + 'deg)',
          '-o-transform': 'rotate(' + rotateDegrees + 'deg)',
          '-ms-transform': 'rotate(' + rotateDegrees + 'deg)'
        });
      });
    }
  }
});


