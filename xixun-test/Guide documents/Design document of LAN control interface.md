**Design document of LAN control interface**

 

​                              Shanghai Xixun Electronic Company Limited   

​                                                          2016-06-08

 

1. **Purpose**

**This document only for reviewing the functions and interface debug purpose. It describes configurations in LAN and get controller parameters. As those information relates to hardware and software parameter configuration so only used for xixun programmers and test persons.** 

 

2. **Interface instructions**

 

**2.1 service port is 2016**

 

**2.2 adopting HTTP POST communication way to setup and get normal parameters, sending content and receiving return content are all JSON character string (contentType property set as text/plain), please use /settings as path if there is no special note.** 

**2.3 upload and download files through HTTP POST way.** 

3. **Interfaces descriptions**

**3.1 get control card serial id**

Example of send data command format：

{

*//* *identify a command, it is terminal side random character string*

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

*//* *command type*

“_type”: “GetCardName”

}

Example of get data process success and return:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetCardName”,

“success”:  true,

“cardName”: “e10-516-00006”

}

Example of get data process failed and return:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetCardName”,

“success”:  false,

“error”: “xxxxxxxx”

}

 

 

**3.2 set hardware FPGA register*******

 

Example of send data command:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetFpgaRegisters”,

*//*  *set hardware FPGA first register offset value*

“register”: 12,

*//* *number groups of register values*

“values”: [ ]

}

Example of get data process success and return:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetFpgaRegisters”,

“success”:  true

}

Example of get data process failed and return:

 

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetFpgaRegisters”,

“success”:  false,

“error”: “xxxxxxxx”

}

 

**3.3 read back hardware FPGA register value******* 

Example of send data command format:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetFpgaRegisters”,

*//*  *get hardware FPGA first register offset value*

“register”: 12,

*//* *readback number of registers*

“size”: 3

}

Example of get data process success and return:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetFpgaRegisters”,

“success”:  true,

*//* *readback register start and end address*

“register”: 12,

*//* *number groups of register, it is shaping*

“values”: [ ]

}

Example of get data process failed and return:

 

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetFpgaRegisters”,

“success”:  false,

“error”: “xxxxxxxx”

}

 

**3.4 save hardware parameters\***

Example of send data command format:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SaveFPGAParams”,

}

Example of get data process success and return 

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SaveFPGAParams”,

“success”:  true

}

Example of get data process failed and return:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SaveFPGAParams”,

“success”:  false,

“error”: “xxxxxxxx”

}

 

 

 

 

**3.5 set led screen width and height pixels**

Example of send data command format:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetScreenSize”,

*//* *screen width pixels*

“width”: 540,

*//* *screen height pixels*

“height”: 960

}

Example of get data process success and return:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetScreenSize”,

“success”:  true

}

Example of get data process failed and return:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetScreenSize”,

“success”:  false,

“error”: “xxxxxxxx”

}

 

**3.6 get led screen width and height pixels**

Example of send data command format:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetScreenSize”

}

Example of get data process success and return:

 

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetScreenSize”,

“success”:  true,

“width”: 540,

“height”: 960

}

Example of get data process failed and return:

 

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetScreenSize”,

“success”:  false,

“error”: “xxxxxxxx”

}

 

 

 

**3.7 get the scanning WI-FI hotspots**

Example of send data command format:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetWifiList”

}

Example of get data process success and return:

 

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetWifiList”,

“success”:  true,

*//* *WIFI structures number group*

“wifiList”:  [ ]

}

Example of get data process failed and return:

 

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetWiFiList”,

“success”:  false,

“error”: “xxxxxxxx”

}

 

**3.8 config WI-FI connection**

Example of send data command format:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “ConfigurationWiFi”,		

“ssid”: “xixun”,

“password”: “88888888”

}

Example of get data process success and return:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “ConfigurationWiFi”,

“success”:  true

}

Example of get data process failed and return:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “ConfigurationWiFi”,

“success”:  false,

“error”: “xxxxxxxx”

}

 

**3.9 config the led controller as portable hotspot**

Example of send data command format:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “ConfigurationHotSpot”,	

*//* *hotspot name*

“apName”: “xixun”,

“password”: “88888888”

}

Example of get data process success and return:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “ConfigurationHotSpot”,

“success”:  true

}

Example of get data process failed and return:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “ConfigurationHotSpot”,

“success”:  false,

“error”: “xxxxxxxx”

}

 

 

**3.10 query current using WI-FI or portable hotspot**

Example of send data command format:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “IsPortableHotSpot”

}

Example of get data process success and return:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “IsPortableHotSpot”,

“success”:  true,

*//* current network is Wi-Fi then this character field is not empty, otherwise, it is empty

