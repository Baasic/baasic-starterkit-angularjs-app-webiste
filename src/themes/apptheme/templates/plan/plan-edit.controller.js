angular.module('baasic.mobileApp')
    .controller('PlanEditCtrl', ['$scope', '$state', 'planService',
        function PlanEditCtrl($scope, $state, planService) {
            'use strict';

            if (!$scope.$root.user.isAuthenticated) {
                $state.go('login');
            }

            $scope.$root.loader.suspend();
            
            $scope.sync = {
                value1 : true,
            };
   
            planService.get($state.params.planId)
                .success(function (plan) {
                    $scope.plan = plan;
                })
                .error(function (error) {
                    console.log(error); // jshint ignore: line
                })
                .finally(function () {
                    $scope.$root.loader.resume();
                });

            var viewModel = { plans: [] }


            $scope.backToDetails = function backToDetails() {
                $state.go('master.main.plans');
            };  


        }
    ]);