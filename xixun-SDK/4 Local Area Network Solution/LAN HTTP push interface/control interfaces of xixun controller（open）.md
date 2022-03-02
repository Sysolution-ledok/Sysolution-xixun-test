# Control interface design document of Xixun controller



### Purpose

This document only for reviewing the functions and interface debug purpose. It describes configurations in LAN and get controller parameters. As those information relates to hardware and software parameter configuration so only used for xixun programmers and test persons.

###  Update logs

| update date | programmer | description   | note                                                         |
| ----------- | ---------- | ------------- | ------------------------------------------------------------ |
| ...         | ...        | ...           | ...                                                          |
| 2021.9.26   | xulei      | newly add43   | control fan                                                  |
| 2021.9.29   | xulei      | modify 22     | add the percentage to control brightness and also compatible with the previous brightness config methods |
| 2021.10.21  | xulei      | newly add33   | turn on/off LAN adjust time function by manual               |
| 2021.10.27  | xulei      | newly add23.5 | clear the task of restart screen on schedule                 |

### description of interfaces (important)

originally it is LAN interface document, now unify together for other visiting methods, so only existed some control types with different return data.

##### LAN solution

- request port:2016;
- request path: device ip:2016/settings	example:192.168.2.41:2016/settings;
- request format is POST+JSON;
- use "interface instructions document" without change anything. 

##### realTime solution

- build up realtime server

- customized server address and port 

- request address: port/cmd/device serial id  example:192.168.2.200:10010/cmd/y60-720-c0171

- following is requests for interface

  - fixed template

    ```json
    {
    	"type": "callCardService",
    	"fn": "executeJsonCommand",
    	"arg1":""
    }
    ```

  - refer to "interface instructions document " to fill arg1 parameter, need to escaping.

  - example of request

    ```json
    {
    	"type": "callCardService",
    	"fn": "executeJsonCommand",
    	"arg1":"{
                \"_id\": \"98e8d3cd47fad6ce8e3f7b8d42cb4d9b\",
                \"_type\": \"GetCardName\"
    			}"
    }
    ```

  - example of return

    ```json
    {
    	"result": "{\"_type\":\"DataCallback\",
                    \"cardId\":\"y60-720-c0171\",
                    \"cardName\":\"y60-720-c0171\",
                    \"success\":true}",
    	"_type": "success",
    	"_id": "1fgl5dgi6"
    }
    ```

    

##### WebSocket solution

- customized server address and port

- newly add following parameters

  ```json
  	"id": "6151973eaf79bc9b3e2f37e3",
  	"sendTo": "joey-cardsystem",
  	"cardId": "y60-720-c0171"//controller serial id
  ```

- example: get controller serial id in the document of interface instructions

  ```json
  {
      "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
  	"_type": "GetCardName",
  	"sendTo": "joey-cardsystem",
  	"id": "6151973eaf79bc9b3e2f37e3",
  	"cardId": "y60-720-c0171"
  }
  ```

  

### Interface instructions

#### 1.get controller serial ID

```json
Example of send data command format：
{
    // identify a command, it is terminal side random character string
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    // command type
    "_type": "GetCardName"
}
Example of get data process success and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "GetCardName",
    "success":  true,
    "cardName": "e10-516-00006
}
Example of get data process failed and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "GetCardName",
    "success":  false,
    "error": "xxxxxxxx"
}
```



#### 2.hardware FPGA*

##### 2.1.set hardware FPGA register*

```json
not open
```

##### 2.2.read back hardware FPGA register value*

```json
not open
```

##### 2.3.save hardware parameters*

```json
not open
```

##### 2.4.query hardware version*

```json
not open
```

##### 2.5.restart hardware FPGA*

```json
not open
```



#### 3.screen width and height pixels

##### 3.1set led screen width and height pixels

```json
Example of send data command format：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "SetScreenSize",
    // screen width pixels
    "width": 540,
    // screen height pixels
    "height": 960
}
Example of get data process success and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "SetScreenSize",
    "success":  true
}
Example of get data process failed and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "SetScreenSize",
    "success":  false,
    "error": "xxxxxxxx"
}
```

##### 3.2.Get led screen width and height pixels

```json
Example of send data command format：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "GetScreenSize"
}
Example of get data process success and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "GetScreenSize",
    "success":  true,
    "width": 540,
    "height": 960
}
Example of get data process failed and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "GetScreenSize",
    "success":  false,
    "error": "xxxxxxxx"
}
```



#### 4.WiFi/Hotspot

##### 4.1Get the scanning WI-FI hotspots

```json
Example of send data command format：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "GetWifiList"
}
Example of get data process success and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "GetWifiList",
    "success":  true,
    // WIFI structures number group
    "wifiList":  [ ]
}
Example of get data process failed and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "GetWiFiList",
    "success":  false,
    "error": "xxxxxxxx"
}
```

##### 4.2.Config WI-FI connection

```json
Example of send data command format：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "ConfigurationWiFi",		
    "ssid": "xixun",
    "password": "88888888"
}
Example of get data process success and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "ConfigurationWiFi",
    "success":  true
}
Example of get data process failed and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "ConfigurationWiFi",
    "success":  false,
    "error": "xxxxxxxx"
}
```

##### 4.3.Config the led controller as portable hotspot

```json
Example of send data command format：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "ConfigurationHotSpot",	
    //hotspot name
    "apName": "xixun",
    "password": "88888888"
}
Example of get data process success and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "ConfigurationHotSpot",
    "success":  true
}
Example of get data process failed and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "ConfigurationHotSpot",
    "success":  false,
    "error": "xxxxxxxx"
}
```

