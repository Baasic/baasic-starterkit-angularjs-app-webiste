angular.module('baasic.mobileApp')
    .directive('baasicSocialEdit', ['$parse',
        function baasicSocialList($parse) {
            'use strict';

            return {
                restrict: 'AE',
                scope: true,
                compile: function () {
                    return {
                        pre: function (scope, elem, attrs) {
                            if (attrs.socialConnection) {
                                scope.$parent.$watch(attrs.socialConnection, function (newValue) {
                                    scope.socialConnection = newValue;
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
                controller: ['$scope', '$q', 'socialService',
                    function baasicSocialEditCtrl($scope, $q, socialService) {
                        function whitespace(c) {
                            return (
                                (' ' === c) ||
                                ('\n' === c) ||
                                ('\t' === c)
                            );
                        }

                        $scope.isNew = true;

                        $scope.state = {};

                        $scope.saveSocialConnection = function saveSocialConnection() {
                            if ($scope.socialConnection.$valid) {
                                $scope.$root.loader.suspend();

                                var promise;
                                if ($scope.isNew) {
                                    promise = socialService.create($scope.socialConnection);
                                } else {
                                    promise = socialService.update($scope.socialConnection);
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

                        $scope.cancelEdit = function cancelEdit() {
                            if ($scope.onCancelFn) {
                                $scope.onCancelFn($scope.$parent);
                            }
                        };

                        $scope.getHtml = function getHtml(content) {
                            return markdownConverter.makeHtml(content);
                        };

                        $scope.setViewMode = function setViewMode(mode) {
                            $scope.state.conentent.viewMode = mode;
                        };

                           // return deferred.promise;
                        }
                    
                ],
                templateUrl: 'templates/social/edit-social-networks.html'
            };
        }
    ]
    );