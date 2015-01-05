'use strict';

/**
 * @ngdoc service
 * @name 8601App.Myservice
 * @description
 * # Myservice
 * Service in the 8601App.
 */
  
  application.factory('CoreFactory', function ($http) {
	  // AngularJS will instantiate a singleton by calling 
	  //"new" on this function

	  var factory = { };

	  var request = { url : 'http://localhost:8080/crud.rest.domain-0.0.1-SNAPSHOT/Student/2323',
			  		  method: 'GET'	,
			  		  cache :  true
			  		};
	  
	  factory.getCostumers  = function() {
			  return $http(request);
	  };
	  return factory;
  });
