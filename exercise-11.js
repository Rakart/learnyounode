var http = require('http'); // uses http core module from node.js
var fs = require('fs');
var port = process.argv[2];
var path = process.argv[3];

var server = http.createServer(function (req, res){
	var fileStream = fs.createReadStream(path);
	fileStream.pipe(res);
})
server.listen(port);
