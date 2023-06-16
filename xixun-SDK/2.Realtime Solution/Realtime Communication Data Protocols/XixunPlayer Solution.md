[TOC]

# XixunPlayer Solution

## 1、Instructions

This solution is the recommend method, using Sysolution 's "xixunplayer"  to  publish content and display. support all screens display the same content synchronously, support single text, multiline text, image, video, audio, weather forecast, environment measure(temperature, humidity, wind speed, wind direction, pm2.5, pm10), analog clock , digital clock, countdown and  etc .

## 2、Protocols interface

### 2.1、send program

example codes：

```json
{
  "type":"commandXixunPlayer",		//fixed character string, not allowed to modify
  "_id":"28dc5b76-51c9-11e9-9b24-4ccc6a95f6dc",		//Verify command ID, which can be assigned as a random string
  "command":{
    "_type":"PlayXixunTask",	//fixed character string, not allowed to modify
    "id":"28dd5a80-51c9-11e9-9b24-4ccc6a95f6dc",//The device will save this ID value as the unique ID of the program to the device, which can be assigned a random string
    "preDownloadURL":"http://8.136.4.199/upload/",//Material link, used to concatenate the IDs in the source to form a complete link for device download of materials. This parameter can also be omitted and a URL field can be added to the source to fill in the complete material download link. Please refer to the example section bel,
    "notificationURL":"http://192.168.2.105:8083/getJSON",//post function address，receiving the program download process
    "task":{
      "_id":"28dd55c6-51c9-11e9-9b24-4ccc6a95f6dc",//Verify command ID, which can be assigned as a random string
      "name":" image program test",//Total program name
      "items":[
        {
          "_id":"7111bd0f-edba-4db6-8bd4-f5071d79a265",//erify command ID, which can be assigned as a random string
          "_program":{
            "_id":"28dd2786-51c9-11e9-9b24-4ccc6a95f6dc",//erify command ID, which can be assigned as a random string
            "totalSize":55066,//The total byte size of all materials for this program, which must be accurate and accurate
            "name":"image program test",//program name
            "width":128,//program width
            "height":256,//program height
			 "__v":0,//can be omitted
            "layers":[
              {
				"repeat":false,//Conventional assignment of false is sufficient
                "sources":[
                  {
                    "_type":"Image",	//image material type
                    "md5":"b9bcfa191b1ddb4bdfc6a6057dc534f6",//MD5 value of the material, obtaining the unique MD5 verification value of the file stream
                    "name":"5s.jpg",//material name
                    "mime":"image/jpeg",
                    "size":55066,//The byte size of the material, which must be accurate and accurate
                    "fileExt":".jpg",//Material Suffix
                    "id":"5s.jpg",//Material ID, which will be named and saved to internal storage on the device
                    "playTime":0,//The start playback time of the material on the timeline, set to 0 for the first image, and in the rotation, this value is equal to the playTime+timeSpan value of the previous material.
                    "timeSpan":10,//The playback duration of the material on the timeline, in seconds
                    "left":0,//The margin between the material and the left in the program
                    "top":0,//Margin from top
                    "width":128,//material width
                    "height":256,//material height
                    "entryEffect":"None",//The following four parameters are the entry and exit special effects and time. This function is temporarily discontinued and can be assigned according to the example
                    "exitEffect":"None",
                    "entryEffectTimeSpan":0,
                    "exitEffectTimeSpan":0
                  }
                ]
              }
            ]
          },
          "priority":0,//Playback priority, lower value leads to higher priority
          "repeatTimes":1,//The number of times the program is played when it is an interrupted program and there are no timing parameters
		  "version":0,//Regular assignment of 0 is sufficient
          "schedules":[		//Timing field, refer to the timing parameter description below
            {
              "filterType":"None",		//must have this parameter 
              "timeType":"Range",		//must have this parameter 
              "startTime":"00:00",
              "endTime":"23:59",
              "dateType":"All"			//must have this parameter 
            }
          ]
        }
      ]
    }
  }
}
```

### Timing parameters description

```json
dateType:(All:Unlimited date,Range:limited date)
"startDate":"2019-03-03" //Scheduled start date
"endDate":"2019-03-26"	 //Scheduled end date

timeType:(All:unlimited time,Range:limited time)
"startTime":"00:00",	//scheduled start time
"endTime":"23:59",		//scheduled end time

filterType:(None:unlimited week，Week:Limited week playback)
 "weekFilter":[0，1，2，3，4，5，6 ],	//Weekend is 0, Monday is1, and so on
```