“wifi”: “xixun”,	

*//**current network is portable hotspot then this character filed is not empty, otherwise,it is empty*

“hotSpots”: “”			

}

Example of get data process failed and return:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “IsPortableHotSpot”,

“success”:  false,

“error”: “xxxxxxxx”

}

 

**3.11 get WIFI connection state**

Example of send data command format:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetWIFIConnectState”

}

Example of get data process success and return:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetWIFIConnectState”,

“success”:  true,

“isConnect”: false,

“ssid”: “”,

“speed”: “”,

“ip”: “”,

“mac”: “”

}

Example of get data process failed and return:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetWIFIConnectState”,

“success”:  false,

“error”: “xxxxxxxx”

}

**3.12 get global APN list \***

Example of send data command format:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetAPNList”,

}

Example of get data process success and return:：

Example of get data process success and return:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetAPNList”,

//APN number groups

/**

 * APN data structure

 * cnName

 * enName

 * network

 * apn

 * user

 * password

 */

“apns”: [ ]

}

Example of get data process failed and return:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetAPNList”,

“success”:  false,

“error”: “xxxxxxxx”

}

 

**3.13 config APN for the SIM card**

Example of send data command format:

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

Example of get data process success and return:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetAPN”,

“success”:  true

}

Example of get data process failed and return:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetAPN”,

“success”:  false,

“error”: “xxxxxxxx”

}

 

 

**3.14 get current APN configuration of SIM card**

Example of send data command format:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetCurrentAPN”,

}

Example of get data process success and return:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetCurrentAPN”,

“success”:  true,

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

Example of get data process failed and return:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetCurrentAPN”,

“success”:  false,

“error”: “xxxxxxxx”

}

 

**3.15 get network state of SIM card**

Example of send data command format:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetSIMStatus”,

}

Example of get data process success and return:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetSIMStatus”,

“success”:  true,

*/\***

 *** *unknown state* 						*0*

 *** *no SIM card*				*1*

 *** *locked, need user**’**s PIN code to unlock*	*2*

 *** *locked, need user**’**s PUK code to unlock*	*3*

 *** *locked, need network PIN code to unlock**4*

 *** *ready*			*5*

 **/*

“state”: 5,

“imsi”: “460016701502167”,

“countryCode”: “cn”,

“phoneNumber”: “+8618516707470”,

“user”: “China Union”,

 */\***

  *** *signal normal*		*0*

  *** *out of service area*	*1*

  *** *emergency call only*	*2*

  ****no power*	*3*

  **/*

“serviceState”: 0,

*/\***

 *** *network type unknown*			*0*

