import { inject } from 'aurelia-framework';
import { SocketService } from '../services/SocketService';	// Services

@inject(SocketService)
export class Profile {

	nickName = '';
	firstName = '';
	lastName = '';
	description = '';
	finded = true;

	constructor(SocketService) {
		// external resources
		this.socket = SocketService.socket;
	}

	activate(params) {
		this.socket.emit('get-user-info', params.name);
		this.socket.on('recieve-user-info', function(data) {
			console.log('recieved user info');
			if(data != 'not finded') {
				this.nickName = data.nickName;
				this.firstName = data.firstName;
				this.lastName = data.lastName;
				this.description = data.description;
			} else {
				this.finded = false;
			}
		}.bind( this ));
	}
}