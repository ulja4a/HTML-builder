const fs = require('fs');
const path = require('path');
const filePath = path.join('01-read-file', 'text.txt');
const readableStream = fs.createReadStream(filePath, 'utf-8');
//const readableStream = fs.createReadStream('./01-read-file/text.txt', 'utf-8');
readableStream.on('data', chunk => console.log(chunk));