

Questions and Answers during customized development



[TOC]

### 1，send program via xixunplayer, return success but screen no display

[tutorial video of send program](file:///D:/zdemo/文档/www)

please refer to xixunPlayer programJSON document](https://gitee.com/sysolution/xixun-test/tree/master/xixunPlayer)for detailed parameters instructions. 

there is an very important non required parameter in this interface：**notificationURL**

A callback function address for post is necessary, post method, receive json parameter. 

following is java example:

![image-getJson](../pictures/Secondarydevelopment3)

it can transfer the download progress to the front-end via ajax asynchronous request, the function will also be needed for the interface of getting sensor data. By printing out the download progress, you can more effectively locate whether there are errors in the sent JSON. If download progress report 100% twice means download the resource success, program will be display, but if led display still keep blank, which means wrong resources format or too high resolution. Normally the maximum resolution for image is 1280x512, 320-720p video. 

Notes: support video format 3GP and MP4, please choose Divx, Xvid, AVC/H.264 encoding for MP4, other encoding formats will create error!Please convert the video source file into proper resolution, or into standard 320p~720p, if video width resolution exceed 1280 or higher than 1080 will create error! Player only suport RBG(not CMYK) image.



### 2， callback function return MD5 error

please check the source.size and program.totalSize properties in program json and compare with the real file size, if it is different then will cause MD5 error. if size and totalSize all correct, then please try to clear up the data of player and resend. 



### 3，screenshot correct but led display keep blank



3.1 check led display brightness, if brightness all good then open Easyboard software and test screen slash lines, if all good means configuration correct, please clear up the program and resend. 

if there is no slash line, please check the network cable between the sending and receiving card and also please check the flat cables. 



3.2 Cardsystem 5.2.5.3-8 can work compatible with display 5176, so if cardsystem version lower than 5.2.5.3-8, while display5176 then will cause blank display. You need to update cardsystem version. 

### 4，realtime server report Error: Cannot find module 'source-map'

4.1 this error mainly caused by accessing realtime server address via web browser, realtime address can not be visit directly

4.2 please use Post method to push command to realtime, if use get then will report this error. 

4.3 visit the files under public folder in realtime directly will also report this error. 



### 5， make screenshot and caused server reconnection

first ping controller IP address, if lost package, please check network connection or Ethernet cable. 

please note that the interface parameter is not the screenshot width and height pixels, the parameters are screenshot quality and size. 



### 6，To realize live broadcast function and also stop live broadcast and display video and image

xixunplayer will auto detect if it is on the top layer, if not then it will cover other live broadcast application and caused no live broadcast. So need to find a live broadcast application that can compatible with xixunplayer. here, we recommend xixunplayer1036. 



### 7，send command to controller and return Error: invalid command

![image-20201210171301724](../pictures/Secondarydevelopment1)

command not existed, please check command make sure no errors, normally because of lower conn version. please check conn version instructions and update to proper version. 



### 8，led display show mistake codes or other information, can not clear up by delete program interface. 



![image-20201210172254400](../pictures/Secondarydevelopment2)

visit controller ip:2016 port, such as 192.168.0.200:2016 (same effection of clear top layer UI in LAN network) or using {"type":"clear"}, if still not work then please uninstall xixunplayer and reinstall back and send again. 

### 9，sending scroll text but no display

first of all, please check controller width and height parameters are exactly same with real led display resolution, if not correct please set the width and height pixels for controller again and power reboot for controller, then send again. This error normally caused of wrong resolution. 



### 10，NTP sync issue



10. 1 NTP sync in LAN network, build up a local ntp server in your computer, then using w32tm /stripchart /computer:ntp address to test ntp server work or not. 



10.2 NTP sync for internet controller, please visit ntp1.aliyun.com. if can not visit, please check network gateway and DNS server has any limitations, or plug debug cable in controller and then using adb debug, ping aliyun ntp server in controller. 




### 11，initial brightness is auto or a fixed value?

if need fixed  initial brightness then need to setup as auto, also needs brightness sensor probe. 


### 12， cabinet door opened

there is a cabinet door sensor to detect the status of cabinet door open or close. door sensor plug to the pin of controller. 

when cabinet door opened, the pin status will go down, which will cause status, when controller detects the change will report to the web portal and remind user to check. 

it is the same principle for other sensors including smoke  and so on. 





### 13，multi-line text V2, single line text V2 are not supported by xixunplayer7816



require to use xixunplayer 1023 and above to support the V2 text .


### 14，realtime server report:Error: y10-xxx-xxxxx does not exist!

  The error means the controller ID is not existed in the cache of realtime server, normally wrong controller ID, please double check the cardId parameter in url. 


### 15，realtime report:[Error: y10-xxx-xxxxx not opened!]

  The error means this controller has not being connected, please check controller network settings and realtime server address. 

Please check if the port for realtime server has been opened when controller can not connect to the realtime build up in cloud server. 


