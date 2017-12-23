app.factory("eventsFactory", function($http){
    
    var factory = {};

    var fb_page_id = "252566649502";
    var access_token = "1491742964279671|Wq1I_DvImNsIL4hwSyY4jzjWBeM";
    var fields = "id,name,description,place,timezone,start_time,end_time,cover,event_times";
    var json_link = "https://graph.facebook.com/v2.11/" + fb_page_id + "/events/?time_filter=upcoming&fields=" + fields + "&access_token=" + access_token;
    
    //var json_link = "http://stonegaterocks.com/restapi/product/read.php"  //REST API for testing

    // read all events
    factory.readEvents = function(){
        return $http({
            method: 'GET',
            url: json_link
        });
    };
    
    // createProduct will be here
    
    return factory;
});
