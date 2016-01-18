namespace App.Controllers {



    class EventController {



        static $inject = ["$routeParams"];
        constructor($routeParams:ng.route.IRouteParamsService){



        }



    }

    angular.module('App.Controllers').controller('EventController', EventController);




}