##### 4.4.Query current using WI-FI or portable hotspot

```json
Example of send data command format：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "IsPortableHotSpot"
}
Example of get data process success and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "IsPortableHotSpot",
    "success":  true,
    // current network is Wi-Fi then this character field is not empty, otherwise, it is empty 
    "wifi": "xixun",	
    // current network is portable hotspot then this character filed is not empty, otherwise,it is empty	
    "hotSpots": ""			
}
Example of get data process failed and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "IsPortableHotSpot",
    "success":  false,
    "error": "xxxxxxxx"
}
```

##### 4.5.Get WIFI connection state

```json
Example of send data command format：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "GetWIFIConnectState"
}
Example of get data process success and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "GetWIFIConnectState",
    "success":  true,
    "isConnect": false,
    "ssid": "",
    "speed": "",
    "ip": "",
    "mac": ""
}
Example of get data process failed and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "GetWIFIConnectState",
    "success":  false,
    "error": "xxxxxxxx"
}
```

##### 4.6.config WIFI switch

```json
Example of send data command format：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",	
    "_type": "SetSwitchWiFi",
    "enable": true
}
Example of get data process success and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "SetSwitchWiFi",
    "success": true
}
```

##### 4.7.Get WIFI switch status

```json
Example of send data command format：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",	
    "_type": "GetSwitchWiFi"
}
Example of get data process success and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "GetSwitchWiFi",
    "success": true,
    "enable": true
}
```



#### 5.Cellular data network related*

##### 5.1.config SIM data switch*

```json
not open
```

##### 5.2.get SIM data switch*

```json
not open
```

##### 5.3Get global APN list*

```json
not open
```

##### 5.4.config SIM APN*

```json
not open
```

##### 5.5.get currently used APN of SIM*

```json
not open
```

##### 5.6.get SIM network status*

```json
not open
```

##### 5.7.config use huawei 4G modem (Y series controller)*

```json
not open
```

##### 5.8.get whether use huawei 4G modem or not(Y series controller)*

```json
not open
```



#### 6.Web server address and company ID*

##### 6.1config web server address and company ID*

```json
not open
```

##### 6.2.Get web server address and company ID*

```json
not open
```



#### 7.Realtime server address*

##### 7.1.config Realtime server address*

```json
not open
```

#### 7.2.get Realtime server address*

```json
not open
```



#### 8.volume

##### 8.1set volume

```json
Example of send data command format：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "SetVolume",
    "volume": 24
}
Example of get data process success and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "SetVolume",
    "success":  true
}
Example of get data process failed and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "SetVolume",
    "success":  false,
    "error": "xxxxxxxx"
}
```

##### 8.2.Get volume

```json
Example of send data command format：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "GetVolume"
}
Example of get data process success and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "GetVolume",
    "success":  true,
    "volume": 24
}
Example of get data process failed and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "GetVolume",
    "success":  false,
    "error": "xxxxxxxx"
}
```

##### 8.3.config volume on schedule

```json
Example of send data command format：
{
	"_id":"a7c69152faca92a3c58c46512624ef3a",
	"_type":"SetAutoVolumeTask",
	"taskVolume":{
		"createDate":"2017-09-23",
		"createBy":"Joey",
		"name":"TimingVolume",
		"defaultVolume":9,
		"volume":9,
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
Example of get data process success and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "SetAutoVolumeTask" ,
    "success": true
}
```

##### 8.4.Get Volume schedule task 

