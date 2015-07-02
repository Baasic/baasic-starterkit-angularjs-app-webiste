(function(angular) {
    'use strict';
    angular.module('baasic.blog')
        .directive('boraHeader', function() {        	
         return {
            restrict: 'A',
            templateUrl: 'templates/bora-header.html',
            scope: true
        };
    });
    
}(angular));        