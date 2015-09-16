var EventEmitter = require("events").EventEmitter;

var getResource = function(num) {
  var emitter = new EventEmitter();
  process.nextTick(function() {
      var count = 0;
      emitter.emit('start');
      var t = setInterval(function(){
          emitter.emit('data', ++count);
          if(count === num){
              emitter.emit('end', count);
              clearInterval(t);
          }
      }, 10);
  });
  return emitter;
};

var resource = getResource(5);

resource.on('start', function(){
    console.log('I started');
});



resource.on('data', function(count) {
    console.log('received some data: ' + count);
});

resource.on('end', function(count) {
    console.log('I ended on ' + count);
});
