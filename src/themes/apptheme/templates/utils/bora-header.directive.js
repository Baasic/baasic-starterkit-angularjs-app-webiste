(function(angular) {
    'use strict';
    angular.module('baasic.mobileApp')
        .directive('boraHeader', function() {        	
         return {
            restrict: 'E',
            templateUrl: 'templates/utils/bora-header.html',
            scope: true,
            controller: ['$scope','$state', 
		          function($scope, $state) {
		     		   $scope.isBlog = $state.$current.data;
		  	}]

        };
    });
    
}(angular));        