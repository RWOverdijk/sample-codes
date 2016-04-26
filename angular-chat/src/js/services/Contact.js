angular.module('app')
.factory('Contact', [
  function () {
    return {
      getAll: function () {
        return contacts;
      },
      getChatByContactName: function (name) {
        var contact;
        for(var i = 0; i < contacts.length; i++) {
          if(contacts[i].name === name) {
            contact = contacts[i];
            break;
          }
        }
        return {contact: contact, contactmessages: contactMessages, usermessages: userMessages};
      },
      getDetailsByName: function (name) {
        var contact;
        for(var i = 0; i < contacts.length; i++) {
          if(contacts[i].name === name) {
            contact = contacts[i];
            break;
          }
        }
        return contact;
      }
    }

}]);

var contacts = [{'name':'Laia', 'state':'Hallo mensen!', 'avatar': 'https://tinyurl.com/jj7jfht', "age": 28, "city":"Puigcerda"},
                {'name':'Pau', 'state':'Gezellig zijn', 'avatar': 'https://tinyurl.com/hezwkow', "age": 23, "city":"Olot"},
                {'name':'Nuria', 'state':'Dit chat gebruik ik', 'avatar': 'https://tinyurl.com/gkrzqqo', "age": 26, "city":"Igualada"},
                {'name':'Bernat', 'state':'Ik droom soms', 'avatar': 'https://tinyurl.com/jr2lm9p', "age": 31, "city":"Mollerussa"}];