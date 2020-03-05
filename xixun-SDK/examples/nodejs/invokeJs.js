var http = require('http')

var options = {
    host:'localhost', //check this
    port: 8081,  //check this
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
    "type": "invokeJs",
    //"js": "showHtml({id:'#divA',html:'<b>data</b> in divA '})"
	"js": "showHtml({id:'#divB',html:'<b>data</b> in divB '})"
}

// write data to request body
req.write(JSON.stringify(request));
req.end();