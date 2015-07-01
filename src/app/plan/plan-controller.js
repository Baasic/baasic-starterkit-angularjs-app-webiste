angular.module('baasic.blog')
    .controller('PlanCtrl', ['$scope', '$state', 'baasicBlogService',
        function PlanCtrl($scope, $state) {
            'use strict';

            $scope.$root.loader.suspend();

     }       
    ]);