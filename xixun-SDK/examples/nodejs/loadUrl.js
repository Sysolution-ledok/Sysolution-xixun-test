var http = require('http')

var options = {
    host:'localhost', //check this
    port: 8081,  //check this
    method: 'POST',
   //path:'/command/y10-417-60202', //check this
  // path:'/command/y10-215-00159',
  path:'/command/y10-417-00185',
    headers:{'Content-Type':"application/json; charset=UTF-8"}
}

var req = http.request(options, function(res) {
   // console.log('STATUS: ' + res.statusCode);
    //console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
    });
});

req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
});

var request = {
  

   // "type": "downloadFileToSD",
   // "url": "http://192.168.8.110:8081/link.jpg",
   // "path": "/201505/link.jpg" 
   //"type": "getFileLength",
    //"path": "/201505/link.jpg"
	"type": "clear",
	//"type":'loadUrl',
   //  url:'http://120.24.153.244/HuisuLamp/HtmlPage2.html',//url:'http://120.24.153.244/HuisuLamp/HtmlPage2.html', //也      可以是本地路径
  //  persistent: true
	//"type":"clearPlayList"
	//"type": "downloadFileToSD",
    //"url": "http://192.168.8.110:8081/Update6.6.zip",
    //"path": "/201505/Update6.6.zip"  //保存后的文件路径，实际绝对路径为file:///mnt/sdcard/201505/Update6.6.zip
}

// write data to request body
req.write(JSON.stringify(request));
req.end();