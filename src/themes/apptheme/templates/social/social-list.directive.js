(function(angular) {
    'use strict'
    angular.module('baasic.mobileApp')
        .directive('socialList', function(){

         return {
            restrict: 'E',
            templateUrl:'templates/social/edit-social-networks.html',
            scope: {},
            controller: ['$scope', '$q', '$state', 'socialService', function social($scope, $q, $state, socialService) {
                $scope.socials =[];

                socialService.find({
                    page: 1,
                    rpp: 15,
                    sort: 'order|asc'
                })
                //make sorting and filtering with code above

                .success(function(data) {
                    $scope.socials = data.item;

                    $scope.pagerData = {
                        currentPage: data.page,
                        pageSize: data.recordsPerPage,
                        totalRecords: data.totalRecords
                        };
                });

           

                $scope.backToDetails = function backToDetails() {
                    $state.go('master.main.index');

                };

                $scope.saveSocial = function saveSocial(){
                    if($scope.social){
                         //$scope.$root.loader.suspend();

                        var promises = [];
                                                
                        //spinner
                        for (var i = 0; i < $scope.socials.length; i++) {
                            promises.push(socialService.update($scope.socials[i]));                            
                        }

                        var allUpdatePromise = $q.all(promises);

                        allUpdatePromise
                            .then(function(){
                                if ($scope.onSaveFn) {
                                    $scope.onSaveFn($scope.$parent);
                                    console.log('success');
                                }
                            },
                            function (error) {
                                $scope.error = error.message;
                            })
                            .finally(function () {                                
                                $state.go('master.main.index');
                            });
                    }

                    
                };



            }]
        };

    });
    
}(angular));   