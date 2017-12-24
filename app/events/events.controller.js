app.controller('eventsController', function($scope, $mdDialog, $mdToast, eventsFactory){

    // read events
    $scope.readEvents = function(){

        // use events factory
        eventsFactory.readEvents().then(function successCallback(response){
            $scope.events = response.data.data;   //FB graph data
            //$scope.products = response.data.records;  //REST data

            var today = new Date().toISOString();

            angular.forEach($scope.events, function(event, i){
                if(event.event_times != null) {
                    // end time is initially the last occurance of the event - next will be earlier
                    event.start_time = event.end_time;

                    angular.forEach(event.event_times, function(event_occurance, j){
                        //upcoming occurance?
                        if(event_occurance.start_time >= today){
                            // and earliest found?
                            if(event_occurance.start_time < event.start_time){
                                // set event times to next occurance
                                event.start_time = event_occurance.start_time;
                                event.end_time = event_occurance.end_time;
                            }
                        }
                    });
                }
            });

        }, function errorCallback(response){
            $scope.showToast("Unable to read record.");
        });

    }
    
    // showCreateProductForm will be here
    
    // DialogController will be here

    // clear variable / form values
    $scope.clearProductForm = function(){
        $scope.id = "";
        $scope.name = "";
        $scope.description = "";
        $scope.price = "";
    }

    // show toast message
    $scope.showToast = function(message){
        $mdToast.show(
            $mdToast.simple()
                .textContent(message)
                .hideDelay(3000)
                .position("top right")
        );
    }
});
