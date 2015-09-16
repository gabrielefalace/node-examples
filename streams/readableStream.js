var request = require("request");

// actually the body of the request
var stream = request('http://www.pluralsight.com');

stream.on('data', function(chunk){
    console.log(">>> Received >>> " + chunk);
});

stream.on('end', function() {
    console.log("done processing received data");
});