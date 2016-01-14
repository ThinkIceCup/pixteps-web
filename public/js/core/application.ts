namespace App {

    angular.module('App.Services', []);
    angular.module('App.Controllers', []);
    angular.module('App.Filters', []);
    angular.module('App.Directives', []);

    let modules = ['ngRoute', 'App.Services', 'App.Controllers', 'App.Filters', 'App.Directives'];

    angular.module('App', modules);

}
