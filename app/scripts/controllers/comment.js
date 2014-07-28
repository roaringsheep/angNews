angular.module('angQuizApp')
  .controller('CommentCtrl', function ($scope, talkToServer, $routeParams) {
    $scope.findpost = talkToServer.find({
      _id: $routeParams._id
    }).success(function (doc) {
      $scope.post = doc;
    }).error(function () {
      console.log('Find post haz error')
    });

    $scope.comment = {
      body: "say hello",
      like: 0
    };

    $scope.addComment = function () {
      $scope.post.comments.push($scope.comment);
      talkToServer.updateData($scope.post).success(function (data) {
        console.log('comment add success!');
        $scope.comment = {
          body: "",
          like: 0
        };
      }).error(function () {
        console.log('comment error');
      })
    };

    $scope.editPost = function (post) {
      console.log('post', post);
      talkToServer.updateData(post).success(function (data) {
        console.log('edit success!');
      }).error(function (data, status, headers, config) {
        console.log('editPost error: ', data, status, headers);
      });
    };
    $scope.like = function (data) {
      data.like++;
      $scope.editPost($scope.post);
    }

    $scope.dislike = function (data) {
      data.like--;
      $scope.editPost($scope.post);
    }
  });
