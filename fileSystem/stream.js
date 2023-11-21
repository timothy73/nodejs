const fs = require('fs');

const readStream = fs.createReadStream('./text/text1.txt',  {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./newDir/txt2.txt');

readStream.on('data', chunk => {
    console.log('--Chuck--');
    console.log(chunk);
    writeStream.write('\nNEW CHUNK: \n');
    writeStream.write(chunk);
})

//write data
// const WriteStream = fs.createWriteStream('./newDir/txt2.txt');

// readStream.on('data', chunk => {
//     WriteStream.write('\nNew ChUNK: \n');
//     WriteStream._write(chuck);
// })