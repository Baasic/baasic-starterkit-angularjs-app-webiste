(function(angular) {
    'use strict';
    angular.module('baasic.mobileApp')
        .directive('boraFooter', function() {        	
         return {
            restrict: 'E',
            templateUrl: 'templates/utils/bora-footer.html',
            scope: true
        }/* - prepared for dynamic soc. icons// ,
        controller: ['$scope', 'socialIcons', function($scope, socialIcons){
			$scope.icon = {};

			socialIcons.get($scope.iconId, {})
				.success(function(data){
					$scope.icon = data;
				});
        }]

        */;
    });
    
}(angular));        