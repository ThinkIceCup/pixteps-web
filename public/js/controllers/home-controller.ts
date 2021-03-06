/// <reference path="../../../typings/tsd.d.ts" />


namespace App.Controllers {

    interface IHomeController {
        eventName: string;
        createEvent():void;
    }

    class HomeController implements IHomeController {

        eventName: string;

        static $inject = ['$location'];
        constructor(private $location:ng.ILocationService){

        }

        createEvent():void {
            this.$location.path('/event/create/' + this.eventName);
        }

    }

    angular.module('App.Controllers').controller('HomeController', HomeController);

}