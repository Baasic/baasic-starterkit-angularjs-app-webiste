(function(angular) {
    'use strict'
    angular.module('baasic.mobileApp')
        .directive('socialListFooter', function(){

         return {
            restrict: 'E',
            templateUrl:'templates/social/social-footer.html',
            scope: {},
            controller: ['$scope', '$q', 'socialService', function social($scope, $q, socialService) {
                $scope.socials =[];

                socialService.find({
                    page: 1,
                    rpp: 12,
                    sort: 'order|asc'
                })
                .success(function(data) {
                    $scope.socials = data.item;
                });
            }]
        };

    });
    
}(angular));   