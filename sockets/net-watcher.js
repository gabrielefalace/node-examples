"use strict";

const fs = require("fs");
const net = require("net");

const filename = process.argv[2];

if(!filename){
    throw Error("no target file specified!");
}

let server = net.createServer(function(connection){
    console.log("just got a connection");
    connection.write(JSON.stringify({
        type: "watching",
        file: filename
    }) + "\n");
    
    let watcher = fs.watch(filename, function(){
        fs.readFile(filename, function(err, data){
           
            connection.write(JSON.stringify({
                type: "changed",
                file: filename,
                content: data.toString(),
                timestamp: Date.now()
                }) + "\n");
        });
        
    });
    
    connection.on('close', function(){
        console.log("Connection closed! \n");
        watcher.close();
    });
});

server.listen(5432, function(){
    console.log(" listening on " + server.address().address + ":" + server.address().port);
});