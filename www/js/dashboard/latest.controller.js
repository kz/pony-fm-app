(function () {
  'use strict';

  angular
    .module('app.controllers')
    .controller('LatestController', LatestController);

  LatestController.$inject = [$scope];

  /* @ngInject */
  function LatestController($scope) {
    var vm = this;
    vm.title = 'LatestController';



    ////////////////


  }

})();