```json
Example of send data command format：
{
    "_id": "1ae48105179d2649708ea85c154f52e3",	
    "_type": "GetAutoVolumeTask"
}
Example of get data process success and return:
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



#### 9.Screen test*

```json
not open
```



#### 10.APK software

##### 10.1query software installation information

```json
Example of send data command format：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "CheckSoftVersions"
}
Example of get data process success and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "CheckSoftVersions",
    "success":  true,
    // software package structure
    "apps": [ ] 
}
Example of get data process failed and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "CheckSoftVersions",
    "success":  false,
    "error": "xxxxxxxx"
}
```

##### 10.2.Get installed software package name

```json
Example of send data command format：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "GetInstalledPackages"
}
Example of get data process success and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "GetInstalledPackages",
    "success":  true,
    // package name of software for installing
    "packageNames": [ ]
}
Example of get data process failed and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "GetInstalledPackages",
    "success":  false,
    "error": "xxxxxxxx"
}
```

##### 10.3.update software

```json
Example of send data command format：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "UpgradeSoftware",
    "fileName": "" 
    "isCustom": flase
}
Example of get data process success and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "UpgradeSoftware",
    "success":  true
}
Example of get data process failed and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "UpgradeSoftware",
    "success":  false,
    "error": "xxxxxxxx"
}
```

##### 10.4.uninstall software

```json
Example of send data command format：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "UninstallSoftware",
    "packageName": "xxxxxxx" 
}
Example of get data process success and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "UninstallSoftware",
    "success":  true
}
Example of get data process failed and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "UninstallSoftware",
    "success":  false,
    "error": "xxxxxxxx"
}
```

##### 10.5.query APK running or not

```json
Example of send data command format：
{
	"_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
	"_type": "IsSoftwareRunning",
	"packageName": "com.xixun.xy.conn"
}
Example of get data process success and return：
{
	"_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
	"_type": "IsSoftwareRunning",
	"success": true,
	"running":  true
}
Example of get data process failed and return：
{
	"_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
	"_type": "IsSoftwareRunning",
	"success":  false,	
	"error": "xxxxxxxx"
}
```



#### 11.Get firmware information

```json
Example of send data command format：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "GetBuildInformation"
}
Example of get data process success and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "GetBuildInformation",
    "success":  true,
    "AndroidVersion": "4.4.2"				//Android version
    "BrightnessLevel": 64					//controller maximum brightness
    "FirmwareVersion": "SYSolution.E.V1.0.0"//firmware version
    "ScreenResolution": "540x960"			//system resolution
    "HardVersion": "A10D"					//hardware FPGA version
}
Example of get data process failed and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "GetBuildInformation",
    "success":  false,	
    "error": "xxxxxxxx"
}
```



#### 12. restart Android

##### 12.1.restart Android by manual

```json
Example of send data command format：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "RestartAndroid"
}
Example of get data process success and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "RestartAndroid",
    "success":  true
}
Example of get data process failed and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "RestartAndroid",
    "success":  false,
    "error": "xxxxxxxx"
}
```

##### 12.2. set restart on schedule

```json
Example of send data command format：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",	
    "_type": "SetTimingReboot",
    "time": "10:50"
}
Example of get data process success and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "SetTimingReboot" ,
    "success": true
}
```

##### 12.3.Get restart schedule task

```json
Example of send data command format：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "GetTimingReboot"
}
Example of get data process success and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "GetTimingReboot",
    "success":  true,
    "time": "10:50"
}
```



#### 13.smart settings*

##### 13.1.start smart settings*

```json
not open
```

##### 13.2.Turn on led screen command during smart setup*

```json
not open
```

##### 13.3.Set Data Polarity*

```json
not open
```

##### 13.4.Get Data Polarity*

```json
not open
```

##### 13.5.Set OE Polarity*

```json
not open
```

##### 13.6.Get OE Polarity*

```json
not open
```

##### 13.7.Set color sequence*

```json
not open
```

##### 13.8.Smart settings step5 finished*

```json
not open
```

##### 13.9.Set line serials*

```json
not open
```

##### 13.10.Get scanning type*

```json
not open
```

##### 13.11.Get line height*

```json
not open
```

##### 13.12.Smart settings done*

```json
not open
```

##### 13.13.Save smart settings parameters*

```json
not open
```

##### 13.14.Load hardware parameters*

```json
not open
```

##### 13.15.upload exist config file*

```json
not open
```

##### 13.16.upgrade exist hardware version*

```json
not open
```

##### 13.17.sync all FPGA version*

```json
not open
```

##### 13.18.Get cascading parameters*

```json
not open
```

##### 13.19.config cascading parameters*

```json
not open
```



#### 14.Universal storage interface

##### 14.1config persistent data

```json
Example of send data command format：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",	
    "_type": "SetPersistentStorage",
    "key": "ValueKey",
    "value": "value"
}
Example of get data process success and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "SetPersistentStorage",
    "success":  true
}
Example of get data process failed and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "SetPersistentStorage",
    "success":  false,
}
```

##### 14.2.Get persistent data

```json
Example of send data command format：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",	
    "_type": "GetPersistentStorage",
    "key": "ValueKey",
    "defValue": "value"
}
Example of get data process success and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "GetPersistentStorage",
    "success":  true,
    "value": "value"
}
```



#### 15.rotate screen*

##### 15.1.config screen rotate*

```json
not open
```

##### 15.2.get screen rotate*

```json
not open
```



#### 16.controller language

##### 16.1.config controller language（support Chinese and English for now）

```json
Example of send data command format：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",	
    "_type": "SetLanguage",
    "language": 0		// 0：EN； 1：CN 
}
Example of get data process success and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "SetLanguage",
    "success":  true
}
```

##### 16.2.Get controller language（support Chinese and English for now）

```json
Example of send data command format：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",	
    "_type": "GetLanguage",
    "language": 0		// 0：EN； 1：CN 
}
Example of get data process success and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "GetLanguage",
    "success":  true,
    "language": 0
}
```



#### 17.controller time zone

##### 17.1config controller time zone

```json
Example of send data command format：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",	
    "_type": "SetTimezone",
    "timezone": "Asia/ShangHai" 
}
Example of get data process success and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "SetTimezone",
    "success":  true
}
```

##### 17.2.get controller time zone

```json
Example of send data command format：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",	
    "_type": "GetTimezone" 
}
Example of get data process success and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "GetTimezone",
    "success":  true, 
    "timezone": "Asia/ShangHai"
}
```



#### 18.file transmission

##### 18.1.upload files

```json
Adopt POST method to upload files,Content-type is Multipart/form-data, if upload chunked file then at least need following Part properties：
"FileName": 		// file name
"TotalChunk": 	// total chunk numbers
"CurrentChunk":	// current chunk serial number
URL of uploading：
    "/upload?type=config"				// Upload hardware configuration parameters file
    "/upload?type=hardware"			// Upload hardware update files
    "/upload?type=software"			// Upload software update files
    "/upload?type=preset_config"	//  upload configuration files to preset directory
    "/upload?type=normal"			// Upload normal temporary files
    "/upload?type=sdcard"				// Upload files to SD card
