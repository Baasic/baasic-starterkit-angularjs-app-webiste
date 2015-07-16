angular.module('baasic.mobileApp')
    .controller('SocialEditCtrl', ['$scope', '$state', 'socialService',
        function SocialEditCtrl($scope, $state, socialService) {
            'use strict';

            if (!$scope.$root.user.isAuthenticated) {
                $state.go('login');
            }

            $scope.$root.loader.suspend();
            
   
            socialService.get($state.params.socialId)
            
                .success(function (social) {
                    $scope.social = social;
                })
                .error(function (error) {
                    console.log(error); // jshint ignore: line
                })
                .finally(function () {
                    $scope.$root.loader.resume();
                });

            $scope.backToDetails = function backToDetails() {
                $state.go('master.main.index');
            };
        }
    ]);