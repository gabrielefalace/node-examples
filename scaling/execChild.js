var exec = require('child_process').exec;

// run the "uptime" Unix function 

var child = exec('uptime | cut -d "," -f 1', function(err, stdout, stderr){
    if(err){
        console.log('ERROR: ' + stderr);
    } else {
        console.log('OUTPUT: ' + stdout);
    }
});

console.log('PID is ' + child.pid);