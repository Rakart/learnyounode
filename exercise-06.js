var mymodule = require('./mymodule.js');

var dir = process.argv[2].toString();
var ext = process.argv[3].toString();


mymodule(dir, ext, function(err, data){
	if (err)
		return console.error('There was an error:', err);
	data.forEach(function(file) {
			console.log(file);
	});
});