*** *GPRS* 			*1*

 *** *EDGE*			*2*

 *** *UMTS*			*3*

 *** *CDMA, IS95A OR IS95B**4*

 *** *EVDO, revision 0*	*5*

 *** *EVDO  revision A*	*6*

 *** *1xRTT*			*7*

 *** *HSDPA*		*8*

 *** *HSUPA*		*9*

 *** *HSPA*		*10*

 **/*

“networkType”: 10,

*//**roaming or not*

“roaming”: false,

*/\***

 *** *Data connection: active, but no data send or receive 0*

 *** *Data connection:active, receiving data*			*1*

 *** *Data connection: active, sending data*		*2*

 *** *Data connection: active, sending and receiving data*   *3*

 *** *Sleeping state*						*4*

 

 **/*

“dataActivity”: 0,

*/\***

 *** *Data connection: disconnect*		*0*

 *** *Data connection: connecting*	*1*

 *** *Data connection: connected*	*2*

 *** *Data connection: pause*	*3*

 **/*

“dataState”: 0,

“signalStrength”: 20

}

Example of get data process failed and return:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetSIMStatus”,

“success”:  false,

“error”: “xxxxxxxx”

}

 

**3.16 config server address and company ID\***

Example of send data command format:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetOnlineAddr”,

*//* *server address*

“server”: “www.m2mled.net”,

*//* *company ID*

“companyID”: “alahover”

}

Example of get data process succes and return:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetOnlineAddr”,

“success”:  true

}

Example of get data process failed and return:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetOnlineAddr”,

“success”:  false,

“error”: “xxxxxxxx”

}

**3.17 get server address and company ID**

Example of send data command format:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetOnlineAddr”,

}

Example of get data process success and return:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetOnlineAddr”,

“success”:  true,

“server”: “www.m2mled.net”,

“companuID”: “alahover”

}

Example of get data process failed and return:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetOnlineAddr”,

“success”:  false,

“error”: “xxxxxxxx”

}

**3.18 config Realtime server address**

Example of send data command format:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetRealtimeServer”,

*//* *server address*

“server”: “www.m2mled.net”

}

Example of get data process success and return:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetRealtimeServer”,

“success”:  true

}

Example of get data process failed and return:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetRealtimeServer”,

“success”:  false,

“error”: “xxxxxxxx”

}

 

**3.19 get Realtime server address**

Example of send data command format:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetRealtimeServer”,

}

Example of get data process success and return:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetRealtimeServer”,

“success”:  true,

*//* *server address*

“server”: “www.m2mled.net”

}

Example of get data process failed and return:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetRealtimeServer”,

“success”:  false,

“error”: “xxxxxxxx”

}

 

**3.20 brightness setup**

Example of send data command format:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetBrightness”,

“brightness”: 24

}

Example of get data process success and return:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetBrightness”,

“success”:  true

}

Example of get data process failed and return:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetBrightness”,

“success”:  false,

“error”: “xxxxxxxx”

}

 

**3.21 get current brightness**

Example of send data command format:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetBrightness”

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetBrightness”,

“success”:  true,

“brightness”: 24

}

Example of get data process failed and return:：

 

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetBrightness”,

“success”:  false,

“error”: “xxxxxxxx”

}

 

**3.22  auto brightness sensitivity setup**

Example of send data command format:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetBrightnessSensitivity”,

“sensitivity”: 50

}

Example of get data process success and return:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetBrightnessSensitivity”,

“success”:  true,

}

Example of get data process failed and return:

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetBrightnessSensitivity”,

“success”:  false,

“error”: “xxxxxxxx”

}

 

**3.23 get auto brightness sensitivity**

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetBrightnessSensitivity”

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetBrightnessSensitivity”,

“success”:  true,

“sensitivity”: 24

}

Example of get data process failed and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetBrightnessSensitivity”,

“success”:  false,

“error”: “xxxxxxxx”

}

 

**3.24 volume setup**

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetVolume”,

“volume”: 24

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetVolume”,

“success”:  true

}

Example of get data process failed and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetVolume”,

“success”:  false,

“error”: “xxxxxxxx”

}

 

**3.25 get current volume**

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetVolume”

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetVolume”,

“success”:  true,

“volume”: 24

}

Example of get data process failed and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetVolume”,

“success”:  false,

“error”: “xxxxxxxx”

}

 

**3.26 led screen test\***

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “TestScreen”,

“mode”:  0,					*// 0**：* *stop**；* *1**：* *oblique line**；* *2**：* *gray level**; 3:**colors**；**4**：**color grad*

“speed”:  100,

“color”: “#FFFFFFFF”,		

“interval”:  7,				*//* *interval pixels, mode1 true*

“horizonalLine”:  true,		*//* *Horizontal line, mode1 true*

“verticalLine”: true,			*//* *Vertical line, mode1 true*

“slantLine”: true,			*//* *Slash line, modu1 true*

*“runLimit”:0*				*//* *Gray value, mode2 true, 0 is auto test*

“showInfo”: true,				// Show detail information of led control card, mode2 trur

“red”: true,					*//* *Red gray, mode2 true*

“green”: true,				*//* *Green gray, mode2 true*

“blue”: true,				*//* *Blue gray, mode2 true*

“white”: true				*//* *White gray, mode2 true*

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “TestScreen”,

“success”:  true,

}

Example of get data process failed and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “TestScreen”,

“success”:  false,

“error”: “xxxxxxxx”

}

 

**3.27 query software version information**

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “CheckSoftVersions”

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “CheckSoftVersions”,

“success”:  true,

*//* *软件包结构* *software package structure*

“apps”: [ ] 

}

Example of get data process failed and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “CheckSoftVersions”,

“success”:  false,

“error”: “xxxxxxxx”

}

 

**3.28 query hardware version\***

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “CheckHardwareVersions”

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “CheckHardwareVersions”,

“success”:  true,

*//*  *an array of hexadecimal strings* 

“versions”: [  ]

}

Example of get data process failed and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “CheckHardwareVersions”,

“success”:  false,

“error”: “xxxxxxxx”

}

 

**3.29 restart hardware FPGA\***

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “RestartHardware”

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “RestartHardware”,

“success”:  true,

}

Example of get data process failed and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “RestartHardware”,

“success”:  false,

“error”: “xxxxxxxx”

}

 

**3.30 restart Android**

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “RestartAndroid”

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “RestartAndroid”,

“success”:  true

}

Example of get data process failed and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “RestartAndroid”,

“success”:  false,

“error”: “xxxxxxxx”

}

 

**3.31 setup led screen  on/off**

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetScreenOn”,

“on”: true							*// true**：**screen on**；**false**：**screen off*

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetScreenOn”,

“success”:  true

}

Example of get data process failed and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetScreenOn”,

“success”:  false,

