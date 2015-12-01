(function () {
  'use strict';

  angular
    .module('app.controllers')
    .controller('LatestController', LatestController);

  LatestController.$inject = ['$scope', 'PFMFactory'];

  /* @ngInject */
  function LatestController($scope, PFMFactory) {

    if (typeof $scope.tracks === 'undefined') {
      getLatestTracks();
    }

    ////////////////

    function getLatestTracks() {
      $scope.isLoading = true;
      PFMFactory.getLatestTracks()
        .then(function () {
          $scope.tracks = PFMFactory.latest;
          $scope.isLoading = false;
        });
    }

  }

})();

