namespace App.Controllers {

    interface IEventController {
        event:any;
        create():void;
    }

    class EventController implements  IEventController{
        event:any;


        static $inject = ["$routeParams"];
        constructor(
            private $routeParams:ng.route.IRouteParamsService,
            private eventService:App.Services.IEventService){

            this.event = {};
            this.event.name = $routeParams['eventName'];

        }

        public create(){
            this.eventService.save(this.event).then(()=>{

            }).catch(()=>{

            });
        }


    }

    angular.module('App.Controllers').controller('EventController', EventController);
}