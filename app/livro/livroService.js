(function () {
  'use strict';

  angular.module('app.livro')
    .service('LivroService', ['$http', LivroService]);

  function LivroService($http) {
    var service = {
      getAll: function getAll() {
        return $http.get('http://localhost:51129/api/livro');
      },
      getById: function getById(id) {
        return $http.get('http://localhost:51129/api/livro/'+id);
      },
      search: function search(filter) {
        return $http.post('http://localhost:51129/api/livro/search',filter);
      },
      save: function save(livro) {
        return $http.post('http://localhost:51129/api/livro',livro);
      },
      update: function update(livro) {
        return $http.put('http://localhost:51129/api/livro',livro);
      },
      delete: function remove(id) {
        return $http.delete('http://localhost:51129/api/livro/'+id);
      }
    }

    return service;
  }
})();
