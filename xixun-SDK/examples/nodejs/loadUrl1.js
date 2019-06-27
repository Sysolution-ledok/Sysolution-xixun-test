var http = require('http')

var options = {
    host:'localhost', //check this
    port: 8081,  //check this
    method: 'POST',
    path:'/command/y10-417-00185', //check this
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
	/*"type":"setPlayList",
  
   "pathList":[
        "/test2.mp4"
    ],
    "width":640,
    "height":200,
    "top":0,
    "left":320
	*/
	
//播放节目步骤


    //第一步下载节目到卡内
    "type": "downloadFileToSD",
   "url": "http://192.168.8.172:8081/test5.mp4",
   //(我把program.zip放在了web服务器上以便于下载)
    "path": "/lasting/test5.mp4"  
   //（存入到sd卡的路径；绝对路径为：/mnt/sdcard/program.zip）

   
   
   
   
	//第二步播放节目
    /*	"type": "commandXixunPlayer",
        "command": {
        "_type": "PlayXixunProgramZip",
        "path": "/mnt/sdcard/program.zip", //绝对路径
        "password":"888",
       //（该密码为下载节目是输入的密码）
    }
	*/
	
	
//插播步骤

	//第一步停止节目
	//"type": "stopPlayer",
    //"stop": false
	
	
	
	/*//第二步插播百度
	  "type":'loadUrl',
    url:'https://www.baidu.com',
   //（html文件可以放在服务器上，也可以放在本地）
    persistent: false
	*/
	
	/*
	//第三步停止并清除插播
	 "type": "clear"
	*/
	
	
	/*
	//第四步继续轮播节目
	"type": "stopPlayer",
    "stop": false
	*/
}

// write data to request body
req.write(JSON.stringify(request));
req.end();