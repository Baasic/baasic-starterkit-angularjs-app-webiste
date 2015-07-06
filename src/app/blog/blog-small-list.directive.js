angular.module('baasic.blog')
    .directive('baasicBlogSmallList', ['$parse',
        function baasicBlogSmallList($parse) {
            'use strict';

            var pageSizeFn;

            return {
                restrict: 'AE',
                scope: true,
                compile: function (elem, attrs) {
                    if (attrs.pageSize) {
                        pageSizeFn = $parse(attrs.pageSize);
                    } else {
                        pageSizeFn = function () { return 10; };
                    }
                },
                controller: ['$scope', '$stateParams', 'baasicBlogService',
                    function baasicBlogListCtrl($scope, $stateParams, blogService) {
                        function loadBlogs() {
                            $scope.$root.loader.suspend();

                            blogService.find({
                                statuses: ['published'],
                                page: $stateParams.page || 1,
                                rpp: pageSizeFn($scope),
                                orderBy: 'publishDate',
                                orderDirection: 'desc'
                            })
                            .success(function parseBlogList(blogList) {
                                $scope.pagerData = {
                                    currentPage: blogList.page,
                                    pageSize: blogList.recordsPerPage,
                                    totalRecords: blogList.totalRecords
                                };

                                $scope.blogList = blogList;

                                $scope.hasBlogs = blogList.totalRecords > 0;
                            })
                            .error(function (error) {
                                conosle.log(error); // jshint ignore: line
                            })
                            .finally(function () {
                                $scope.$root.loader.resume();
                            });
                        }

                        $scope.hasBlogs = true;

                        loadBlogs();
                        
                        $scope.random = function() {
                            return 0.5 - Math.random();
                        };  
                    }
                ],
                templateUrl: 'templates/blog/blog-small-list.html'
            };
        }
    ]
    );