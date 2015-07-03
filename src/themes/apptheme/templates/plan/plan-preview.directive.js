(function(angular) {
    'use strict';
    angular.module('baasic.mobileApp')
        .directive('planPreview', function() {        	
         return {
            restrict: 'E',
            templateUrl: 'templates/plan/plan-preview.html',
            scope: {
                'planId': '='
            },
            controller:  ['$scope', 'planService', function($scope, planService) {
               $scope.plan = {};
               
               planService.get($scope.planId, {})
                .success(function(data) {
                    $scope.plan = data;
                });
            }]
        };
    });
    
}(angular));        