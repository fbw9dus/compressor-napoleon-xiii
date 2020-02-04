// const  fs = require('fs')
// const zlib = require('zlib')
// const gzip = zlip.creatGzip()
// const input = fs.createReadStream('')
// const output = fs.createWriteStream('')

// input.pipe(gzip)
// .on('error', () => {

// })
// .pipe(out)
// on('error', () => {

// })



var zlib = require('zlib');
var fs = require('fs');
const path = require('path')



const args = process.argv.slice(2)
const sourcePath = path.resolve(args[0])
const targetFileName =path.parse(sourcePath).dir + '/' + path.parse(sourcePath).base + '.gz'

var zip = zlib.createGzip();




var read = fs.createReadStream(sourcePath);
var write = fs.createWriteStream(targetFileName);

read.pipe(zip).pipe(write);	
console.log("Zipped Successfully");		