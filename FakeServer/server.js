var fs = require('fs');
var http = require('http');
var mappings = require('./mappings.js').mappings;

var HOST = '127.0.0.1';
var PORT = 8081;

http.createServer(function(req, res){
    logRequest(req);
    var data = null;
    switch (req.method) {
        case 'GET':
            data = resolveGet(req);
            break;
        case 'POST':
            data = resolvePost(req);
            break;
        case 'PUT':
            data = resolvePut(req);
            break;
    }
	logResponse(data);
    if(data){
        res.writeHead(200, {'Content-Type': 'application/json'});
	    res.end(data);
    } else {
        res.writeHead(500);
        res.end('internal server error');
    }
}).listen(PORT, HOST);

printStartMessage();


function resolvePut(req){
    //TODO implement this
    return resolveGet(req);
}


function resolvePost(req){
    //TODO implement this
    return resolveGet(req);
}

function resolveGet(req){
    var data = null;
	
	var foundMappings = mappings.filter(function(element){
		//return req.url.indexOf(element.url) >= 0; //FIXME replace with REGEX
		var result = (new RegExp(element.url)).test(req.url);
		console.log(result);
		return result;
	});
	
	if(foundMappings){
		data = getJsonFromFile(foundMappings[0].path);
	} 
	return data;
}

function getJsonFromFile(path){
    return fs.readFileSync(path, 'utf-8');
}

function printStartMessage(){
	process.stdout.write('\n   ‼  Faker server listening on ' + HOST + ':' + PORT + '  ‼\n\n');
}

function logRequest(req){
	process.stdout.write('\n ============================ \n ' + req.method + ' REQUEST ► ' + req.url + ' @ ' + Date.now());
}

function logResponse(data){
	process.stdout.write('\n ◄ RESPONSE \n' + data + '\n ============================');
}