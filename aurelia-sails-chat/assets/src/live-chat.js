import { socket } from './websocket';

export class LiveChat {

  newMessage = '';
  messages = [{'time':'01/01/2016 10:20:45', 'content':'Halloooo', 'own': false},
      {'time':'01/01/2016 10:21:45', 'content':'Hoe was gisteren film?', 'own': false},
      {'time':'01/01/2016 10:21:50', 'content':'Ei', 'own': true},
      {'time':'01/01/2016 10:22:20', 'content':'pfff, heel saai', 'own': true},
      {'time':'01/01/2016 10:22:45', 'content':'echt ? Het is fantastisch!!', 'own': false}];

  sendMessage(){
    console.log(socket);
    socket.emit('new-message', this.newMessage);
    this.newMessage = '';
  }
}
