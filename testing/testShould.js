var fun = require("../callback.js");
var should = require("should");

describe('test suite', function(){
    
    
    describe('a test', function() {
       
       it('should double the number 4 synchronously', function(){
           fun.evenDoublerSync(4).should.equal(8);
       });
    });
    
    
});