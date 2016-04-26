angular.module('app')
.directive('contactDetail', function() {
  return {
    restrict: 'E',
    scope: {
      contact: '='
    },
    template: '<div class="col-md-3 col-lg-3"><img ng-src="{{contact.avatar}}" class="avatar"/></div><div class="col-md-9 col-lg-9"><h5>{{contact.state}}</h5><table class="table"><tbody><tr><td>Age:</td><td>{{contact.age}}</td></tr><tr><td>City:</td><td>{{contact.city}}</td></tr></tbody>   </table>  </div>'
  }
});