var myApp = angular.module('myApp', []);

myApp.value('myItems', [
    'a thing',
    'another thing',
    'a watermelon'
]);

myApp.service('myService', function (myItems) {
    
    'use strict';
    
    this.addItem = function (item) {
		myItems.push(item);
	};
    
    this.removeItem = function (index) {
        myItems.splice(index, 1);
    };
    
});

myApp.controller('MyController', function ($scope, myItems, myService) {
    
    'use strict';
    
	$scope.items = myItems;
    
    $scope.newItem = 'a fish';

	$scope.addItem = myService.addItem;
    
    $scope.removeItem = myService.removeItem;
});
