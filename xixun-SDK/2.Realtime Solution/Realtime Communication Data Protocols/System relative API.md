[TOC]



# System relative API

#### applied for ：Get controller relative information, readback screenshot and restart system

## 1、Restart

Send message：

```json
{ 
"type": "callCardService", 
"fn": "reboot", 
"arg1": 1 //*delayForSecond 
} 
```

controller return message：

```json
{"result":true}
```

## 

## 2、Get screenshot

send message：

```json
{ 
	"type": "callCardService", 
	"fn": "screenshot", 
	"arg1": 100, 	*//quality* 
	"arg2": 100 	*//scale* 
} 
```

controller return message：

```json
{"result":"/9j/4AAQSkZJRgABAQAAAQABAAD/...."}The screenshot is a base64 encoded string (containing a large number of  n line breaks that need to be removed by a regular rule to display properly, in the format png)
```

## 

## 3、Turn on/off WiFi/AP

send message：

```json
{
    "_id":"f237643d-c35c",
    "type": "switchWiFi" ,
    "on":true | false //true open ，false close
}
```

controller return message：

```json
{
    "_type": "success",
    "_id": "f237643d-c35c",
    "timestamp": 1552296747116
}
```

### (Note: Due to the involvement of a dial switch,this interface only for Open or Shut WIFI modem, can not physically control WIFI or AP status.)



## 4、Set web address/Company ID/realtime address

send message：

```json
{
	"type":"advancedConfig",			//command type fixed
	"serverURL":"www.ledaips.com",		//Specify the connection server address
	"companyId":"xixun",			   //Specify company id
	"realtimeURL":"192.168.8.128:8081",	//specify realtime server address
	"usbProgramPwd":"888"			  //can set 888 or default empty
}
```

controller return message：

```json
If the configuration is successful, the connection will be disconnected and a new connection will be opened. If the "not opened" error is not returned, the setting will be considered successful.
```

### 

## 5、interface of get sensor data

send message：

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
    "cardId":"y10-817-01926",	//controller serial ID
    "t":"--",  //temperature
    "h":"--",  //humidity
    "ws":"--",  //wind speed, unit m/s
    "wd":"--",  //wind direction
    "ns":"--",  //noise db
    "pm2":"--",  //PM2.5 unit μg/m³
    "pm10":"--"//PM10 unit μg/m³
}
```



## 6、Interface of query controller basic information (only support since conn1045r or above version )

send message：

```json
{
    "_id": "69497f645f8611eb80bcfa163e16af18",
    "type": "getCardInformation"
}
```

controller return message：

```json
{
    "_type": "success",
    "card": {
        "alias": "noname",
        "updateVersion": "6.6",
        "taxiAppVersion": "",
        "basicAppVersion": "1.3.1",
        "starterVersion": "starter179",
        "sim": {
            "deviceId": null,
            "networkCountryIso": "",
            "number": null,
            "simCountryIso": "",
            "simOperatorName": "",
            "simSerialNumber": null,
            "subscriberId": null,
            "simState": 0
        },
        "companyId": "HDD",
        "connVersion": "10.4.5",
        "screenStatus": "on",
        "currentProgramId": null,
        "currentProgramName": "",
        "playerVersion": "10.9.9-22_5",
        "displayVersion": "v5.1.7.6",
        "orderVideoVersion": "",
        "netType": "WIFI",
        "lora": "unknown",
        "ledsetVersion": "5.2.3.9-22",
        "width": 128,
        "lat": 0,
        "lng": 0,
        "diskSize": 0,
        "humidity": 0,
        "height": 256,
        "orderVideoCode": 0,
        "displayVersionCode": 19,
        "locked": false,
        "playerVersionCode": 392,
        "rssi": -45,
        "connVersionCode": 145,
        "brightness": 255,
        "basicAppVersionCode": 9,
        "starterVersionCode": 179,
        "autoBrightness": false,
        "taxiAppVersionCode": 0,
        "temperature": 0,
        "asu": 99,
        "updateVersionCode": 15,
        "volume": 12,
        "ledsetVersionCode": 637
    },
    "commandId": "69497f645f8611eb80bcfa163e16af18",
    "_id": "69497f645f8611eb80bcfa163e16af18",
    "deviceId": "y30-120-01309"
}
```

## 

## 7、Get GPS location

send message：

```json
{ 
	"type": "getGpsLocation"
} 
```

controller return message：

```json
{"lat":31.23856585,"lng":121.32834949}
```

## 

## 8、Get screen width

send message：

```json
{ 
    "type": "callCardService", 
    "fn": "getScreenWidth"
} 
```

controller return message：

```json
{"result":1280}
```

## 

## 9、Get screen height

send message：

```json
{ 
    "type": "callCardService", 
    "fn": "getScreenHeight" 
} 
```

controller return message：

```json
{"result":512}
```

## 

## 10、Get Network type

send message：

```json
{ 
    "type": "callCardService", 
    "fn": "getNetworkType" 
} 
```

controller return message：

```json
{"result":"ETH"}
```

## 

## 11、Get Hardware version

send message：

```json
{ 
    "type": "callCardService", 
    "fn": "getFpgaInfomation"
} 
```

controller return message：

```json
{"_type":"success","result":[{"externalVoltage2//external voltage2":"0.0V","humidity//humidity":"0.0%","externalVoltage1//external voltage 1":"0.0V","cardVoltage//card voltage":"4.52V","smoke//smoke":"Normal","version//version":"a000","temperature//temperature":"55.0℃","doorOpened//door opened":"Open"}]}
```

## 

## 12、query controller disk storage

send message：

```json
{
    "type": "getDiskSpace"
}
```

controller return message：

```json
{
    "_type": "success",

    "internalTotal": 1059061760, //internal total storage unit in  Bytes(b)
    "externalFree": 692572160, //external free storage
    "externalTotal": 1059061760,//external total storage
    "internalFree": 692572160,    //internal free storage
    "_id": "d4c3b9b2-4e5c-4a64-8638-9e1ab4222f2a"
}
```

## 

## 13、Interface of Get web server address and company ID

send message：

```json
{
    "id":"234234",
    "type": "getServerAddress" 
}
```

controller return message：

```json
{
    "RealtimeServer": "192.168.8.135:8081",
    "ServerURL": "m2mled.net",
    "CompanyID": "alahover",
    "_type": "success",
    "_id": "9c71251e-6e1b-4840-8e47-3839b1e595f7"
}
```

## 

## 14、Query controller current time

send message：

```json
{
    "type": "getControllerDate"
}
```

controller return message：

```json
{
    "_id": "f237643d-c35c-474a-8872-f942fa5395bc",
   
     "date": "2019-6-13 12:58:18",//time character string
     "_type": "success",
    
     "millis": 1560401898069 //current time milliseconds, long integer type
}
```

## 