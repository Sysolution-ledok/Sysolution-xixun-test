#  二次开发常见问题解决办法

Questions and Answers during customized development



[TOC]

### 1，使用xixunplayer下发节目，返回成功，屏幕没有变化。

send program via xixunplayer, return success but screen no display

[tutorial video of send program](file:///D:/zdemo/文档/www)

please refer to xixunPlayer programJSON document](https://gitee.com/sysolution/xixun-test/tree/master/xixunPlayer节目JSON说明文档)for detailed parameters instructions. 

there is an very important non required parameter in this interface：**notificationURL**

A callback function address for post is necessary, post method, receive json parameter. 

following is java example:

这里需要给一个post回调函数的地址，post方法，接收json参数。下面是java示例

![image-getJson](../pictures/Secondarydevelopment3)

it can transfer the download progress to the front-end via ajax asynchronous request, the function will also be needed for the interface of getting sensor data. By printing out the download progress, you can more effectively locate whether there are errors in the sent JSON. If download progress report 100% twice means download the resource success, program will be display, but if led display still keep blank, which means wrong resources format or too high resolution. Normally the maximum resolution for image is 1280x512, 320-720p video. 

Notes: support video format 3GP and MP4, please choose Divx, Xvid, AVC/H.264 encoding for MP4, other encoding formats will create error!Please convert the video source file into proper resolution, or into standard 320p~720p, if video width resolution exceed 1280 or higher than 1080 will create error! Player only suport RBG(not CMYK) image.

通过ajax异步请求可将下载进度传递到前端，在获取传感器数据的接口中同样会使用到该函数。通过打印出来的下载进度，可以更有效的定位到发送的json是否有错误。如果下载进度报了两次100，证明资源下载成功，节目会开始播放，如果屏幕黑屏，可能是资源的格式不支持或是资源分辨率过高。一般最大支持1280*512的图片，视频推荐720p以下的清晰度。**注意：视频仅支持3GP，MP4。其中MP4编码请优先使用Divx，Xvid，AVC/H.264。其他编码格式可能导致播放出错！请将视频尺寸转换为需要播放的尺寸，或使用常用比例的视频（320p~720p)。若视频宽大于1280或高大于1080将导致播放出错！图片仅支持色彩模式为RGB模式，CMYK模式将导致播放黑屏，如播放不出来请将图片色彩模式转换为RGB模式（需photoshop等专业图像处理软件）**



### 2，回调函数返回MD5错误 callback function return MD5 error

please check the source.size and program.totalSize properties in program json and compare with the real file size, if it is different then will cause MD5 error. if size and totalSize all correct, then please try to clear up the data of player and resend. 

检查节目json里source.size和program.totalSize这两个属性与实际文件大小不符会导致md5错误，如果size和totalSize都没错，那可以将播放器里面的数据清空一下 重新发送



### 3，截屏正常显示但是屏实际是黑屏screenshot correct but led display keep blank



（1）先检查亮度，如果亮度没有问题就打开EasyBoard，点击屏幕测试，点击测试看是否出现斜线，如果出现说明屏幕没有问题，先清除节目然后在重新发节目，如屏幕没有斜线，检查排线和主卡到接收卡的网线. 

3.1 check led display brightness, if brightness all good then open Easyboard software and test screen slash lines, if all good means configuration correct, please clear up the program and resend. 

if there is no slash line, please check the network cable between the sending and receiving card and also please check the flat cables. 

（2）CradSystem从5.2.5.3-8开始才支持display5176，如果CradSystem版本低于5.2.5.3-8并且和display5176共存的话，也会导致黑屏。

3.2 Cardsystem 5.2.5.3-8 can work compatible with display 5176, so if cardsystem version lower than 5.2.5.3-8, while display5176 then will cause blank display. You need to update cardsystem version. 

### 4，realtime server report Error: Cannot find module 'source-map'

（1）   一般这个错误常见于用户使用浏览器访问realtime地址，realtime地址不可直接访问

4.1 this error mainly caused by accessing realtime server address via web browser, realtime address can not be visit directly

（2）   给realtime推送命令使用post方法，使用get会报这个错误

4.2 please use Post method to push command to realtime, if use get then will report this error. 

（3）   直接访问realtime中public文件夹下的文件也会报这个错误

4.3 visit the files under public folder in realtime directly will also report this error. 



### 5，截屏导致服务器重连 make screenshot and caused server reconnection

先ping卡的ip看是否能ping通，如有丢包现象，检查网络或者网线是否有问题。注意接口参数并不是截屏的宽高。参数一个是截图的质量，一个是大小。

first ping controller IP address, if lost package, please check network connection or Ethernet cable. 

please note that the interface parameter is not the screenshot width and height pixels, the parameters are screenshot quality and size. 



### 6，要实现直播功能，又可以在线把直播停掉，然后播放视频图片。To realize live broadcast function and also stop live broadcast and display video and image

