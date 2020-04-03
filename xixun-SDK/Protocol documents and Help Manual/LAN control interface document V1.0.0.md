** LAN control Interface document** 



##### 							Shanghai Xixun Electronic Company Limited

## 1、Purpose

&ensp;&ensp;&ensp;&ensp;**This document only for reviewing the functions and interface debug purpose. It describes configurations in LAN and get controller parameters. As those information relates to hardware and software parameter configuration so only used for xixun programmers and test persons**.

## 2、**Interface instructions**

&ensp;&ensp;&ensp;&ensp;a).  **service port is 2016**

&ensp;&ensp;&ensp;&ensp;b).  **adopting HTTP POST communication way to setup and get normal parameters, sending content and receiving return content are all JSON character string (contentType property set as text/plain), please use /settings as path if there is no special note.** 

&ensp;&ensp;&ensp;&ensp;c).  **upload and download files through HTTP POST way.**

## 3、**Interfaces descriptions**



1. ### **get control card serial id**


>Example of send data command format：

```json
{

    //identify a command, it is terminal side random character string

    “_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

    //command type

    “_type”: “GetCardName”

}
```

>Example of get data process success and return：

```json
{

    “_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”, 
	“_type”: “GetCardName”,
    “success”: true,
	“cardName”: “e10-516-00006”

}
```

>Example of get data process failed and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”, 
	“_type”: “GetCardName”,
	“success”: false,
	“error”: “xxxxxxxx”

}
```

### 2.**set hardware FPGA register**\*

> not open

### 3.**read back hardware FPGA register value**\*

> not open

### 4.**save hardware parameters**\*

> not open

### 5.**set led screen width and height pixels**

>Example of send data command format：

```json
{
	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
	“_type”: “SetScreenSize”,
	// screen width pixels
	“width”: 540,
	// screen height pixels
	“height”: 960
}
```

>Example of get data process success and return：

	{
		“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
		“_type”: “SetScreenSize”,
		“success”: true
	}

>Example of get data process failed and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
	“_type”: “SetScreenSize”,
	“success”: false,
	“error”: “xxxxxxxx”
}
```

### 6.**Get led screen width and height pixels**


>Example of send data command format：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
	“_type”: “GetScreenSize”

}
```

>Example of get data process success and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
	“_type”: “GetScreenSize”,
	“success”: true,
	“width”: 540,
	“height”: 960

}
```

>Example of get data process failed and return：

```json
{
	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
	“_type”: “GetScreenSize”,
	“success”: false,
	“error”: “xxxxxxxx”
}
```

### 7.**Get the scanning WI-FI hotspots**


>Example of send data command format：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
	“_type”: “GetWifiList”

}
```

>Example of get data process success and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
	“_type”: “GetWifiList”,
	“success”: true,
	// WIFI structures number group
	“wifiList”: [ ]
}
```

>Example of get data process failed and return：

```json
}
	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
	“_type”: “GetWiFiList”,
	“success”: false,
	“error”: “xxxxxxxx”
}
```

### 8.**Config WI-FI connection**


>Example of send data command format：

```json
{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
“_type”: “ConfigurationWiFi”,
“ssid”: “xixun”,
“password”: “88888888”

}
```

>Example of get data process success and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
	“_type”: “ConfigurationWiFi”,
	“success”: true

}
```

>Example of get data process failed and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
	“_type”: “ConfigurationWiFi”,
	“success”: false,
	“error”: “xxxxxxxx”

}
```

### 9.**Config the led controller as portable hotspot**


>Example of send data command format：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
	“_type”: “ConfigurationHotSpot”,
	// hotspot name
	“apName”: “xixun”,
	“password”: “88888888”

}
```

>Example of get data process success and return：

```json
}

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
	“_type”: “ConfigurationHotSpot”,
	“success”: true

}
```

>Example of get data process failed and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”, 
	“_type”: “ConfigurationHotSpot”,
	“success”: false,
	“error”: “xxxxxxxx”

}
```

### 10.**Query current using WI-FI or portable hotspot**


