angular.module('baasic.mobileApp')
    .controller('SocialEditCtrl', ['$scope', '$state', 'socialService',
        function SocialEditCtrl($scope, $state, socialService) {
            'use strict';

            if (!$scope.$root.user.isAuthenticated) {
                $state.go('login');
            }            
   
            socialService.find()
            
                .success(function (social) {
                    $scope.social = social.item;
                })
                .error(function (error) {
                
                })
                .finally(function () {
                });




        }
    ]);