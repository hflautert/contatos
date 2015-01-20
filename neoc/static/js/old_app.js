angular.module('contato', ['restangular', 'ngRoute', 'xeditable']).
  config(function($routeProvider, RestangularProvider) {
    $routeProvider.
      when('/', {
        controller:ListCtrl, 
        templateUrl:'list.html'
        }).
      when('/edit/:contatoId', {
        controller:EditCtrl, 
        templateUrl:'detail.html',
        resolve: {
          contato: function(Restangular, $route){
            return Restangular.one('apicontatos/',$route.current.params.projectId).getList().$object ;
            console.log("Retornou");
          }
        }
      }).
      when('/new', {controller:CreateCtrl, templateUrl:'detail.html'}).
      otherwise({redirectTo:'/'});
      
	RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
	var extractedData;
	// .. to look for getList operations
	if (operation === "getList") {
		// .. and handle the data and meta data
		extractedData = data.results;
        }
        return extractedData;
  //      });

    //  RestangularProvider.setRequestInterceptor(function(data, operation, what) {
        
     //   if (operation === 'put') {
      //    data.results.id = undefined;
      //    return data;
      //  }
     //   return data;
      })
  });


function ListCtrl($scope, Restangular) {
   $scope.contatos = Restangular.all('apicontatos/').getList().$object;
//   console.log("Restangular.all:", Restangular.all('apicontatos/').getList().$object );
//   console.log("Restangular.one:", Restangular.one('apicontatos/').getList('1/').$object );
//   console.log("Restangular.one:", Restangular.one('apicontatos/').one('1/').get());
}

function CreateCtrl($scope, $location, Restangular) {
  $scope.save = function() {
    Restangular.all('apicontatos/').post($scope.contato).then(function(contato) {
      $location.path('/list');
    });
  }
}

function EditCtrl($scope, $location, Restangular, contato) {
   var baseContatos = Restangular.all('apicontatos/');  
   baseContatos.getList().then(function(contatos) {
      $scope.allContatos = contatos;
   });
  $scope.contatos = Restangular.all('apicontatos/').getList().$object;

  var newContato = {nome: "Henrique",
                    fone: "8888888",
                    mfone: "88888888",
                    email: "ang@test.com",};
  
  console.log("NewContato:", newContato );

// baseContatos.post(newContato);

//  console.log("Restangular.all:",Restangular.all('apicontatos/').getList().$object );

//  console.log("Restangular.one:", Restangular.one('apicontatos/').getList('13/').$object );
//
  console.log("Restangular.one:", Restangular.one('apicontatos/', 13).get() );
  contato = Restangular.one('apicontatos/',13).get() ;
  var original = contato;
  $scope.contato = Restangular.copy(original);
  console.log("Nome:", $scope.contato.nome );
  $scope.contato.nome = "Teste";
  $scope.contato.put(); 

  $scope.isClean = function() {
    return angular.equals(original, $scope.contato);
  }


  $scope.destroy = function() {
    original.remove().then(function() {
      $location.path('/list');
    });
  };

  $scope.save = function() {
    $scope.contato.put().then(function() {
      $location.path('apicontatos/');
    });
  };
}

