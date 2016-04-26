angular.module('app')
.controller('ChatCtrl', ['$scope', '$sce', 'Contact', 'Conversation', '$routeParams', function ($scope, $sce, Contact, Conversation, $routeParams) {

  var data = Contact.getChatByContactName($routeParams.name);
  var contactMessages = Conversation.getContactMessages();
  var userMessages = Conversation.getUserMessages();
  var orderedMessages = (function(){
    var ret = [];
    for(var i = 0; i < contactMessages.length; i ++) {
      ret.push({
        'content': '<div class="msg contactmsg col-xs-4 col-sm-4 col-lg-4">' + contactMessages[i].content + '</div>',
        'time': Date.parse(contactMessages[i].time)
      });
    };
    for(var i = 0; i < userMessages.length; i ++) {
      ret.push({
        'content': '<div class="msg usermsg col-xs-4 col-sm-4 col-lg-4">' + userMessages[i].content + '</div>',
        'time': Date.parse(userMessages[i].time)
      });
    };
    
    return ret.sort(function(a, b){return a.time-b.time});;
  })();
  
  $scope.contact = data.contact;
  $scope.messages = (function(){
    var ret = [];
    angular.forEach(orderedMessages, function(msg) {
      ret.push($sce.trustAsHtml(msg.content));
    });
    return ret;
  })();
  
  $scope.send = function(msg) {
    console.log(msg);
    $scope.messages.push(($sce.trustAsHtml('<div class="msg usermsg col-xs-4 col-sm-4 col-lg-4">' + msg + '</div>')));
  };
}])