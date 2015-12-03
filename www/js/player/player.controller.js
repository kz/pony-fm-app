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
    });

    $scope.shrinkPlayer = shrinkPlayer;

    ////////////////

    function shrinkPlayer() {
      $rootScope.player.isInFocus = false;
    }

  }

})();