### 2.2、Clear player program data and files (supported by conn10.0.5T or above)

Example of JSON data format：

```json
{ 
    "type": "clearPlayerTask"
} 
```

Example of returning successful format：

```json
{
    "_type": "success",
    "_id": "4ed91a8f-dea2-42fb-951d-c6e3484a97af",
    "timestamp": 1553848772492
}
```

### 2.3、Query the JSON of the currently stored program in the player (only supported in conn10.0.9 or above versions)

Request Data Format：

```json
{
    "type": "getProgramTask"
}
```

Return Data Format：

```json
{
    "_id": "7ac3c9f4-07e7-49b1-badb-c680535c6d2e",

    "_type": "success",
"data": "{\"task\":{\"_department\":{\"_company\":\"test\",\"_id\":\"\",\"name\":\"RootDepartment\",\"priority\":0},\"_id\":\"5d08bd360926d29d1ae78ef1\",\"items\":[...],\"name\":\"1212121_Task\"}}"
}
```

### 2.4、Query the name of the program currently being played by the player (only supported by Conn 10.0.9 or above)

Request Data Format：

```json
{
    "type": "getPlayingProgram"
}
```

Reply Data Format：

```json
{
    "_id": "4a5b0a6e-9b56-474a-a9c0-4ca3a2e8b9cb",
 
   "_type": "success",
  
  "name": "1212121"  //program name
}
```



### 2.5、playback on demand of program index (only supported by Conn 1043 and xixunplayer1099-30 or above)

Request Data Format:

```json
{
    "type":"startProgramByIndex",
    "index":123    //Reply to normal rotation with index 0
} 
```

return success：

```json
{
    "_type": "success",
    "_id": "c78daa3d-4404-4222-b80f-47f6b58a9a69",
    "timestamp": 1618999307009
}
```

### 2.6、change xixunplayer background

Request Data Format:

```json
{
    "type":"setPlayerBackground",
    "url":""
} 
```

return success：

```json
{
    "_type": "success",
    "_id": "c78daa3d-4404-4222-b80f-47f6b58a9a69",
    "timestamp": 1618999307009
}
```

## 3、Example of publish program

### 3.1、Image

```json
{
	"type": "commandXixunPlayer",
	"_id": "23204dfd-7b0c-4958-8dfb-da5971a70112",
	"command": {
		"_type": "PlayXixunTask",
		"id": "7cb2209e-d7b6-4da6-aaa0-3ed25818bfe5",
		"preDownloadURL": "",
		"notificationURL": "",
		"task": {
			"_id": "e3f962a4-f2ae-484a-8d02-0ca4fcfc13af",
			"name": "ehlProgram",
             "insert":false,		
			"items": [{
				"_id": "74d4e60672834f2e85a9e2686a64f9e4",
				"_program": {
					"id": "1e7fc3a072054d8b883d9fc5dd8cdd55",
					"totalSize": 167545 ,
					"name": "ehlitemProgram",
					"width": 128,		
					"height": 256,		
					"layers": [{
						"repeat": false,
						"sources": [{
							"_type": "Image",
							"md5": "888535d4f98ea557596839ca7ed4141e",
							"name": "1.png",
							"mime": "image/png",
							"size": 167545, 	
							"fileExt": ".png",
							"id": "5ca1d704ca37bbc01ebbdbc0",	
                               "url":"http://49.235.105.76:6095/sz1.png",	//image link
							"playTime": 0,
							"timeSpan": 10,
							"left": 0,
							"top": 0,
							"width": 128,
							"height": 256,
							"entryEffect": "None",
							"exitEffect": "None",
							"entryEffectTimeSpan": 0,
							"exitEffectTimeSpan": 0
						}]
					}]
				},
				"repeatTimes": 1,
				"schedules": [{
					"dateType": "All",
					"timeType": "Range",
					"startTime": "00:00",
					"endTime": "23:59",
					"filterType": "None"
				}]
			}]
		}
	}
}
```



### 3.2、Video

