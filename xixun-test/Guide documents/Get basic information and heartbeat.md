Need a websocket server to receive controller basic information and heartbeat package.

Run easyboard software and detect controller IP, parameter settings, default password 888

Go to System network server settings

Web server address: 192.168.8.99:8888 for example

Company ID: empty

Press Save

 

![](https://github.com/Sysolution-ledok/Sysolution-xixun-test/blob/master/xixun-test/media/wps1.jpg)

Will send 3 pieces of data when connecting to the websocket server:

1、controller serial ID（character string，example：y10-618-01234）

2、encrypted information binary data, customer can ignore this data

3、authentication information binary data, customer can ignore this data. 

Server send JSON character string to client(controller) after received those above data. 

{"_type":"GetCardInfo","id":"first"}

Client will return JSON character string including controller all basic information after received

4, recommend server to answer an empty data when receiving the empty data from controller to keep a heartbeat, so that can know if controller online or offline. 

 

 

GetCardInfo return format, example：

{

​    "_type":"CardInfo",

​    "cardId":"y10-817-01926", // controller id

​    "commandId":"first",

​    "card":{

​        "alias":"noname",	//controller alias

​        "updateVersion":"6.6",	//update apk version 

​        "sim":{					//SIM card information

​            "deviceId":null,

​            "networkCountryIso":"",

​            "number":null,

​            "simCountryIso":"",

​            "simOperatorName":"",

​            "simSerialNumber":null,

​            "subscriberId":null,

​            "simState":0

​        },

​        "screenStatus":"on",		//screen status：on，off

​        "companyId":"test",		//company ID，ignore

​        "connVersion":"9.8.4",	//conn version

​        "playerVersion":"10.2.8",	//xixunplayer version

​        "currentProgramId":null,	//current program id

​        "currentProgramName":null, //current program name

​        "netType":"ETH",	//network type：ETH，WLAN，other 3/4G

​        "ledsetVersion":"5.0.3.4", //cardsystem version

​        "humidity":0,	//current humidity

​        "lat":0,	//current GPS latitude

​        "diskSize":0, //not use

​        "lng":0,//current GPS longitude

​        "ledsetVersionCode":459, 

​        "locked":false, //

​        "height":512, //screen height pixels

​        "connVersionCode":80, 

​        "playerVersionCode":328,

​        "rssi":-9999, 

​        "brightness":64, //screen brightness 

​        "autoBrightness":false, //auto adjust brightness according to sensor or not

​        "temperature":0, //sensor temperature

​        "asu":99,

​        "updateVersionCode":15,

​        "volume":12, //controller volume

​        "width":1280 //screen width pixels

​    }

} 