If upload success then will return the file name or file absolute path name, if failed then return error. 
```

##### 18.2.Download file

```json
Adopt GET method to download files, URL as following：
"/download?file=logs"				// Check led control card log
"/download?file=hardware"		// ownload FPGA config parameter files
"/download?file=pathName"		// pathName is the downloading files’ relative path name
									// or instance: if need download 1.jpg file of material,
									// Then pathName is : material/1/jpg
```



#### 19.Simple display

##### 19.1 set real time message

```json
Example of send data command format：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",	
    "_type": "SetRealtimeMessage" ,
    "message": "realtime message\\n123",	// Note:need switch the message content into base64 encode
    "width": 0, 	// Window width, 0: defaulted window width 
    "left": 0,	// Window to the left margin(pixels)
    "windowBackground": 0,	// Window background color
    "verticalPos": 0,		// Window vertical position,0:top; 1: center; 2:bottom 
    "horizontalPos": 0,		// Text stays on the horizontal position,1: left; 1:center;2:right
    "fontBackground": 0,		// Font background color
    "fontColor": 0xFFFF0000,	// Font color
    "fontSize": 24,		// Font size
    "lineSpace": 0,		// When Multiline, line space
    "showType": 0,			// Text display, 0:static; 1: move left; 2：move right
    "speed": 20,				// /Moving speed(only enable for moving left or right),pixel/second
    "moveCount": 0,			// Moving counts(only enable for moving left or right), 0:Permanent move
    "residenceTime": 0			// Stay time(second),-1: permanent stay
}
Example of get data process success and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "SetRealtimeMessage",
    "success":  true
}
```

##### 19.2.push HTML code

```json
Example of send data command format：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",	
    "_type": "LoadCodeHTML",
    "code": "<div>Test</div>",		// Base64 encoding
    "charSet": "UTF-8"				// Currently only support UTF-8
}
Example of get data process success and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "LoadCodeHTML",
    "success":  true
}
```

##### 19.3.Clean up topper layer UI**

```json
Example of send data command format：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",	
    "_type": "CleanTopUI"
}
Example of get data process success and return：
{
    "_type": "CleanTopUI",
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "success":  true
}
```



#### 20.Ethernet network（Only support Y、L、M90、M91 series）

##### 20.1.config IP

```json
Example of send data command format：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",	
    "_type": "SetEthernet",
    "dhcp": false,				// how to set IP,true：DHCP,false：static
    "ip": "192.168.8.200",		// IP address
    "gateWay": "192.168.8.1",	// gateway
    "netMask": "255.255.255.0",	// netmask
    "dns": "192.168.8.1"		// DNS
}
Example of get data process success and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "SetEthernet", 
    "success":  true
}	
```

##### 20.2.Get IP

```json
Example of send data command format：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",	
    "_type": "GetEthernet"
}
Example of get data process success and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "GetEthernet", 
    "success":  true, ,
    "dhcp": false,				// how to set IP,true：DHCP,false：static
    "ip": "192.168.8.200",		// IP address
    "gateWay": "192.168.8.1",	// Gateway
    "netMask": "255.255.255.0",	// netmas
    "dns": "192.168.8.1"		// DNS
}
```



#### 21.controller alias 

##### 21.1.config alias

```json
Example of send data command format：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",	
    "_type": "SetCardAlias",
    "alias": "xixun"			// Need transfer into Base 6 encoding 
}
Example of get data process success and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "SetCardAlias" ,
    "success": true
}
```

##### 21.2. Get alias

```json
Example of send data command format：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",	
    "_type": "GetCardAlias"
}
Example of get data process success and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "GetCardAlias" ,
    "success": true,
    "alias": "xixun"
}
```



#### 22. About brightness

##### 22.1.set brightness by manual

```json
Example of send data command format：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "SetBrightness",
    "brightness": 24,	//brightness value
    "brightnessPercentage":50	//brightness percentage
    //NOTE:Choose either brightness or brightnessPercentage parameters
}
Example of get data process success and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "SetBrightness",
    "success":  true
}
Example of get data process failed and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "SetBrightness",
    "success":  false,
    "error": "xxxxxxxx"
}
```

##### 22.2.Get current brightness

```json
Example of send data command format：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "GetBrightness"
}
Example of get data process success and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "GetBrightness",
    "success":  true,
    "brightness": 24,		//brightness value
    "brightnessPercentage":50	//brightness percentage
    //NOTE:return brightness or brightnessPercentage depends on which type you set 
}
Example of get data process failed and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "GetBrightness",
    "success":  false,
    "error": "xxxxxxxx"
}
```

##### 22.3.Set Minimum Brightness

```json
Example of send data command format：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",	
    "_type": "SetMinBrightness",
    "brightness": 3,
    "brightnessPercentage":50	//brightness percentage
    //NOTE:Choose either brightness or brightnessPercentage parameters
}
Example of get data process success and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "SetMinBrightness" ,
    "success": true
}
```

##### 22.4.Get minimum brightness

```json
Example of send data command format：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",	
    "_type": "GetMinBrightness"
}
Example of get data process success and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "GetMinBrightness" ,
    "success": true,
    "brightness": 3,	//brightness value
    "brightnessPercentage":50	//brightness percentage
    //NOTE:return brightness or brightnessPercentage depends on which type you set
}
```

##### 22.5.set maximum brightness

```json
Example of send data command format：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",	
    "_type": "SetMaxBrightness",
    "brightness": 50,
    "brightnessPercentage":50	//brightness percentage
    //NOTE:Choose either brightness or brightnessPercentage parameters
}
Example of get data process success and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "SetMaxBrightness" ,
    "success": true
}
```

##### 22.6.get maximum brightness

```json
Example of send data command format：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",	
    "_type": "GetMaxBrightness"
}
Example of get data process success and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "GetMaxBrightness" ,
    "success": true,
    "brightness": 50,
    "brightnessPercentage":50	//brightness percentage
    //NOTE:return brightness or brightnessPercentage depends on which type you set
}
```

##### 22.7.Set brightness schedule task（refer to the data structure document of adjust brightness schedule task）

```json
Note:
1.Two newly added defaultBrightnessPercentage and brightnessPercentageList into following interface parameters to compatible with configuration of real brightness and brightness percentage;If use config real brightness value type then remove the two newly added parameters, or set -1 for defaultBrightnessPercentage, set [] for brightnessPercentageList. If defaultBrightnessPercentage>=0 and brightnessPercentageList length >0,means enable percentage type.
2.when adopting percentage type, then storage sequence of elements in brightnessPercentageList will coorresponding to the items sequence. 