```json
{
	"type": "commandXixunPlayer",
	"_id": "23204dfd-7b0c-4958-8dfb-da5971a70112",
	"command": {
		"_type": "PlayXixunTask",
		"id": "7cb2209e-d7b6-4da6-aaa0-3ed25818bfe5",
		"preDownloadURL": "",
		"notificationURL": "",
		"task": {
			"_id": "e3f962a4-f2ae-484a-8d02-0ca4fcfc13af",
			"name": "节目示例",
             "insert":false,	
			"items": [{
				"_id": "74d4e60672834f2e85a9e2686a64f9e4",
				"_program": {
					"id": "1e7fc3a072054d8b883d9fc5dd8cdd55",
					"totalSize": 2040197 ,	
					"name": "视频示例",
					"width": 128,		
					"height": 256,		
					"layers": [{
						"repeat": false,
						"sources": [{
                                        "_type":"Video",
                                       "md5":"eb2415b138b3c2a5984db4d57652f4c9",
                                        "name":"iphone.mp4",
                                        "mime":"video/mp4",
                                        "size":2040197,
                                        "fileExt":".mp4",
                                        "id":"5c6f81b6d17fe59b436f5257",
                                        "url":"http://49.235.105.76:6095/demoss.mp4",
                                        "playTime":0,
                                        "timeSpan":31,
                                        "left":0,
                                        "top":0,
                                        "width":128,
                                        "height":256,
                                        "entryEffect":"None",
                                        "exitEffect":"None",
                                        "entryEffectTimeSpan":0,
                                        "exitEffectTimeSpan":0
								}]
					}]
				},
				"repeatTimes": 1,
				"schedules": [{
					"dateType": "All",
					"timeType": "Range",
					"startTime": "00:00",
					"endTime": "23:59",
					"filterType": "None"
				}]
			}]
		}
	}
}
```



### 3.3、Single line text

```json
{
	"type": "commandXixunPlayer",
	"_id": "23204dfd-7b0c-4958-8dfb-da5971a70112",
	"command": {
		"_type": "PlayXixunTask",
		"id": "7cb2209e-d7b6-4da6-aaa0-3ed25818bfe5",
		"preDownloadURL": "",
		"notificationURL": "",
		"task": {
			"_id": "e3f962a4-f2ae-484a-8d02-0ca4fcfc13af",
			"name": "program test",
             "insert":false,	
			"items": [{
				"_id": "74d4e60672834f2e85a9e2686a64f9e4",
				"_program": {
					"id": "1e7fc3a072054d8b883d9fc5dd8cdd55",
					"totalSize": 0,	
					"name": "single line text",
					"width": 128,		
					"height": 256,		
					"layers": [{
						"repeat": false,
						"sources": [{
                                        "id":"",
                                        "name":"SingleText",
                                        "_type":"SingleLineText",
                                        "lineHeight":1.4,
                                        "speed":20,
                                        "html":"<span style='color:red;font-size:25px'>single line text</span>",
                                        "playTime":0,
                                        "timeSpan":10,
                                        "left":0,
                                        "top":0,
                                        "width":128,
                                        "height":256,
                                        "entryEffect":"None",
                                        "exitEffect":"None",
                                        "entryEffectTimeSpan":0,
                                        "exitEffectTimeSpan":0
                                    }]
					}]
				},
				"repeatTimes": 1,
				"schedules": [{
					"dateType": "All",
					"timeType": "Range",
					"startTime": "00:00",
					"endTime": "23:59",
					"filterType": "None"
				}]
			}]
		}
	}
}
```

### Partial parameter description

```
_ Type: The material is a single line text type and must be SingleLineText, case sensitive
Id: material id, can be empty string, can set random value, and this field is indispensable
LineHeight: Row height
Speed: Text movement speed, indicating that the text moves once from beginning to end within a specified time. The larger the value, the slower the speed, in seconds
HTML: Text content, in HTML format, can be edited using inline styles, including background color, font size, font color, etc

```



### 3.4、multiline text

