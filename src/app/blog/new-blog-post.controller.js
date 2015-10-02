angular.module('baasic.mobileApp')
    .controller('NewBlogPostCtrl', ['$scope', '$state',
        function NewBlogPostCtrl($scope, $state) {
            'use strict';

            if (!$scope.$root.user.isAuthenticated) {
                $state.go('login');
            }

            $scope.blogSaved = function blogSaved() {
                $state.go('master.main.blog');
            };

            $scope.cancelEdit = function cancelEdit() {
                $state.go('master.main.blog');
            };
        }
    ]);