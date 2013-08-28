function Controller($scope) {
    
    'use strict';
    
    
	$scope.items = [
        'a thing',
        'another thing',
        'a watermelon'
    ];
    $scope.orig = $scope.items.length;
    
    $scope.newItem = 'a fish';

	$scope.addItem = function (item) {
		$scope.items.push(item);
	};
    
    $scope.removeItem = function (index) {
        $scope.items.splice(index, 1);
    };
}