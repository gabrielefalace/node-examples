/* 
 * built-in http module does not follow redirects
 */
var http = require('http');

var options = {
  host: 'www.google.com'  ,
  port: 80, 
  path: '/',
  method: 'GET'
};

var simpleUrl = 'http://www.google.com/';

console.log('Going to make a request ... ');


var req = http.request(options, function (response) {
    console.log(response.statusCode);
    response.pipe(process.stdout);
});


// invokes the method as soon as we close the stream we're using to do load our data
req.end(); 

console.log('\n-------------------------------- \n');


// infact, using the 'get' shortcut the 'req' variable is not even needed

http.get(options, function (response) {
    console.log(response.statusCode);
    response.pipe(process.stdout);
});