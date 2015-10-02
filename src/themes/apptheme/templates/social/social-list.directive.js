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


                .success(function(data) {
                    $scope.socials = data.item;
                });

                $scope.backToDetails = function backToDetails() {
                    $state.go('master.main.index');
                };



                $scope.saveSocial = function saveSocial(){
                    function saveChunk(chunk, arraychunk) {
                        if (chunk) {
                            var promises = [];
                            angular.forEach(chunk, function(socialObj) {
                                promises.push(
                                    socialService.update(socialObj)
                                    );
                            });

                            $q.all(promises)
                                    .then(function(){

                                    },
                                    function (error) {
                                        $scope.error = error.message;
                                    })
                                    .finally(function () {
                                        saveChunk(arraychunk.pop(), arraychunk);
                                    });
                        } else {
                            if ($scope.onSaveFn) {
                                $scope.onSaveFn($scope.$parent);
                            }
                            $state.go('master.main.index');
                        }
                    }

                    if($scope.social){
                        var arraysize = 3;
                        var arraychunk = [];
                        var socialsarray = $scope.socials;
                        var scopeSocial = $scope.social;
                        var changedArray = [];

                        for (var i=0; i<socialsarray.length; i++) {
                            var socialObj = $scope.socials[i].name;
                            if ($scope.social[socialObj].$dirty) {
                                changedArray.push(socialsarray[i]);
                            }
                        }

                            for (var i=0; i<changedArray.length;i += arraysize) {
                                arraychunk.push(changedArray.slice(i, i + arraysize));
                            }

                            saveChunk(arraychunk.pop(), arraychunk);

                    }
                };



            }]
        };

    });

}(angular));