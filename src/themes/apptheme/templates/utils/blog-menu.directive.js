(function(angular) {
    'use strict';
    angular.module('baasic.mobileApp')
        .directive('blogMenu', function() {        	
         return {
            restrict: 'E',
            templateUrl: 'templates/utils/blog-menu.html',
            scope: true,
            controller: 'MenuController'
        };
    });        
}(angular));        