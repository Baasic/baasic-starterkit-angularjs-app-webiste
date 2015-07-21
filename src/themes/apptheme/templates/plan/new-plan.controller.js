angular.module('baasic.mobileApp')
    .controller('NewPlanCtrl', ['$scope', '$state',
        function NewPlanCtrl($scope, $state) {
            'use strict';

            if (!$scope.$root.user.isAuthenticated) {
                $state.go('login');
            }
            

            $scope.savePlan = function() {
                $state.go('master.main.plans');
            };
            
            $scope.backToDetails = function() {
                $state.go('master.main.plans');
            };
        }
    ]);