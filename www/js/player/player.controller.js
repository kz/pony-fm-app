(function () {
  'use strict';

  angular
    .module('app.controllers')
    .controller('PlayerController', PlayerController);

  PlayerController.$inject = ['$rootScope', '$scope'];

  /* @ngInject */
  function PlayerController($rootScope, $scope) {

    $rootScope.$on('trackChanged', function () {
      $rootScope.player.isInFocus = true;
      $rootScope.player.isActive = true;

      startTrack();
    });

    $scope.shrinkPlayer = shrinkPlayer;
    $scope.startTrack = startTrack;
    $scope.resumeTrack = resumeTrack;
    $scope.pauseTrack = pauseTrack;
    $scope.stopTrack = stopTrack;

    ////////////////

    var media = null;

    function shrinkPlayer() {
      $rootScope.player.isInFocus = false;
    }

    function startTrack() {
      if (media != null) {
        media.stop();
        media.release();
      }

      media = new Media(player.currentTrack.streams.mp3, null, null, onMediaStatusChanged);
      media.play();
    }

    function resumeTrack() {
      media.play();
    }

    function pauseTrack() {
      media.pause()
    }

    function stopTrack() {
      media.stop();
      media.release();
    }

    function onMediaStatusChanged(status) {
      if (status === Media.MEDIA_RUNNING || status === Media.MEDIA_STARTING) {
        player.isPlaying = true;
      } else {
        player.isPlaying = false;
      }
    }

  }

})();

