app.controller('productsController', function($scope, $mdDialog, $mdToast, productsFactory){

    // read products
    $scope.readProducts = function(){

        // use products factory
        productsFactory.readProducts().then(function successCallback(response){
            $scope.products = response.data.records;
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
