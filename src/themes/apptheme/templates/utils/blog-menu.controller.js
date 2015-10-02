(function(angular) {
    'use strict';
    angular.module('baasic.mobileApp')
        .controller('MenuController', ['$scope','$state', '$location', '$anchorScroll',
          function ($scope, $state, $location, $anchorScroll) {
			$scope.gotoBottom = function() {
     			$location.hash('contact');
      			$anchorScroll();
    		};
  		}]);

}(angular));