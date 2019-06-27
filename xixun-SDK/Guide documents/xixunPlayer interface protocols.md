# 				xixunPlayer interface protocols

## 1.program task

#### transfer data via AIDL interface executeJsonCommand

**command data：**

```json
{ 
    "_type": "PlayXixunTask", 
    "id": "abc", 							   *//Command ID*
    "preDownloadURL":"http://aaaa/bbbb?id=", 	 *//prefix of download url* 
    "notificationURL":"http://xxxxxx" 			*//notification url of download processing*
    "task":{}, 								  *//program task* 
}
```

**can judge room not enough and other operations after receiving command, return JSON character string if has error**

```json
{"_type":"Error","errorMessage":"xxxx"}
```

**return JSON character string if no error**

```json
{"_type":"Received"}
```



- **_type** 

  command type

- **Id** 
  unique mark for command, commandId，for notify download process and error.

- **preDownloadURL** 
  splice  source 's id value to download file

- **notificationURL** 
  Post download process by http protocol to this url： 
  **request head：** 

  ```
  Content-Type: application/json 
  Card-Id: y10-xxxxx
  ```

- **content：** 

  ```json
  { 
      "commandId":"abc", 
      "taskItemId": "xxxx", 
      "progress":100 
  } 
  ```

  Post error message by http protocol to this url if meet error during download, content data structure in below :

  ```json
  { 
      "commandId":"abc", 
      "errorMessage": "xxxx" 
  }
  ```

- **task** 
  xixun program task, omit structure here.

## 2.upload player log

#### transfer data via AIDL interface executeJsonCommand

**command data：**

```json
{ 
    "_type": "UploadPlayLogs", 				*//command type* 
    "interval": 60, 					   *//integer type, unit minute* 
    "url":"http://xxxxxx"				   *//upload url* 
    "encoding":"gzip" 					   *//compres type* 
}
```

-   **\_type** 
    command type

-   **interval** 
    upload player log per interval minute, will upload randomly if  interval is 0. 

-   **url** 
    upload url, using HTTP protocol POST method, return status code 200 if upload success. delete data from database after upload success.  

-   **encoding** 
    will not upload log in zip file when null or empty character string

**return JSON character string if has error after receiving command**

```json
{"_type":"Error","errorMessage":"xxxx"}，
```

**_return JSON character string if no error_**

```json
{"_type":"Success"}，
```

**send below content by http protocol per interval value to url in time (use UTF8 encoding and compress content data by encoding algorithm)**

**request head：** 

```
Content-Type: application/json 
Content-Encoding: gzip 
Card-Id: y10-xxxxx
```



**content：** 

```json
[ 
    { 
    "type":"gps", 		   *//program type, enumerative value：gps, simple, advanced, usb* 
    "pid":"xxx", 		   *//programId。value is pointId if it is gps task。* 
    "name":"programA", 	 	*//progra name or post point name* 
    "beginAt":1441518061436,*//timestamp, total number of milliseconds from 00:00:00 GMT 01 January 1970* 
    "duration": 15			*//display duration，second* 
    }, 
	**.....//maximum 1000 items** 
]
```



## 3.switch GPS program status 

#### transfer data via AIDL interface executeJsonCommand

**command data：**

```json
{ 
    "_type": "ToggleGpsTask", 		 *//command type* 
    "play": true, 					*//true means display gps task* 
}
```



## 4.query GPS program status

#### transfer data via AIDL interface executeJsonCommand

**command data：**

```json
{ 
	"_type": "GetGpsTaskStatus", 	*//command type* 
}
```



return：

```json
{"_type":"DataCallback","play":true}
```



## 5.query balance storage 

#### transfer data via AIDL interface executeJsonCommand

**command data：**

```json
{ 
	"_type": "GetDiskSpace", *//command type* 
}
```



return：

```json
{"_type":"DataCallback","internalTotal":512, "internalFree":50,"externalTotal":2048, "externalFree":60, },unit MB。
```



## 6.weather forecast update and downward compatibility

add property code for Weather material ,
if code==0，read weather forecast data still using property city, visit address：

```
"http://wthrcdn.etouch.cn/weather_mini?city="+city，
```

if code!=0，visit address：

```
"http://wthrcdn.etouch.cn/weather_mini?citykey="+code
```



## 7.delete task and program data

#### transfer data via AIDL interface executeJsonCommand

command data:

```json
{ 
	"_type": "DeleteTask", 		*//command type* 
}
```

reply：result:
