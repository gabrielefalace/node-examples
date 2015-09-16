var fs = require("fs");
var http = require("http");

http
.createServer(function(req, res){
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    if(req.url === '/file.txt'){
        fs.createReadStream(__dirname + '/file.txt').pipe(res);
    } else {
        res.end('<html><body><h1> Hello world </h1><h3> a nice HTML piece delivered </h3></body></html>');
    }
})
.listen(process.env.PORT, process.env.IP);

console.log('server running at ' +  process.env.PORT + ':' + process.env.IP);