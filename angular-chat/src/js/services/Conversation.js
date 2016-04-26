angular.module('app')
.factory('Conversation', [
  function () {
    return {
      getContactMessages: function () {
        return contactMessages;
      },
      getUserMessages: function () {
        return userMessages;
      }
    }

}]);


var contactMessages = [{'time':'01/01/2016 10:20:45', 'content':'Halloooo'},{'time':'01/01/2016 10:21:45', 'content':'Hoe was gisteren film?'},{'time':'01/01/2016 10:22:45', 'content':'echt ? Het is fantastisch!!'}];
var userMessages = [{'time':'01/01/2016 10:21:50', 'content':'Ei'},{'time':'01/01/2016 10:22:20', 'content':'pfff, heel saai'}];