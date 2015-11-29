angular.module('app.services', [])

  .factory('PFMFactory', ['$http', 'SERVER', function ($http, SERVER) {
    var o = {
      latest: {},
      popular: {}
    };

    // Retrieve the latest and popular tracks
    o.getDashboardTracks = function () {
      return $http({
        method: 'GET',
        url: SERVER.url + '/api/web/dashboard'
      }).success(function(data){
        console.log(data);
        o.latest = o.latest.concat(data.recent_tracks);
        o.popular = o.latest.concat(data.popular_tracks)
      });
    };

    return o;
  }]);