>Example of send data command format：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
	“_type”: “IsPortableHotSpot”

}
```

>Example of get data process success and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
	“_type”: “IsPortableHotSpot”,
	“success”: true,
	// current network is Wi-Fi then this character field is not empty, otherwise, it is empty
	“wifi”: “xixun”,
	// current network is portable hotspot then this character filed is not empty, otherwise,it is empty
	“hotSpots”: “”

}
```

>Example of get data process failed and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,	
	“_type”: “IsPortableHotSpot”,
	“success”: false,
	“error”: “xxxxxxxx”

}
```

### 11.**Get WIFI connection state**


>Example of send data command format：

```json
}

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
	“_type”: “GetWIFIConnectState”

}
```

>Example of get data process success and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
	“_type”: “GetWIFIConnectState”,
	“success”: true,
	“isConnect”: false,
	“ssid”: “”,
	“speed”: “”,
	“ip”: “”,
	“mac”: “”

}
```

>Example of get data process failed and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
	“_type”: “GetWIFIConnectState”,
	“success”: false,
	“error”: “xxxxxxxx”

}
```

### 12.**Get global APN list** \*

> not open

### 13.**Config APN for the SIM card**


>Example of send data command format：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
	“_type”: “SetAPN”,
	“carrier”: “China Unicom”,
	“apn”: “3gnet”,
	“user”: “”,
	“password”: “”,
	“type”: “”,
	“server”: “”,
	“proxy”: “”,
	“port”: “”,
	“mmsc”: “”,
	“mmsproxy”: “”,
	“mmsport”: “”

}
```

>Example of get data process success and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
	“_type”: “SetAPN”,
	“success”: true

}
```

>Example of get data process failed and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
	“_type”: “SetAPN”,
	“success”: false,
	“error”: “xxxxxxxx”

}
```

### 14.**Get current APN configuration of SIM card**


>Example of send data command format：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
	“_type”: “GetCurrentAPN”,

}
```

>Example of get data process success and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
	“_type”: “GetCurrentAPN”,
	“success”: true,
	“carrier”: “China Unicom”,
	“apn”: “3gnet”,
	“user”: “”,
	“password”: “”,
	“type”: “”,
	“server”: “”,
	“proxy”: “”,
	“port”: “”,
	“mmsc”: “”,
	“mmsproxy”: “”,
	“mmsport”: “”

}
```

>Example of get data process failed and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
	“_type”: “GetCurrentAPN”,
	“success”: false, 
	“error”: “xxxxxxxx”

}
```

### 15.**Get network state of SIM card**


>Example of send data command format：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,	
	“_type”: “GetSIMStatus”,

}
```

