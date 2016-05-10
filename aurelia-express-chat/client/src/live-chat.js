import { socket } from './websocket';
import { Message } from './models/Message.js'
import { Chat } from './models/Chat.js'

export class LiveChat {

  newMessage = '';
  messages = [];

  updateMessages(messages) {
    alert();
    this.messages = messages;
  }

  sendMessage() {
    // console.log(socket);
    let message = {
      'time': '01/01/2016 10:22:45',
      'content': this.newMessage,
      'own': true};
    socket.emit('new-message', message);
    this.newMessage = '';
  }

  enter() {

    socket.on('messages', function(data) {
      console.log(this.messages);
      this.messages = data;
    }.bind( this ));
  }
}
