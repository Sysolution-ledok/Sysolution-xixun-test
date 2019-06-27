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


var cmd = {
    "type": "setPublicKey",
    "publicKey": null
}
// var cmd = {
    // "type": "clear"
// }

var json= JSON.stringify(cmd)
var crypto = require('crypto')
var privateKey = require('fs').readFileSync('e:/pri-key.pem',{encoding:'utf8'})
var sign = crypto.createSign('RSA-SHA1')
var buffer = new Buffer(json)
sign.update(buffer)
var signed = sign.sign(privateKey,'base64')

var request = {
    "type": "executeCommandSecurely",
    "command": json,
	sign: signed
}

// write data to request body
req.write(JSON.stringify(request));
req.end();