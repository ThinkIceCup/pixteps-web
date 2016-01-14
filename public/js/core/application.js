var App;
(function (App) {
    angular.module('App.Services', []);
    angular.module('App.Controllers', []);
    angular.module('App.Filters', []);
    angular.module('App.Directives', []);
    var modules = ['ngRoute', 'App.Services', 'App.Controllers', 'App.Filters', 'App.Directives'];
    angular.module('App', modules);
})(App || (App = {}));
//# sourceMappingURL=application.js.map