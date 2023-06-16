[TOC]



# 系统相关

#### 应用场景：获取控制卡相关信息、回读屏幕画面、重启系统

## 1、重启

发送消息：

```json
{ 
"type": "callCardService", 
"fn": "reboot", 
"arg1": 1 //*delayForSecond 
} 
```

设备回复消息：

```json
{"result":true}
```

## 

## 2、获取屏幕截图

发送消息：

```json
{ 
	"type": "callCardService", 
	"fn": "screenshot", 
	"arg1": 100, 	*//quality* 
	"arg2": 100 	*//scale* 
} 
```

设备回复消息：

```json
{"result":"/9j/4AAQSkZJRgABAQAAAQABAAD/...."}截图为base64编码的字符串（字符串中含有较多的\n换行符，需要用正则去掉才能正常显示，格式为png）
```

## 

## 3、开关WiFi/AP接口

发送消息：

```json
{
    "_id":"f237643d-c35c",
    "type": "switchWiFi" ,
    "on":true | false //true打开，false关闭
}
```

设备回复消息：

```json
{
    "_type": "success",
    "_id": "f237643d-c35c",
    "timestamp": 1552296747116
}
```

### （注意：由于涉及拨码开关，该接口仅打开或关闭WiFi模块，并不能控制当前是WiFi状态还是AP状态）



## 4、设置web地址/公司ID/realtime地址

发送消息：

```json
{
	"type":"advancedConfig",			//命令类型固定不变
	"serverURL":"www.ledaips.net",		//指定连接服务器地址
	"companyId":"xixun",			   //指定公司id
	"realtimeURL":"192.168.8.128:8081",	//指定realtime 服务地址
	"usbProgramPwd":"888"			  //可设置为888或默认为空
}
```

设备回复消息：

```json
由于配置成功时会断开连接开启新的连接，如果不返回"not opened"错误则视为设置成功。
```

### 

## 5、获取传感器数据接口

发送消息：

```json
{
    "type":"Subscribe",  //命令字符串固定不能更改，大小写敏感
    "action":"xixun.intent.action.TEMPERATURE_HUMIDITY", //固定不能更改，大小写敏感
    "callbackURL":"",//接收传感器数据的http地址，post方法
    "subscribe":true //true订阅，false取消订阅
}
```

POST到服务器的传感器数据格式：

```json
{
    "cardId":"y10-817-01926",	//设备序列号
    "t":"--",  //温度
    "h":"--",  //湿度
    "ws":"--",  //风速，单位米每秒
    "wd":"--",  //风向
    "ns":"--",  //噪音db
    "pm2":"--",  //PM2.5 单位μg/m³
    "pm10":"--"//PM10 单位μg/m³
}
```



## 6、查询控制卡基本信息(仅conn1045r版本或以上才支持)

发送消息：

```json
{
    "_id": "69497f645f8611eb80bcfa163e16af18",
    "type": "getCardInformation"
}
```

设备回复消息：

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

## 7、获取GPS坐标

发送消息：

```json
{ 
	"type": "getGpsLocation"
} 
```

设备回复消息：

```json
{"lat":31.23856585,"lng":121.32834949}
```

## 

## 8、获取屏宽

发送消息：

```json
{ 
    "type": "callCardService", 
    "fn": "getScreenWidth"
} 
```

设备回复消息：

```json
{"result":1280}
```

## 

## 9、获取屏高

发送消息：

```json
{ 
    "type": "callCardService", 
    "fn": "getScreenHeight" 
} 
```

设备回复消息：

```json
{"result":512}
```

## 

## 10、获取网络类型

发送消息：

```json
{ 
    "type": "callCardService", 
    "fn": "getNetworkType" 
} 
```

设备回复消息：

```json
{"result":"ETH"}
```

## 

## 11、获取硬件状态

发送消息：

```json
{ 
    "type": "callCardService", 
    "fn": "getFpgaInfomation"
} 
```

设备回复消息：

```json
{"_type":"success","result":[{"externalVoltage2//外部电压2":"0.0V","humidity//湿度":"0.0%","externalVoltage1//外部电压1":"0.0V","cardVoltage//卡电压":"4.52V","smoke//烟雾警告":"Normal","version//版本":"a000","temperature//温度":"55.0℃","doorOpened//门被打开":"Open"}]}
```

## 

## 12、查询设备磁盘空间

发送消息：

```json
{
    "type": "getDiskSpace"
}
```

设备回复消息：

```json
{
    "_type": "success",

    "internalTotal": 1059061760, //内部存储器总空间 单位为字节(b)
    "externalFree": 692572160, //外部存储器剩余空间
    "externalTotal": 1059061760,//外部存储器总空间
    "internalFree": 692572160,    //内部存储器剩余空间
    "_id": "d4c3b9b2-4e5c-4a64-8638-9e1ab4222f2a"
}
```

## 

## 13、获取web地址/公司id/realtime地址

发送消息：

```json
{
    "id":"234234",
    "type": "getServerAddress" 
}
```

设备回复消息：

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

## 14、查询设备当前时间

发送消息：

```json
{
    "type": "getControllerDate"
}
```

设备回复消息：

```json
{
    "_id": "f237643d-c35c-474a-8872-f942fa5395bc",
   
     "date": "2019-6-13 12:58:18",//时间字符串
     "_type": "success",
    
     "millis": 1560401898069 //当前时间毫秒数，长整型
}
```

## 