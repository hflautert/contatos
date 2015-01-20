'use strict';

/* Services */

var contatosServices = angular.module('contatosServices', ['ngResource']);

contatosServices.factory('Contato', ['$resource',
 function($resource){
  console.log("Vai consultar api");
  console.log("Return:", $resource('apicontatos/?format=json'))
    return $resource('apicontatos/:contatoId/?format=json', {}, {
            get: {method: 'GET' , isArray:true}
    });
}]);

/* help help help - o angular nao le os dados dai API - BUAAAAHHHH *
 https://github.com/angular/angular-phonecat/blob/0b5bb30647e421617a0d0000103f4123f8597ff5/app/js/services.js
 https://github.com/NahimNasser/django-rest-angular-todo/blob/master/todo_web/static/js/services.js
 */  
