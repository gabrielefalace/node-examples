var assert = require('assert');
var fun = require('../callback.js');

assert.equal(fun.evenDoublerSync(2), 4);

assert.throws(function(){
    fun.evenDoublerSync(3);
}, /Odd/);

fun.evenDoubler(2, function(err, results){
    assert.ifError(err);
    assert.equal(results, 4, 'Should have been 4');
});

fun.evenDoubler(5, function(err, results) {
    assert.notEqual(err, null);
});