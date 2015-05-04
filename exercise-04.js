var fileLoc = process.argv[2];
var lines = undefined;

var fs = require('fs');
function checkLines(callback) {
	fs.readFile(fileLoc, 'utf-8', function done(err, data) {
		lines = data.split('\n');
		callback();
	 });
}

function logLines(){
	console.log(lines.length-1);
}
	
checkLines(logLines);