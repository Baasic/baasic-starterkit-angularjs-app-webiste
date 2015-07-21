angular.module('baasic.mobileApp')
    .directive('baasicPlanEdit', ['$parse',
        function baasicPlanList($parse) {
            'use strict';

            return {
                restrict: 'AE',
                scope: true,
                compile: function () {
                    return {
                        pre: function (scope, elem, attrs) {
                            if (attrs.plan) {
                                scope.$parent.$watch(attrs.plan, function (newValue) {
                                    scope.plan = newValue;
                                    scope.isNew = newValue === undefined || newValue === null;
                                });
                            }
                            if (attrs.onSave) {
                                scope.onSaveFn = $parse(attrs.onSave);
                            }

                            if (attrs.onCancel) {
                                scope.onCancelFn = $parse(attrs.onCancel);
                            }
                        }
                    };
                },
               controller: ['$scope', '$q', 'planService',
                    function baasicPlanEditCtrl($scope, $q, planService) {
                        
                        $scope.isNew = true;

                        $scope.state = {};

                        $scope.savePlan = function savePlan() {
                            if ($scope.plan) {
                                $scope.$root.loader.suspend();

                                var promise;
                                if ($scope.isNew) {
                                    promise = planService.create($scope.plan);
                                } else {
                                    promise = planService.update($scope.plan);
                                }

                                promise
                                    .success(function () {
                                        if ($scope.onSaveFn) {
                                            $scope.onSaveFn($scope.$parent);
                                        }
                                    })
                                    .error(function (error) {
                                        $scope.error = error.message;
                                    })
                                    .finally(function () {
                                        $scope.$root.loader.resume();
                                    });
                            }
                        };
                    }
                ],
                templateUrl: 'templates/plan/plan-edit-form.html'
            };
        }
    ]
);