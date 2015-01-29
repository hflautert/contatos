'use strict';

/* Controllers */

var contatosApp = angular.module('contatosApp', []);

contatosApp.controller('ContatoListCtrl', function ($scope,$http){
	$http.get('apicontatos/').success(function(data) {
	$scope.contatos =  data.results;
	});
});