>Example of get data process success and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
	“_type”: “GetSIMStatus”,
	“success”: true,
	/**
	*unknown state                    0
	*no SIM card                     1
	*locked, need user’s PIN code to unlock 2
	*ocked, need user’s PUK code to unlock 3
	*locked, need network PIN code to unlock 4
	*ready                   5
	*/
	“state”: 5,
	“imsi”: “460016701502167”,
	“countryCode”: “cn”,
	“phoneNumber”: “+8618516707470”,
	“user”: “ChinaUnion”,
	/**
	*signal normal	      0
	*out of service area	  1
	*emergency call only	 2
	*no power     3
	*/
	“serviceState”: 0,
	/**
	* network type unknown			0
    * GPRS 			1
    * EDGE		    2
    * UMTS			3
    * CDMA, IS95A OR IS95B    4
    * EVDO, revision 0	5
    * EVDO  revision A	6
    * 1xRTT			7
    * HSDPA		8
    * HSUPA		9
    * HSPA		10
	*\
	“networkType”: 10,
	// roaming or not
	“roaming”: false,
	/**
    * Data connection: active, but no data send or receive 0
    * Data connection:active, receiving data			1
    * Data connection: active, sending data		2
    * Data connection: active, sending and receiving data   3
    * Sleeping state						4
	*\
	“dataActivity”: 0,
	/**
	* Data connection: disconnect		0
    * Data connection: connecting	1
    * Data connection: connected	2
    * Data connection: pause	3
	*\
	“dataState”: 0,
	“signalStrength”: 20

}
```

>Example of get data process failed and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
	“_type”: “GetSIMStatus”,
	“success”: false,
	“error”: “xxxxxxxx”
}
```

### 16.**Config server address and company ID**\*

> not open

### 17.**Get server address and company ID**


>Example of send data command format：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “GetOnlineAddr”,

}
```



> Example of get data process success and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “GetOnlineAddr”,
    “success”: true,
	“server”: [“www.m2mled.net”](http://www.m2mled.net),
    “companuID”:“alahover”

}
```



> Example of get data process failed and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “GetOnlineAddr”,
	“success”: false,
    “error”: “xxxxxxxx”

}
```

### 18.**Config Realtime server address**

> not open

### 19.**Get Realtime server address**

> Example of send data command format：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “GetRealtimeServer”,

}
```



> Example of get data process success and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “GetRealtimeServer”,
	“success”: true,
	// server address
	“server”:[“www.m2mled.net”](http://www.m2mled.net/)

}
```



> Example of get data process failed and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “GetRealtimeServer”,
	“success”: false,
    “error”: “xxxxxxxx”

}
```



### 20.Set brightness

> Example of send data command format：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “SetBrightness”,
	“brightness”: 24

}
```



> Example of get data process success and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “SetBrightness”,
	“success”: true

}
```



> Example of get data process failed and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “SetBrightness”,
	“success”: false,
    “error”: “xxxxxxxx”

}
```



### 21.Get current brightness

> Example of send data command format：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “GetBrightness”

}
```



> Example of get data process success and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “GetBrightness”,
	“success”: true,
    “brightness”: 24

}
```



> Example of get data process failed and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
	“_type”: “GetBrightness”,
	“success”: false,
    “error”: “xxxxxxxx”

}
```



### 22.**Setup auto brightness sensitivity**

> Example of send data command format：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”:“SetBrightnessSensitivity”,
    “sensitivity”: 50

}
```



> Example of get data process success and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”:“SetBrightnessSensitivity”,
    “success”: true,

}
```



> Example of get data process failed and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”:“SetBrightnessSensitivity”,
    “success”: false,
	“error”: “xxxxxxxx”

}
```



### 23.**Get auto brightness sensitivity**

> Example of send data command format：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”:“GetBrightnessSensitivity”

}
```



> Example of get data process success and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
	“_type”:“GetBrightnessSensitivity”,
    “success”: true,
	“sensitivity”: 24

}
```



> Example of get data process failed and return：

```json
{
    
	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”:“GetBrightnessSensitivity”,
    “success”: false,
	“error”: “xxxxxxxx”

}
```



### 24.Set Volume

> Example of send data command format：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “SetVolume”,
	“volume”: 24

}
```



> Example of get data process success and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “SetVolume”,
	“success”: true

}
```



> Example of get data process failed and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “SetVolume”,
	“success”: false,
	“error”: “xxxxxxxx”

}
```



### 25.Get volume

> Example of send data command format：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “GetVolume”

}
```



> Example of get data process success and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “GetVolume”,
	“success”: true,
    “volume”: 24

}
```



> Example of get data process failed and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “GetVolume”,
	“success”: false,
    “error”: “xxxxxxxx”

}
```



### 26.Led screen test

> not open

### 27.**Query software version information**

> Example of send data command format：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “CheckSoftVersions”

}
```



> Example of get data process success and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “CheckSoftVersions”,
	“success”: true,
	// software package structure
	“apps”: [ ]

}
```



> Example of get data process failed and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “CheckSoftVersions”,
	“success”: false,
    “error”: “xxxxxxxx”

}
```



### 28.Query hardware version

> Example of send data command format：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “CheckHardwareVersions”

}
```



> Example of get data process success and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “CheckHardwareVersions”,
	“success”: true,
	// an array of hexadecimal strings 
	“versions”: [ ]

}
```



> Example of get data process failed and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “CheckHardwareVersions”,
	“success”: false,
	“error”: “xxxxxxxx”

}
```

### 29.**Restart hardware FPGA**

> Not open

### 30.Reboot Android

> Example of send data command format：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “RestartAndroid”

}
```



> Example of get data process success and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “RestartAndroid”,
	“success”: true

}
```



> Example of get data process failed and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “RestartAndroid”,
	“success”: false,
    “error”: “xxxxxxxx”

}
```



### 31.**Setup led screen  on/off**

> Example of send data command format：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “SetScreenOn”,
	“on”: true                        *// true：screen on；false：screen off*

}
```



> Example of get data process success and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “SetScreenOn”,
	“success”: true

}
```



