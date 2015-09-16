var spawn = require('child_process').spawn;
var ps = spawn('ps', ['ax']);
var grep = spawn('grep', ['node']);

ps.stdout.pipe(grep.stdin);
grep.stdout.pipe(process.stdout);


// a couple callbacks for possible errors

ps.stderr.on('data', function(data){
    console.log('ps stderr ' + data);
});

grep.stderr.on('data', function (data) {
   console.log('grep stderr ' + data); 
});