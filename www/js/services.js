angular.module('app.services', [])

  .factory('PFMFactory', ['$http', 'SERVER', function ($http, SERVER) {
    var o = {
      latest: [],
      popular: []
    };

    // Retrieve popular tracks
    o.getPopularTracks = function () {
      return $http({
        method: 'GET',
        url: SERVER.url + '/api/web/dashboard'
      }).success(function (data) {
        o.popular = o.latest.concat(data.popular_tracks);
      });
    };

    // Retrieve latest tracks
    o.getLatestTracks = function () {
      return $http({
        method: 'GET',
        url: SERVER.url + '/api/web/dashboard'
      }).success(function (data) {
        o.latest = o.latest.concat(data.recent_tracks);
      });
    };

    return o;
  }]);