```json
{
	"type": "commandXixunPlayer",
	"_id": "23204dfd-7b0c-4958-8dfb-da5971a70112",
	"command": {
		"_type": "PlayXixunTask",
		"id": "7cb2209e-d7b6-4da6-aaa0-3ed25818bfe5",
		"preDownloadURL": "",
		"notificationURL": "",
		"task": {
			"_id": "e3f962a4-f2ae-484a-8d02-0ca4fcfc13af",
			"name": "program test",
             "insert":false,	
			"items": [{
				"_id": "74d4e60672834f2e85a9e2686a64f9e4",
				"_program": {
					"id": "1e7fc3a072054d8b883d9fc5dd8cdd55",
					"totalSize": 0,	
					"name": "multiline text",
					"width": 128,		
					"height": 256,		
					"layers": [{
						"repeat": false,
						"sources": [ {
                    "backgroundColor":"rgba(0,0,0,1)",
                    "id":"",
                    "name":"MultiText",
                    "_type":"MultiLineText",
                    "speed":10,
                    "lineHeight":1.4,
                    "center":true,
                    "html":"<p><span style=\"color:#FF0000;font-size:14px;background-color:#FFFFFF;\">Welcome to Shenzhen Sysolution led control company!</span></p>",    //You can use the</br>label to wrap, and the top edge of the text will also Line wrap and word wrap.
                    "playTime":0,
                    "timeSpan":60,
                    "left":0,
                    "top":0,
                    "width":128,
                    "height":256,
                    "entryEffect":"None",
                    "exitEffect":"None",
                    "entryEffectTimeSpan":0,
                    "exitEffectTimeSpan":0
                  }]
					}]
				},
				"repeatTimes": 1,
				"schedules": [{
					"dateType": "All",
					"timeType": "Range",
					"startTime": "00:00",
					"endTime": "23:59",
					"filterType": "None"
				}]
			}]
		}
	}
}
```

### Partial parameter description

```
_ Type: The material is a multi line text type and must be MultiLineText, case sensitive
Id: material id, can be empty string, can set random value, and this field is indispensable
LineHeight: Row height
Center: whether the text is centered
HTML: Multiline text content, in HTML format, can be edited using inline styles, including background color, font size, font color, etc. Use</br>labels to wrap
```



### 3.5、Webpage

```json
{
	"type": "commandXixunPlayer",
	"_id": "23204dfd-7b0c-4958-8dfb-da5971a70112",
	"command": {
		"_type": "PlayXixunTask",
		"id": "7cb2209e-d7b6-4da6-aaa0-3ed25818bfe5",
		"preDownloadURL": "",
		"notificationURL": "",
		"task": {
			"_id": "e3f962a4-f2ae-484a-8d02-0ca4fcfc13af",
			"name": "节目示例",
			"insert": false,
			"items": [{
				"_id": "74d4e60672834f2e85a9e2686a64f9e4",
				"_program": {
					"id": "1e7fc3a072054d8b883d9fc5dd8cdd55",
					"totalSize": 0,
					"name": "url test",
					"width": 128,
					"height": 256,
					"layers": [{
						"repeat": false,
						"sources": [{
							"id": "",
							"name": "webURL",
							"_type": "WebURL",
							"url": "http://ledok.cn",	//The webpage address to load
							"playTime": 0,
							"timeSpan": 60,
							"left": 0,
							"top": 0,
							"width": 128,
							"height": 256,
							"entryEffect": "None",
							"exitEffect": "None",
							"entryEffectTimeSpan": 0,
							"exitEffectTimeSpan": 0
						}]
					}]
				},
				"repeatTimes": 1,
				"schedules": [{
					"dateType": "All",
					"timeType": "Range",
					"startTime": "00:00",
					"endTime": "23:59",
					"filterType": "None"
				}]
			}]
		}
	}
}
```



### 3.6、Weather forecast (player version needs to be upgraded to xixunplayerv1.5.7.6 or above)

