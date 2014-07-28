'use strict';

/**
 * @ngdoc overview
 * @name angQuizApp
 * @description
 * # angQuizApp
 *
 * Main module of the application.
 */
angular
  .module('angQuizApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/comment/:_id', {
        templateUrl: 'views/comment.html',
        controller: 'CommentCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    $httpProvider.defaults.useXDomain = true;
  });