> Example of get data process failed and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “SetScreenOn”,
	“success”: false,
    “error”: “xxxxxxxx”

}
```



### 32.Get screen status

> Example of send data command format：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “IsScreenOn”

}
```



> Example of get data process success and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “IsScreenOn”,
	“success”: true,
	on”: true 					*// true：on； false：off*

}
```



> Example of get data process failed and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “IsScreenOn”,
	“success”: false,
    “error”: “xxxxxxxx”

}
```



### 33.Get firmware version

> Example of send data command format：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “GetBuildInformation”

}
```



> Example of get data process success and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “GetBuildInformation”,
	“success”: true,
	“AndroidVersion”: “4.4.2”
	“BrightnessLevel”: 64
	“FirmwareVersion”: “SYSolution.E.V1.0.0”
    “ScreenResolution”: “540x960”
	“HardVersion”: “A10D”

}
```



> Example of get data process failed and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “GetBuildInformation”,
	“success”: false,
	“error”: “xxxxxxxx”

}
```



### 34.**Get installed software names**

> Example of send data command format：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “GetInstalledPackages”

}
```



> Example of get data process success and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “GetInstalledPackages”,
	“success”: true,
	// 安装软件的包名
	“packageNames”: [ ]

}
```



> Example of get data process failed and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “GetInstalledPackages”,
	“success”: false,
	“error”: “xxxxxxxx”

}
```



### 35.Software update

> not open

### 36.Uninstall software

> Example of send data command format：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “UninstallSoftware”,
	“packageName”: “xxxxxxx”

}
```



> Example of get data process success and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “UninstallSoftware”,
	“success”: true

}
```



> Example of get data process failed and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “UninstallSoftware”,
	“success”: false,
    “error”: “xxxxxxxx”

}
```



### 37.Start smart setup

> Not open

### 38.Turn on led screen command during smart setup

> Not open

### 39.Set Data Polarity

> Not open

### 40.Get Data Polarity

> Not open

### 41.Set OE Polarity

> Not open

### 42.Get OE Polarity

> Not open

### 43.Set **color sequence**

> Not open

### 44.**Smart settings step5 finished\***

> Not open

### 45.Set **line serials**

> Not open

### 46.Get scanning type

> Not open

### 47.**Get line height** 

> Not open

### 48.**Smart settings done**

> Not open

### 49.**Save smart settings parameters**

> Not open

### 50.**Load hardware parameters**

> Not open

### 51.**Synchronize hardware version**

> Example of send data command format：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”:“SynchronousHardwareVersion”

}
```



> Example of get data process success and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”:“SynchronousHardwareVersion”,
    “success”: true

}
```



> Example of get data process failed and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”:“SynchronousHardwareVersion”,
    “success”: false,
	“error”: “xxxxxxxx”

}
```



### 52.**Get cascading parameters**

> Example of send data command format：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “GetCascade”

}
```



> Example of get data process success and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “GetCascade”,
	“success”: true,
    “cascade”:  "{"values":[{"height":128,"index":0,"width":128,"x":0,"y":0},			 		  				{"height":128,"index":1,"width":128,"x":1,"y":0},
			  {"height":128,"index":2,"width":128,"x":1,"y":1},
			  {"height":128,"index":3,"width":128,"x":0,"y":1}],"notShow":false,"custom":false}"

}
```



> Example of get data process failed and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “GetCascade”,
	“success”: false,
    “error”: “xxxxxxxx”

}
```



### 53.cascading settings

> Not open

### 54.Set **persistent data**

> Not open

### 55.Get persistent data

> Not open

### 56.**screen rotate setup**

> Not open

### 57.**get led screen rotate**

> Not open

### 58.**Set led control card language (only support Chinese and English languages)**

> Example of send data command format：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “SetLanguage”,
	“language”: 0 		// 0：En； 1：CN

}
```



