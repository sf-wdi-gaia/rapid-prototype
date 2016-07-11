var app = angular.module('trailsLike', ['ngRoute']);

console.log('Angular is working.');

////////////
// ROUTES //
////////////

// app.config(function($routeProvider,$locationProvider){
//   $routeProvider
//     .when('/', {
//       templateUrl: '/templates/wines-index.html',
//       controller: 'WinesIndexCtrl'
//     })
//     .when('/wines/:id', { // the "id" parameter 
//       templateUrl: 'templates/wines-show.html',
//       controller: 'WinesShowCtrl'
//     })
//   $locationProvider.html5Mode({
//     enabled: true,
//     requireBase: false
//   });
// })

/////////////////
// CONTROLLERS //
/////////////////

// app.controller('WinesIndexCtrl',function($scope,WineService){
//     // $scope.wine = WineService.query()
//   WineService.query().query(function(data){
//     $scope.wines = data;
//   });
//   console.log('wines', $scope.wines);
// })

// app.controller('WinesShowCtrl',function($scope,WineService,$routeParams){
//   $scope.wine = WineService.get($routeParams.id)
// })


////////////
// MODELS //
////////////

// app.factory('WineService', ['$http',function($http){

//   var WineService = {};

//   WineService.query = function(){
//     // return ALL_WINES;
//     return{
//        query: function(callback){
//         $http
//           .get('http://daretoexplore.herokuapp.com/wines')
//           .then(function(response){
//             console.log(response.data)
//             callback(response.data);
//             });
//           }
//       }

//   }

//   WineService.get = function(id){
//     var id = parseInt(id);
//     return ALL_WINES.find(function(wine){
//       return wine.id == id;
//     });
//   }

//   return WineService;

// }])


