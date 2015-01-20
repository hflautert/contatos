'use strict';

/* Controllers */

var contatosControllers = angular.module('contatosControllers', []);

contatosControllers.controller('ContatoListCtrl', ['$scope', 'Contato',
  function($scope, Contato) {
    $scope.contatos = Contato.query();
  }]);

contatosControllers.controller('ContatoDetailCtrl', ['$scope', '$routeParams', 'Contato',
  function($scope, $routeParams, Contato) {
    $scope.contato = Contato.get({contatoId: $routeParams.contatoId}, function(contato){
  });
  }]);
