(function(angular) {
    'use strict';
    angular.module('baasic.mobileApp')
        .controller('PlanCtrl', ['$scope', '$state', 'planService',
            function ($scope, $state, planService) {
                   
                $scope.planId = $state.params.planId;
                
                $scope.$root.loader.suspend();
         }       
        ]);
}(angular));                