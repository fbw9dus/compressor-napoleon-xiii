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



const zlib = require('zlib');
const fs = require('fs');
const path = require('path')



const args = process.argv.slice(2)

if(args.length == 1){
const sourcePath = path.resolve(args[0])
const targetFileName =path.parse(sourcePath).dir + '/' + path.parse(sourcePath).base + '.gz'
var zip = zlib.createGzip();

var read = fs.createReadStream(sourcePath);
var write = fs.createWriteStream(targetFileName);

read.pipe(zip).pipe(write);	
console.log("Zipped Successfully");		

}else{
let sourcePath = 'input.txt'

const targetFileName ='input.txt.gz'
var zip = zlib.createGzip();

var read = fs.createReadStream(sourcePath);
var write = fs.createWriteStream(targetFileName);

read.pipe(zip).pipe(write);	
console.log("Zipped Successfully");		
}
