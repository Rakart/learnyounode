var fileLoc = process.argv[2];

var fs = require('fs');
var str = fs.readFileSync(fileLoc).toString();
var total = str.split('\n');
console.log(total.length-1);