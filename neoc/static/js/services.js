'use strict';

/* Services */

var contatosServices = angular.module('contatosServices', ['ngResource']);

contatosServices.factory('Contato', function ($scope, $http) {
  $http.get('static/js/contatos.json').success(function(data) {
    $scope.contatos = data;
  });
});

/* help help help - o angular nao le os dados dai API - BUAAAAHHHH *
 https://github.com/angular/angular-phonecat/blob/0b5bb30647e421617a0d0000103f4123f8597ff5/app/js/services.js
 https://github.com/NahimNasser/django-rest-angular-todo/blob/master/todo_web/static/js/services.js
 */ 

