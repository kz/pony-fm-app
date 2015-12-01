angular.module('app.routes', [])

  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      .state('dashboard', {
        url: '/dashboard',
        abstract: true,
        templateUrl: 'templates/dashboard/tab.html'
      })

        .state('dashboard.popular', {
          url: '/popular',
          views: {
            'tab-popular': {
              templateUrl: 'templates/dashboard/popular.html',
              controller: 'PopularController'
            }
          }
        })


        .state('dashboard.latest', {
          url: '/latest',
          views: {
            'tab-latest': {
              templateUrl: 'templates/dashboard/latest.html',
              controller: 'LatestController'
            }
          }
        })

    .state('player', {
      url: '/player',
      views: {
        'tab-latest': {
          templateUrl: 'templates/player/player.html',
          controller: 'PlayerController'
        }
      }
    })

    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/dashboard/popular');

  });
