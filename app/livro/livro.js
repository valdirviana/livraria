(function(){
  'use strict';

  angular.module('app.livro', [  ]).config(function($stateProvider) {
    var livroState = {
      name: 'livro',
      url: '/livro',
      templateUrl: 'app/livro/view/livro.html',
      controller: 'LivroController',
      controllerAs: 'ctrl'
    }

    $stateProvider.state(livroState);
  });
})();
