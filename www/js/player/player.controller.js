(function () {
  'use strict';

  angular
    .module('app.controllers')
    .controller('PlayerController', PlayerController);

  PlayerController.$inject = ['$rootScope', '$scope', '$state'];

  /* @ngInject */
  function PlayerController($rootScope, $scope, $state) {

    $rootScope.$on('trackChanged', function () {
      $rootScope.player.isInFocus = true;
      $rootScope.player.isActive = true;

      //startTrack();
    });

    $scope.openPlayer = openPlayer;
    $scope.shrinkPlayer = shrinkPlayer;
    $scope.openSource = openSource;

    $scope.startTrack = startTrack;
    $scope.resumeTrack = resumeTrack;
    $scope.pauseTrack = pauseTrack;
    $scope.stopTrack = stopTrack;

    ////////////////

    var media = null;

    function openPlayer() {
      $rootScope.player.isInFocus = true;
    }

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
      $rootScope.player.isPlaying = !!(status === Media.MEDIA_RUNNING || status === Media.MEDIA_STARTING);
    }

    function openSource() {
      switch ($rootScope.player.source) {
        case 'latest':
          $state.go('dashboard.latest');
          break;
        case 'popular':
          $state.go('dashboard.popular');
          break;
        default:
          $state.go('dashboard.popular');
          break;
      }

      shrinkPlayer();
    }

  }

})();

