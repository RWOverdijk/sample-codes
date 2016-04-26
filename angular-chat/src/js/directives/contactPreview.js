angular.module('app')
.directive('contactPreview', function() {
  return {
    restrict: 'E',
    scope: {
      contact: '='
    },
    template: '<div class="col-md-1"><img ng-src="{{contact.avatar}}" class="avatar"/></div><div class="col-md-3"><h4>{{contact.name}}</h4><p>{{contact.state}}</p></div>'
  }
});