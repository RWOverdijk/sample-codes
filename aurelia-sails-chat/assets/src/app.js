export class App {
  configureRouter(config, router) {
    // config.title = 'Iris';
    config.map([
      { route: ['', 'live-chat'], name: 'live-chat',      moduleId: 'live-chat',      nav: true, title: 'live-chat' },
      { route: 'settings',         name: 'settings',        moduleId: 'settings',        nav: true, title: 'settings' },
      // { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' }
    ]);

    this.router = router;
  }
}
