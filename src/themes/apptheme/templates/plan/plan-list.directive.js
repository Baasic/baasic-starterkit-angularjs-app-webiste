(function(angular) {
    'use strict'
    angular.module('baasic.mobileApp')
        .directive('planList', function(){

         return {
            restrict: 'E',
            templateUrl:'templates/plan/plan-list.html',
            scope: {},
            controller: ['$scope', '$state', 'planService', function($scope, $state, planService) {
                
                if (!$scope.$root.user.isAuthenticated) {
                    $state.go('login');
                }


                $scope.plans =[];

                planService.find({
                    page: 1,
                    rpp: 10,
                    sort: 'sync|asc'
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


                $scope.deletePlan = function deletePlan(plan) {
                /* global confirm */
                if (confirm('Are you sure you want to delete this plan?')) {
                   
                    planService.remove($scope.plans[plan])
                        .success(function () {
                            $scope.plans.splice(plan,1);
                            $state.go('master.main.plans');                            
                        })
                        .error(function (error) {
                            console.log(error); // jshint ignore: line
                        })
                        .finally(function () {
                           
                        });
                }
            };



            }]
        };

    });
    
}(angular));   