> Example of get data process success and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “SetLanguage”,
	“success”: true

}
```



### 59.**Get led control card language (only support Chinese and English languages)**

> Example of send data command format：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “GetLanguage”,
	“language”: 0 			// 0：En； 1：CN

}
```



> Example of get data process success and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “GetLanguage”,
	“success”: true,
    “language”: 0

}
```



### 60.**Setup led controller time zone**

> Example of send data command format：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “SetTimezone”,
	“timezone”: “Asia/ShangHai”

}
```



> Example of get data process success and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “SetTimezone”,
	“success”: true

}
```



### 61.**Get led controller time zone**

> Example of send data command format：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “GetTimezone”

}
```



> Example of get data process success and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “GetTimezone”,
	“success”: true,
    “timezone”: “Asia/ShangHai”
    
}
```





### 62.Upload files

> Adopt POST method to upload files, Content-type is Multipart/form-data, if upload chunked file then at least need following Part properties:

```
   “FileName”: 	// file name
   “TotalChunk”: 	// total chunk numbers
   “CurrentChunk”:	//  current chunk serial number
```



> URL of uploading：

```json
“/upload?type=config”			// Upload hardware configuration parameters file
“/upload?type=hardware”		// Upload hardware update files
“/upload?type=software”		// Upload software update files
“/upload?type=normal”			//Upload normal temporary files
“/upload?type=sdcard”			// Upload files to SD card
```

> If upload success then will return the file name or file absolute path name, if failed then return error. 

### 63.Download filesAdopt GET method to download files, URL as following:：

```json
“/download?file=logs”			// Check led control card log
“/download?file=hardware”		// Download FPGA config parameter files
“/download?file=pathName”		// pathName is the downloading files’ relative path name
							// For instance: if need download 1.jpg file of material
							// Then pathName is : material/1/jpg
```



### 64.Set realtime message

> Example of send data command format：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “SetRealtimeMessage” ,
	“message”: “realtime message\\n123”, 	  // Note:need switch the message content into bae64 encode
    “width”: 0, 					// Window width, 0: defaulted window width 
	“left”: 0, 						// Window to the left margin(pixels)
    “windowBackground”: 0, 			 // Window background color
	“verticalPos”: 0, 				// Window vertical position,0:top; 1: center; 2:bottom
    “horizontalPos”: 0,     		// Text stays on the horizontal position,1: left; 1:center;2:right
    “fontBackground”: 0, 			// Font background color
	“fontColor”: 0xFFFF0000, 		//  Font color
    “fontSize”: 24,				   //  Font size
	“lineSpace”: 0, 			  // When Multiline, line space
	“showType”: 0, 				  // Text display, 0:static; 1: moving left; 2：moving right
    “speed”: 20, 				  //Moving speed(only enable for moving left or right),pixel/second
    “moveCount”: 0, 			  //Moving counts(only enable for moving left or right), 0:Permanent move
    “residenceTime”: 0 			  // Stay time(second),-1: permanent stay

}
```



> Example of get data process success and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “SetRealtimeMessage”,
	“success”: true

}
```



### 65.**Clean up topper layer UI** 

> Example of send data command format：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “CleanTopUI”

}
```



> Example of get data process success and return：

```json
{
    
    “_type”: “CleanTopUI”,
	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
	“success”: true

}
```



### 66.**Push HTML code**

> Example of send data command format：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “LoadCodeHTML”,
	“code”: “<div>Test</div>”, 		// Base64 encode
    “charSet”: “UTF-8” 			//only support UTF-8 

}
```



> Example of get data process success and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “LoadCodeHTML”,
	“success”: true

}
```



### 67.WIFI switch

> Example of send data command format：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “SetSwitchWiFi”,
	“enable”: true

}
```



> Example of get data process success and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “SetSwitchWiFi”,
	“success”: true

}
```



### 68.Get **WIFI switch**

> Example of send data command format：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “GetSwitchWiFi”

}
```



> Example of get data process success and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “GetSwitchWiFi”，
	“success”: true,
    “enable”: true

}
```



