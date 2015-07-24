angular.module('baasic.mobileApp')
    .directive('baasicPlanEdit', ['$parse',
        function baasicPlanList($parse) {
            'use strict';

            return {
                restrict: 'AE',
                scope: true,
                replace:true,
                compile: function () {
                    return {
                        pre: function (scope, elem, attrs) {
                            if (attrs.plan) {
                                scope.plan = attrs.plan;
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
                    function ($scope, $q, planService) {
                        

                        $scope.savePlan = function savePlan(plan) {
                            if ($scope.plan) {
                               
                                var promise;
                                if (!$scope.plan.id) {
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
                                    });
                            }
                        };

                        $scope.cancelEdit = function(){
                            if ($scope.plan){
                                var cancel;
                                    if(!$scope.plan.id){
                                        cancel = $scope.plans.pop();
                                    } else {
                                        $scope.plan.isCollapsed = true;
                                        
                                    }

                                    
                                    }
                            
                            };

                        $scope.collapseToggle = function(){
                            if(!$scope.plan.isCollapsed){
                                $scope.plan.isCollapsed = true;
                               
                            } else {
                                $scope.plan.isCollapsed = false;
                                
                            }   
                        };

                        $scope.setCollapsed = function(){
                            $scope.plan.isCollapsed = true;
                        };


                    
                        }
                ],                
                templateUrl: 'templates/plan/plan-edit-form.html'
            };
        }
    ]
);