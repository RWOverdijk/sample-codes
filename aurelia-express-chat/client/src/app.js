
export class App {
  configureRouter(config, router) {
    config.map([
      { route: ['', 'live-chat'], name: 'live-chat', moduleId: './templates/live-chat', nav: true, title: 'Chat' },
      { route: 'settings', name: 'settings', moduleId: './templates/settings', nav: true, title: 'Settings' },
      { route: 'profile/:name', name: 'profile', moduleId: './templates/profile', title: 'Profile' },
    ]);

    this.router = router;
  }
}