var fun = require('../callback.js');

process.on('message', function(msg){
    if(msg.cmd === 'double'){
        fun.evenDoubler(msg.number, function(err, result, time){
            console.log('► computed : ' + result);
            process.send({answer: result}); 
        });
    } else if(msg.cmd === 'done'){
        process.exit();
    }
});