please refer to following procedures when using UDP broadcast to detect controller: 

1、create UDP socket；

2、socket sending broadcast：

broadcast address255.255.255.255，port22222

broadcast data format JSON，content：

{"action":"getInfo"}

3、will receive controller answer message after sending broadcast from socket ,message content：{"cardId":"y10-116-01576",
//serial id

"brightness":255, //brightness

"id":"01C3D4K0YFCFRZPGSZT5VXQHSS", //omit

"androidVersion":"4.0.3", //android system version

"starterPort":3000, //starter application's port

"height":32, //screen height pixels

"androidWidth":1280, //android system resolution

"width":64, //screen width pixels

"name":"ABC", //controller alias name

"versionName":"starter164", //starter version number

"androidHeight":476, //android system resolution

"version":164} //starter version code

can get controller IP address by communication's socket API 
