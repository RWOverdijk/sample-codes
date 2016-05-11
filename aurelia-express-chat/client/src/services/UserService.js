import { inject } from 'aurelia-framework';
import { User } from '../models/User.js'; 		// Models
import { SocketService } from './SocketService'; 	// Services

@inject(SocketService)
export class UserService {

	constructor(SocketService) {
		this.socket = SocketService.socket;
		this.user = new User({
			id: '',
			nickName : '',
			firstName : '',
			lastName : '',
			description : ''
		});
		this.getUserName();
	}

	getUserName() {

		this.fetchingNickName = true;
		this.socket.emit('get-nick-name', null);
		this.socket.on('recieve-nick-name', function(data) {
			this.fetchingNickName = false;
			this.user.nickName = data.name;
			this.user.id = data.id;
		}.bind( this ));
	}
}