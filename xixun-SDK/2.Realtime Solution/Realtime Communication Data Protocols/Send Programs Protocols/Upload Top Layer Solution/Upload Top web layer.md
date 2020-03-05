[TOC]

# Upload top layer webpage

## 1、Solution brief introduction

This solution is for upload webpage in the top layer of led screen and will cover other display contents, default is transparent. 

This is fit for simple text, like marquee or simple digitals.  

## 2、Interface

### 2.1、Upload top layer web page

**（will display on the top layer and cover others, default is transparent）**

```json
{

	"type":"loadUrl",
	"url":"http://www.m2mled.net/ex2015/index_en.html",//url:'file:///mnt/sdcard/test.html, //can be local path either
	"persistent": true 				//persistent, will re-upload url after reboot 

}
```

### 2.2、Invoke js method in “top layer web page”

**（TIPS: do not add some codes which needs operate by mouse like alert in js, will make controller stuck）**

```json
{ 
	"type": "invokeJs",		//type
	"js":"handleData({id:'m2',content:'how/<br>are/<br>you2222/<br>?',direction:'down'})"
	//invoke opened js method in current web page
} 
```

**precondition: there should be a handleData method (could be any method name) under window object in current web page, example **

```javascript
window.handleData = function(data){ 
	console.log(data) 
}
```

### 2.3、Marquee

```json
{ 
"type": "invokeBuildInJs", //type
"method": "scrollMarquee", //built in js method
"num": 5 , 				// scroll 5 times, attention type is Number, write down 0 will stop scrolling, write down negative numbers will scroll forever
"html": "<i><b style=\"color:blue;\">this is </b>scroll text </i>", 
"interval":50, 			//step interval, unit is millisecond, attention type is Number
"step":1, 				//step distance, unit is pixel, attention type is Number
"direction": "left",	 //scroll to left, can write down value like left﹑right
"align": "top"			 //show in top, can write down value like top、center、bottom
}
```

### 2.4、Clear sign, clear top layer web page content

```json
{ 
	"type": "clear"
}
```

## 3、Built-in JS method for “top layer web page”

```javascript
   $card.getScreenWidth() //get screen width pixel
   $card.getScreenHeight() //get screen height pixel
   $card.saveJSON(key, json) //save JSON data
   $card.retrieveJSON(key) //get JSON data
```

