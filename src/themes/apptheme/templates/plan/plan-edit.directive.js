angular.module('baasic.mobileApp')
    .directive('baasicPlanEdit', ['$parse',
        function baasicPlanList($parse) {
            'use strict';

            return {
                restrict: 'AE',
                scope: true,
                replace: true,
                compile: function () {
                    return {
                        pre: function (scope, elem, attrs) {                            
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
                    function ($scope, $q, planService) {


                        $scope.savePlan = function savePlan(plan) {
                            if (plan) {

                                var promise;
                                if (!plan.id) {
                                    promise = planService.create(plan);
                                } else {
                                    promise = planService.update(plan);
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
                                    });
                            }
                        };

                        $scope.cancelEdit = function (plan) {
                            if (plan) {
                                var cancel;
                                if (!plan.id) {
                                    cancel = $scope.plans.pop();
                                } else {
                                    plan.isCollapsed = true;
                                }
                            }
                        };

                        $scope.collapseToggle = function (plan) {
                            if (!plan.isCollapsed) {
                                plan.isCollapsed = true;

                            } else {
                                plan.isCollapsed = false;

                            }
                        };

                        $scope.setCollapsed = function (plan) {
                            plan.isCollapsed = true;
                        };

                    }
                ],
                templateUrl: 'templates/plan/plan-edit-form.html'
            };
        }
    ]
        );