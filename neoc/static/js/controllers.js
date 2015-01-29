'use strict';

/* Controllers */

var contatosApp = angular.module('contatosApp', []);

contatosApp.controller('ContatoListCtrl', function ($scope,$http){
	$http.get('apicontatos/').success(function(data) {
		// data.results para ler os dados padroes da api do Django REST framework
		$scope.contatos =  data.results;
	});
});
