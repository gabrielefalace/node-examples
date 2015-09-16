var fs = require('fs');

if(fs.existsSync('tmp')){
    console.log('directory already existing, removing it ... ');
    if(fs.existsSync('tmp/new.txt')){
        fs.unlinkSync('tmp/new.txt');
    }
    fs.rmdirSync('tmp');
}


fs.mkdirSync('tmp');
if(fs.existsSync('tmp')){
    process.chdir('tmp');
    fs.writeFileSync('oloturia.txt', 'Gigi oloturia');
    fs.renameSync('oloturia.txt', 'new.txt');
    console.log('File size: ' + fs.statSync('new.txt').size + ' bytes');
    console.log('File contents: ' + fs.readFileSync('new.txt').toString());
}

// with asynchronous calls gives a "christmas tree problem" !!!

