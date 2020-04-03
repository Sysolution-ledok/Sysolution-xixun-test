Communication Data Protocol C
=============================

1. Play XixunTask

   1.1.Data structure

   ```json
   {
       "type": "commandXixunPlayer",
       "command": {
           "_type": "PlayXixunTask",
           "id": "5603bed7ec9ab40031c43540", //commandId for notification
           "preDownloadURL":"http://192.168.8.99:808/file/download?id=",
           "notificationURL":"http://192.168.8.99:808/test",  //HTTP protocol POST method
           "task": {
               "name": "MyTask",
               "_id": "55e55be718494a5072744af2",//task ID
               "items": [
                   {
                       "_id": "5603be355e128fb8337e8a43", //item ID
                       "repeatTimes": 1, //if Items contains more than one item, this field will be in use.
                       "schedules": [
                           {
                               "weekFilter": [
                                   1,
                                   3,
                                   4
                               ],
                               "filterType": "Week",
                               "endTime": "23:50",
                               "startTime": "13:00",
                               "timeType": "Range",
                               "endDate": "2015-12-31",
                               "startDate": "2015-09-24",
                               "dateType": "Range"
                           },
                           {
                               "weekFilter": [
                                   1,
                                   3,
                                   4
                               ],
                               "filterType": "Week",
                               "endTime": "11:00",
                               "startTime": "06:05",
                               "timeType": "Range",
                               "endDate": "2015-12-31",
                               "startDate": "2015-09-24",
                               "dateType": "Range"
                           }
                       ],
                       "_program": {
                           "height": 512,
                           "width": 1280,
                           "name": "MyProgram",
                           "totalSize": 10724552,
                           "_id": "5603b71c5e128fb8337e8a03", //program ID
                           "layers": [
                               {
                                   "sources": [
                                       {
                                           "exitEffectTimeSpan": 0,
                                           "entryEffectTimeSpan": 0,
                                           "exitEffect": "None",
                                           "entryEffect": "None",
                                           "height": 256,
                                           "width": 640,
                                           "top": 0,
                                           "left": 0,
                                           "timeSpan": 45, //duration is 45 seconds
                                           "playTime": 25, //play at 25th second
                                           "id": "544b3b38d28c08941799e10c",
                                           "size": 6080847,
                                           "name": "Think Of Me.mp3",
                                           "md5": "50d31055abcd433a78670f771981a57e",
                                           "_type": "Audio"
                                       }
                                   ],
                                   "repeat": false
                               },
                               {
                                   "sources": [
                                       {
                                           "exitEffectTimeSpan": 0,
                                           "entryEffectTimeSpan": 0,
                                           "exitEffect": "None",
                                           "entryEffect": "None",
                                           "height": 256,
                                           "width": 640,
                                           "top": 31,
                                           "left": 66,
                                           "timeSpan": 10,
                                           "playTime": 0,
                                           "id": "55fa81cf2f6381e827e8d436",
                                           "size": 777835,
                                           "name": "download (2).jpg",
                                           "mime": "image/jpeg",  // Image must contain mime.
                                           "md5": "9d377b10ce778c4938b3c7e2c63a229a",
                                           "_type": "Image"
                                       },
                                       {
                                           "exitEffectTimeSpan": 0,
                                           "entryEffectTimeSpan": 0,
                                           "exitEffect": "None",
                                           "entryEffect": "None",
                                           "height": 256,
                                           "width": 640,
                                           "top": 64,
                                           "left": 370,
                                           "timeSpan": 10,
                                           "playTime": 10,
                                           "showSecond": true,
                                           "pinSecColor": "#fbca00",
                                           "pinMinColor": "#00ff00",
                                           "pinHourColor": "#ff0000",
                                           "pinStyle": 1,
                                           "showScaleNum": true,
                                           "scaleStyle": 3,
                                           "scaleMinColor": "#3bc73b",
                                           "showMinScale": true,
                                           "scaleHourColor": "#12229c",
                                           "showHourScale": true,
                                           "bgColor": "#ffffff",
                                           "showBg": true,
                                           "opacity": 1,
                                           "shade": 0,
                                           "_type": "AnalogClock",
                                           "name": "CCC"
                                       },
                                       {
                                           "exitEffectTimeSpan": 0,
                                           "entryEffectTimeSpan": 0,
                                           "exitEffect": "None",
                                           "entryEffect": "None",
                                           "height": 256,
                                           "width": 640,
                                           "top": 0,
                                           "left": 0,
                                           "timeSpan": 10,
                                           "playTime": 20,
                                           "language": "en",
                                           "timezone": 8,
                                           "lineHeight": 1.4,
                                           "html": "%w, %Mw %d %y<br />\n%h:%m:%s %am",
                                           "_type": "DigitalClock",
                                           "name": "DigitalClock",
                                           "id": ""
                                       },
                                       {
                                           "exitEffectTimeSpan": 0,
                                           "entryEffectTimeSpan": 0,
                                           "exitEffect": "None",
                                           "entryEffect": "None",
                                           "height": 256,
                                           "width": 640,
                                           "top": 0,
                                           "left": 0,
                                           "timeSpan": 10,
                                           "playTime": 30,
                                           "html": "Remain<br />\n%dDay%hHours%mMins%sSecs",
                                           "time": "2014-5-1 10:30",
                                           "lineHeight": 1.4,
                                           "_type": "Countdown",
                                           "name": "Countdown",
                                           "id": ""
                                       },
                                       {
                                           "exitEffectTimeSpan": 0,
                                           "entryEffectTimeSpan": 0,
                                           "exitEffect": "None",
                                           "entryEffect": "None",
                                           "height": 256,
                                           "width": 640,
                                           "top": 0,
                                           "left": 0,
                                           "timeSpan": 10,
                                           "playTime": 40,
                                           "html": "Please write something...",
                                           "speed": 20,
                                           "lineHeight": 1.4,
                                           "_type": "SingleLineText",
                                           "name": "SingleText",
                                           "id": ""
                                       },
                                       {
                                           "exitEffectTimeSpan": 0,
                                           "entryEffectTimeSpan": 0,
                                           "exitEffect": "None",
                                           "entryEffect": "None",
                                           "height": 256,
                                           "width": 640,
                                           "top": 0,
                                           "left": 0,
                                           "timeSpan": 10,
                                           "playTime": 50,
                                           "html": "<p>\n\tFirst Page：<br />\ntemperature:%c℃(%f℉), humidity: %h%\n</p>\n<p>\n\tSecond Page：<br />\nContentB\n</p>",
                                           "center": true,
                                           "lineHeight": 1.4,
                                           "speed": 10,
                                           "_type": "MultiLineText",
                                           "name": "MultiText",
                                           "id": ""
                                       },
                                       {
                                           "exitEffectTimeSpan": 0,
                                           "entryEffectTimeSpan": 0,
                                           "exitEffect": "None",
                                           "entryEffect": "None",
                                           "height": 256,
                                           "width": 640,
                                           "top": 0,
                                           "left": 0,
                                           "timeSpan": 10,
                                           "playTime": 60,
                                           "id": "53e9cd714b15b48c14129b97",
                                           "size": 350152,
                                           "name": "0807a.swf",
                                           "md5": "d145fc1ff0e3cae9680b112c15d8119d",
                                           "_type": "Flash"
                                       }
                                   ],
                                   "repeat": false
                               },
                               {
                                   "sources": [
                                       {
                                           "exitEffectTimeSpan": 0,
                                           "entryEffectTimeSpan": 0,
                                           "exitEffect": "None",
                                           "entryEffect": "None",
                                           "height": 419,
                                           "width": 1028,
                                           "top": 9,
                                           "left": 4,
                                           "timeSpan": 25,
                                           "playTime": 0,
                                           "id": "55fa81cf2f6381e827e8d458",
                                           "size": 3515718,
                                           "name": "download (2).mp4",
                                           "md5": "2c28c6b544904d25920af78d2bebf18e",
                                           "_type": "Video",
                                       }
                                   ],
                                   "repeat": false
                               }
                           ]
                       }
                   }
               ]
           }
       }
   }
   ```





   1.2.Response 

   ```json
   {"_type":"success"} or {"_type":"Error","message":"xxxx"}
   ```



   1.3.Asynchronous notification of downloading progress or getting error 
   The path of your web server which equals **notificationURL** will get
   POST JSON data. 
   **Header:** 
   Content-Type: application/json 
   Card-Id: y10-xxxxx 
   **Body:** 

   ```json
   {
   	"commandId":"abc",
   	"taskItemId": "xxxx",
   	"progress":100  		//rang from 0 to 100
   }
   or
   {
   	"commandId":"abc",
   	"errorMessage": "xxxx"
   }
   ```

2. Upload logs of XixunPlayer to your http server

   2.1.Data structure

   ```json
   {
       "type": "commandXixunPlayer",
       "command":{
           "_type": "UploadPlayLogs",
           "id": "abc", //commandId  (useless for this protocol)
           "interval": 60,  //unit is minute. interval of uploading play logs. 0 means do not upload.
           "url":"http://xxxxxx", //POST to this url
           "encoding":"gzip" //POST date will be gzip encoding
       }
   }
   ```



   2.2.Response 

   ```json
   {"_type":"success"} or {"_type":"Error","message": "xxxx"}
   ```

   2.3.Asynchronous notification of play logs 
   **Header:** 
   Content-Type: application/json 
   Content-Encoding: gzip 
   Card-Id: y10-xxxxx 
   **Body:** 

   ```json
   [
       {
           "type":"advanced",  //enum: gps, simple, advanced, usb
           "pid":"xxx", //programId
           "name":"programA", //programName
           "beginAt":1441518061436, //dateStamp
           "duration": 15//seconds
       },
       //.....up to 1000 logs
   ]
   ```

