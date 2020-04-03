[TOC]

# Upload Webpage via Xwalk

## 1、xwalk brief introduction

**First, install xwalk for led controller, xwalk is a browser support html5 , using crosswalk kernal. Compare to top web layer, xwalk support html5. 

## 2、xwalk protocol

### 2.1、run xwalk

```json
{ 
	"type": "startActivity", 
	"apk": "com.xixun.xy.xwalk" 
}
```

### 2.2、Upload webpage via Xwalk

****Must use** **《start xwalk》 **command to run xwalk at first then can continue to use xwalk uploading webpage. If persistent is true then no need call《start xwalk》 command next time, controller will auto upload last url after reboot; if persistent is false then need call《start xwalk》**command again to upload webpage.** 

**（TIPS: do not add some codes which needs operate by mouse like alert in js, will make controller stuck**

**solemnly declare: Do not use video tag in webpage or the display will stuck after running  a certain long time！）** 

```json
{ 
	"type": "callXwalkFn", 
	"fn": "loadUrl", 
	"arg": { 
		"url":"http://192.168.8.99:808/score.html", 
		"backupUrl":"file:///mnt/sdcard/res/backup.html",*//backup address will load this address when no network,（if not persistant then can omit this url, if url needs port 80, like http://www.codingke.com:80/v/1926-lesson-228-course）
		"persistent": true,  *//persistent, will re-upload url after reboot * 
		"extra":{ 			*//extra data(can omit it), its value can be random type, get its value by window.$extra in web page* 
            "a":1, 
            "b": true,
            "c":"abc"
		} 
	} 
}
```

### 2.3、Invoke js method in web page loaded by xwalk

```json
{ 
    "type": "callXwalkFn", 
    "fn": "callFnInLoaded", 
	"arg": { 
        "fn": "changeText",						*//this parameter is the data of introduce fn, can be random type* 
		"arg": { 
            "id":"m2", 
            "content": "/<b>data/</b> in m2"
		} 
	} 
}
```

### 2.4、Set background

```json
{ 
    "type": "callXwalkFn", 
    "fn": "setBackgroundColor", 
    "arg":"#666666" 
}
```

**Attention: loaded web page at this moment should be defined showHtml method already**

## 3、Built-in JS method for Xwalk web page

```javascript
 1. $card.getScreenWidth() //get screen width pixels set in easyboard
    2. $card.getScreenHeight() //get screen height pixels set in easyboard
    3. $card.getDeviceWidth() //get device screen width
    4. $card.getDeviceHeight() //get devie screen height
    5. $card.getCardId() //get terminal serial id
```

