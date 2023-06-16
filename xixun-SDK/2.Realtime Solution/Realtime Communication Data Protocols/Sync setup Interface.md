[TOC]



# Synchronous type interfaces

#### application：adjust device time zone, realize program synchronous 

## 1、Set NTP server address or Time zone

send message：

```json
{ 
    "type": "callCardService", 
    "fn": "setTimeSync", 
    "arg1": "ntp.sjtu.edu.cn", 		//ntp server address
    "arg2": "Asia/Shanghai" 		//time zone
} 
```

device reply  message：

```json
//success
{"result":true}
```

## 

## 2、set synchronous type and adjust time interval

send message：

```json
{
    "type":"setTimeSync",	//Command string fixed and immutable
    "time":"serial",		//Optional serial, GPS, and NTP, in order of module timing, GPS timing, and network timing
    "brightness":"none",	//When time="serial", if serial is selected, the brightness will be adjusted according to the main module; otherwise, it will be set to none
    "volume":"none",		//When time="serial", if serial is selected, the volume will be adjusted according to the main module, otherwise it will be set to none
    "screenSwitch":"none",	//When time="serial", if "serial" is selected, the screen switch setting will be adjusted according to the main module, otherwise it will be set to none
    "identificationCode":"1",	//The synchronization code only takes effect when time="serial", and the synchronization code of the devices that need to be synchronized must be consistent
    "delaySync":"1",		//The duration of the synchronization interval when time="serial", specifying the frequency of program timing, in milliseconds
    "checkNtpTime":""		//The duration of the synchronization interval when time="ntp", in minutes
}
```

device reply  message：

```json
{
    "_type": "success",
    "_id": "b2aa241e-c33e-431e-9f0b-1a461b06bf0f",
    "timestamp": 1552296747116
}
```

## 

## 3、Query NTP server address

send message：

```json
{ 
    "type": "callCardService", 
    "fn": "getNtpServer" 
} 
```

device reply  message：

```json
{"result":"ntp.sjtu.edu.cn"}
```



## 4、Query Time zone

send message：

```json
{ 
    "type": "callCardService", 
    "fn": "getTimezone"
} 
```

device reply  message：

```json
{"result":"Asia/Shanghai"}
```



## 5、Query Sync type

send message：

```json
{
   "type": "getTimeSync"
}
```

device reply  message：

```json
{
    "_type":"success",
    "_id":"33f87099-848a-4aa6-94d5-a867cad895a8",
	"data":"{"_type":"DataCallback",
	"cardId":"y60-720-40210",//controller serial id
	"commandId":null,
	"brightness":"NONE",//Synchronize brightness NONE is set to No, and if it is serial, synchronize brightness values when using module synchronization
	"checkNtpTime":10,//The duration of the synchronization interval when time="ntp", in minutes
	"delaySync":0,//The duration of the synchronization interval when time="serial", specifying the frequency of program timing, in milliseconds
	"identificationCode":"",//The synchronization code only takes effect when time="serial", and the synchronization code of the devices that need to be synchronized must be consistent
	"lastSynchronousTime":1611301482015,//The timestamp unit of the last time synchronization was triggered is milliseconds
	"screenSwitch":"NONE",//When time="serial", if "serial" is selected, the screen switch setting will be adjusted according to the main module, otherwise it will be set to none
	"time":"NTP",//May return serial, GPS, and ntp, in order of module timing, GPS timing, and network timing
	"volume":"NONE"//When time="serial", if serial is selected, the volume will be adjusted according to the main module, otherwise it will be set to none
    }"
}
```

