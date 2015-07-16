angular.module('baasic.mobileApp')
    .controller('NewPlanCtrl', ['$scope', '$state',
        function NewPlanCtrl($scope, $state) {
            'use strict';

            if (!$scope.$root.user.isAuthenticated) {
                $state.go('login');
            }
            
            $scope.$root.loader.suspend();

            $scope.savePlan = function savePlan() {
                $state.go('master.main.plans');
            };
            
            $scope.backToDetails = function backToDetails() {
                $state.go('master.main.plans');
            };
        }
    ]);