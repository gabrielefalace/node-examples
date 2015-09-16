"use strict";

const client = require("./json-client.js");
const net = require("net");

const netClient = net.connect({port: 5432});
const jsonClient = client.connect(netClient);

console.log("connected!");

jsonClient.on('message', function(message){
    
    console.log('► received message ' + JSON.stringify(message));
    
    if(message.type === 'watching'){
        console.log('now watching ' + message.file);
    } else if(message.type === 'changed'){
        console.log('File ' + message.file + ' changed at ' + new Date(message.timestamp));
    } else {
        throw Error('Error dude >_< ');
    }
});
