angular.module('Svenpanel', [
  'ngRoute',
  'mobile-angular-ui',
  'Svenpanel.controllers.Main',
  'NavigationService',
  'ui.router'
])

.config(function($stateProvider,  $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home.html',
    })
    .state('mitarbeiter-des-monats', {
      url: '/motm',
      templateUrl: 'motm.html',
    });
  $urlRouterProvider.otherwise('/home');
})

.run(function(Navigation, $rootScope) {
  $rootScope.$navigation = Navigation;
});