```

```json
Example of send data command format：
{
	"_id":"a7c69152faca92a3c58c46512624ef3a",
	"_type":"SetAutoBrightnessTask",
    "defaultBrightnessPercentage": 50,	//percentage
		"brightnessPercentageList": [	//percentage
			10	
		],
	"taskBrightness":{
		"createDate":"2017-09-23",
		"createBy":"Joey",
		"name":"TimingBrightness",
		"defaultBrightness":12,
		"brightness":12,
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
				"weekFilter":[1,2,3,4,5]				
			}]
		}]
	}
}
Example of get data process success and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "SetAutoBrightnessTask" ,
    "success": true
}
```

##### 22.8.Get brightness schedule task

```json
Example of send data command format：
{
    "_id": "1ae48105179d2649708ea85c154f52e3",	
    "_type": "GetAutoBrightnessTask"
}
Example of get data process success and return：
{
	"_id":"1ae48105179d2649708ea85c154f52e3",
	"_type":"GetAutoBrightnessTask",
    "defaultBrightnessPercentage": 50,
	"brightnessPercentageList": [10],
	"success":true,
	"taskBrightness":{
		"createBy":"Joey",
		"createDate":"2017-09-23",
		"name":"TimingBrightness",
		"defaultBrightness":12,
		"brightness":12,
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
```

##### 22.9.set sensitivity for auto brightness

```json
Example of send data command format：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "SetBrightnessSensitivity",
    "sensitivity": 50
}
Example of get data process success and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "SetBrightnessSensitivity",
    "success":  true,
}
Example of get data process failed and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "SetBrightnessSensitivity",
    "success":  false,
    "error": "xxxxxxxx"
}
```

##### 22.10.Get sensitivity

```json
Example of send data command format：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "GetBrightnessSensitivity"
}
Example of get data process success and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "GetBrightnessSensitivity",
    "success":  true,
    "sensitivity": 24
}
Example of get data process failed and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "GetBrightnessSensitivity",
    "success":  false,
    "error": "xxxxxxxx"
}
```

##### 22.11.config sensor auto brightness Table 

```json
Example of send data command format：
{
	"_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
	"_type": "SensorBrightnessTable"
	"values":[ ]
}
Example of get data process success and return：
{
	"_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
	"_type": "SensorBrightnessTable",
	"success":  true
}
Example of get data process failed and return：
{
	"_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
	"_type": "SensorBrightnessTable",
	"success":  false,	
	"error": "xxxxxxxx"
}
```

##### 22.12.Get sensor auto brightness table

```json
Example of send data command format：
{
	"_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
	"_type": "GetSensorBrightnessTable"
}
Example of get data process success and return：
{
	"_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
	"_type": "GetSensorBrightnessTable",
	"success": true,
	"values": [ ]
}
Example of get data process failed and return：
{
	"_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
	"_type": "GetSensorBrightnessTable",
"success":  false,	
	"error": "xxxxxxxx"
}
```

##### 22.13.Get sensor value

```json
Example of send data command format：
{
	"_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
	"_type": "GetCurrentSensorBrightness"
}
Example of get data process success and return：
{
	"_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
	"_type": "GetCurrentSensorBrightness",
	"is485": true,
	"value":  100
}
```



#### 23.screen status

##### 23.1.set screen switch

```json
Example of send data command format：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "SetScreenOn",
    "on": true							// true：screen on；false：screen off
}
Example of get data process success and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "SetScreenOn",
    "success":  true
}
Example of get data process failed and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "SetScreenOn",
    "success":  false,
    "error": "xxxxxxxx"
}
```

##### 23.2.Get screen status

```json
Example of send data command format：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "IsScreenOn"
}
Example of get data process success and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "IsScreenOn",
    "success":  true,
    "on": true							// true：screen on； false: screen off
}
Example of get data process failed and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "IsScreenOn",
    "success":  false,	
    "error": "xxxxxxxx"
}
```

##### 23.3.set screen switch schedule

```json
Example of send data command format：
{
	"_id":"a7c69152faca92a3c58c46512624ef3a",
	"_type":"SetTimingScreenTask",
	"screenTask":{
		"createDate":"2017-09-23",
		"createBy":"Joey",
		"name":"TimingScreen",	
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
Example of get data process success and return：
{
    "_id": "a7c69152faca92a3c58c46512624ef3a",
    "_type": "SetTimingScreenTask" ,
    "success": true
}
```

##### 23.4.get screen switch schedule

```json
Example of send data command format：
{
    "_id": "1ae48105179d2649708ea85c154f52e3",	
    "_type": "GetTimingScreenTask"
}
Example of get data process success and return:
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

##### 23.5.clear screen switch schedule task

```json
Example of send data command format：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",	
    "_type": "CleanTimingScreenTask"
}
Example of get data process success and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "CleanTimingScreenTask" ,
    "success": true
}
```



#### 24.power rely functions*

##### 24.1.Set power relay functions for multifunction board

```json
not open
```

##### 24.2.Get power relay function of multifunction board

```json
not open
```

##### 24.3.non power relay switch(manual switch then cancel other auto control)

```json
not open
```

##### 24.4.Set temperature control non power relay

```json
not open
```

##### 24.5.Get non power relay temperature control range

```json
not open
```



#### 25.Get file lists of prefabricated materials*

```json
not open
```



#### 26.get prefabricated config file*

```json
not open
```



#### 27.Emergency message

##### 27.1Set emergency message

```json
Example of send data command format：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "SetEmergencyText",
    "text": "help",			// use Base64 encode
    "margin": 0,				// int，keep margin， 0, default is 4
    "color": 0xFFFF0000,		// long，font color,0,default is red
    "background": 0xFF000000,	// long，background color, 0, default is black
    "show": 150,				// Display time, when show and hide all 0 means default display mode
    "hide": 100,				// hide time
    "center":true			// center or not
}
Example of get data process success and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "SetEmergencyText",
    "success":  true
}
Example of get data process failed and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "SetEmergencyText",
    "success":  false,	
    "error": "xxxxxxxx"
}
```

##### 27.2.Get  emergency message

```json
Example of send data command format：
{
	"_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
	"_type": "GetEmergencyText"
}
Example of get data process success and return：
{
	"_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "GetEmergencyText",
    "success":  true,
    "text": "help",			// use Base 64 encode
    "margin": 0,				
    "color": 0xFFFF0000,
    "background": 0xFF000000,
    "show": 150,
    "hide": 100,
    "center":true
}
Example of get data process failed and return：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "GetEmergencyText",
    "success":  false,	
    "error": "xxxxxxxx"
}
```



#### 28.Kayseda device*

##### 28.1Kayseda input channel switch*

```json
not open
```

##### 28.2.Kayseda user preset mode switch*

```json
not open
```



#### 29.Password

##### 29.1.set password

```json
Example of send data command format：
{
	"_id":"98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
	"_type":"SetControllerPassword",
	"pwd":"",			//original password
	"newPwd":"123456"	//new password
}
Example of get data process success and return：
{
    "_type": "SetControllerPassword",
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "result": 0,
    "success": true
}
wrong original passowrd and return：

{
    "_type": "SetControllerPassword",
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "result": 1,
    "success": true
}
```

##### 29.2.query password set or not

```json
{
	"_id":"98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
	"_type":"HasControllerPassword"
}

if already set then return:
{
    "_type": "HasControllerPassword",
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "result": true,
    "success": true
}
if not set then return:
{
    "_type": "HasControllerPassword",
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "result": false,
    "success": true
}
```

##### 29.3.password verify

```json
{
	"_id":"98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
	"_type":"VerifyPassword",
	"pwd":"123456"
}
verify success and return:
{
    "_type": "VerifyPassword",
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "result": true,
    "success": true
}
verify failed and return:
{
    "_type": "VerifyPassword",
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "result": false,
    "success": true
}
```



#### 30.NTP server

##### 30.1.set NTP server address

```json
{
	"_id":"98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
	"_type":"SetNtpServer",
	"ntpServer":"ntp1.aliyun.com"
}
set success and return:
{
    "_type": "SetNtpServer",
    "id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "success": true
}
```

##### 30.2.Get NTP server address

```json
{
	"_id":"98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
	"_type":"GetNtpServer"
}
example of return:
{
    "_type": "GetNtpServer",
    "ntpServer": "ntp1.aliyun.com",
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "success": true
}
```



#### 31.sync 

##### 31.1.set sync type

```json
{
	"_id":"98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
	"_type":"SetingSyncMethod",
	"brightness": "none",
	"checkNtpTime": 10,
	"delaySync": "",
	"identificationCode": "xixun111",
	"screenSwitch": "none",
	"time": "gps",
	"volume": "none"
}return example:
{
    "_type": "SetingSyncMethod",
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "success": true
}
```

##### 31.2. Get sync type

```json
{
	"_id":"98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
	"_type":"GetingSyncMethod"
}

return example:
{
    "delaySync": 0,
    "lastSynchronousTime": 1599293784069,
    "volume": "NONE",
    "time": "NTP",
    "id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "checkNtpTime": 10,
    "screenSwitch": "NONE",
    "_type": "GetingSyncMethod",
    "identificationCode": "",
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "brightness": "NONE",
    "success": true
}
```



#### 32.adjust local laptop time

```json
{
"_id":"98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
"_type":"SyncTime",
"time":1576461707000
}
return example:
{
"_type":"SyncTime",
"date":"2019年12月16日10:01:48",
"_id":"98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
"id":"98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
"success":true
}
```



#### 32.set master and slave type

##### 32.1.set master and slave type

```json
Example of send data command format：
		{
	"_id":"98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
	"_type":"MasterSlaveSwitch",
    	"master":true/false		//true:master false:slave
}
example of setting success and return:
{
    "_type": "MasterSlaveSwitch",
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "success": true
}
```

##### 32.2.get master and slave status

```json
Example of send data command format：
{
	"_id":"98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
	"_type":"IsMasterSlave"
}
set success and return:
{
    "_type": "IsMasterSlave",
    "result": true/false,		//true:master false:slave
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "success": true
}
```

#### 33.adjust time function in local area network(CardSystem5.2.6.3-9 and above)

##### 33.1.enable LAN adjust time

```json
Example of send data command format：
{
	"_id":"98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
	"_type":"OpenNetSyncTime",
    "open":true/false
}
example of setting success and return:
{
    "_type": "OpenNetSyncTime",
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "success": true
}
```

##### 33.2.query LAN adjust time open or not

```json
Example of send data command format：
{
	"_id":"98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
	"_type":"IsOpenNetSyncTime"
}
example of setting success and return:
{
    "_type": "IsOpenNetSyncTime",
    "result": true/false,		
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "success": true
}
```



#### 34.sync/async operation

##### 341.set sync/async switch

```json
Example of send data command format：
{
	"_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
	"_type": "SyncSwitch",
	"switchOn": true							// true：sync；false：async
}
Example of get data process success and return：
{
	"_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
	"_type": "SyncSwitch",
	"success":  true
}
Example of get data process failed and return：
{
	"_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
	"_type": "SyncSwitch",
	"success":  false
}
```

##### 34.2.get sync/async status

```json
Example of send data command format：
{
	"_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
	"_type": "IsSync"
}
Example of get data process success and return：
{
	"_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
	"_type": "IsSync",
	"success":  true,
	"switchOn": true							// true：sync；false：async
}
Example of get data process failed and return：
{
	"_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
	"_type": "IsSync",
	"success":  false
}
```

##### 34.3.set sync/async switch schedule 

```json
Example of send data command format：
{
	"_id":"a7c69152faca92a3c58c46512624ef3a",
	"_type":"SetTimingHdmiInTask",
	"HdmiInTask":{
		"createDate":"2017-09-23",
		"createBy":"Joey",
		"name":"TimingHdmiIn",	
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
Example of get data process success and return：
{
"_id": "a7c69152faca92a3c58c46512624ef3a",
"_type": "SetTimingHdmiInTask" ,
"success": true
}
```

##### 93.4.get sync/async switch schedule

```json
Example of send data command format：
{
	"_id": "1ae48105179d2649708ea85c154f52e3",	
	"_type": "GetTimingHdmiInTask"
}
Example of get data process success and return:
{
	"_id":"1ae48105179d2649708ea85c154f52e3",
	"_type":"GetTimingHdmiInTask",
	"success":true,
	"creenTask":{
		"createBy":"Joey",
		"createDate":"2017-09-23",
		"name":"TimingHdmiIn",
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



#### 35.query controller date and time

```json
Example of send data command format:
{
	"_id": "1ae48105179d2649708ea85c154f52e3",	
	"_type": "GetControllerDate"
}
Example of get data process success and return:
{
    "_type": "GetControllerDate",
    "date": "2020-09-11 10:04:36",	//time character string
    "_id": "1ae48105179d2649708ea85c154f52e3",
    "id": "1ae48105179d2649708ea85c154f52e3",
    "success": true,
    "millis": 1599789876920		//time stample,long integer, milliseconds
}
```



#### 36.M80 resolution 

##### 36.1.M80 get all types of resolution

```json
request data format
{
"_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
"_type": "GetAllScreenSizeM80"
}|
receive data format
{
"_type": "GetAllScreenSizeM80",
"_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
"id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
"result": {
		"1280×1920": "1320×2200",	//"display resolution":"total resolution"
		"2686×864": "2750×900",
		"2400×1080": "2500×1125",
		"1920×1080": "2200×1125",
		"3200×800": "3300×825",
		"1080×2432": "1125×2500",
		"2048×1152": "2200×1320",
		"3840×640": "3960×660",
		"640×3840": "660×3960",
		"1080×1920": "1125×2200",
		"800×3200": "825×3300",
		"1472×1536": "1500×1650",
		"1536×1472": "1650×1500",
		"4096×480": "4500×550",
		"1920×1280": "2200×1320",
		"864×2686": "900×2750"
},
"success": true
}
```

##### 36.2.M80 set resolution（will reboot after set）

```json
Example of send data command format:
	
{
	"_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
	"_type": "SetSpecialResolution",
	"displayResolution": "1280×1920",	//display resolution
	"totalResolution": "1320×2200"	//total resolution
}
Example of get data process success and return:
{
	"_type": "SetSpecialResolution",
	"id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
	"_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
	"success": true
}
```

##### 36.3.M80 get already set resolution

```json
Example of send data command format:
{
"_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
"_type": "GetSpecialResolution"
}
Example of get data process success and return:
{

	"_type": "GetSpecialResolution",
	"totalResolution": "4500×550",
	"displayResolution": "4096×480",
	"_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
	"id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
	"success": true

}
```

##### 36.4.M80 restore default resolution（will reboot after set）

```json
Example of send data command format:
{
"_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
"_type": "CleanDisplayScreenSize"
}
Example of get data process success and return:
{
	"_type": "CleanDisplayScreenSize",
	"id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
	"_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
	"success": true

}
```



#### 37.Configure the customer status corresponding to the IO high and low status

##### 37.1.config status

instructions: some clients require IO high trigger for occupied, low for empty; but some other clients require low for occupied, high for empty; so the interface config is open for clients;

```json
Example of send data command format:
{
"_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
"_type": "SetHighForBusy",
"busyState": 0	//0:low;1 high
}
Example of get data process success and return:
	{
	"_type": "SetHighForBusy",
	"_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
	"id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
	"result": true,
	"success": true
}
```

##### 37.2.query the customer status corresponding to the IO high and low status

```json
Example of send data command format:
{
"_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
"_type": "GetStateForBusy"
}
Example of get data process success and return:
	{
	"_type": "GetStateForBusy",
	"_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
	"id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
	"result": 0,
	"success": true
}
```



#### 38.flight mode*

##### 38.1 turn on/off flight mode

```json
not open
```

##### 38.2.query flight mode status

```json
not open
```



#### 39.Get MAC address for Ethernet 

```json
Example of send data command format：
{
"_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
"_type": "GetEthernetMacAddr",
}
Example of get data process success and return：
{
	"_type": "GetEthernetMacAddr",
	"_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
	"id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
	"result": true,
	"success": true
"macAddr": "00:0B:20:04:16:36\r\n",
}
```



#### 40.screen shot（according to the display size）（CardSystem5.2.6.2-1）

```json
Example of send data command format：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "GetScreenshotFull",
}
Example of get data process success and return：
{
	"_type": "GetEthernetMacAddr",
	"id": "d6c37e00585e35138c7fab2c2434a990",
    "data": "/9j/4AAQSkZJRgABAQAAAQABAAD................,
    "_type": "GetScreenshotFull",
    "_id": "d6c37e00585e35138c7fab2c2434a990",
    "success": true
}
```



#### 41.CPU frequency*（CardSystem5.2.6.2-5）

##### 41.1.get CPU supported frequency 

```json
not open
```

##### 41.2.set cup frequency

```json
not open
```



#### 42.open network ADB（CardSystem5.2.6.2-5）

```json
Example of send data command format：
{
	"_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
	"_type": "OpenAdb",
	"open": true	//true:open;false:close
}


Example of get data process success and return：
{
	"_type": "OpenAdb",
	"id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
	"_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
	"success": true
}
```



#### 43.control fan (CardSystem-5.2.6.3-2 and above)

##### 43.1.set the checking cycle

```json
Example of send data command format：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "SetCheckCycle",		
    "cycleValue": 1	//minute 
}
Example of get data process success and return：
{
    "id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "SetCheckCycle",
    "success":  true
}
```

##### 43.2.query cycle

```json
Example of send data command format：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "GetCheckCycle"
}
Example of get data process success and return：
{
    "id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "GetCheckCycle",
    "cycleValue":1
    "success":  true
}
```

##### 43.3.set the temperature threshold for open/close fan

```json
Example of send data command format：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "SetTemperatureThreshold",		
    "openValue": 70,	//celsius 
    "closeValue":60
}
Example of get data process success and return：
{
    "id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "SetTemperatureThreshold",
    "success":  true
}
```

##### 43.4.get the temperature threshold for open/close fan

```json
Example of send data command format：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "GetTemperatureThreshold"
}
Example of get data process success and return：
{
    "id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "GetTemperatureThreshold",
    "openValue": 70,
    "closeValue":60,
    "success":  true
}
```



#### 44.Alarm (CardSystem-5.2.6.3-6 and above)

##### 44.1.set alarm address

```json
Example of send data command format：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "SetAlarmUrl",
    "alarmUrl":"https://www.m2mled.net/cardControl#anchor-control"
}
Example of get data process success and return：
{
	"_type": "SetAlarmUrl",
	"id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
	"_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
	"success": true
}