“error”: “xxxxxxxx”

}

 

**3.32 get screen state**

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “IsScreenOn”

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “IsScreenOn”,

“success”:  true,

“on”: true							*// true**：**screen on**；* *false**：**screen off*

}

Example of get data process failed and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “IsScreenOn”,

“success”:  false,	

“error”: “xxxxxxxx”

}

 

**3.33 get firmware version**

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetBuildInformation”

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetBuildInformation”,

“success”:  true,

“AndroidVersion”: “4.4.2”

“BrightnessLevel”: 64

“FirmwareVersion”: “SYSolution.E.V1.0.0”

“ScreenResolution”: “540x960”

“HardVersion”: “A10D”

}

Example of get data process failed and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetBuildInformation”,

“success”:  false,	

“error”: “xxxxxxxx”

}

 

**3.34 get installed software names**

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetInstalledPackages”

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetInstalledPackages”,

“success”:  true,

*//* *package name of software installed*

“packageNames”: [ ]

}

Example of get data process failed and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetInstalledPackages”,

“success”:  false,

“error”: “xxxxxxxx”

}

 

**3.35 software update\***

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “UpgradeSoftware”,

“fileName”: “” 

“isCustom”: flase

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “UpgradeSoftware”,

“success”:  true

}

Example of get data process failed and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “UpgradeSoftware”,

“success”:  false,

“error”: “xxxxxxxx”

}

 

 

 

**3.36 uninstall software**

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “UninstallSoftware”,

“packageName”: “xxxxxxx” 

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “UninstallSoftware”,

“success”:  true

}

Example of get data process failed and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “UninstallSoftware”,

“success”:  false,

“error”: “xxxxxxxx”

}

 

**3.37 smart settings start\***

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,	

“_type”: “SmartSettingsStart”,

“moduleWidth”: 32,

“moduleHeight”: 32,

“inputRow”: 2,

“numRGB”: 2,

“decodingType”: 0,

“isChip5041”: false,

“isDoubleColor”: false

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SmartSettingsStart”,

“success”:  true

}

Example of get data process failed and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SmartSettingsStart”,

“success”:  false,

“error”: “xxxxxxxx”

}

 

**3.38 smart settings of turn on led screen command\***

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,	

“_type”: “SmartSettingsCommand”,

“value”: 0x100

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SmartSettingsCommand”,

“success”:  true

}

Example of get data process failed and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SmartSettingsCommand”,

“success”:  false,

“error”: “xxxxxxxx”

}

 

**3.39 setup data polarity**

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,	

“_type”: “SetDataPolarity”，

“polarity”: 0

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetDataPolarity”,

“success”:  true

}

Example of get data process failed and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetDataPolarity”,

“success”:  false,

“error”: “xxxxxxxx”

}

 

**3.40 get data polarity**

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,	

“_type”: “GetDataPolarity”

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetDataPolarity”,

“success”:  true,

“polarity”: 0

}

Example of get data process failed and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetDataPolarity”,

“success”:  false,

“error”: “xxxxxxxx”

}

 

**3.41 setup OE polarity\***

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,	

“_type”: “SetOEPolarity”,

“polarity”: 0

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetOEPolarity”,

“success”:  true

}

Example of get data process failed and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetOEPolarity”,

“success”:  false,

“error”: “xxxxxxxx”

}

 

**3.42 get OE polarity\***

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,	

“_type”: “GetOEPolarity”

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetOEPolarity”,

“success”:  true,

“polarity”: 0

}

Example of get data process failed and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetOEPolarity”,

“success”:  false,

“error”: “xxxxxxxx”

}

 

 

 

**3.43 setup color sequence\***

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,	

“_type”: “SmartSettingsColorChange”,

“colorChange”: 0x213

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SmartSettingsColorChange”,

“success”:  true

}

Example of get data process failed and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SmartSettingsColorChange”,

“success”:  false,

“error”: “xxxxxxxx”

}

 

**3.44 smart settings step5 finished\***

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,	

“_type”: “SmartSettingsDonePage5”,

“lightNumber”: 1,

“lightInterval”: 0

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SmartSettingsDonePage5”,

“success”:  true,

“lineHeight”: 16,

“scanType”: 15

 

}

Example of get data process failed and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SmartSettingsDonePage5”,

“success”:  false,

“error”: “xxxxxxxx”

}

 

**3.45 setup line serials**

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,	

“_type”: “SetLineSerials”,

*//* *顺序点亮的行的序号* *the serial number of rows that light up*

“values”: [ ]

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetLineSerials”,

“success”:  true

}

Example of get data process failed and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetLineSerials”,

“success”:  false,

“error”: “xxxxxxxx”

}

 

**3.46 get scanning type\***

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,	

