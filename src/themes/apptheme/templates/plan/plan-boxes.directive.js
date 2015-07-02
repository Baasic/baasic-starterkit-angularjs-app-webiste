(function(angular) {
    'use strict';
    angular.module('baasic.mobileApp')
        .directive('planBoxes', function() {        	
         return {
            restrict: 'E',
            templateUrl: 'templates/plan/plan-boxes.html',
            scope: {},
            controller:  ['$scope', 'planService', function($scope, planService) {
               $scope.plans = [];
               
               planService.find({
                   page: 1,
                   rpp: 10,
                   sort: 'name|asc'                   
               })
                .success(function(data) {
                    $scope.plans = data.item;
                }); 
               
            }]
        };
    });
    
}(angular));        