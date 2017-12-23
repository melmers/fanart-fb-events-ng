app.controller('eventsController', function($scope, $mdDialog, $mdToast, eventsFactory){

    // read events
    $scope.readEvents = function(){

        // use events factory
        eventsFactory.readEvents().then(function successCallback(response){
            $scope.events = response.data.data;   //FB graph data
            //$scope.products = response.data.records;  //REST data
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
