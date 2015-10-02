angular.module('baasic.mobileApp')
    .controller('PlanEditCtrl', ['$scope', '$state', 'planService',
        function PlanEditCtrl($scope, $state, planService) {
            'use strict';
                if (!$scope.$root.user.isAuthenticated) {
                    $state.go('login');
                }
                 $scope.sync = {
                    value1 : true,
                };
                $scope.isFeatured = {
                    value1 : true,
                };
                planService.get($state.params.planId)
                    .success(function (plan) {
                        $scope.plan = plan;
                    })
                    .error(function (error) {
                    })
                    .finally(function () {
                    });
                $scope.backToDetails = function backToDetails() {
                    $state.go('master.main.plans');
                };
        }
    ]);