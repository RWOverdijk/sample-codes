import { Chat } from '../models/Chat.js';	// Models

export class ChatService {

	constructor() {
		this.chat = new Chat({
			messages : []
		});
	}
}