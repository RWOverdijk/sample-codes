import { Message } from './Message.js'

export class Chat {

	constructor(data){
	  Object.assign(this, data);
	  this.messages = [];
	}
}