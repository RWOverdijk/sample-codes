import { Chat } from '../models/Chat.js';

export class ChatService {

	constructor() {
		this.chat = new Chat();
		this.messages = this.chat.messages;
	}

	send() {

	}

	enter(livechat) {
		livechat.socket.on('messages', function(data) {
			console.log('recieved message');
			livechat.messages = data;
			livechat.chat.messages = data;
		}.bind( livechat ));
	}

	exit() {

	}
}