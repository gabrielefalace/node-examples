var fs = require('fs');

if(fs.existsSync('tmp')){
    if(fs.existsSync('tmp/new.txt')){
        fs.unlinkSync('tmp/new.txt');
    }
    fs.rmdirSync('tmp');
}

fs.mkdir('tmp', function () {
    fs.exists('tmp', function () {
        process.chdir('tmp');
        fs.writeFile('oloturia.txt', 'Gigi oloturia', function(){
            fs.rename('oloturia.txt', 'new.txt', function () {
                fs.stat('new.txt', function (err, stats) {
                    console.log('File size: ' + stats.size);
                    fs.readFile('new.txt', function (err, data) {
                        console.log('File content: ' + data.toString());
                    })
                })
            })
        });
    });
});