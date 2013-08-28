function Greeter($scope) {
    
    'use strict';
    
	$scope.name = 'Jan';

	$scope.greet = function () {
		return 'hi ' + $scope.name;
	};
    
}