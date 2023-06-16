[TOC]



# Software version related

## 1,Application Scenario

It is mainly used to update and query the software version information of the controller

## 2,Interface

### 2.1,Install or Update app

Sample code:

```json
{
	"type":"updateAPP",
	"appUrl":"https://m2mled.net/file/download?id=5c13839da62960b53cb07b42"    //Software package download address
}
```

Return success format example:

```json
{   
    "_type": "success",
    "_id": "448e715c-5c31-4a52-b0ac-18165e4fd9a0",
    "timestamp": 1551866957797
}
```



### 2.2,Uninstall app

JSON Data format example:

```json
{
     "_id":"abc",
    "type": "uninstallApp", 
    "pkg": "com.xixun.xixunplayer" 		//Package name, example is player
}
```

Return data format:

```json
{
    "_type": "success",
    "_id": "4ed91a8f-dea2-42fb-951d-c6e3484a97af",
    "timestamp": 1553848772492
}
```

### 2.3,Get apk information

Request data format:

```json
{ 
	"type": "getPackageVersion",  
	"apk": "com.xixun.xixunplayer"  		//Package name, example is player
} 
```

Return data format:

```json
{"versionCode":4,"versionName":"1.4","firstInstallTime":1439539769420,"lastUpdateTime":1439539769420,"installLocation":1}
```

