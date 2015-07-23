angular.module('baasic.mobileApp')
    .controller('ProfileEditCtrl', ['$scope', '$state', 'profileService',
        function ProfileDataEditCtrl($scope, $state, profileService) {
            'use strict';

            if (!$scope.$root.user.isAuthenticated) {
                $state.go('login');
            }

            $scope.$root.loader.suspend();

            profileService.get($state.params.profileId)
                .success(function (profile) {
                    $scope.profile = profile;
                })
                .error(function (error) {
                
                })
                .finally(function () {
                    $scope.$root.loader.resume();
                });

            $scope.backToDetails = function backToDetails() {
                $state.go('master.main.profile-edit', { id: profileId });
            };
        }
    ]);