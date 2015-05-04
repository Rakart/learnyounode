// Exercise 08

var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function (response) {
	response.setEncoding('utf-8');
	response.pipe(bl(function(err, data){
		if(err) return console.error('This is the error:', err);
		console.log(data.length);
		console.log(data.toString());
	}));
});