import {customElement, bindable, inject} from 'aurelia-framework';

// Services
import { UserService } from '../../services/UserService';

@customElement('messageballon')
@bindable('data')
@inject(UserService)
export class MessageBallon {

	constructor(UserService) {
		this.user = UserService.user;
	}

	bind() {
		this.own = (this.data.nickName == this.user.nickName) ?  true : false;
	}
}