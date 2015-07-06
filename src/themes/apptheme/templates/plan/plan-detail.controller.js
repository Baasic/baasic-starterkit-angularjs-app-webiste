(function(angular) {
    'use strict';
    angular.module('baasic.mobileApp')
        .controller('PlanCtrl', ['$scope', '$state', 'baasicBlogService',
            function ($scope, $state) {
                $scope.$root.loader.suspend();
    
                $scope.planId = $state.params.planId;
         }       
        ]);
}(angular));                