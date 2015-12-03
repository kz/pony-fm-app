(function () {
  'use strict';

  angular
    .module('app.controllers')
    .controller('LatestController', LatestController);

  LatestController.$inject = ['$rootScope', '$scope', 'PFMFactory'];

  /* @ngInject */
  function LatestController($rootScope, $scope, PFMFactory) {

    if (typeof $scope.tracks === 'undefined') {
      getLatestTracks();
    }

    $scope.playTrack = playTrack;

    ////////////////

    function getLatestTracks() {
      $scope.isLoading = true;
      PFMFactory.getLatestTracks()
        .then(function () {
          $scope.tracks = PFMFactory.latest;
          $scope.isLoading = false;
        });
    }

    function playTrack(currentTrack) {
      $rootScope.player.source = 'latest';
      $rootScope.player.currentTrack = currentTrack;
      $rootScope.player.tracks = $scope.tracks;

      $rootScope.$emit('trackChanged');
    }

  }

})();

