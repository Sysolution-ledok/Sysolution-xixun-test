//deprecated, protocol-B-8 is better

var http = require('http')

var options = {
    host:'localhost', //check this
    port: 8080,  //check this
    method: 'POST',
    path:'/command/y10-215-00159', //check this
    headers:{'Content-Type':"application/json; charset=UTF-8"}
}

var req = http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
    });
});

req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
});

var base64Data =require('fs').readFileSync('./test.jpg',{encoding:'base64'})

var request = {
    "type": "deleteFile",
    "fileName": "img.jpg", //check this
	//"deleteAll": true  //uncomment this if you want to delete all saved files
}

// write data to request body
req.write(JSON.stringify(request));
req.end();