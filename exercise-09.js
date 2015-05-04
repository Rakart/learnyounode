var http = require('http');
var bl = require('bl');
var urls = [];
for (var i=2; i<5; i++){
	urls[i-2] = process.argv[i];
};
var count = 0;
var print = ["","",""];

function runUrl(i) {
	var url = urls[i];
	var req = http.get(url);
	req.on('response', function(resp){
		resp.on('data', function(data){
			print[i] += data.toString();
		});
		resp.on('end', function(){
			count++;
			if (count == urls.length) {
				PrintInfo();
			}
		});
	});
	req.on('error', function(err){
		console.error('This is the error:', err);
	});
}

function PrintInfo(){
	print.forEach(function(urldata) {
		console.log(urldata);
	});
}

for(i=0; i<urls.length; i++){
	runUrl(i);
}
