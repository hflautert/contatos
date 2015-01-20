'use strict';

/* Controllers */

var contatosApp = angular.module('contatosApp', []);

contatosApp.controller('ContatoListCtrl', function ($scope,$http){
        console.log("Entrou no List...");
	$http.get('apicontatos/').success(function(data) {
		// data.results para ler os dados padroes da api do Django REST framework
		$scope.contatos =  data.results;
	});
});

// Funcao para adicionar/editar contato - EM CONSTRUÇÃO
// No momento está adicionando contatos com os comentários abaixo.
contatosApp.controller('ContatoEditCtrl', function ($scope,$http){
        console.log("Entrou no Edit...");
        //var res = $http.post('apicontatos/',{nome:'Via http apii', email:'h@h.com', fone:'3333', mfone:'2222'});
        //res.success(function(data) {
        //        console.log("Data:",data);
        //});
});
