[TOC]

# Websocket solution interface 

## 1.return failed data format 

```json
The data sent by following interface are all Json field; 
// request failed and return data
{
  "_type":"Error",
  "cardId":"y10-116-01576",
  "commandId":null,
  "errorMessage":"CommandType Do Not Exist"
}
```



## 2.screenshot

### 1.screen shot

Send data

```
{
"_type": "GetScreenshot",
  "id":"5ec4d70d801daf892447adf0"
}
```

Return data

```json
// request success
{
 "_type": "Screenshot",
 "cardId": "y10-116-01576",
 "commandId": "5ec4d70d801daf892447adf0",
 "screenshot":"/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABsSFBcUERsXFhceHBsgKEIrKCUlKFE6PTBCYFVlZF9VXVtqeJmBanGQc1tdhbWGk
J6jq62rZ4C8ybqmx5moq6T/2wBDARweHigjKE4rK06kbl1upKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpK
T/wAARCABmAQADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUE
GE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJ
ipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAA
AAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJy
gpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMn
K0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDmaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACii
igAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiii
gAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiig
AooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigA
ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAo
oooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/Z",
//the returned screenshot address page show ’data:image/jpeg;base64‘+data.screenshot,return null if no screenshot }
```

### 2.screenshot by camera

Send data

```json
{
  "_type":"GetScreenshotByCamera",
  "sendTo":"joey-cardsystem"
}
```

Return data

```json
// success
{
 "_type": "DataCallback",
 "cardId": "y10-116-01576",
 "commandId": "",
 "screenshot": null,//the returned screenshot address page show’data:image/jpeg;base64‘+data.screenshot,,return null if no screenshot }
```

### 3.screenshot by android size

Send data

```json
{
  "_type": "ScreenshotBySize",
  "width": -1,
  "height": -1,
  "quality": 100,
  "scale": 100,
  "sendTo": "joey-cardsystem",
  "id": "5ec4cf666dc7f1a3156097ed"
}
```

Return data

```json
// request success
{
 "_type": "DataCallback",
 "image": null,//the returned screenshot address page show’data:image/jpeg;base64‘+data.image,return null if no screenshot
 "commandId": "5ebcef85fff26f9f2e9f0cd6",
 "cardId": "e30-b19-40033",
}
```



## 3.screen switch 

### 1.screen switch by manual 

Send data

```json
{
"_type": "SwitchScreen",
  "turnOn":true,//boolean; true screen on   false screen off
  "id":"5ec4d7b8f44de6ae5e2b56f0"
}
```

Return data

```json
// request success
{
 "_type": "Success",
 "cardId": "e30-b19-40033",
 "commandId": "5ec4d7b8f44de6ae5e2b56f0",
 "_cardId": "e30-b19-40033"
}
```

### 2.query screen switch 

Send data

```json
{
"_type": "GetTaskToKeepScreenOn",
"id":"5ec4d7b8f44de6ae5e2b56f0"
}
```

Return data