### 69.**SIM card data switch**

> Example of send data command format：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “SetSwitchSimData”,
	“enable”: true

}
```



> Example of get data process success and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “SetSwitchSimData”
	“success”: true

}
```



### 70.**Get SIM card data switch state**

> Example of send data command format：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “GetSwitchSimData”

}
```



> Example of get data process success and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “GetSwitchSimData” ,
	“success”: true
    “enable”: true

}
```



### 71.**Set led controller IP(only support Y,L,M90,M91 series control cards)**

> Example of send data command format：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “SetEthernet”,
	“dhcp”: false, 				//  IP config type，true：automatically，false：static ip
   “ip”: “192.168.8.200”,		// IP address
   “gateWay”: “192.168.8.1”,	// gateway
   “netMask”: “255.255.255.0”,	// network mask
   “dns”: “192.168.8.1”		// DNS

}
```



> Example of get data process success and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “SetEthernet”,
	“success”: true

}
```



### 72.Get led controller IP

> Example of send data command format：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “GetEthernet”

}
```



> Example of get data process success and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “GetEthernet”,
	“success”: true, ,
	“dhcp”: false, 				//  IP config type，true：automatically，false：static ip
   “ip”: “192.168.8.200”,		// IP address
   “gateWay”: “192.168.8.1”,	// gateway
   “netMask”: “255.255.255.0”,	// network mask
   “dns”: “192.168.8.1”		// DNS

}
```



### 73.Set led controller alias

> Example of send data command format：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “SetCardAlias”,
	“alias”: “xixun” 		// need switch to Base64 encode

}
```



> Example of get data process success and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “SetCardAlias” ,
	“success”: true

}
```



### 74.Get led controller alias

> Example of send data command format：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “GetCardAlias”

}
```



> Example of get data process success and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “GetCardAlias” ,
	“success”: true,
	“alias”: “xixun”

}
```



### 75.Set Minimum Brightness

> Example of send data command format：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “SetMinBrightness”,
	“brightness”: 3

}
```



> Example of get data process success and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “SetMinBrightness” ,
	“success”: true

}
```



### 76.Get minimum brightness

> Example of send data command format：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “GetMinBrightness”

}
```



> Example of get data process success and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “GetMinBrightness” ,
	“success”: true,
    “brightness”: 3

}
```



### 77.Set maximum brightness

> Example of send data command format：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “SetMaxBrightness”,
	“brightness”: 50

}
```



> Example of get data process success and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “SetMaxBrightness” ,
	“success”: true

}
```



### 78.Get maximum brightness

> Example of send data command format：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “GetMaxBrightness”

}
```



> Example of get data process success and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “GetMaxBrightness” ,
	“success”: true,
	“brightness”: 50

}
```



### 79.**Set brightness schedule task (refer to the data structure document of adjust brightness task in schedule )**

> Example of send data command format：

```json
{

	"_id":"a7c69152faca92a3c58c46512624ef3a",
    "_type":"SetAutoBrightnessTask",
	"taskBrightness":{
		"createDate":"2017-09-23",
		"createBy":"Joey",
        "name":"TimingBrightness"，
        "defaultBrightness":12，
		"brightness":12， 
        "items":[{
			"brightness":51,
        	"schedules":[{
				"timeType":"Range",
				"startTime":"09:27",
				"endTime":"17:35",
				"dateType":"Range",
				"startDate":"2017-06-30",
				"endDate":"2019-02-03",
				"monthFilter":[], 
    			"filterType":"Week",
    			"weekFilter":[1,2,3,4,5],
			}]
		}]
	}
}
```



