'use strict';

angular.module('app',['ngRoute'])
.config(['$routeProvider', function ($routeProvider){

  $routeProvider.when('/', {
    templateUrl: '/templates/list.html', 
    controller: 'ListCtrl',
  });
  $routeProvider.when('/chat/:name', {
    templateUrl: '/templates/chat.html', 
    controller: 'ChatCtrl'
  });
  $routeProvider.when('/details/:name', {
    templateUrl: '/templates/details.html', 
    controller: 'DetailsCtrl'
  });
  $routeProvider.otherwise({redirectTo: '/'});
}]);