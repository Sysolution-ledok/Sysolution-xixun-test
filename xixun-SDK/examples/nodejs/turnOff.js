var http = require('http')

var request = {
        "type": "callCardService",
        "fn": "setScreenOpen",
        "arg1": false  //true or false
    }
	
var options = {
    host:'localhost', //check this
    port: 8080,  //check this
    method: 'POST',
	path:'/command/y10-116-01575', //check this
    headers:{'Content-Type':"application/json; charset=UTF-8"}
}

var req = http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    //console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
	var data =''
    res.on('data', function (chunk) {
        data += chunk
    });
	res.on('end', function(){
		console.log('response: '+ data);
	})
});

req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
});


// write data to request body
req.write(JSON.stringify(request));
req.end();