```json
{
	"type": "commandXixunPlayer",
	"_id": "23204dfd-7b0c-4958-8dfb-da5971a70112",
	"command": {
		"_type": "PlayXixunTask",
		"id": "7cb2209e-d7b6-4da6-aaa0-3ed25818bfe5",
		"preDownloadURL": null,
		"notificationURL": null,
		"task": {
			"_id": "e3f962a4-f2ae-484a-8d02-0ca4fcfc13af",
			"name": "program test",
			"insert": false,
			"items": [{
				"_id": "74d4e60672834f2e85a9e2686a64f9e4",
				"_program": {
					"id": "1e7fc3a072054d8b883d9fc5dd8cdd55",
					"totalSize": 0,
					"name": "weather forecast program test",
					"width": 128,
					"height": 256,
					"layers": [{
						"repeat": false,
						"sources": [{
							"id": "",
							"name": "Today",
							"_type": "Weather",
							"city": "Shanghai",
							"lineHeight": 1,
							"html": "today：%{arr.0.date}<br />temperature：%{current}℃<br />air quality：%{aqi}<br />%{arr.0.img-32-32}%{arr.0.type}<br />maximum:%{arr.0.high}℃ minimum：%{arr.0.low}℃<br />%{arr.0.fx} %{arr.0.fl}",
							"playTime": 0,
							"timeSpan": 60,
							"left": 0,
							"top": 0,
							"width": 128,
							"height": 256,
							"entryEffect": "None",
							"exitEffect": "None",
							"entryEffectTimeSpan": 0,
							"exitEffectTimeSpan": 0,
							"code": 101020100
						}]
					}]
				},
				"repeatTimes": 1,
				"schedules": [{
					"dateType": "All",
					"timeType": "Range",
					"startTime": "00:00",
					"endTime": "23:59",
					"filterType": "None"
				}]
			}]
		}
	}
}
```

### Partial parameter description

```
_ Type: The material is of weather forecast type and must be Weather, case sensitive
City: City name, supporting major cities in China
Code: City code, please refer to the corresponding table of city codes at the end of the document
Html: display content, html format,% {current}: current temperature,% {aqi}: AQI (Air quality index),% {arr. 0. date}: date of the day (including real-time temperature),% {arr. 0. type}: weather of the day,% {arr. 0. high}: highest temperature of the day,% {arr. 0. low}: lowest temperature of the day,% {arr. 0. fx}: wind direction of the day,% {arr. 0. fl}: wind force of the day,% {arr. 0. img-32-32}: weather picture of the day, format: img width height (blue), Img2 width height (gray), arr. 0 in {} above represents today, 1 represents tomorrow, 2 represents the day after tomorrow, 3 represents the day after tomorrow, and 4 represents the day after tomorrow
```



### 3.7、Sensor (requires connection to our designated model sensor)

```json
{
	"type": "commandXixunPlayer",
	"_id": "23204dfd-7b0c-4958-8dfb-da5971a70112",
	"command": {
		"_type": "PlayXixunTask",
		"id": "7cb2209e-d7b6-4da6-aaa0-3ed25818bfe5",
		"preDownloadURL": null,
		"notificationURL": null,
		"task": {
			"_id": "e3f962a4-f2ae-484a-8d02-0ca4fcfc13af",
			"name": "program test",
			"insert": false,
			"items": [{
				"_id": "74d4e60672834f2e85a9e2686a64f9e4",
				"_program": {
					"id": "1e7fc3a072054d8b883d9fc5dd8cdd55",
					"totalSize": 0,
					"name": "sensor test",
					"width": 128,
					"height": 256,
					"layers": [{
						"repeat": false,
						"sources": [{
							"id": "",
							"name": "Sensor",
							"_type": "MultiLineText",
							"lineHeight": 1.4,
							"center": true,
							"html": "<p>temperature:%c℃(%f℉)</p>",
							"playTime": 0,
							"timeSpan": 10,
							"left": 0,
							"top": 0,
							"width": 128,
							"height": 256,
							"entryEffect": "None",
							"exitEffect": "None",
							"entryEffectTimeSpan": 0,
							"exitEffectTimeSpan": 0,
							"backgroundColor": "rgba(0, 0, 0, 0)"
						}]
					}]
				},
				"repeatTimes": 1,
				"schedules": [{
					"dateType": "All",
					"timeType": "Range",
					"startTime": "00:00",
					"endTime": "23:59",
					"filterType": "None"
				}]
			}]
		}
	}
}
```

### Partial parameter description

```
Html: sensor content, html format, the following substitutions represent the values obtained by the terminal sensor:% c represents degrees Celsius,% f represents degrees Fahrenheit,% h represents humidity,% c1 and% f1 retain one decimal place after the Decimal separator,% c2 and% f2 retain two decimal places after the Decimal separator (the above placeholders do not contain units). From player9.9.8:% T represents Celsius,% t represents Fahrenheit,% T1,% t1 represents one decimal place after Decimal separator,% T2,% t2 represents two decimal places after Decimal separator,% RH represents humidity%,% ws represents wind speed m/s,% wd represents wind direction,% ns represents noise (db),% pm2 represents PM2.5 value μ G/m ³，% PM10 represents the PM10 value μ G/m ³ (The above placeholders have units).
```



