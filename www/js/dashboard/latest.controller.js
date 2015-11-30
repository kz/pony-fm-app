(function () {
  'use strict';

  angular
    .module('app.controllers')
    .controller('LatestController', LatestController);

  LatestController.$inject = ['$scope', 'PFMFactory'];

  /* @ngInject */
  function LatestController($scope, PFMFactory) {
    var vm = this;
    vm.title = 'LatestController';

    getLatestTracks();

    ////////////////

    function getLatestTracks() {
      PFMFactory.getDashboardTracks()
        .then(function(){
          $scope.latestTracks = PFMFactory.latest;
        });
    }
  }

})();

