(function () {

  angular.module('app.livro')
    .controller('LivroController', [
      'LivroService', '$uibModal', LivroController
    ]);

  function LivroController(LivroService, $uibModal) {
    var ctrl = this;

    getAll();

    function getAll() {
      LivroService.getAll().then((result) => {
        ctrl.livros = result.data;
      });
    }

    ctrl.insert = function () {
      var modalInstance = $uibModal.open({
        templateUrl: 'app/livro/view/livroModal.html',
        size: 'lg',
        controller: 'LivroInsertController',
        controllerAs: 'ctrl',
        backdrop: 'static'
      });

      modalInstance.result.then(function () {
        getAll();
      });
    }

    ctrl.update = function (livro) {
      var modalInstance = $uibModal.open({
        templateUrl: 'app/livro/view/livroModal.html',
        size: 'lg',
        controller: 'LivroUpdateController',
        controllerAs: 'ctrl',
        backdrop: 'static',
        resolve: {
          livro: function () {
            return angular.copy(livro);
          }
        }
      });

      modalInstance.result.then(function () {
        getAll();
      });
    }

    ctrl.delete = function (id) {
      var r = confirm("Confirmar exclusão");
      if (r == true) {
        LivroService.delete(id).then(() => {
          getAll();
        });
      }

    }

    ctrl.view = function (id) {
      var modalInstance = $uibModal.open({
        templateUrl: 'app/livro/view/livroModal.html',
        size: 'lg',
        controller: 'LivroViewController',
        controllerAs: 'ctrl',
        backdrop: 'static',
        resolve: {
          id: function () {
            return id;
          }
        }
      });
    }
  }
})();

(function () {
  angular.module('app.livro')
    .controller('LivroInsertController', [
      'LivroService', '$uibModalInstance', LivroInsertController
    ]);

  function LivroInsertController(LivroService, $uibModalInstance) {
    var self = this;

    this.livro;

    this.save = function () {
      LivroService.save(this.livro).then((result) => {
        $uibModalInstance.close();
      });
    }

    this.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  }
})();

(function () {
  angular.module('app.livro')
    .controller('LivroUpdateController', [
      'LivroService', '$uibModalInstance', 'livro', LivroUpdateController
    ]);

  function LivroUpdateController(LivroService, $uibModalInstance, livro) {
    var self = this;

    self.livro = livro;

    this.save = function () {
      LivroService.update(this.livro).then((result) => {
        $uibModalInstance.close();
      });
    }

    this.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  }
})();

(function () {
  angular.module('app.livro')
    .controller('LivroViewController', [
      'LivroService', '$uibModalInstance', 'id', LivroViewController
    ]);

  function LivroViewController(LivroService, $uibModalInstance, id) {
    var self = this;

    self.view = true;

    LivroService.getById(id).then((result) => {
      self.livro = result.data;
    });

    this.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  }
})();