> Example of get data process success and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “SetAutoBrightnessTask”,
    “success”: true

}
```



### 80.**Get brightness schedule task** 

> Example of send data command format：

```json
{

	“_id”: “1ae48105179d2649708ea85c154f52e3”,
	“_type”: “GetAutoBrightnessTask”

}
```



> Example of get data process success and return：

```json
{

	"_id":"1ae48105179d2649708ea85c154f52e3",
	"_type":"GetAutoBrightnessTask",
    "success":true,
    "taskBrightness":{
		"createBy":"Joey",
		"createDate":"2017-09-23",
        "name":"TimingBrightness",
		"defaultBrightness":12,
        "brightness":12,
        "items":[{
			"brightness":51，
             "schedules":[{
				"timeType":"Range",
				"startTime":"09:27",
				"endTime":"17:35",
				"dateType":"Range",
				"startDate":"2017-06-30",
				"endDate":"2019-02-03",
				"monthFilter":[],
        		"filterType":"Week",
        		"weekFilter":[1,2,3,4,5],

			}]
		}]
	}
}
```



### 81.**Set volume schedule task**

> Example of send data command format：

```json
{

	"_id":"a7c69152faca92a3c58c46512624ef3a",
    "_type":"SetAutoVolumeTask",
	"taskVolume":{
		"createDate":"2017-09-23",
		"createBy":"Joey",
        "name":"TimingVolume"，
        "defaultVolume":9，
        "volume":9，
		"items":[{
        	"volume":2,
        	"schedules":[{
                "timeType":"Range",
                "startTime":"11:27",
                "endTime":"13:35",
                "dateType":"Range",
                "startDate":"2017-06-30",
                "endDate":"2018-02-03",
                "monthFilter":[],
                "filterType":"Week",
                "weekFilter":[1,2,3,4,5],
			}]
		}]
	}
}
```



> Example of get data process success and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “SetAutoVolumeTask” ,
	“success”: true

}
```



### 82.Get Volume schedule task

> Example of send data command format：

```json
{

	“_id”: “1ae48105179d2649708ea85c154f52e3”,
	“_type”: “GetAutoVolumeTask”

}
```



> Example of get data process success and return:

```json
{
	"_id":"1ae48105179d2649708ea85c154f52e3",
    "_type":"GetAutoVolumeTask",
    "success":true,
    "taskVolume":{
        "createBy":"Joey",
        "createDate":"2017-09-23",
        "name":"TimingVolume",
        "defaultVolume":9,
        "volume":9,
        "items":[{
            "volume":2，
            "schedules":[{
                "timeType":"Range",
                "startTime":"11:27",
                "endTime":"13:35",
                "dateType":"Range",
                "startDate":"2017-06-30",
                "endDate":"2018-02-03",
                "monthFilter":[], 
                "filterType":"Week",
                "weekFilter":[1,2,3,4,5],
    		}]
		}]
	}
}
```



### 83.Set screen on/off schedule task

> Example of send data command format：

```json
{

	"_id":"a7c69152faca92a3c58c46512624ef3a",
    "_type":"SetTimingScreenTask",
	"screenTask":{
		"createDate":"2017-09-23",
		"createBy":"Joey",
        "name":"TimingScreen"，
        "schedules":[{
			"timeType":"Range",
			"startTime":"11:27",
			"endTime":"13:35",
			"dateType":"Range",
			"startDate":"2017-06-30",
        	"endDate":"2018-02-03",
			"monthFilter":[],
    		"filterType":"Week",
    		"weekFilter":[1,2,3,4,5],
		}]
	}
}
```



> Example of get data process success and return：

```json
{

	“_id”: “a7c69152faca92a3c58c46512624ef3a”,
    “_type”: “SetTimingScreenTask” ,
	“success”: true

> } 
```



### 84.Get screen on/off schedule task

> Example of send data command format：

```json
{

	“_id”: “1ae48105179d2649708ea85c154f52e3”,
	“_type”: “GetTimingScreenTask”

}
```



> Example of get data process success and return:

```json
{
    
	"_id":"1ae48105179d2649708ea85c154f52e3",
	"_type":"GetTimingScreenTask",
    "success":true,
    "creenTask":{
		"createBy":"Joey",
		"createDate":"2017-09-23",
		"name":"TimingVolume",
         "schedules":[{
            "timeType":"Range",
            "startTime":"11:27",
            "endTime":"13:35",
            "dateType":"Range",
            "startDate":"2017-06-30",
            "endDate":"2018-02-03",
            "monthFilter":[],
             "filterType":"Week",
             "weekFilter":[1,2,3,4,5],
		}]
	}
}
```



### 85.Set reboot schedule task 

