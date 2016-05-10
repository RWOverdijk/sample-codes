import { Message } from './Message.js'

export class Chat {

	messages = [];

	constructor(data){
	  Object.assign(this, data);
	}

	getMessages() {
		alert();
		return this.messages;
	}
}