var Resource = require("./resource.js");

var r = new Resource(7);

r.on('start', function(){
    console.log('I started');
});

r.on('data', function(item) {
    console.log('received some data: ' + item);
});

r.on('end', function(finalCount) {
    console.log('stopped on ' + finalCount);
});

