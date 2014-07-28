'use strict';

/**
 * @ngdoc function
 * @name angQuizApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angQuizApp
 */
angular.module('angQuizApp')
  .controller('MainCtrl', function ($scope, talkToServer) {

    $scope.getData = talkToServer.getData().success(function (dataz) {
      $scope.dataz = dataz;
    }).error(function (data, status, headers, config) {
      console.log('getData Error: ', data, status, headers);
    });
    $scope.post = {
      title: '',
      link: 'http://',
      like: 0,
      comments: []
    };

    $scope.postData = function () {
      talkToServer.postData($scope.post).success(
        function (data) {
          $scope.post = {
            title: '',
            link: 'http://',
            like: 0,
            comments: []
          };
          $scope.dataz.push(data);
        }).error(function (data, status, headers, config) {
        console.log('postData Error:', data, status, headers);
      });
    };

    $scope.deletePost = function (id) {
      console.log('delete fired', id);
      talkToServer.deleteData({'id': id}).success(
        function (data) {
          console.log('success!');
          var index = $scope.findById($scope.dataz,id);
          $scope.dataz.splice(index,1);
        }).error(function (data, status, headers, config) {
        console.log('deletePost Error: ', data, status, headers);
      });
    };

    $scope.editPost = function (post) {
      console.log('post',post);
      talkToServer.updateData(post).success(function(data){
        console.log('edit success!');
      }).error(function (data, status, headers, config) {
        console.log('editPost error: ', data, status, headers);
      });
    };

    $scope.upVote = function (data) {
      data.like++;
      $scope.editPost(data);
    };

    $scope.downVote = function (data) {
      data.like--;
      $scope.editPost(data);
    };

    $scope.findById = function (array, id) {
      var index = -1;
      for(var i=0; i<array.length; i++) {
        if(array[i]._id == id) {
          index = i;
        } 
      }
      return index;
    }
  });
