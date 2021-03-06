'use strict';

/**
 * @ngdoc function
 * @name 8601App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the 8601App
 */

application.controller('CoreController', function ($scope, CoreFactory) {
	function init(){
		CoreFactory.getCostumers().
		  success(function(data, status, headers, config) {
		    // this callback will be called asynchronously
		    // when the response is available
			  $scope.costumers = data;
		  }).
		  error(function(data, status, headers, config) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		});
	}
	init();
});