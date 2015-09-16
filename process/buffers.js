var b = new Buffer('Hello!');

console.log('buffer with default utf-8 encoding: ' + b.toString());

console.log('buffer with base64 encoding: ' + b.toString('base64'));


