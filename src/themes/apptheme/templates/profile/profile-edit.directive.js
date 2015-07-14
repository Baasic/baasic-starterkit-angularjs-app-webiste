(function(angular) {
    'use strict';
    angular.module('baasic.mobileApp')
        .directive('profileEdit', function() {        	
         return {
            restrict: 'E',
            templateUrl: 'templates/profile/profile-edit-form.html',
            scope: {
                'profileId': '='
            },
            controller:  ['$scope','profileService', function($scope, profileService) {
               $scope.profile = {};
               
               profileService.get($scope.profileId, {})
                .success(function(data) {
                    $scope.profile = data;
                });
            }]
        };
    });
    
}(angular));      