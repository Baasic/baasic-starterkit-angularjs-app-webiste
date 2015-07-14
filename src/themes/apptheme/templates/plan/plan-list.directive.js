(function(angular) {
    'use strict'
    angular.module('baasic.mobileApp')
        .directive('planList', function(){

         return {
            restrict: 'E',
            templateUrl:'templates/plan/plan-list.html',
            scope: {},
            controller: ['$scope', 'planService', function($scope, planService) {
                $scope.plans =[];

                planService.find({
                    page: 1,
                    rpp: 10,
                    sort: 'planname|asc'
                })
                //make sorting and filtering with code above

                .success(function(data) {
                    $scope.plans = data.item;

                    $scope.pagerData = {
                        currentPage: data.page,
                        pageSize: data.recordsPerPage,
                        totalRecords: data.totalRecords
                        };

                });

            }]
        };

    });
    
}(angular));   