import { inject } from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import { Config } from '../configs/Config';

@inject(HttpClient, Config)
export class HTTPService {

	constructor(http, Config) {
		this.httpClient = new HttpClient();
		this.httpClient.configure(config => {
			config
			.withBaseUrl(Config.server)
			.withDefaults({
				credentials: 'same-origin',
				headers: {
					'Accept': 'application/json',
					'X-Requested-With': 'Fetch'
				}
			})
			.withInterceptor({
				request(request) {
					console.log(`Requesting ${request.method} ${request.url}`);
					return request;
				},
				response(response) {
					console.log(`Received ${response.status} ${response.url}`);
					return response;
				}
			});
		});
	}

	getUserName() {
		// alert()
		this.httpClient.fetch('/getUserName')
		.then(response => response.json())
		.then(data => {
			console.log(data.name);
			return data.name;
		});
	}
}