### 3.9、Analog clock

```json
{
	"type": "commandXixunPlayer",
	"_id": "23204dfd-7b0c-4958-8dfb-da5971a70112",
	"command": {
		"_type": "PlayXixunTask",
		"id": "7cb2209e-d7b6-4da6-aaa0-3ed25818bfe5",
		"preDownloadURL": null,
		"notificationURL": null,
		"task": {
			"_id": "e3f962a4-f2ae-484a-8d02-0ca4fcfc13af",
			"name": "program test",
			"insert": false,
			"items": [{
				"_id": "74d4e60672834f2e85a9e2686a64f9e4",
				"_program": {
					"id": "1e7fc3a072054d8b883d9fc5dd8cdd55",
					"totalSize": 0,
					"name": "Analog clock program test",
					"width": 128,
					"height": 256,
					"layers": [{
						"repeat": false,
						"sources": [{

							"id": "555d5adc1c0170327ff45b93",
							"name": "001",
							"_type": "AnalogClock",
							"shade": 0,
							"opacity": 1,
							"showBg": true,
							"bgColor": "#482c51",
							"showHourScale": true,
							"scaleHourColor": "#12229c",
							"showMinScale": true,
							"scaleMinColor": "#3bc73b",
							"scaleStyle": 3,
							"showScaleNum": true,
							"pinStyle": 1,
							"pinHourColor": "#ff0000",
							"pinMinColor": "#00ffd2",
							"pinSecColor": "#fbca00",
							"showSecond": true,
							"playTime": 0,
							"timeSpan": 10,
							"left": 0,
							"top": 0,
							"width": 128,
							"height": 256,
							"entryEffect": "None",
							"exitEffect": "None",
							"entryEffectTimeSpan": 0,
							"exitEffectTimeSpan": 0
						}]
					}]
				},
				"repeatTimes": 1,
				"schedules": [{
					"dateType": "All",
					"timeType": "Range",
					"startTime": "00:00",
					"endTime": "23:59",
					"filterType": "None"
				}]
			}]
		}
	}
}
```

### Partial parameter description

```
Shade: default to 0
Opacity: Opaque
ShowBg: Whether to display the background
BgColor: Background color
ShowHourScale: Display the hour scale
ScaleHourColor: Hour scale color
ShowMinScale: Display minute scale
ScaleMinColor: Minute scale color
ScaleStyle: There are four options for scale style: integer 0~3. 0-line (both hour and minute scales are short lines), 1-line (hour is dot, minute scale is short line), 2-line (hour is dot, minute scale is dot), 3-point (both hour and minute scales are dot)
ShowScaleNum: Display numbers on an integer scale
PinStyle: Pointer style, integer 1-3 (1 represents diamond, 2 triangles, 3 rectangles)
PinHourColor: Clock pointer color
PinMinColor: Clock minute hand color
PinSecColor: Clock second hand color
ShowSecond: Whether to display the second hand
```



### 3.10、Digital clock

```json
{
	"type": "commandXixunPlayer",
	"_id": "23204dfd-7b0c-4958-8dfb-da5971a70112",
	"command": {
		"_type": "PlayXixunTask",
		"id": "7cb2209e-d7b6-4da6-aaa0-3ed25818bfe5",
		"preDownloadURL": null,
		"notificationURL": null,
		"task": {
			"_id": "e3f962a4-f2ae-484a-8d02-0ca4fcfc13af",
			"name": "program test",
			"insert": false,
			"items": [{
				"_id": "74d4e60672834f2e85a9e2686a64f9e4",
				"_program": {
					"id": "1e7fc3a072054d8b883d9fc5dd8cdd55",
					"totalSize": 0,
					"name": "digital clock program test",
					"width": 128,
					"height": 256,
					"layers": [{
						"repeat": false,
						"sources": [{
							"id": "",
							"name": "DigitalClock",
							"_type": "DigitalClock",
							"html": "%w, %Mw %d %y<br />%h:%m:%s %am",
							"lineHeight": 1.4,
							"timezone": 8,
							"language": "cn",
							"playTime": 0,
							"timeSpan": 10,
							"left": 0,
							"top": 0,
							"width": 128,
							"height": 256,
							"entryEffect": "None",
							"exitEffect": "None",
							"entryEffectTimeSpan": 0,
							"exitEffectTimeSpan": 0
						}]
					}]
				},
				"repeatTimes": 1,
				"schedules": [{
					"dateType": "All",
					"timeType": "Range",
					"startTime": "00:00",
					"endTime": "23:59",
					"filterType": "None"
				}]
			}]
		}
	}
}
```

