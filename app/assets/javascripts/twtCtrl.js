(function() {
  "use strict";

  angular.module("app").controller("twtCtrl", function($scope, $http) {
    function setup() {
      $http.get("http://localhost:3001/api/v1/students.json", {callback: "JSON_CALLBACK"}).then(function(response) {
        $scope.students = response.data;
      });
    }

    setup();

    // $scope.peers = [
    //   {name: "Jimmy",
    //    twitter_handle: "jimmysworld"
    //   },
    //
    //   {name: "Jae",
    //    twitter_handle: "kpower0125"
    //  },
    //
    //   {name: "Kenny",
    //    twitter_handle: "kennysworld"
    //   }
    // ];

    $scope.toggleOrder = function(orderAttribute) {
      if (orderAttribute != $scope.orderAttribute) {
        $scope.isReverse = false;
      } else {
        $scope.isReverse = !$scope.isReverse;
      }
      $scope.orderAttribute = orderAttribute;
    };

  });
}());
