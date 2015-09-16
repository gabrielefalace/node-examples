var fs = require("fs");
var http = require("http");
var socketio = require("socket.io"); // nmp instlal socket.io@0.9

var handler = function (req, res) {
    fs.readFile(__dirname + '/index.html', function(err, data){
        if(err){
            res.writeHead(500);
            return res.end('error loading index.html');
        } else {
            res.writeHead(200);
            res.end(data);
        }
    });
};

var app = http.createServer(handler);
var io = socketio.listen(app);

// replacing websockets
io.configure( function() {
    io.set('transports', ['xhr-polling']);
});

io.sockets.on('connection', function (socket) {
    setInterval(function(){
       var timestamp = Date.now();
       console.log('Emitted ' + timestamp);
       socket.emit('timer', timestamp);
    }, 2000);
    socket.on('submit', function(data){
        console.log('submitted ' + data);
    });
});

app.listen(8080);

console.log('Server running');