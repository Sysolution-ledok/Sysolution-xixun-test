[TOC]

# 1、Query Commands

## 1.1、Get GPS location

```json
{ 
	"type": "getGpsLocation"
} 
Return:{"lat":31.23856585,"lng":121.32834949}
```

## 1.2、Query screen status

```json
{ 
    "type": "callCardService", 
    "fn": "isScreenOpen" 
} 
Return:{"result":true}
```

## 1.3、Get brightness

```json
{ 
    "type": "callCardService", 
    "fn": "getBrightness" 
} 
Return:{"result":6}
```

## 1.4、Get Volume

```json
{ 
    "type": "callCardService", 
    "fn": "getVolume" 
} 
Return:{"result":10}
```

## 1.5、Get screen width

```json
{ 
    "type": "callCardService", 
    "fn": "getScreenWidth"
} 
Return:{"result":1280}
```

## 1.6、Get screen height

```json
{ 
    "type": "callCardService", 
    "fn": "getScreenHeight" 
} 
Return:{"result":512}
```

## 1.7、Get Network type

```json
{ 
    "type": "callCardService", 
    "fn": "getNetworkType" 
} 
Return:{"result":"ETH"}
```

## 1.8、Get NTP server

```json
{ 
    "type": "callCardService", 
    "fn": "getNtpServer" 
} 
Return:{"result":"ntp.sjtu.edu.cn"}
```

## 1.9、Get Timezone

```json
{ 
    "type": "callCardService", 
    "fn": "getTimezone"
} 
Return:{"result":"Asia/Shanghai"}
```

## 1.10、Get APK version

```json
{ 
	"type": "getPackageVersion",  
	"apk": "com.xixun.xy.xwalk"  
}  
Return:{"versionCode":4,"versionName":"1.4","firstInstallTime":1439539769420,"lastUpdateTime":1439539769420,"installLocation":1}
```

## 1.11、Get Hardware state

```json
{ 
    "type": "callCardService", 
    "fn": "getFpgaInfomation"
} 
Return:{"_type":"success","result":[{"externalVoltage2":"0.0V","humidity":"0.0%","externalVoltage1":"0.0V","cardVoltage":"4.52V","smoke":"Normal","version":"a000","temperature":"55.0℃","doorOpened":"Open"}]}
```

## 1.12、Query auto brightness (conn10.0.5T or above)

interface JSON format, example：

```json
{ 
    "type": "getAutoBrightness"
} 
```

return success data format,example：

```json
{
    "_id": "ffb3d0d2-a4ab-4e0f-9b30-01e00c6beef4",
    "_type": "success",
    "sensitivity": 50,
    "minBrightness": 1
}
```

## 1.13、Query controller current time(conn10.0.9 or above)

request data format：

```json
{
    "type": "getControllerDate"
}
```

return data format：

```json
{
    "_id": "f237643d-c35c-474a-8872-f942fa5395bc",
   
     "date": "2019-6-13 12:58:18",//time character string
     "_type": "success",
    
     "millis": 1560401898069 //current time milliseconds, long integer type
}
```

## 1.14、query controller disk storage(conn10.0.9 or above)

request data format：

```json
{
    "type": "getDiskSpace"
}
```

return data format：

```json
{
    "_type": "success",

    "internalTotal": 1059061760, //internal total storage
    "externalFree": 692572160, //external free storage
    "externalTotal": 1059061760,//external total storage
    "internalFree": 692572160,    //internal free storage
    "_id": "d4c3b9b2-4e5c-4a64-8638-9e1ab4222f2a"
}
```

## 1.15、Interface of Get web server address and company ID

request data format：

```json
{
    "id":"234234",
    "type": "getServerAddress" 
}
```

Normal answer

```json
{
    "RealtimeServer": "192.168.8.135:8081",
    "ServerURL": "m2mled.net",
    "CompanyID": "alahover",
    "_type": "success",
    "_id": "9c71251e-6e1b-4840-8e47-3839b1e595f7"
}
```

