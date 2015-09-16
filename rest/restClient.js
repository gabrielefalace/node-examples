var querystring = require('querystring');
var http = require("http");

function sendRequest(host, endpoint, method, data, callback){
    
    var payload = JSON.stringify(data);
    
    var headers = {};
    
    if(method === 'GET'){
        endpoint += '?' + querystring.stringify(data);
    }
    else {
        headers = {
          'Content-Type': 'application/json',
          'Content-Length': payload.length
        };
    }
    
    var options = {
      host: host,
      path: endpoint,
      method: method,
      headers: headers 
    };
    
    // only binds a request and a callback
    var req = http.request(options, function(responseStream){
        responseStream.setEncoding('utf-8');
        var responseString = '';
        
        responseStream.on('error', function(err) {
            console.log(err);
        });
        
        responseStream.on('start', function () {
            console.log('started receiving data!');
        });
        
        responseStream.on('data', function(data){
            console.log('received data ' + data);
            responseString += data;
        });
        
        responseStream.on('end', function () {
            console.log(responseString);
            var responseObject = JSON.parse(responseString);
            callback(responseObject);
        });
        
    });
    
    //actually firing the request
    req.write(payload);
    req.end();
}

var host = 'vmsuperofficetest';

var endpoint = '/RESTSalesWS/Sale/Create';

var data = {
  "suoID" : 12860,
  "salesDate" : "2015.03.25.13.28.52",
  "projectID" : 275,
  "productID" : 157,
  "salesPerson" : "GABRIELE.FALACE"
};

sendRequest(host, endpoint, 'POST', data, function (response) {
    console.log('Writing received data from callback: ' + JSON.stringify(response));
});