Note: when trigger alarm will send the alarm information to the pre set address, following is the json object 
{
    "cardId":"y60-721-41277",//controller serial id
    "alias":"NO.1 lamp",//alias
    "type":"smoke"//alarm type as following:
    //temperature,humidity,voltage,voltage1,voltage2,doorOpened,smoke
}
```

##### 44.2.get alarm address

```json
Example of send data command format：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "GetAlarmUrl"
    
}
Example of get data process success and return：
{
	"_type": "GetAlarmUrl",
	"id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
	"_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
	"success": true,
	"alarmUrl": "https://www.m2mled.net/cardControl#anchor-control"
}
```

##### 44.3.set alarm threshold 

```json
Example of send data command format：
{
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "SetAlarm",		
    "temperatureRange": {ceiling: 60, floor: 0},
    "humidityRange":{ceiling: 70, floor: 0},
    "voltageRange":{ceiling: 5, floor: 0},
    "voltage1Range":{ceiling: 5, floor: 0},
    "voltage2Range":{ceiling: 5, floor: 0},
    "doorOpened":true,
    "smoke":true
}
Example of get data process success and return：
{
    "id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
    "_type": "SetAlarm",
    "success":  true
}
```

##### 44.4.get alarm threshold

```json
    Example of send data command format：
    {
        "id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
        "_type": "GetAlarm"
    }
    Example of get data process success and return：
    {
        "doorOpened": true,
        "voltage2Range": {
            "ceiling": 5,
            "floor": 0
        },
        "id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
        "_type": "GetAlarm",
        "voltage1Range": {
            "ceiling": 5,
            "floor": 0
        },
        "_id": "98e8d3cd47fad6ce8e3f7b8d42cb4d9b",
        "humidityRange": {
            "ceiling": 70,
            "floor": 0
        },
        "temperatureRange": {
            "ceiling": 60,
            "floor": 0
        },
        "smoke": true,
        "success": true,
        "voltageRange": {
            "ceiling": 5,
            "floor": 0
        }
    }
```

