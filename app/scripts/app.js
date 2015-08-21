'use strict';

/**
 * @ngdoc overview
 * @name mapsApp
 * @description
 * # mapsApp
 *
 * Main module of the application.
 */
angular.module('mapsApp', [ 'ngRoute', 'uiGmapgoogle-maps' ]).config(function ($routeProvider, uiGmapGoogleMapApiProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl',
				controllerAs: 'main'
			})
			.when('/about', {
				templateUrl: 'views/about.html',
				controller: 'AboutCtrl',
				controllerAs: 'about'
			})
			.otherwise({
				redirectTo: '/'
			});
		uiGmapGoogleMapApiProvider.configure({
			key: 'AIzaSyBOuZ5mjKKatmN6x8zdCQoT8ZXrdYnwCi4',
			v: '3.17',
			libraries: 'places'
		});
});
