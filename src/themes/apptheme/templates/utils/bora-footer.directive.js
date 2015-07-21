(function(angular) {
    'use strict';
    angular.module('baasic.mobileApp')
        .directive('boraFooter', function() {        	
         return {
            restrict: 'E',
            templateUrl: 'templates/utils/bora-footer.html',
            scope: true
        };
    });
    
}(angular));       