### Partial parameter description

```
HTML: The content to be displayed, in HTML format, with placeholder meanings:% y: year,% M: month (numerical representation, pay attention to uppercase),% Mw: month (textual representation, pay attention to uppercase),% d: day,% w: week,% H: hour (24-hour system, pay attention to uppercase),% h: hour (12-hour system),% am: morning and afternoon,% m: minute,% s: second.
Timezone: displays the time zone corresponding to the time
Language: Language family available: cn Chinese, en English, pt BR Portuguese, fr French
```



### 3.11、countdown

```json
{
	"type": "commandXixunPlayer",
	"_id": "23204dfd-7b0c-4958-8dfb-da5971a70112",
	"command": {
		"_type": "PlayXixunTask",
		"id": "7cb2209e-d7b6-4da6-aaa0-3ed25818bfe5",
		"preDownloadURL": null,
		"notificationURL": null,
		"task": {
			"_id": "e3f962a4-f2ae-484a-8d02-0ca4fcfc13af",
			"name": "program test",
			"insert": false,
			"items": [{
				"_id": "74d4e60672834f2e85a9e2686a64f9e4",
				"_program": {
					"id": "1e7fc3a072054d8b883d9fc5dd8cdd55",
					"totalSize": 0,
					"name": "count down program test",
					"width": 128,
					"height": 256,
					"layers": [{
						"repeat": false,
						"sources": [{
							"id": "",
							"name": "Countdown",
							"_type": "Countdown",
							"lineHeight": 1.4,
							"time": "2023-1-1 00:00",
							"html": "<span style='font-size:20px'>Until the New Year<br/>%dday%hhour%mminute%ssecond</span>",
							"playTime": 0,
							"timeSpan": 10,
							"left": 0,
							"top": 0,
							"width": 128,
							"height": 256,
							"entryEffect": "None",
							"exitEffect": "None",
							"entryEffectTimeSpan": 0,
							"exitEffectTimeSpan": 0
						}]
					}]
				},
				"repeatTimes": 1,
				"schedules": [{
					"dateType": "All",
					"timeType": "Range",
					"startTime": "00:00",
					"endTime": "23:59",
					"filterType": "None"
				}]
			}]
		}
	}
}
```

### Partial parameter description

```
HTML: Display information, in HTML format, placeholder meaning:% d: Days remaining,% h: Hours remaining,% m: Minutes remaining,% s: Seconds remaining.
Time: Target time.
```



### 3.12、Rotation (example is the rotation of images and web pages, which can be freely combined. Please refer to the example format)

```json
{
	"type": "commandXixunPlayer",
	"_id": "23204dfd-7b0c-4958-8dfb-da5971a70112",
	"command": {
		"_type": "PlayXixunTask",
		"id": "7cb2209e-d7b6-4da6-aaa0-3ed25818bfe5",
		"preDownloadURL": "",
		"notificationURL": "",
		"task": {
			"_id": "e3f962a4-f2ae-484a-8d02-0ca4fcfc13af",
			"name": "ehlProgram",
             "insert":false,		
			"items": [{
				"_id": "74d4e60672834f2e85a9e2686a64f9e4",
				"_program": {
					"id": "1e7fc3a072054d8b883d9fc5dd8cdd55",
					"totalSize": 167545 ,
					"name": "ehlitemProgram",
					"width": 128,		
					"height": 256,	
					"layers": [{
						"repeat": false,
						"sources": [{
							"_type": "Image",
							"md5": "888535d4f98ea557596839ca7ed4141e",
							"name": "1.png",
							"mime": "image/png",
							"size": 167545, 	
							"fileExt": ".png",
							"id": "5ca1d704ca37bbc01ebbdbc0",	
                               "url":"http://49.235.105.76:6095/sz1.png",	
							"playTime": 0,
							"timeSpan": 10,
							"left": 0,
							"top": 0,
							"width": 128,
							"height": 256,
							"entryEffect": "None",
							"exitEffect": "None",
							"entryEffectTimeSpan": 0,
							"exitEffectTimeSpan": 0
						},{
							"id": "",
							"name": "webURL",
							"_type": "WebURL",
							"url": "http://ledok.cn",
							"playTime": 10,
							"timeSpan": 10,
							"left": 0,
							"top": 0,
							"width": 128,
							"height": 256,
							"entryEffect": "None",
							"exitEffect": "None",
							"entryEffectTimeSpan": 0,
							"exitEffectTimeSpan": 0
						}]
					}]
				},
				"repeatTimes": 1,
				"schedules": [{
					"dateType": "All",
					"timeType": "Range",
					"startTime": "00:00",
					"endTime": "23:59",
					"filterType": "None"
				}]
			}]
		}
	}
}
```