Xixunplayer播放器会默认检测自己是否在顶层，如果不是在顶层，会把直播软件给覆盖掉导致直播放不出来。所以要找一个于直播软件兼容的xixnunplayer软件，也就是他不会去覆盖掉直播软件。这里推荐使用1036.

xixunplayer will auto detect if it is on the top layer, if not then it will cover other live broadcast application and caused no live broadcast. So need to find a live broadcast application that can compatible with xixunplayer. here, we recommend xixunplayer1036. 



### 7，向控制卡发送指令返回send command to controller and return Error: invalid command

命令不存在，先检查指令是否有错误，常见于conn版本过低导致，请对比二次开发说明文档中的conn版本说明升级相应版本

![image-20201210171301724](../pictures/Secondarydevelopment1)

command not existed, please check command make sure no errors, normally because of lower conn version. please check conn version instructions and update to proper version. 



### 8，显示屏上一开始显示乱码或者别的信息，清除节目接口清除不掉。led display show mistake codes or other information, can not clear up by delete program interface. 

使用卡的ip访问2016端口：ip+2016  (和局域网中的清除顶层UI显示接口一样的效果),或者使用{"type":"clear"}，还是不行就卸载重装播放器，在发送

![image-20201210172254400](../pictures/Secondarydevelopment2)

visit controller ip:2016 port, such as 192.168.0.200:2016 (same effection of clear top layer UI in LAN network) or using {"type":"clear"}, if still not work then please uninstall xixunplayer and reinstall back and send again. 

### 9，发送滚动文字，却没有显示在屏幕上 sending scroll text but no display

首先看一下卡的宽高是于实际屏幕宽高设置的是否一样，如果是一样的就重新设置完断电重启一下，在发送看看。这个情况可能是系统还没有加载宽高。

first of all, please check controller width and height parameters are exactly same with real led display resolution, if not correct please set the width and height pixels for controller again and power reboot for controller, then send again. This error normally caused of wrong resolution. 



### 10，ntp同步问题 NTP sync issue

（1）局域网内的ntp同步，首先在自己电脑上搭建一个本地的ntp服务器(百度有)，搭建完成之后使用w32tm /stripchart /computer:ntp服务器地址，测试ntp服务器是否可用。

10. NTP sync in LAN network, build up a local ntp server in your computer, then using w32tm /stripchart /computer:ntp address to test ntp server work or not. 

（2）有外网的设备进行ntp同步，访问公网的ntp1.aliyun.com。访问不了检查网关与dns服务器是否有限制，或者连接调试线进行adb调试，在设备里面ping阿里云时间服务器。

10.2 NTP sync for internet controller, please visit ntp1.aliyun.com. if can not visit, please check network gateway and DNS server has any limitations, or plug debug cable in controller and then using adb debug, ping aliyun ntp server in controller. 




### 11，屏幕的初始亮度是默认的自适应吗，还是一个定值？initial brightness is auto or a fixed value?

  固定的需要自己设置成自适应，另外需要配套的光感探头，我们提供的是选配

if need fixed  initial brightness then need to setup as auto, also needs brightness sensor probe. 


### 12，门被打开 cabinet door opened

  门被打开是可以指显示屏箱体的门,在门上会有一个设备,连到控制卡上一个引脚,当开门时门上的设备会使这个引脚的状态拉低,就是改变状态.这样控制卡检测到这个引脚改变了,就判断门 
 被打开了.进而可以上报到平台进行报警,发邮件等提示用户,这个箱体门被打开了,烟雾报警等其他报警同理

there is a cabinet door sensor to detect the status of cabinet door open or close. door sensor plug to the pin of controller. 

when cabinet door opened, the pin status will go down, which will cause status, when controller detects the change will report to the web portal and remind user to check. 

it is the same principle for other sensors including smoke  and so on. 





### 13，多行文本V2，单行文本V2用7816的播放器播放不出来

multi-line text V2, single line text V2 are not supported by xixunplayer7816

  播放最新的文本信息，要播放器版本1023以上

require to use xixunplayer 1023 and above to support the V2 text .


### 14，realtime server report:Error: y10-xxx-xxxxx does not exist!

  The error means the controller ID is not existed in the cache of realtime server, normally wrong controller ID, please double check the cardId parameter in url. 

这个错误说明卡号并不存在于realtime的缓存中，一般是卡号错误，请仔细核对发送url中的cardId


### 15，realtime report:[Error: y10-xxx-xxxxx not opened!]

  The error means this controller has not being connected, please check controller network settings and realtime server address. 

Please check if the port for realtime server has been opened when controller can not connect to the realtime build up in cloud server. 



这个错误证明卡号为这个的卡还没有连接上，请检查板卡网络，以及realtime地址是否正确

  关于控制卡无法连接到云服务器上部署的realtime

  请检查是否打开了realtime使用的端口
