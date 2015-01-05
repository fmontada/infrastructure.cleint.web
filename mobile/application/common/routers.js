'use strict';

/**
 * @ngdoc function
 * @name 8601App.controller:MyrouteCtrl
 * @description
 */
  application.config(function($routeProvider) {
	  	$routeProvider.
		when('/', {
			templateUrl : 'application/core/views/view.html',
			controller : 'CoreController'
				
		}).when('/login', {
			templateUrl : 'application/modules/login/views/view.html',
			controller : 'LoginController'
		
		}).otherwise({
			redirectTo : '/'
	});
  });