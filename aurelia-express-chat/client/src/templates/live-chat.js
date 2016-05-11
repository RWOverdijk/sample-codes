import { inject } from 'aurelia-framework';

// Configs
import { Config } from '../configs/Config';

// Services
import { ChatService } from '../services/ChatService';
import { SocketService } from '../services/SocketService';
import { UserService } from '../services/UserService';


@inject(ChatService, SocketService, UserService, Config)
export class LiveChat {

  newMessage = '';
  messages = [];

  constructor(ChatService, SocketService, UserService, Config) {
    // external resources
    this.user = UserService.user;
    this.socket = SocketService.socket;
    this.chat = ChatService;
    this.config = Config;

    // internal resources
    this.messages = ChatService.messages;
    if(Config.chatOn) {
      this.enter();
    }
  }

  sendMessage() {
    let message = {
      'time': '01/01/2016 10:22:45',
      'content': this.newMessage,
      'own': true,
      'nickName': this.user.nickName
    };
    this.socket.emit('new-message', message);
    this.newMessage = '';
  }

  enter() {
    this.config.chatOn = true;
    this.chat.enter(this);
  }

  exit() {

  }
}
