var maxTime = 1000;

var evenDoubler = function(v, callback){
    setTimeout(function () {
        if (v%2) {
            var err = {message: 'LETAME'};
            callback(err);            
        } else {
            var doubled = v * 2;
            var date = Date();
            callback(null, doubled, date);
        }
    }, maxTime);
};


var evenDoublerSync = function(v){
    if(v%2){
        throw(new Error('Odd Input'));
    }
    else {
        return v*2;
    }
};


var handleResults = function(err, results, time){
    if(err) {
        console.log('ERROR ' + err.message);
    } else {
        console.log('RESULTS ' + results + ' ( '+ time + ' ) ' + 'ms');
    }
};

evenDoubler(12, handleResults);

module.exports.handleResults = handleResults;
module.exports.evenDoubler = evenDoubler;
module.exports.evenDoublerSync = evenDoublerSync;

console.log('----------------------');