“_type”: “GetScanType”

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetScanType”,

“success”:  true,

“scanType”: 15

}

Example of get data process failed and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetScanType”,

“success”:  false,

“error”: “xxxxxxxx”

}

 

**3.47 get line height \***

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,	

“_type”: “GetLineHeight”

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetLineHeight”,

“success”:  true,

“lineHeight”: 16

}

Example of get data process failed and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetLineHeight”,

“success”:  false,

“error”: “xxxxxxxx”

}

 

**3.48 smart settings done\***

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,	

“_type”: “SmartSettingsOver”,

*//* *顺序点亮的行列坐标（行* *<< 8 |* *列）**row and column coordinates lit in order (row<<8/column)*

“values”: [ ]

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SmartSettingsOver”,

“success”:  true

}

Example of get data process failed and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SmartSettingsOver”,

“success”:  false,

“error”: “xxxxxxxx”

}

 

**3.49 save smart settings parameters\***

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,	

“_type”: “SmartSettingsShowNormal”,

“normal”: true

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SmartSettingsShowNormal”,

“success”:  true

}

Example of get data process failed and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SmartSettingsShowNormal”,

“success”:  false,

“error”: “xxxxxxxx”

}

 

**3.50 load hardware parameters\***

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,	

“_type”: “LoadConfig”

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “LoadConfig”,

“success”:  true

}

Example of get data process failed and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “LoadConfig”,

“success”:  false,

“error”: “xxxxxxxx”

}

 

**3.51 synchronize hardware version**

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,	

“_type”: “SynchronousHardwareVersion”

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SynchronousHardwareVersion”,

“success”:  true

}

Example of get data process failed and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SynchronousHardwareVersion”,

“success”:  false,

“error”: “xxxxxxxx”

}

 

**3.52 get cascading parameters**

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,	

“_type”: “GetCascade”

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetCascade”,

“success”:  true,

“cascade”:

"{"values":[{"height":128,"index":0,"width":128,"x":0,"y":0},{"height":128,"index":1,"width":128,"x":1,"y":0},{"height":128,"index":2,"width":128,"x":1,"y":1},{"height":128,"index":3,"width":128,"x":0,"y":1}],"notShow":false,"custom":false}"

}

Example of get data process failed and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetCascade”,

“success”:  false,

“error”: “xxxxxxxx”

}

 

**3.53 setup cascade \***

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,	

“_type”: “SetCascade”,

*//* *customized cascade or not*

custom: false,

*// true**：* *main card no link to led screen**；* *false**：* *main card link to led screen directly*

“notShow”: false,

“values”: [

{

*//*  *receiving card position*

“index”: 0,

*//*  *not customized: receiving card horizontal X coordinate**；**customized: receiving card away the pixels on the left side of led screen*

“x”: 0,

*//* *not customized: receiving card horizontal Y coordinate**；**customized: receiving card away the pixels on the top side of led screen*

“y”: 0,

*//*  *receiving card supports width pixels*

“width”: 128,

*//*  *receiving card supports height pixels*

“height”: 128

}

]

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetCascade”,

“success”:  true

}

Example of get data process failed and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetCascade”,

“success”:  false,

“error”: “xxxxxxxx”

}

 

**3.54 setup persistent data\***

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,	

“_type”: “SetPersistentStorage”,

“key”: “ValueKey”,

“value”: “value”

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetPersistentStorage”,

“success”:  true

}

Example of get data process failed and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetPersistentStorage”,

“success”:  false,

}

 

 

**3.55 get persistent data\***

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,	

“_type”: “GetPersistentStorage”,

“key”: “ValueKey”,

“defValue”: “value”

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetPersistentStorage”,

“success”:  true,

“value”: “value”

}

 

**3.56 screen rotate setup\***

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,	

“_type”: “SetScreenRotation”,

“rotation”: 0 // 0：rotate 0 degree；1：rotate 90 degree；2：rotate 180 degree；3：rotate 270 degree

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetScreenRotation”,

“success”:  true

}

 

**3.57 get led screen rotate\***

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,	

“_type”: “GetScreenRotation” 

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetScreenRotation”,

“success”:  true,

“rotation”: 0

}

 

**3.58 setup led control card language (only support Chinese and English languages)**

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,	

“_type”: “SetLanguage”,

“language”: 0		// 0：English； 1： Chinese

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetLanguage”,

“success”:  true

}

 

**3.59 get led control card language (only support Chinese and English languages)**

 

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,	

“_type”: “GetLanguage”,

“language”: 0		// 0：English； 1：中 Chinese

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetLanguage”,

“success”:  true,

“language”: 0

}

 

**3.60 setup led control card time zone**

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,	

“_type”: “SetTimezone”,

