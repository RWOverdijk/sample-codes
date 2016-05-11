import { inject } from 'aurelia-framework';
import { Config } from '../configs/Config';					// Configs
import { SocketService } from '../services/SocketService';	// Services
import { UserService } from '../services/UserService';		//

@inject(SocketService, UserService, Config)
export class Settings {

	constructor(SocketService, UserService, Config) {
		// external resources
		this.socket = SocketService.socket;
		this.user = UserService.user;
		this.config = Config;

		// internal resources
		this.nickName = this.user.nickName;
		this.firstName = this.user.firstName;
		this.lastName = this.user.lastName;
		this.description = this.user.description;
		this.voiceMode = Config.voiceMode;
	}

	update(){
		this.user.nickName = this.nickName;
		this.user.firstName = this.firstName;
		this.user.lastName = this.lastName;
		this.user.description = this.description;
		this.config.voiceMode = this.voiceMode;
		this.socket.emit('update-user', this.user);
	}
}