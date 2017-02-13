var app = angular.module('app',
  [
    'ui.bootstrap',
    'ui.router',

    'app.livro'
  ]);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
  var livroState = {
    name: 'home',
    url: '/home',
    templateUrl: 'app/dashboard.html'
  }

  $stateProvider.state(livroState);

  $urlRouterProvider.otherwise('/home');

  $locationProvider.hashPrefix('');
});
