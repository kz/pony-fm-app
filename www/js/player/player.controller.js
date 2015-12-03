(function () {
  'use strict';

  angular
    .module('app.controllers')
    .controller('PlayerController', PlayerController);

  PlayerController.$inject = ['$rootScope', '$scope'];

  /* @ngInject */
  function PlayerController($rootScope, $scope) {

    $rootScope.$on('trackChanged', function() {
        $rootScope.player.isActive = true;
    });

    ////////////////


  }

})();

