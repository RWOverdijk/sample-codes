import { inject } from 'aurelia-framework';

// Configs
import { Config } from '../configs/Config';

// Model
import { User } from '../models/User.js';

// Services
import { HTTPService } from './HTTPService';

@inject(HTTPService, Config)
export class UserService {

	constructor(HTTPService, Config) {
		this.httpClient = HTTPService.httpClient;
		HTTPService.getUserName();
		this.user = new User({
			nickName : '',
			firstName : '',
			lastName : '',
			description : ''
		});
	}
}