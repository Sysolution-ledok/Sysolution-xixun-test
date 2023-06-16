

[TOC]



# Upload top layer webpage

#### Applications: this solution is for upload webpage in the top layer of led screen and will cover other display contents, default is transparent. 

This is fit for simple text, like marquee or simple digitals.  

Note: This solution not support Y70, Y60, Y6m,Y6g



## 1、Upload top layer web page

send message：

```json
{

	"type":"loadUrl",
	"url":"http://www.m2mled.net/ex2015/index_en.html",//url:'file:///mnt/sdcard/test.html, //can be local path
	"persistent": true 				//persisitant，will auto upload url after reboot

}
```

device return message：

```json
{
    "_type": "success",
    "_id": "b2aa241e-c33e-431e-9f0b-1a461b06bf0f",
    "timestamp": 1552296747116
}
```

## 

## 2、Rolling text

send message：

```json
{ 
"type": "invokeBuildInJs", //type
"method": "scrollMarquee", //built in js method
"num": 5 , 				// scroll 5 times, attention type is Number, write down 0 will stop scrolling, write down negative numbers will scroll forever
"html": "<i><b style=\"color:blue;\">this is </b>scroll text </i>", 
"interval":50, 			//step interval, unit is millisecond, attention type is Number
"step":1, 				//step distance, unit is pixel, attention type is Number
"direction": "left",	 /scroll to left, can write down value like left﹑right
"align": "top"			 //show in top, can write down value like top、center、bottom
}
```

device return message：

```json
{
    "_type": "success",
    "_id": "b2aa241e-c33e-431e-9f0b-1a461b06bf0f",
    "timestamp": 1552296747116
}
```

## 

## 3、Clear sign, clear top layer web page content

send message：

```json
{ 
	"type": "clear"
}
```

device return message：

```json
{
    "_type": "success",
    "_id": "b2aa241e-c33e-431e-9f0b-1a461b06bf0f",
    "timestamp": 1552296747116
}
```



