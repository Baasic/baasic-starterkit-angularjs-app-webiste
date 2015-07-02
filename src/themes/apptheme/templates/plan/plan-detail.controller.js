(function(angular) {
    'use strict';
    angular.module('baasic.blog')
        .controller('PlanCtrl', ['$scope', '$state', 'baasicBlogService',
            function ($scope, $state) {
                $scope.$root.loader.suspend();
    
                $scope.planId = $state.params.planId;
         }       
        ]);
}(angular));                