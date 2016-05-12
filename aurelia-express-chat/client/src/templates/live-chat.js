import { inject } from 'aurelia-framework';
import { Config } from '../configs/Config';                 // Configs
import { ChatService } from '../services/ChatService';      // Services
import { SocketService } from '../services/SocketService';  //
import { UserService } from '../services/UserService';      //


@inject(ChatService, SocketService, UserService, Config)
export class LiveChat {

  newMessage = '';
  messages = [];

  constructor(ChatService, SocketService, UserService, Config) {
    // external resources
    this.userService = UserService;
    this.user = UserService.user;
    this.socket = SocketService.socket;
    this.chatService = ChatService;
    this.config = Config;

    // internal resources
    this.messages = this.chatService.chat.messages;

    // Setup
    if(Config.chatOn) {
      this.enter();
    }
    if(Config.voiceMode) {
      try{
        this.startSpeechRecognition();
      } catch(err) {
        alert("Seem that your browser doesn't support speech recognition");
        console.log(err);
        Config.voiceMode = false;
      }
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
    this.socket.on('messages', function(data) {
      console.log('recieved message');
      this.messages = data;
      this.chatService.chat.messages = data;
      let mBox = document.getElementById("messages-box");
      mBox.scrollTop = (mBox.scrollHeight);
    }.bind( this ));
  }

  startSpeechRecognition(){
    let recognition = new webkitSpeechRecognition();
    recognition.lang = "en-GB";
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.onresult = (function(event) { 
      if (event.results[event.results.length-1].isFinal) {
        this.newMessage = this.newMessage + event.results[event.results.length-1][0].transcript;
      }
    }).bind(this);
    recognition.start();
  }
}