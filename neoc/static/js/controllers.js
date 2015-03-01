'use strict';

var contatosApp = angular.module('contatosApp',['xeditable']);

contatosApp.controller('ContatoListCtrl', function ($scope,$http){
	$http.get('apicontatos/').success(function(data) {
		// data.results para ler os dados padroes da api do Django REST framework
		$scope.contatos =  data.results;
	});
});

/* contatosApp.controller('ContatoEditCtrl', function ($scope,$http){
        console.log("Entrou no Edit...");
	// 2 funcoes OK
	// post adcionar novo
	// put edita
	//var res = $http.post('apicontatos/',{nome:'Via http apii', email:'h@h.com', fone:'3333', mfone:'2222'});
        //var res = $http.put('apicontatos/1/',{nome:'Henrique Fell Lautert', email:'h@h.com', fone:'3333', mfone:'2222'});
        //res.success(function(data) {
        //        console.log("Data:",data);
        //});
}); */

contatosApp.controller('ContatoEditNome', function($scope, $http) {
        $scope.updateUser = function(data) {
		return $http.put( 'apicontatos/'+$scope.contato.id+'/',{
			nome: data, 
			fone: $scope.contato.fone,
			mfone: $scope.contato.mfone,
			email: $scope.contato.email 
			});
	};
});

contatosApp.controller('ContatoEditFone', function($scope, $http) {
        $scope.updateUser = function(data) {
		return $http.put( 'apicontatos/'+$scope.contato.id+'/',{
			nome: $scope.contato.nome, 
			fone: data,
			mfone: $scope.contato.mfone,
			email: $scope.contato.email 
			});
	};
});

contatosApp.controller('ContatoEditMfone', function($scope, $http) {
        $scope.updateUser = function(data) {
		return $http.put( 'apicontatos/'+$scope.contato.id+'/',{
			nome: $scope.contato.nome, 
			fone: $scope.contato.fone,
			mfone: data,
			email: $scope.contato.email 
			});
	};
});

contatosApp.controller('ContatoEditEmail', function($scope, $http) {
        $scope.updateUser = function(data) {
		return $http.put( 'apicontatos/'+$scope.contato.id+'/',{
			nome: $scope.contato.nome, 
			fone: $scope.contato.fone,
			mfone: $scope.contato.mfone,
			email: data 
			});
	};
});

contatosApp.controller('ContatoDelItem', function($scope, $http) {
        $scope.updateUser = function(data) {
		return $http.delete( 'apicontatos/'+$scope.contato.id+'/',{});
	};
});

// Altera thema do Xeditable
contatosApp.run(function(editableOptions) {
  editableOptions.theme = 'bs3';
});