“timezone”: “Asia/ShangHai” 

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetTimezone”,

“success”:  true

}

**3.61 get led control card time zone**

 

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,	

“_type”: “GetTimezone” 

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetTimezone”,

“success”:  true, 

“timezone”: “Asia/ShangHai”

}

 

**3.62 upload files** 

Adopt POST method to upload files, Content-type is Multipart/form-data, if upload chunked file then at least need following Part properties:

“FileName”: 	*//* *file name*

“TotalChunk”: 	*//* *total chunk numbers*

“CurrentChunk”:	*//*  *current chunk serial number*

URL of uploading：

“/upload?type=config”			*//* *Upload hardware configuration parameters file*

“/upload?type=hardware”		*//* *Upload hardware update files*

“/upload?type=software”		*//* *Upload software update files*

“/upload?type=normal”			*//**Upload normal temporary files*

“/upload?type=sdcard”			*//* *Upload files to SD card*

If upload success then will return the file name or file absolute path name, if failed then return error. 

 

**3.63 download files**

​	Adopt GET method to download files, URL as following:

“/download?file=logs”			*//* *Check led control card log*

“/download?file=hardware”		*//* *Download FPGA config parameter files*

“/download?file=pathName”		*//* *pathName is the downloading files**’* *relative path name*

​							*//* *For instance: if need download 1.jpg file of material*

​							*//* *Then pathName is : material/1/jpg*

 

**3.64 realtime message setup**

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,	

“_type”: “SetRealtimeMessage” ,

“message”: “realtime message\n123”,	// Note:need switch the message content into bae64 encode

“width”: 0, 	// Window width, 0: defaulted windows width 

“left”: 0,	// Window to the left margin(pixels)

“windowBackground”: 0,	// Window background color

“verticalPos”: 0,			//  Window vertical position,0:top; 1: center; 2:bottom

“horizontalPos”: 0,		// Text stays on the horizontal position,1: left; 1:center;2:right

“fontBackground”: 0,		// Font background color

“fontColor”: 0xFFFF0000,	// Font color

“fontSize”: 24,			// Font size

“lineSpace”: 0,			// When Multiline, line space

“showType”: 0,			// Text display, 0:static; 1: moving left; 2：moving right

“speed”: 20,				// Moving speed(only enable for moving left or right),pixel/second

“moveCount”: 0,			// Moving counts(only enable for moving left or right), 0:Permanent move

“residenceTime”: 0			// Stay time(second),-1: permanent stay

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetRealtimeMessage”,

“success”:  true

​		}

**3.65 clean up topper layer UI** 

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,	

“_type”: “CleanTopUI”

}

Example of get data process success and return:：

{“_type”: “CleanTopUI”,

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

 

“success”:  true

​		}

 

**3.66 push HTML code**

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,	

“_type”: “LoadCodeHTML”,

“code”: “<div>Test</div>”,		// Base64 encode

“charSet”: “UTF-8”				//  only support UTF-8 

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “LoadCodeHTML”,

“success”:  true

​		}

 

**3.67 WIFI switch**

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,	

“_type”: “SetSwitchWiFi”,

“enable”: true

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetSwitchWiFi”,

“success”: true

​		}

 

**3.68 get WIFI switch state**

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,	

“_type”: “GetSwitchWiFi”

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetSwitchWiFi”，

“success”: true,

“enable”: true

​		}

 

 

**3.69 SIM card data switch**

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,	

“_type”: “SetSwitchSimData”,

“enable”: true

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetSwitchSimData”

“success”: true

​		}

 

**3.70 get SIM card data switch state**

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,	

“_type”: “GetSwitchSimData”

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetSwitchSimData” ,

“success”: true,

“enable”: true

​		}

 

**3.71 setup led control card IP(only support Y,L,M90,M91 series control cards)**

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,	

“_type”: “SetEthernet”,

“dhcp”: false,				// IP config type，true：automatically，false：static ip

“ip”: “192.168.8.200”,		// IP address

“gateWay”: “192.168.8.1”,	// gateway

“netMask”: “255.255.255.0”,	// network mask

“dns”: “192.168.8.1”		// DNS

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetEthernet”, 

“success”:  true

​		}

**3.72 get led control card IP**

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,	

“_type”: “GetEthernet”

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetEthernet”, 

“success”:  true, ,

“dhcp”: false,				//IP config type，true：automatically，false：static ip

 

“ip”: “192.168.8.200”,		// IP address

“gateWay”: “192.168.8.1”,	// gateway

“netMask”: “255.255.255.0”,	// network mask

“dns”: “192.168.8.1”		// DNS

​		}

**3.73 setup led control card alias**

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,	

“_type”: “SetCardAlias”,

