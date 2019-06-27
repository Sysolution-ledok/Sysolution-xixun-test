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

var request = {
    "type": "saveStringFile",
    "fileName": "demo.html", //check this
	"content": "<html><body><h1>These html can be saved to sdcard</h1><img src=\"img.jpg\" ></body></html>" //you can load file and put it's string here
}

// write data to request body
req.write(JSON.stringify(request));
req.end();