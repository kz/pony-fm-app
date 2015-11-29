(function () {
  'use strict';

  angular
    .module('app.controllers')
    .controller('PopularController', PopularController);

  PopularController.$inject = [$scope];

  /* @ngInject */
  function PopularController($scope) {
    var vm = this;
    vm.title = 'PopularController';



    ////////////////


  }

})();

