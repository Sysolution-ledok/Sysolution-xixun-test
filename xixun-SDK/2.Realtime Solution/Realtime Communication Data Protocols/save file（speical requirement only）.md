[TOC]



# File save Interfaces

#### Applications：Need to upload web page files to the internal storage of the control card for loading or other special needs, usually not used

## 1、Upload and save files such as HTML and images in string format to SD card

send message：

```json
{ 
    "type": "saveStringFile", 
    "fileName": "img.jpg", 			*//check this* 
    "content": "base64Data", 
    "base64":true
} 
```

device reply message：

```json
{ 
    "type": "saveStringFile", 
    "fileName": "demo.html", *//check this* 
    "content":"<html><body><h1>These html can be saved to sdcard</h1><imgsrc=\"img.jpg\"></body></html>" 				*//you can load file and put it's string here* 
} 
```

### Note: All files uploaded using this protocol will be saved to file:///sdcard/xixun_realtime/ Directory, therefore this interface cannot be used without an SD card.

## 2、Delete files uploaded as strings

send message：

```json
{ 
    "type": "deleteFile", 
    "fileName": "img.jpg", 		*//check this* 
    "deleteAll": true       *//uncomment this if you want to delete all saved files* 
}
```

device reply message：

```json
{
    "_type": "success",
    "_id": "b2aa241e-c33e-431e-9f0b-1a461b06bf0f",
    "timestamp": 1552296747116
}
```

## 

## 3、Download files to SD card (any file such as images, videos, etc.)

send message：

```json
{ 
    "type": "downloadFileToSD", 
    "url": "http://localhost:8080/demo.html", 
    "path": "/201505/download.html"//The saved file path, the actual absolute path is							file:///mnt/sdcard/201505/download.html 
}
```

device reply message：

```json
{
    "_type": "success",
    "_id": "b2aa241e-c33e-431e-9f0b-1a461b06bf0f",
    "timestamp": 1552296747116
}
```



## 4、Delete files on SD

send message：

```json
{ 
    "type": "deleteFileFromSD", 
    "path": "/201505/download.html" 
}
```

device reply message：

```json
{
    "_type": "success",
    "_id": "b2aa241e-c33e-431e-9f0b-1a461b06bf0f",
    "timestamp": 1552296747116
}
```



## 5、Obtain the size of files on the SD card

send message：

```json
{ 
    "type": "getFileLength", 
    "path": "/201505/download.html" 
} 
```

device reply message：

```json
{"length":2560812,"_type":"success"}
```



## 6、Download files to internal storage (any file such as images, videos, etc.)

send message：

```json
{ 
	"type": "downloadFileToLocal", 
	"url": "http://192.168.1.200:8080/demo.html", 
	"path": "/abc/demo.html"//保存后的文件路径，实际绝对路径为file:///data/data/com.xixun.xy.conn/files/local/abc/demo.html 
}
```

device reply message：

```json
{"_type":"success","absolutePath":"/data/data/com.xixun.xy.conn/files/local/abc/demo.html"}
```



## 7、Delete files from internal storage

send message：

```json
{ 
    "type": "deleteFileFromLocal", 
    "path": "/abc" //You can delete the entire directory
}
```

device reply message：

```json
{
    "_type": "success",
    "_id": "b2aa241e-c33e-431e-9f0b-1a461b06bf0f",
    "timestamp": 1552296747116
}
```



## 8、View file size in internal storage

send message：

```json
{ 
	"type": "getLocalFileLength", 
    "path": "/abc/demo.html" 
} 
```

device reply message：

```json
{"length":2560812,"_type":"success"}
```