```
// request success
{"_type": "DataCallback",
"cardId": "e30-b19-40033",
 "commandId":"5ec4d7b8f44de6ae5e2b56f0"
 "task": {
  "createBy": "check",
  "createDate": "2020-04-23T08:06:43.448Z",
  "name": "0423",// schedule task name
  "schedules": [{
    "dateType": "Range",// Range means specific date，All means no limit date
    "endDate": "2020-04-30",//end date
    "endTime": "17:30",//end time
    "filterType": "Week",// None means no week limit，Week means filter by week
    "monthFilter": [],
    "startDate": "2020-04-23",//start date
    "startTime": "08:30",//start time
    "timeType": "Range",// Range means specific time，All means no limit
    "weekFilter": [1,2,3,4,5]//0`6，0 means Sunday 6 means Saturday
  }]
},//it will be null if no schedule  
```

### 3.send screen switch schedule task 

Send data

```json
{
  "cardId": "e30-b19-40033",
  "_type": "TaskKeepingScreenOn",
  "id": "5ea14c930e331f366eafffa2",
  "task": {
    "createBy": "check",
    "createDate": "2020-04-23T08:06:43.448Z",
    "dateCreated": "2020-04-23T08:06:43.448Z",
    "id": "5ea14c930e331f366eafffa2",
    "lng": "zh-CN",
    "name": "0423",
"createBy": "check",
    "createDate": "2020-04-23T08:06:43.448Z",
    "dateCreated": "2020-04-23T08:06:43.448Z",
    "id": "5ea14c930e331f366eafffa2",
    "lng": "zh-CN",
    "name": "0423",
    "schedules": [{
      "dateType": "Range",// Range means specific date，All means no limit
      "endDate": "2020-04-30",//end date
      "endTime": "17:30",//end time
      "filterType": "Week",// None means no week limit，Week means filter by week day
      "monthFilter": [],
      "startDate": "2020-04-23",//start date
      "startTime": "08:30",//start time
      "timeType": "Range",// Range means specific time，All means no limit
      "weekFilter": [1,2,3,4,5]//0`6，0 means Sunday 6 means Saturday
  }]
 },
}
```

Return data

```json
// request success
{
 "_type": "Success",
 "cardId": "e30-b19-40033",
 "commandId": "5ea14c930e331f366eafffa2",
}
```



## 4.screen brightness

### 1.set sensitivity and minimum brightness level

Send data

```json
{
  "minBrightness": 1,// minimum brightness
  "sensitivity": 50,//sensitivity range from 0 to 100
  "_type": "SetAutoBrightness"
  "sendTo":"joey-cardsystem",
  "id":"5ec4d1d1801daf892447ade7"
}
```

Return data

```json
// request success
{
 "cardId": "e30-b19-40033",
 "_type": "Success",
 "commandId": "5ebcf586fff26f9f2e9f7b0e",
 "_cardId": "y10-116-01576"
}
```

### 2.query sensitivity and minimum brightness

Send data

```json
{
  "_type":"GetAutoBrightness",
  "sendTo":"joey-cardsystem",
  "id":"5ec4d236801daf892447ade8"
}
```

Return data

```json
// request success
{
  "_type":"DataCallback",
  "sensitivity":50,
  "minBrightness":1,
  "commandId":"5ec4d236801daf892447ade8",
  "cardId":"e30-b19-40034"
}
```

### 3.set screen brightness by manual 

Send data

```json
{
  "brightness": 8,
  "_type": "SetBrightness",
}
```

Return data

```json
// request success
{
 "_type": "Success",
 "cardId": "e30-b19-40033",
 "commandId": "5ebcf724fff26f9f2e9f9f84",
}
```

### 4.send brightness schedule task 

Send data

```json
{
  "_type": "TaskSettingBrightness",
  "id":"5ec4d1d1801daf892447ade7",
"task": {
"createBy": "lucky2",
    "createDate": "2019-11-14T01:21:50.907Z",
    "dateCreated": "2019-11-14T01:21:50.907Z",
    "defaultBrightness": 5,// default brightness
    "items": [{
      "brightness": 58,// brightness level under this limit conditions
      "schedules": [{
        "dateType": "All",// Range means specific date，All means no limit
        "endDate": null,
        "endTime": "09:50",
        "filterType": "None",// None means no week day limit，Week means filter by week day
        "lng": "zh-CN",
        "monthFilter": [],
        "startDate": null,
        "startTime": "09:00",
        "timeType": "Range",// Range means specific time，All means no time limit
        "weekFilter": [],
     }]
   }],
 }
}
```

Return data

```json
// request success
{
 "_type": "Success",
 "cardId": "e30-b19-40033",
 "commandId": "5ec4d1d1801daf892447ade7",
}
```

### 5.query brightness

Send data

```json
{
  "_type": "GetTaskToSetBrightness",
  "id":"5ec4d1d1801daf892447ade7",
}
```

Return data

```json
// request success
{"_type":"DataCallback",
 "cardId":"e30-b19-40033",
 "commandId":"5ec4d1d1801daf892447ade7",
 "task":{ // if no schedule task then it is null
   "createBy":"lucky2",
    "createDate":"2019-11-14T01:21:50.907Z",
    "defaultBrightness":5,
    "items":[{
        "brightness":58,
        "schedules":[{
         "dateType":"All",
              "endDate":null,
              "endTime":"09:50",
              "filterType":"None",
              "monthFilter":[],
              "startDate":null,
              "startTime":"09:00",
              "timeType":"Range",
              "weekFilter":[]
       }]},
        {"brightness":10,
         "schedules":[{
           "dateType":"All",
           "endDate":null,
           "endTime":"09:55",
           "filterType":"None",
           "monthFilter":[],
           "startDate":null,
           "startTime":"09:00",
           "timeType":"Range",
           "weekFilter":[]}]}],
 "name":"576",
 "brightness":5
 }
}
```

## 5.volume control

### 1.set volume by manual 

Send data

```json
{
  "id":"5ec4d1d1801daf892447ade7"
  "volume": 10,// range from 0 to 15
  "_type": "SetVolume",
}
```

Return data

```json
// request success
{
 "_type": "Success",
 "cardId": "e30-b19-40033",
 "commandId": "5ec4d1d1801daf892447ade7",
}
```

### 2.send volume schedule task 

Send data

```json
{
"id":"5ec4d1d1801daf892447ade7"
  "_type": "TaskSettingVolume",
"task": {
"createBy": "lucky2",
    "createDate": "2019-11-14T01:21:50.907Z",
    "dateCreated": "2019-11-14T01:21:50.907Z",
    "defaultVolume": 5,// default volume
    "id": "5dccac2eee30d0611c2baace",
    "items": [{
      "volume": 8,// volume level under this limit conditions
      "id": "5dccac2eee30d0611c2baad0",
      "schedules": [{
        "dateType": "All",
        "endDate": null,
        "endTime": "09:50",
        "filterType": "None",
        "lng": "zh-CN",
        "monthFilter": [],
        "startDate": null,
        "startTime": "09:00",
        "timeType": "Range",
        "weekFilter": [],
     }]
   }],
 }
}
```

Return data

```json
// request success
{
 "_type": "Success",
 "cardId": "e30-b19-40033",
 "commandId":"5ec4d1d1801daf892447ade7",
}
```

### 3.query volume schedule task 

Send data

```json
{
 "id":"5ec4d1d1801daf892447ade7",
  "_type": "GetTaskToSetVolume",
}
```

Return data

```json
// request success
{
 "_type": "DataCallback",
 "cardId": "e30-b19-40033",
 "commandId": "5ebcf8ccfff26f9f2e9fbdc0",
 "task": null,// it is null if no schedule, please refer to send schedule’s  task format when has schedule  
 "_cardId": "y10-116-01576"
}
```



## 6.reboot system

### 1.reboot system

Send data

```json
{
  "id":"5ec4d1d1801daf892447ade7",
  "_type": "Reboot",
}
```

Return data

```json
// request success
{
 "_type": "Success",
 "cardId": "e30-b19-40033",
 "commandId":"5ec4d1d1801daf892447ade7",
}
```

### 2.reboot by schedule 

Send data

```json
{
  "_type":"SetScheduleToReboot",
  "time":"00:00",
  "sendTo":"joey-cardsystem",
  "id":"5ec4d3f6801daf892447adea"
}
```

Return data

```json
// request success
{
 "_type": "Success",
 "cardId": "e30-b19-40033",
 "commandId":"5ec4d3f6801daf892447adea"
}
```

### 3.query reboot schedule 

Send data

```json
{
  "_type":"GetScheduleToReboot",
  "sendTo":"joey-cardsystem",
  "id":"5ec4d3b2801daf892447ade9"
}
```

Return data

```json
// request success
{
 "_type": "DataCallback",
 "time": "03:00",// reboot time 
 "commandId": "5ec4d3b2801daf892447ade9"
 "cardId": "e30-b19-40033",
}
```



## 7.config parameters

### 1.set terminal alias, gps location feedback interval, NTP server address and time zone

 Send data

```json
{
"cardAlias": "e30-30",// terminal alias
  "id":"5ec4d1d1801daf892447ade7",
  "locationFeedback": 0,//gps lcation feedback interval   unit  second 
  "ntpServer": "",//NTPserver address
  "timezone": "",//time zone
  "usbProgramPwd": "",//USB program password
  "_type": "SetConnectionConfig"
}
```

Return data

```json
// request success
{
 "_type": "Success",
 "cardId": "e30-b19-40033",
 "commandId": "5ec4d1d1801daf892447ade7",
}
```

### 2.query terminal alias, gps location feedback interval, NTP server address, timezone

Send data

```json
{
  "id":"5ec4d1d1801daf892447ade7",
  "_type": "GetNtpAndTimezone",
}
```

Return data

```json
// request success
{
 "_type": "DataCallback",
 "cardId": "e30-b19-40033",
 "commandId": "5ec4d1d1801daf892447ade7",
 "language": "en",//language 
 "locationFeedback": 0,//GPS location feedback interval (second)
 "locked": false,//lock  can not change server address or execute relation operations after lock controller  
 "now": "May 14, 2020 5:07:10 PM",//current time
 "ntpServer": "ntp1.aliyun.com",//NTP server address
 "timezone": "Asia/Shanghai",//time zone
}
```

### 3.Query GPS

Send data

```json
{
 "id":"5ec4d1d1801daf892447ade7",
  "_type": "GetGpsInfo",
}
```

Return data

```json
// request success
{
 "_type": "DataCallback",
 "cardId": "e30-b19-40033",
 "commandId": null,
 "lat": 0.0,//latitude
 "lng": 0.0,//longitude 
 "satelliteNumber": 0,//satellite numbers
 "speed": 0.0,//speed  km/h
}
```

### 4.Sync settings

Send data

```json
{
  "id":"5ec4d1d1801daf892447ade7",
  "_type": "SetSync",
  "checkNtpTime": 10,// sync interval (minute/time)  only available under NTP mode
  "brightness": "none",//brightness  serial means type 1,none means no sync   only available under Lora mode 
  "delaySync": "1000",//time offset (millisecond)  only available under Lora mode 
  "identificationCode": "xixun",//sync code  only available under Lora mode
  "screenSwitch": "none",//screen switch  serial means type 1,none means no sync  only available under Lora mode  
  "time": "serial",//serial means LOra,gps means GPS,ntp means NTP  only available under Lora mode 
  "volume": "none",//volume  serial means type 1,none means no sync    only available under Lora mode 
  "sendTo":"joey-cardsystem",
  "id":"5ec4d4cb801daf892447adeb"
}
```

Return data

```json
// request success 
{
 "_type": "Success",
 "cardId": "e30-b19-40033",
 "commandId": "5ec4d4cb801daf892447adeb"
}
```

### 5.query sync settings

Send data

```json
{
 "_type": "GetSync",
 "sendTo":"joey-cardsystem",
 "id":"5ec4d5f7801daf892447adec"
}
```

Return data

```json
// request success
{
 "_type": "DataCallback",
 "cardId": "e30-b19-40033",
 "commandId": "5ec4d5f7801daf892447adec",
 "brightness": "NONE",
 "checkNtpTime": 10,
 "delaySync": 1000,
 "identificationCode": "xixun",
 "lastSynchronousTime": 1589418195009,
 "screenSwitch": "NONE",
 "time": "SERIAL",
 "volume": "NONE",
}
```

### 6.set server address, company ID, realtime Sever

Send data

```json
{
  "id":"5ec4d1d1801daf892447ade7",
  "companyId": "alahover",//company id
  "realtimeURL": "192.168.8.48:8888",// realtime Sever
  "serverURL": "192.168.8.48:8089",//web server address
  "_type": "SetAdvancedConfig",
}
```

Return data

```json
// request success
{
 "_type": "Success",
 "cardId": "e30-b19-40033",
 "commandId":"5ec4d1d1801daf892447ade7",
}
```

### 7.hardware status 

Send data

```json
{
  "_type":"GetFpgaInfo",
  "id":"5ec4e9448ed2644265dad9a2"
}
```

Return data

```json
{"_type":"FpgaInfoCallback",
 "cardId":"e30-b19-40034",
 "commandId":"5ec4e9448ed2644265dad9a2",
 "list":[{
   "cardVoltage":"4.86V",// controller power voltage 
   "doorOpened":"Open", // cabinet door status
   "externalVoltage1":"0.0V",// external power voltage 1
   "externalVoltage2":"0.0V",// external power voltage 2
   "height":"0",
   "humidity":"0.0%",// humidity
   "smoke":"Normal",// smoke 
   "temperature":"255.0℃", // temperature
   "version":"7029",// hardware version
   "width":"0",
   "x":"0",
   "y":"0"
    }]
}
```

### 8.alarm settings

Send data

```json
{
  "_type":"SetWarning",
  "smoke":true,// smoke or not
  "doorOpened":true,// door open or not
  "externalVoltage2":{ // external power voltage 2
    "ceiling":5,// upper limit
    "floor":0// lower limit 
 },
  "externalVoltage1":{// external power voltage1
    "ceiling":5,// upper limit
    "floor":0// lower limit 
 },
  "cardVoltage":{// controller voltage 
    "ceiling":5,// upper limit 
    "floor":0// lower limit 
 },
  "humidity":{//humidity
 "ceiling":70,// upper limit 
    "floor":0// lower limit 
 },
  "temperature":{//temperature
 "ceiling":60,// upper limit 
    "floor":0// lower limit 
 },
 "id":"5ec4eb7e8ed2644265dad9a4"
}
```

Return data

```json
// success
{
  "_type":"Success",
 "cardId":"e30-b19-40034",
  "commandId":"5ec4eb7e8ed2644265dad9a4"
}
```

### 9.query alarm settings

Send data 

```json
{
  "_type":"GetWarning",
  "id":"5ec4ed6e8ed2644265dad9a6"
}
```

Return data

```json
{
  "_type":"WarningInfoCallback",
  "cardId":"e30-b19-40034",
  "commandId":"5ec4ed6e8ed2644265dad9a6",
  "setting":{
    "cardVoltage":{
      "ceiling":5.0,
      "floor":0.0
   },
    "doorOpened":true,
    "externalVoltage1":{
      "ceiling":5.0,
      "floor":0.0
   },
    "externalVoltage2":{
      "ceiling":5.0,
      "floor":0.0
   },
    "humidity":{
      "ceiling":70.0,
      "floor":0.0
   },
 "smoke":true,
    "temperature":{
      "ceiling":60.0,
      "floor":0.0
   }
 }
}
```

### 10.Update apk online

Send data

```json
{
  "_type":"UpdateApp",
  "apkId":"5de49d43bf15592b29418b05",
  "apkName":"Display_v516.2.zip",
  "id":"5ec4ee398ed2644265dad9a7"
}
```

Return data

```json
// success
{
  "_type":"Received",
  "cardId":"e30-b19-40034",
  "commandId":"5ec4ef0d8ed2644265dadda0"
}
```



## 8.query controller information 

Send data

```json
{
"_type":"GetCardInfo",
"id":"5ec4df0b8ed2644265dad9a1"
}
```

Return data

```json
{

  "_type":"CardInfo",

  "cardId":"y10-817-01926", //terminal id

  "commandId":"first",

  "card":{

    "alias":"noname",	//terminal alias

    "updateVersion":"6.6",	//update application version number

    "sim":{					//SIM card information

      "deviceId":null,

      "networkCountryIso":"",

      "number":null,

      "simCountryIso":"",

      "simOperatorName":"",

      "simSerialNumber":null,

      "subscriberId":null,

      "simState":0

    },

    "screenStatus":"on",		//screen status : on, off 

    "companyId":"test",		//company ID, can omit

    "connVersion":"9.8.4",	//conn version number

    "playerVersion":"10.2.8",	//xixunplayer version number

    "currentProgramId":null,	//current program id

    "currentProgramName":null, //current program name

    "netType":"ETH",	//network type：ETH，WLAN，other 3/4G

    "ledsetVersion":"5.0.3.4", //cardsystem version 

    "humidity":0,	//current humidity 

    "lat":0,	//current GPS latitude 

    "diskSize":0, // not use 

    "lng":0,//current GPS longitude 

    "ledsetVersionCode":459, 

    "locked":false, //

    "height":512, //screen height 

    "connVersionCode":80, 

    "playerVersionCode":328,

    "rssi":-9999, 

    "brightness":64, //screen brightness

    "autoBrightness":false, // whether adjust screen brightness by sensor
"temperature":0, //the temperature return from current sensor 

    "asu":99,

    "updateVersionCode":15,

    "volume":12, //terminal volume

    "width":1280 //screen width 

  }

} 
```

## 9.Send program task （_type，sendTo filed is fixed parameter, other parameters refer to  xixunplayer program instructions）

Send data

```json
{
			"preDownloadURL":"http://www.m2mled.net/file/download?id=",
            "_type": "PlayXixunTask",
			"sendTo": "yzd-player", 
            "id": "600a297fa480eb3121a02823",
            "notificationURL":"http://192.168.2.12:8083/getJSON",
            "task": {
                "name": " test ",
                "_id": "6007d65eb4ce829b1fef28f4",
                "insert":true,
                "items": [
                    {
                        "_id": "9146b44e-7fe4-4098-b858-f2499b88d0ac",
                        "_program": {
                            "totalSize": 3617267,
                            "name": "test ",
                            "width": 192,
                            "layers": [
                                {
                                    "sources": [
                                        {
                                            "entryEffectTimeSpan": 0,
                                            "_type": "Video",
                                            "exitEffect": "None",
                                            "entryEffect": "None",
                                            "top": 0,
                                            "size": 3617267,
                                            "left": 0,
                                            "name": "600a297fa480eb3121a02823.mp4",
                                            "width": 192,
                                            "playTime": 0,
                                            "timeSpan": 79,
                                            "lineHeight": 0,
                                            "id": "600a297fa480eb3121a02823",
                                            "exitEffectTimeSpan": 0,
                                            "height": 288,
                                            "md5": "2e7e39eaa3faa90f5d5b34536722ce49"
                                        }
                                    ],
                                    "repeat": false
                                }
                            ],
                            "_id": "600a297fa480eb3121a02823",
                            "height": 288
                        },
						"repeatTimes": 1,
                       "schedules":[]
                    }
                ]
            }
        }
```

Return data

```json
// receive first message, means receive the command success 
{
  "_type":"Received",
  "cardId":"e30-b19-40034",
  "commandId":"5ec5e5cfc85856154e321bb9"
}
// then will receive the Json file of downloading process of materials
{
  "_type":"TaskProgress",
  "cardId":"e30-b19-40034",
  "commandId":"5ec5e5cfc85856154e321bb9",
  "progress":100,
  "remainingSeconds":0,
  "speed":0,
  "taskItemId":"5ec5e056c85856154e320787"
}
// when progress is 100, will receive the Json filed of complete success 
{
  "_type":"Success",
  "cardId":"e30-b19-40034",
  "commandId":"5ec5e5cfc85856154e321bb9"
}
```

