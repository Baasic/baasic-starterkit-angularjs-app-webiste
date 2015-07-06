(function(angular) {
    angular.module('baasic.mobileApp')
        .controller('PlanFilterSorterCtrl', ['$scope', function($scope){
        	$scope.plans = [
        	//dummy / mockup plans just for test - it will be deleted

        	{id:1,name:'Maestral',time:30 + ' days', description:'Free Plan', price:0},
        	{id:2,name:'Tramontane',time:60 + ' days', description:'Best for small aplications', price:9},
        	{id:3,name:'Bora',time:90 + ' days', description:'Ideal for enterprise level apps', price:22},
        	{id:4,name:'Maestral',time:30 + ' days', description:'Free Plan', price:0},
        	{id:5,name:'Tramontane',time:60 + ' days', description:'Best for small aplications', price:9},
        	{id:6,name:'Bora',time:90 + ' days', description:'Ideal for enterprise level apps', price:22}, 
        	{id:7,name:'Maestral',time:30 + ' days', description:'Free Plan', price:0},
        	{id:8,name:'Tramontane',time:60 + ' days', description:'Best for small aplications', price:9},
        	{id:9,name:'Bora',time:90 + ' days', description:'Ideal for enterprise level apps', price:22}, 
        	{id:10,name:'Maestral',time:30 + ' days', description:'Free Plan', price:0},
        	{id:11,name:'Tramontane',time:60 + ' days', description:'Best for small aplications', price:9},
        	{id:12,name:'Bora',time:90 + ' days', description:'Ideal for enterprise level apps', price:22}   

        	];
        	$scope.filterFunction = function(element)
        	{
        		return element.name.match(/^Ma/) ? true : false;
        	};
            $scope.sort = function(keyname){
                $scope.sortKey = keyname;
                $scope.reverse = !$scope.reverse;
            }
        }]);
}(angular));                
