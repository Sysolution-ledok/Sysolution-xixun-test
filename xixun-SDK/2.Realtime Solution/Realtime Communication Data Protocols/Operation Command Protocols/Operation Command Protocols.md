[TOC]

# Operation Protocols

## 1、Upload files to Inter storage or SD card

### 1.1、Upload and save html, images and other files to SD card via character string format

（this protocol works for pushing text data to led controller, support no more than 10MB files; if larger than 10MB, please use “download to SD card”protocol, it works for led controller downloads files from http server, which support big size file.）save type of binary file:
*//*coding image using base64 (depends on your programming language )

```javascript
var base64Data=require('fs').readFileSync('./test.jpg',{encoding:'base64'})
```

*//following is protocol data*

```json
{ 
    "type": "saveStringFile", 
    "fileName": "img.jpg", 			*//check this* 
    "content": "base64Data", 
    "base64":true
} 
```

save html：

```json
{ 
    "type": "saveStringFile", 
    "fileName": "demo.html", *//check this* 
    "content":"<html><body><h1>These html can be saved to sdcard</h1><imgsrc=\"img.jpg\"></body></html>" 				*//you can load file and put it's string here* 
} 
```

NOTE：all files uploaded by this protocol will be saved in the directory of file:///sdcard/xixun_realtime/, so if no SD card can not use this interface.

### 1.2、Delete files uploaded through character string format

```json
{ 
    "type": "deleteFile", 
    "fileName": "img.jpg", 		*//check this* 
    "deleteAll": true       *//uncomment this if you want to delete all saved files* 
}
```

### 1.3、Download files to SD card (random files like images, videos )

```json
{ 
    "type": "downloadFileToSD", 
    "url": "http://localhost:8080/demo.html", 
    "path": "/201505/download.html"//file path after saved , actual absolute path is							file:///mnt/sdcard/201505/download.html 
}
```

### 1.4、Delete files from SD card

```json
{ 
    "type": "deleteFileFromSD", 
    "path": "/201505/download.html" 
}
```

### 1.5、Get file size from SD card

can check upload(download) success or not by using this protocol

```json
{ 
    "type": "getFileLength", 
    "path": "/201505/download.html" 
} 
Return:{"length":2560812,"_type":"success"}
```

### 1.6、Download file to internal storage (images, videos and other files) 

```json
{ 
	"type": "downloadFileToLocal", 
	"url": "http://192.168.1.200:8080/demo.html", 
	"path": "/abc/demo.html"//file path after save, actual absolute file path is file:///data/data/com.xixun.xy.conn/files/local/abc/demo.html 
} 
Return:
{"_type":"success","absolutePath":"/data/data/com.xixun.xy.conn/files/local/abc/demo.html"}
```

### 1.7、Delete files from internal storage

```json
{ 
    "type": "deleteFileFromLocal", 
    "path": "/abc" //can delete whole catalog
}
```

### 1.8、Check file size of internal storage

```json
{ 
	"type": "getLocalFileLength", 
    "path": "/abc/demo.html" 
} 
```

### 

## 2、Other Operation Commands

### 2.1、Stop default player (xixunplayer)

```json
{ 
    "type": "stopPlayer", 
    "stop": true *// open defaulted player: false* 
}
```

### 2.2、Get screenshot

```json
{ 
	"type": "callCardService", 
	"fn": "screenshot", 
	"arg1": 100, 	*//quality* 
	"arg2": 100 	*//scale* 
} 
Return:{"result":"/9j/4AAQSkZJRgABAQAAAQABAAD/...."}screen shot is base 64 encode character string, contains too many \n, need to remove \n with regular then can display out, format is png.）
```

### 2.3、 Screen switch

```json
{ 
    "type": "callCardService", 
    "fn": "setScreenOpen",
    "arg1": true 							//true or false** 
} 
Return:{"result":true}
```

### 2.4、Set brightness

```json
{ 
    "type": "callCardService", 
    "fn": "setBrightness", 
    "arg1": 6 								*//1-64 or 1-255,according to cardsystem &display version
} 
Return:{"result":true}
```

### 2.5、Set volume

```json
{ 
    "type": "callCardService", 
    "fn": "setVolume", 
    "arg1": 10 *//0 to 15* 
} 
Return:{"result":true}
```

### 2.6、Set NTP server or time zone

