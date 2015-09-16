var util = require("util");
var EventEmitter = require("events").EventEmitter;

/*
 * Define a resource that we then "register" as an EventEmitter 
 * emulating inheritance: Resource ISA EventEmitter
 */ 
function Resource(num){
    
    var self = this;
    
    var limit = num;
    
    process.nextTick(function(){
        var count = 0;
        self.emit('start');
        
        var t = setInterval(function() {
            self.emit('data', ++count);
            if(count === limit){
                self.emit('end', count);
                clearInterval(t);
            }
        }, 10);
        
    });
    
}

util.inherits(Resource, EventEmitter);

module.exports = Resource;