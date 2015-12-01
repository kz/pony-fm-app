(function () {
  'use strict';

  angular
    .module('app.controllers')
    .controller('PlayerController', PlayerController);

  PlayerController.$inject = ['$scope'];

  /* @ngInject */
  function PlayerController($scope) {

    $rootScope.$on('trackListChanged', function(event, data) {

    });



    ////////////////


  }

})();

