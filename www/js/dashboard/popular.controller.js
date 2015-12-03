(function () {
  'use strict';

  angular
    .module('app.controllers')
    .controller('PopularController', PopularController);

  PopularController.$inject = ['$rootScope', '$scope', 'PFMFactory'];

  /* @ngInject */
  function PopularController($rootScope, $scope, PFMFactory) {

    if (typeof $scope.tracks === 'undefined') {
      getPopularTracks();
    }

    $scope.playTrack = playTrack;

    ////////////////

    function getPopularTracks() {
      $scope.isLoading = true;
      PFMFactory.getPopularTracks()
        .then(function () {
          $scope.tracks = PFMFactory.popular;
          $scope.isLoading = false;
        });
    }

    function playTrack(currentTrack) {
      $rootScope.player.source = 'popular';
      $rootScope.player.currentTrack = currentTrack;
      $rootScope.player.tracks = $scope.tracks;

      $rootScope.$emit('trackChanged');
    }

  }

})();

