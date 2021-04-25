[TOC]

# Android APK Solution

## 1、Solution brief Introduction

Develop own APK is the most flexible way. Some functions need to use the interfaces of Cardsystem (pls check xixun_card_setting.zip )

Preparation：

- At least know one kind of android program language (JAVA、Kotlin、Scala,etc）
- Know basic knowledge of android（Activity，Service，BroadcastReceiver,etc）

## 2、Check led controller android version

### 2.1、download and install Easyboard

请访问https://ledok.cn/download.html，下载并安装LedOK。

！[image-20200227130556267]（../ pictures / android-ledok1.png）

### 2.2、Check led controller android version

运行 ledOK

![image-20200227165156967](../pictures/ android-ledok2.png)
See the details
![image-20200227165237548](../pictures/ android-ledok3.png)

### 2.3、Setup APK android compatible version

Run android development tool, find build.gradle file under project app directory, open this file

![image-20200227165318393](../pictures/ android-ledok4.png)

modify the lowest compatible version, following is the version table

| API level | ***\*initial Android version\**** | ***\*Linux kernel version\**** |
| --------- | --------------------------------- | ------------------------------ |
| 28        | 9                                 |                                |
| 27        | 8.1                               | 4.10                           |
| 26        | 8.0                               | 4.10                           |
| 25        | 7.1                               | 4.4.1                          |
| 24        | 7.0                               | 4.4.1                          |
| 23        | 6.0                               | 3.18.10                        |
| 22        | 5.1                               | 3.16.1                         |
| 21        | 5.0                               | 3.16.1                         |
| 20        | 4.4w                              | 3.10                           |
| 19        | 4.4                               | 3.10                           |
| 18        | 4.3                               | 3.4.0                          |
| 17        | 4.2                               | 3.4.0                          |
| 16        | 4.1                               | 3.0.31                         |
| 15        | 4.0.3                             | 3.0.1                          |
| 14        | 4.0                               | 3.0.1                          |
| 13        | 3.2                               | 2.6.36                         |
| 12        | 3.1                               | 2.6.36                         |
| 11        | 3.0                               | 2.6.36                         |

## 3、If need API provided by Sysolution, Please import xixun_card_setting.jar file

this file is in the same folder.

## 4，将第三方APK安装到Le控制器中
Open ledok, click terminal control, then click Advanced settings, enter password 888, and uninstall xixunplayer first
![image-20200227165237548](../pictures/ android-ledok4.png)
Click APK to upgrade, select APK, click OK and wait for the prompt to upgrade successfully.
