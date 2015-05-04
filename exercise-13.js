var http = require('http'); // uses http core module from node.js
var date = require('date');
var port = process.argv[2];
var url = require('url');

function parsetime(time){
	return { 	'hour': 	time.getHours(),
	 					'minute': time.getMinutes(),
						'second': time.getSeconds()
					};
}

http.createServer(function(req, res){

	var url_parts = url.parse(req.url, true);
	var time = new Date(url_parts.query.iso)

	res.writeHead(200, {'Content-Type': 'application/json'})

	if (url_parts.pathname == "/api/unixtime") {
		result = { "unixtime": time.getTime() };
	}

	if (url_parts.pathname == "/api/parsetime") {
		result = parsetime(time);
		res.end(JSON.stringify(result))
	}
	res.end(JSON.stringify(result))

}).listen(port);
