import { socket } from './websocket';

export class Settings {

	nickName = '';
	firstName = '';
	lastName = '';
	description = '';
	voiceMode = false;

	update(){
		console.log(socket);
		alert(this.voiceMode)
	}
}