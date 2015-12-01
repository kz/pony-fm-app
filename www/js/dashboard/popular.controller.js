(function () {
  'use strict';

  angular
    .module('app.controllers')
    .controller('PopularController', PopularController);

  PopularController.$inject = ['$scope', 'PFMFactory'];

  /* @ngInject */
  function PopularController($scope, PFMFactory) {

    if (typeof $scope.tracks === 'undefined') {
      getPopularTracks();
    }

    ////////////////

    function getPopularTracks() {
      $scope.isLoading = true;
      PFMFactory.getPopularTracks()
        .then(function () {
          $scope.tracks = PFMFactory.popular;
          $scope.isLoading = false;
        });
    }

  }

})();

