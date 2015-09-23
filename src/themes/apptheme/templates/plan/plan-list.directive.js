(function(angular) {
    'use strict'
    angular.module('baasic.mobileApp')
    .directive('planList', function(){

       return {
        restrict: 'AE',
        templateUrl:'templates/plan/plan-list.html',
        scope: true,

        compile: function () {
            return {
                pre: function (scope, elem, attrs) {                    
                    if (attrs.onSave) {
                        scope.onSaveFn = eval(attrs.onSave);
                    }

                    if (attrs.onCancel) {
                        scope.onCancelFn = eval(attrs.onCancel);
                    }
                }
            };
        },

        controller: ['$scope', '$state', '$q', 'planService', function($scope, $state, $q ,planService) {

            if (!$scope.$root.user.isAuthenticated) {
                $state.go('login');
            }

            $scope.plans = [];

            planService.find({
                page: 1,
                rpp: 20,
                sort: 'sync|desc'
            })
            .success(function(data) {
                $scope.plans = data.item;

                $scope.pagerData = {
                    currentPage: data.page,
                    pageSize: data.recordsPerPage,
                    totalRecords: data.totalRecords
                };
            });

            $scope.deletePlan = function(plan) {
                if (confirm('Are you sure you want to delete this plan?')) {

                    planService.remove($scope.plans[plan])
                    .success(function () {
                        $scope.plans.splice(plan,1);
                        $state.go('master.main.plans');
                    })
                    .error(function (error) {
                    })
                    .finally(function () {
                    });
                }
            };

            $scope.add = function() {
                $scope.plans.push({});
            };





        }],

}
});

}(angular));