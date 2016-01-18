/// <reference path="../../../typings/tsd.d.ts" />


namespace App.Config {


    angular.module('App').config(config);

    config.$inject = ['$routeProvider', '$locationProvider', 'cfpLoadingBarProvider'];

    function config($routeProvider:ng.route.IRouteProvider,
                    $locationProvider:ng.ILocationProvider,
                    cfpLoadingBarProvider:ng.loadingBar.ILoadingBarProvider){

        $routeProvider
            .when('/', {
                templateUrl:'/views/home.html',
                controller: 'HomeController',
                controllerAs: 'vm',
                caseInsensitiveMatch: true,
            })
            .when('/event/create/:id/:name', {
                templateUrl:'/views/event-create.html',
                controller: 'EventController',
                controllerAs: 'vm',
                caseInsensitiveMatch: true,
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
        cfpLoadingBarProvider.includeSpinner = false;
    }

}