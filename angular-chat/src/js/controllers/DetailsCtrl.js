angular.module('app')
.controller('DetailsCtrl', ['$scope', 'Contact', '$routeParams', function ($scope, Contact, $routeParams) {

    $scope.contact = Contact.getDetailsByName($routeParams.name);
}]);