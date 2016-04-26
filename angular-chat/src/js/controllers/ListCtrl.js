angular.module('app')
.controller('ListCtrl', ['$scope', 'Contact', function ($scope, Contact) {
    $scope.contacts = Contact.getAll();
}])