> Example of send data command format：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “SetTimingReboot”,
	“time”: “10:50”

}
```



> Example of get data process success and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “SetTimingReboot” ,
	“success”: true
    
}
```



### 86.Get reboot schedule task

> Example of send data command format：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “GetTimingReboot”

}
```



> Example of get data process success and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “GetTimingReboot”,
    “success”: true,
    “time”: “10:50”

}
```



### 87.**Set power relay functions for multifunction bard**

> Example of send data command format：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “SetRelayFunctions”，
	“functions”：0x7FFF 				// Represent the relay by position(total 15 relays)
    								// 1: means uses for led screen power supply
    								// 0: means uses for other functions

}
```



> Example of get data process success and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “SetRelayFunctions”,
	“success”: true,

}
```



### 88.**Get power relay function of multifunction baord**

> Example of send data command format：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “GetRelayFunctions”

}
```



> Example of get data process success and return

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
	“_type”: “GetRelayFunctions”,
    “success”: true,
	“functions”: 0x7FFF

}
```



### 89.**non power relay switch(manual switch then cancel other auto control)**

> Example of send data command format：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “SwitchRelayNotPower”，
	“enable”: true 				// true: open；false: shut
}
```



> Example of get data process success and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “SwitchRelayNotPower”,
	“success”: true
}
```



> Example of get data process failed and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “SwitchRelayNotPower”,
	“success”: false,
	“error”: “xxxxxxxx”

}
```



### 90.**Set temperature control non power relay**

> Example of send data command format：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”:“SetRelayNotPowerTemperature”，
    // Power relay close when within temperature range, will open when out of range, if up and low range is same means disable temperature control
	“lowerLimit”: 20, //
	“upperLimit”: 60
}    
```



> Example of get data process success and return

```json
{
    “_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
 	“_type”: “SetRelayNotPowerTemperature”, 
    “success”: true
}
```



### 91.**Get non power relay temperature control range**

> Example of send data command format：

```json
{

    “_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”:“GetRelayNotPowerTemperature”

}
```



> Example of get data process success and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”:“GetRelayNotPowerTemperature”,
    “success”: true,
	“lowerLimit”: 20,
	“upperLimit”: 60

}
```



### 92.**Get file lists of prefabricated materials**

> Example of send data command format：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “GetMaterialList”，
	“path”：“” 					// relative path

}
```



> Example of get data process success and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “GetMaterialList”,
	“success”: true，
	“pathnames”：[] 		 // “-;1.jpg”: ‘-’stands for file, file name is 1.jpg
						// “d;pic”：‘d’ stands for directory, directory name is pic

> }
```



### 93.**Set emergency message**

> Example of send data command format：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “SetEmergencyText”，
	“text”: “help”,			//  use Base64 encode
    “margin”: 0,				// int，keep margin， 0, default is 4
    “color”: 0xFFFF0000,		// long，font color,0,default is red
    “background”: 0xFF000000,	// long，background color, 0, default is black
    “show”: 150,				// Display time, when show and hide all 0 means default display mode
    “hide”: 100,				// not display time
    “center”:true			// center or not

}
```



> Example of get data process success and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “SetEmergencyText”,
	“success”: true

}
```



> Example of get data process failed and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “SetEmergencyText”,
	“success”: false,
    “error”: “xxxxxxxx”

}
```



### 94.Get  emergency message

> Example of send data command format：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “GetEmergencyText”

}
```



> Example of get data process success and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “GetEmergencyText”,
	“success”: true，
	“text”: “help”, 		//use Base 64 encode
	“margin”: 0,
	“color”: 0xFFFF0000,
    “background”: 0xFF000000,
    “show”: 150,
	“hide”: 100,
    “center”:true

}
```



> Example of get data process failed and return：

```json
{

	“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,
    “_type”: “GetEmergencyText”,
	“success”: false,
    “error”: “xxxxxxxx”

}
```



### 95.Kayseda input channel switch

> Not open

### 96.Kayseda user preset mode switch

> Not open

### 97.set and use huawei 4G modem（Y-series）\*

> Not open

### 98.Get led controller use huawei 4G modem or not（Y-series）\*

> Not open

