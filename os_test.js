var mathfun = require('./callback');

var res = mathfun.evenDoubler(72, mathfun.handleResults);

var matching = require("./sila").matching;
var value = require("./sila").value;

console.log("according to SilaJS: " + value("Pippolo").contains("olo"));

var os = require("os");

console.log("Operating system: " + os.platform());