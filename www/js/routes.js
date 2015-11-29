angular.module('app.routes', [])

  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tab.html'
      })

      .state('tab.popular', {
        url: '/popular',
        views: {
          'tab-popular': {
            templateUrl: 'templates/popular.html',
            controller: 'PopularController'
          }
        }
      })


      .state('tab.latest', {
        url: '/latest',
        views: {
          'tab-latest': {
            templateUrl: 'templates/latest.html',
            controller: 'LatestController'
          }
        }
      })

    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/popular');

  });
