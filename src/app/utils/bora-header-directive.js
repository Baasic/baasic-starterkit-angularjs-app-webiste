angular.module('baasic.blog')
    .directive('boraHeader', function() {
    	'use strict';
     return {
        restrict: 'A',
        templateUrl: 'templates/bora-header.html',
        scope: true
    };
});

