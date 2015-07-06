(function(angular) {
    'use strict';
    angular.module('baasic.mobileApp')
        .directive('planList', function() {        	
         return {
            restrict: 'E',
            templateUrl: 'templates/plan/plan-list.html',
            scope: true,

        };
    });
    
}(angular));   