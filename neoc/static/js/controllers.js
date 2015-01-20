'use strict';

/* Controllers */

var contatosApp = angular.module('contatosApp', []);

contatosApp.controller('ContatoListCtrl', function ($scope,$http){
	$http.get('apicontatos/?format=json').success(function(data) {
	$scope.contatos =  data.results;
	});
});
