import { inject } from 'aurelia-framework';
import io from 'socket.io-client';
import { Config } from '../configs/Config';		// Configs

@inject(Config)
export class SocketService {

	constructor(Config) {
		this.socket = io.connect(Config.server);
	}
}