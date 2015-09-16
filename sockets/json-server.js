"use strict";

const net = require("net");

net
    .createServer(function(connection){
        
        connection.write('{"type":"changed", "file":"targ');
        
        let timer = setTimeout(function(){
            connection.write('et.txt", "timestamp":1358175758495}' + "\n");
            connection.end();
        }, 1000);
        
        connection.on('close', function(){
            clearTimeout(timer);
        });
        
    })
    .listen(5432, function(){
        console.log("server listening ... ");
    });;