```json
{ 
    "type": "callCardService", 
    "fn": "setTimeSync", 
    "arg1": "ntp.sjtu.edu.cn", *//ntpServer* 
    "arg2": "Asia/Shanghai" *//timezone* 
} 
Return:{"result":true}
```

### 2.7、Reboot

```json
{ 
"type": "callCardService", 
"fn": "reboot", 
"arg1": 1 //*delayForSecond 
} 
Return:{"result":true}
```

### 2.8、Interface of update APP online(conn10.0.5Tor above)

interface JSON format,example：

```json
{
	"type":"updateAPP",
	 //command type fixed at updateAPP, not allow to change
	"appUrl":"https://m2mled.net/file/download?id=5c13839da62960b53cb07b42"
 	//app download address
}
```

success return, example：

```json
{   
    "_type": "success",
    "_id": "448e715c-5c31-4a52-b0ac-18165e4fd9a0",
    "timestamp": 1551866957797
}
```

### 2.9、Interface of advance parameters setup(conn10.0.5T or above)

interface JSON format,example:

```json
{
	"type":"advancedConfig",			//command type fixed
	"serverURL":"www.ledaips.com",		//specfied web server address
	"companyId":"xixun",			   //specified company id
	"realtimeURL":"192.168.8.128:8081",	//specified realtime server address
	"usbProgramPwd":"888"			  //setup 888 or empty
}
```

controller will disconnect before start new connection if setup success, so if not return "not opened" error means success.  

### 2.10、Interface of synchronize time(conn10.0.5T or above)

interface JSON format, example：

```json
{
    "type":"setTimeSync",	//command character string is fixed
    "time":"serial",		//can choose serial、gps or ntp, means modem, gps and network time in turn
    "brightness":"none",	//time=“serial”,choose serial,brightness depends on master modem, otherwise set none
    "volume":"none",		//time="serial“，choose serial,volume depends on master modem, otherwise set none
    "screenSwitch":"none",	//time="serial"，choose serial, screen switch depends on master modem, otherwise set none
    "identificationCode":"1",	//identification code，just enable when time=”serial“，devices identification code must be the same if need synchronization
    "delaySync":"1",		//time=”serial" inteval time for synchronous，frequency of specified app to adjust time, unit milliseconds
    "checkNtpTime":""		//time="ntp“inteval time for synchronous，unit minute
}
```

return success data format,example：

```json
{
    "_type": "success",
    "_id": "b2aa241e-c33e-431e-9f0b-1a461b06bf0f",
    "timestamp": 1552296747116
}
```

### 2.11、Setup auto brightness, brightness will auto adjust according to sensor data(conn10.0.5T or above)

interface JSON format, example：

```json
{ 
    "type": "setAutoBrightness",
    "sensitivity":"50",		//sensitivity, higher value higher sensitivity
    "minBrightness":"1"	//minimum brightness
}
```

return success data format,example：

```json
{
    "_type": "success",
    "_id": "cb4eee0b-a8e1-47b7-bac0-a7e61a392e28",
    "timestamp": 1553833293474
}
```

### 2.12、interface of get sensor data(conn10.1.9 or above)

interface JSON format, example：

```json
{
    "type":"Subscribe",  //command string is fixed, case sensitivity
    "action":"xixun.intent.action.TEMPERATURE_HUMIDITY", //fixed, case sensitivity
    "callbackURL":"",//http address of receive sensor data, post method
    "subscribe":true //true subscribe，false cancel subscribe
}
```

sensor data format of POST to server：

```json
{
    "cardId":"y10-817-01926",	//serial ID
    "t":"--",  //temperature
    "h":"--",  //humidity
    "ws":"--",  //wind speed, unit m/s
    "wd":"--",  //wind direction
    "ns":"--",  //noise db
    "pm2":"--",  //PM2.5 unit μg/m³
    "pm10":"--"//PM10 unit μg/m³
}
```

### 2.13、Interface of WiFi /AP Switch（Note:This interface only for Open or Shut WIFI modem, can not physically control WIFI or AP status.）

request data format：

```json
{
    "_id":"f237643d-c35c",
    "type": "switchWiFi" ,
    "on":true | false //true is open，false is shut
}
```

return success：

```json
{
    "_type": "success",
    "_id": "f237643d-c35c",
    "timestamp": 1552296747116
}
```