### Note: The material for the rotation must be from the same layer

### 3.13、Program partition

```json
//This example demonstrates the image displayed in the upper half and the webpage displayed in the lower half, which can be adjusted freely. The format can refer to the example
//The location of the partition is determined by the top/left/width/height in the source, with each partition using a layer and ensuring consistent playtime/timeSpan for each partition
{
	"type": "commandXixunPlayer",
	"_id": "23204dfd-7b0c-4958-8dfb-da5971a70112",
	"command": {
		"_type": "PlayXixunTask",
		"id": "7cb2209e-d7b6-4da6-aaa0-3ed25818bfe5",
		"preDownloadURL": "",
		"notificationURL": "",
		"task": {
			"_id": "e3f962a4-f2ae-484a-8d02-0ca4fcfc13af",
			"name": "ehlProgram",
             "insert":false,		
			"items": [{
				"_id": "74d4e60672834f2e85a9e2686a64f9e4",
				"_program": {
					"id": "1e7fc3a072054d8b883d9fc5dd8cdd55",
					"totalSize": 167545 ,
					"name": "ehlitemProgram",
					"width": 128,		
					"height": 256,	
					"layers": [{
						"repeat": false,
						"sources": [{
							"_type": "Image",
							"md5": "888535d4f98ea557596839ca7ed4141e",
							"name": "1.png",
							"mime": "image/png",
							"size": 167545, 	
							"fileExt": ".png",
							"id": "5ca1d704ca37bbc01ebbdbc0",	
                               "url":"http://49.235.105.76:6095/sz1.png",	
							"playTime": 0,
							"timeSpan": 10,
							"left": 0,
							"top": 0,
							"width": 128,
							"height": 128,
							"entryEffect": "None",
							"exitEffect": "None",
							"entryEffectTimeSpan": 0,
							"exitEffectTimeSpan": 0
						}]
					},{
						"repeat": false,
						"sources": [{
							"id": "",
							"name": "webURL",
							"_type": "WebURL",
							"url": "http://ledok.cn",
							"playTime": 0,
							"timeSpan": 10,
							"left": 0,
							"top": 128,
							"width": 128,
							"height": 128,
							"entryEffect": "None",
							"exitEffect": "None",
							"entryEffectTimeSpan": 0,
							"exitEffectTimeSpan": 0
						}]
					}]
				},
				"repeatTimes": 1,
				"schedules": [{
					"dateType": "All",
					"timeType": "Range",
					"startTime": "00:00",
					"endTime": "23:59",
					"filterType": "None"
				}]
			}]
		}
	}
}
```

### 3.14 Get playing record from devices
xixunplayer will upload json data to the specific address via POST method by HTTP protocols（uploadurl）
```json
{
    "type": "setUploadLogUrl",
    "uploadurl": "", //http server address for users to receiving play log
    "interval": "",//interval time of sending play log data from device, unit is minute
    "_id": "1g3t47mql"
}
```
format of returning data：
```json
[{
	"beginAt": 1686558966709,//program start time
	"duration": 9, playback duration  unit is  second
	"lat": 0.0,//gps stamp
	"lng": 0.0,
	"name": "advanced-jpg",//program name
	"pid": "62fdb267c8132b0000e7b0c9", program id
	"type": "program" 
},
{...}]
```

Query Interface
```json
{
    "type": "getUploadLogUrl",
    "_id": "1g3t47mql"
}
```

Query the return data of setup interface
```json
{
	"_id": "1g3t47mql"
   "url":"",       //address of uploading play log
   "interval":1   //interval time of uploading play log
}
```

## 

## 
