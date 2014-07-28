'use strict';

angular.module('angQuizApp')
  .factory('talkToServer', function ($http) {

    var factory = {};

    factory.getData = function () {
      return $http.jsonp('http://localhost:3000/pageData?callback=JSON_CALLBACK');
    };

    factory.find = function (data) {
      return $http({
        url: 'http://localhost:3000/find',
        method: "POST",
        data: data,
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        }
      });
    };

    factory.postData = function (data) {
      return $http({
        url: 'http://localhost:3000/create',
        method: "POST",
        data: data,
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        }
      });
    };

    factory.deleteData = function (id) {
      return $http({
        url: 'http://localhost:3000/delete',
        method: "POST",
        data: id,
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        }
      });
    };

    factory.updateData = function (data) {
      return $http({
        url: 'http://localhost:3000/update',
        method: 'POST',
        data: data,
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        }
      });
    };

    factory.comment = function(data) {
      return $http({
        url: 'http://localhost:3000/comment',
        method: 'POST',
        data: data,
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        }
      });
    };
    
    return factory;
  });