“alias”: “xixun”			//  need switch to Base64 encode

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetCardAlias” ,

“success”: true

}

**3.74 get led control card alias**

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,	

“_type”: “GetCardAlias”

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetCardAlias” ,

“success”: true,

“alias”: “xixun”

​		}

 

**3.75 config lowest brightess**

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,	

“_type”: “SetMinBrightness”,

“brightness”: 3

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetMinBrightness” ,

“success”: true

}

 

**3.76 get lowest brightness**

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,	

“_type”: “GetMinBrightness”

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetMinBrightness” ,

“success”: true,

“brightness”: 3

}

 

**3.77 config maximum brightness** 

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,	

“_type”: “SetMaxBrightness”,

“brightness”: 50

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetMaxBrightness” ,

“success”: true

}

 

**3.78 get maximum brightness**

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,	

“_type”: “GetMaxBrightness”

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetMaxBrightness” ,

“success”: true,

“brightness”: 50

}

 

**3.79 setup brightness schedule task (refer to the data structure document of adjust brightness task in schedule )**

​		Example of send data command format:：

​		{

​			"_id":"a7c69152faca92a3c58c46512624ef3a",

​			"_type":"SetAutoBrightnessTask",

​			"taskBrightness":{

​				"createDate":"2017-09-23",

​				"createBy":"Joey",

​				"name":"TimingBrightness"，

​				"defaultBrightness":12，

​				"brightness":12，

​				"items":[{

​					"brightness":51,

​					"schedules":[{

​						"timeType":"Range",

​						"startTime":"09:27",

​						"endTime":"17:35",

​						"dateType":"Range",

​						"startDate":"2017-06-30",

​						"endDate":"2019-02-03",

​						"monthFilter":[],

​						"filterType":"Week",

​						"weekFilter":[1,2,3,4,5],				

​					}]

​				}]

​			}

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetAutoBrightnessTask” ,

“success”: true

}

 

**3.80 get brightness task** 

Example of send data command format:：

{

“_id”: “1ae48105179d2649708ea85c154f52e3”,	

“_type”: “GetAutoBrightnessTask”

}

Example of get data process success and return:：

{

​			"_id":"1ae48105179d2649708ea85c154f52e3",

​			"_type":"GetAutoBrightnessTask",

​			"success":true,

​			"taskBrightness":{

​				"createBy":"Joey",

​				"createDate":"2017-09-23",

​				"name":"TimingBrightness",

​				"defaultBrightness":12,

​				"brightness":12,

​				"items":[{

​					"brightness":51，

​					"schedules":[{

​						"timeType":"Range",

​						"startTime":"09:27",

​						"endTime":"17:35",

​						"dateType":"Range",

​						"startDate":"2017-06-30",

​						"endDate":"2019-02-03",

​						"monthFilter":[],

​						"filterType":"Week",

​						"weekFilter":[1,2,3,4,5],

​					}]

​				}]

​			}

​		}

**3.81 setup volume task**

​		Example of send data command format:：

​		{

​			"_id":"a7c69152faca92a3c58c46512624ef3a",

​			"_type":"SetAutoVolumeTask",

​			"taskVolume":{

​				"createDate":"2017-09-23",

​				"createBy":"Joey",

​				"name":"TimingVolume"，

​				"defaultVolume":9，

​				"volume":9，

​				"items":[{

​					"volume":2,

​					"schedules":[{

​						"timeType":"Range",

​						"startTime":"11:27",

​						"endTime":"13:35",

​						"dateType":"Range",

​						"startDate":"2017-06-30",

​						"endDate":"2018-02-03",

​						"monthFilter":[],

​						"filterType":"Week",

​						"weekFilter":[1,2,3,4,5],				

​					}]

​				}]

​			}

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetAutoVolumeTask” ,

“success”: true

}

 

**3.82 get volume task**

Example of send data command format:：

{

“_id”: “1ae48105179d2649708ea85c154f52e3”,	

“_type”: “GetAutoVolumeTask”

}

Example of get data process success and return::

​		{

​			"_id":"1ae48105179d2649708ea85c154f52e3",

​			"_type":"GetAutoVolumeTask",

​			"success":true,

​			"taskVolume":{

​				"createBy":"Joey",

​				"createDate":"2017-09-23",

​				"name":"TimingVolume",

​				"defaultVolume":9,

​				"volume":9,

​				"items":[{

​					"volume":2，

​					"schedules":[{

​						"timeType":"Range",

​						"startTime":"11:27",

​						"endTime":"13:35",

​						"dateType":"Range",

​						"startDate":"2017-06-30",

​						"endDate":"2018-02-03",

​						"monthFilter":[],

​						"filterType":"Week",

​						"weekFilter":[1,2,3,4,5],

​					}]

​				}]

​			}

​		}

 

