var request = require("request");
var fs = require("fs");
var zlib = require("zlib");

// actually the body of the request
var stream = request('http://www.pluralsight.com');


// stream.pipe(fs.createWriteStream('dataFile.html'));

request('http://www.pluralsight.com').pipe(zlib.createGzip()).pipe(fs.createWriteStream('zippedFile.html.gz'));
