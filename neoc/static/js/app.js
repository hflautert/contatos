'use strict';

/* App Module */

var contatosApp = angular.module('contatosApp', [
  'ngRoute',
  'contatosControllers',
  'contatosServices'
]);

contatosApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'lista-contatos.html',
        controller: 'ContatoListCtrl'
      }).
      when('/edit/:contatoId', {
        templateUrl: 'detalhes-contato.html',
        controller: 'ContatoDetailCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);