**3.83 setup screen on/off task**

​		Example of send data command format:：

​		{

​			"_id":"a7c69152faca92a3c58c46512624ef3a",

​			"_type":"SetTimingScreenTask",

​			"screenTask":{

​				"createDate":"2017-09-23",

​				"createBy":"Joey",

​				"name":"TimingScreen"，	

​				"schedules":[{

​					"timeType":"Range",

​					"startTime":"11:27",

​					"endTime":"13:35",

​					"dateType":"Range",

​					"startDate":"2017-06-30",

​					"endDate":"2018-02-03",

​					"monthFilter":[],

​					"filterType":"Week",

​					"weekFilter":[1,2,3,4,5],				

​				}]

​			}

}

Example of get data process success and return:：

{

“_id”: “a7c69152faca92a3c58c46512624ef3a”,

“_type”: “SetTimingScreenTask” ,

“success”: true

}

 

 

**3.84 get screen on/off task**

Example of send data command format:：

{

“_id”: “1ae48105179d2649708ea85c154f52e3”,	

“_type”: “GetTimingScreenTask”

}

Example of get data process success and return::

​		{

​			"_id":"1ae48105179d2649708ea85c154f52e3",

​			"_type":"GetTimingScreenTask",

​			"success":true,

​			"creenTask":{

​				"createBy":"Joey",

​				"createDate":"2017-09-23",

​				"name":"TimingVolume",

​				"schedules":[{

​					"timeType":"Range",

​					"startTime":"11:27",

​					"endTime":"13:35",

​					"dateType":"Range",

​					"startDate":"2017-06-30",

​					"endDate":"2018-02-03",

​					"monthFilter":[],

​					"filterType":"Week",

​					"weekFilter":[1,2,3,4,5],

​				}]

​			}

​		}

 

 

**3.85 setup reboot task** 

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,	

“_type”: “SetTimingReboot”,

“time”: “10:50”

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetTimingReboot” ,

“success”: true

}

 

 

 

**3.86 get reboot task**

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetTimingReboot”

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetTimingReboot”,

“success”:  true,

“time”: “10:50”

}

 

 

 

**3.87 config power relay functions for multifunction bard**

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetRelayFunctions”，

“functions”：0x7FFF	// Represent the relay by position(total 15 relays)

//  1: means uses for led screen power supply

 

// 0: means uses for other functions

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetRelayFunctions”,

“success”:  true,

}

 

**3.88 get power relay function of multifunction baord**

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetRelayFunctions”

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetRelayFunctions”,

“success”:  true,

“functions”: 0x7FFF

}

 

**3.89 non power relay switch(manual switch then cancel other auto control)**

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SwitchRelayNotPower”，

“enable”: true			// true: open；false:close

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SwitchRelayNotPower”,

“success”:  true

}

Example of get data process failed and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SwitchRelayNotPower”,

“success”:  false,	

“error”: “xxxxxxxx”

}

 

 

**3.90 setup temperature control non power relay** 

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetRelayNotPowerTemperature”，

// Power relay close when within temperature range, will open when out of range, if up and low range is same means disable temperature control

“lowerLimit”: 20,		//

“upperLimit”: 60

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetRelayNotPowerTemperature”,

“success”:  true

}

 

 

 

 

**3.91 get non power relay temperature control range**

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetRelayNotPowerTemperature”

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetRelayNotPowerTemperature”,

“success”:  true,

“lowerLimit”: 20,

“upperLimit”: 60

}

 

**3.92 get file lists of prefabricated materials**

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetMaterialList”，

“path”：“”			// relative path

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetMaterialList”,

“success”:  true，

“pathnames”：[]			// “-;1.jpg”: ‘-’stands for file, file name is 1.jpg

 

​						// “d;pic”：‘d’ stands for directory, directory name is pic

}

 

 

 

 

 

**3.93 setup emergency message**

Example of send data command format:：

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

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetEmergencyText”,

“success”:  true

}

Example of get data process failed and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “SetEmergencyText”,

“success”:  false,	

“error”: “xxxxxxxx”

}

 

**3.94 get emergency message**

Example of send data command format:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetEmergencyText”

}

Example of get data process success and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetEmergencyText”,

“success”:  true，

“text”: “help”,			//  use Base 64 encode

“margin”: 0,				

“color”: 0xFFFF0000,

“background”: 0xFF000000,

“show”: 150,

“hide”: 100,

“center”:true

}

Example of get data process failed and return:：

{

“_id”: “98e8d3cd47fad6ce8e3f7b8d42cb4d9b”,

“_type”: “GetEmergencyText”,

“success”:  false,	

“error”: “xxxxxxxx”

}

 

 