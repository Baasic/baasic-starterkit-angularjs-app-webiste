(function(angular) {
    'use strict';
    angular.module('baasic.mobileApp', [
        'baasic.dynamicResource','headroom', 'ng.picturefill'
    ]);

    angular.module('baasic.blog', [
        'baasic.article', 'headroom', 'ng.picturefill'
    ]);

    angular.module('myMobileApp', [
      'ui.router',
      'btford.markdown',
      'ngTagsInput',
      'baasic.security',
      'baasic.membership',
      'baasic.dynamicResource',
      'baasic.blog',
      'baasic.mobileApp'
    ])
    .config(['$locationProvider', '$urlRouterProvider', '$stateProvider', 'baasicAppProvider', 'baasicAppConfigProvider',
        function config($locationProvider, $urlRouterProvider, $stateProvider, baasicAppProvider, baasicAppConfigProvider) {
            
            baasicAppProvider.create(baasicAppConfigProvider.config.apiKey, {
                apiRootUrl: baasicAppConfigProvider.config.apiRootUrl,
                apiVersion: baasicAppConfigProvider.config.apiVersion
            });

            $locationProvider.html5Mode({
                enabled: true
            });

            $urlRouterProvider.when('', '/');

            $urlRouterProvider.otherwise(function ($injector) {
                var $state = $injector.get('$state');
                $state.go('404');
            });

            $urlRouterProvider.rule(function ($injector, $location) {
                var path = $location.path();
                // check to see if the path ends in '/'
                if (path[path.length - 1] === '/') {
                    $location.replace().path(path.substring(0, path.length - 1));
                }
            });

            $stateProvider
                .state('master', {
                    abstract: true,
                    url: '/',
                    templateUrl: 'templates/master.html'
                })
                .state('master.main', {
                    abstract: true,
                    templateUrl: 'templates/main.html',
                    controller: 'MainCtrl'

                })
                .state('master.main.index', {
                    url: '',
                    templateUrl: 'templates/content-home.html'

                })
                .state('master.main.blog', {
                    url: 'blog?{page}',
                    templateUrl: 'templates/blog/blog-home.html',
                    data:{
                        isBlog:true
                    }
                })
                .state('login', {
                    url: '/login',
                    templateUrl: 'templates/login.html',
                    controller: 'LoginCtrl'
                })
                .state('master.new-blog-post', {
                    url: 'new-blog-post',
                    templateUrl: 'templates/blog/new-blog-post.html',
                    controller: 'NewBlogPostCtrl'

                })
                .state('master.main.blog-detail', {
                    url: 'blog/{slug}',
                    templateUrl: 'templates/blog/blog-post.html',
                    controller: 'BlogPostCtrl',
                    data:{
                        isBlog:true
                    }
                })
                .state('master.blog-edit', {
                    url: 'blog/edit/{slug}',
                    templateUrl: 'templates/blog/blog-post-edit.html',
                    controller: 'BlogPostEditCtrl'

                })
                .state('master.main.blog-search', {
                    url: 'blog-search?{search,tags}',
                    templateUrl: 'templates/blog/blog-search-results.html',
                    controller: 'BlogSearchResultsCtrl',
                    data:{
                        isBlog:true
                    }
                })
                .state('master.main.plans', {
                    url: 'plans?{page}',
                    templateUrl: 'templates/plan/plans.html',

                })
                .state('master.main.new-plan', {
                    url: 'new-plan',
                    templateUrl: 'templates/plan/new-plan.html',
                    controller: 'NewPlanCtrl'
                })
                .state('master.main.plan-detail', {
                    url: 'plan/{planId}',
                    templateUrl: 'templates/plan/plan-detail.html',
                    controller: 'PlanCtrl',

                })
                .state('master.plan-edit', {
                    url: 'plan/edit/{planId}',
                    templateUrl: 'templates/plan/plan-edit.html',
                    controller: 'PlanEditCtrl'
                })
                .state('master.profile-edit', {
                    url: 'profile/edit',
                    templateUrl: 'templates/profile/profile-edit-form.html',
                    controller: 'ProfileEditCtrl'
                })

                .state('master.social', {
                    url: 'edit/social-connections',
                    templateUrl: 'templates/social/social-list.html',
                    controller: 'SocialEditCtrl'
                })
                .state('404', {
                    templateUrl: 'templates/404.html'
                });


        }
    ])
    .constant('recaptchaKey', '6LcmVwMTAAAAAKIBYc1dOrHBR9xZ8nDa-oTzidES')
    .controller('MainCtrl', ['$scope', '$state', 'baasicBlogService',
    	function MainCtrl($scope, $state, blogService) {
    	    blogService.tags.find({
    	        rpp: 4
    	    })
            .success(function (tagList) {
                $scope.tags = tagList.item;
            });

    	    $scope.searchBlog = function searchBlog() {
    	        if ($scope.searchFor) {
    	            $state.go('master.main.blog-search', { search: $scope.searchFor });
    	        }
    	    };

    	    $scope.setEmptyUser = function setEmptyUser() {
    	        $scope.$root.user = {
    	            isAuthenticated: false
    	        };
    	    };

    	    $scope.newBlogPost = function newBlogPost() {
    	        $state.go('master.new-blog-post');
    	    };
    	}
    ])
    .controller('LoginCtrl', ['$scope', '$state',
        function LoginCtrl($scope, $state) {
            $scope.goHome = function goHome() {
                $state.go('master.main.index');
            };
        }
    ])
    .run(['$rootScope', '$window', 'baasicAuthorizationService',
        function moduleRun($rootScope, $window, baasicAuthService) {
            var token = baasicAuthService.getAccessToken();
            var userDetails;
            if (token) {
                userDetails = baasicAuthService.getUser();
            }

            var user;
            if (userDetails !== undefined && userDetails !== null) {
                user = {
                    isAuthenticated: true,
                    isAdmin: userDetails.roles.indexOf('Administrators') !== -1
                };

                angular.extend(user, userDetails);
            } else {
                user = {
                    isAuthenticated: false
                };
            }

            $rootScope.user = user;
        }
    ]);
}(angular));