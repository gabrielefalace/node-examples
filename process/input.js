
process.stdin.resume();

process.stdin.setEncoding('utf-8');

process.stdin.on('data', function(data){
    process.stdout.write('processing: ' + data);
});

process.stdin.on('end', function(data) {
   process.stderr.write('end of processing! \n');
});


process.on('SIGTERM', function (data) {
    process.stderr.write('Hey, sure you wanna terminate?');
})

console.log('Node runs with PID = ' + process.pid);