namespace App.Services {

    export interface IEventService {
        eventResource: any;
        save():void;
    }

    class EventService {

        private eventResource;

        static $inject = [];
        constructor(private $resource:any){

            this.eventResource = this.$resource('/someUrlGoesHere');

        }

        public save(event:any) {
            return this.eventResource.save(event).$promise;
        }



    }

    angular.module("App.Services").service('eventService', EventService);
}