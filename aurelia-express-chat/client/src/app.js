// import { inject } from 'aurelia-framework';
// import { UserService } from './services/UserService';

// @inject(UserService)
export class App {
  configureRouter(config, router) {
    config.map([
      { route: ['', 'live-chat'], name: 'live-chat', moduleId: './templates/live-chat', nav: true, title: 'live-chat' },
      { route: 'settings', name: 'settings', moduleId: './templates/settings', nav: true, title: 'settings' },
    ]);

    this.router = router;
  }

  // constructor(UserService) {
  // 	// this.user = UserService.user;
  // }
}
