

[TOC]



# Play stream media

#### Application Scenario: Play live

## 1,Play stream media (support rtmp, rtsp protocol, please install live.apk first)

Send a message:

```json
{
    "type":"callLiveService",
    "_type":"StartLiveVideo",
    "url":"rtmp://live.hkstv.hk.lxdns.com/live/hks" //stream media address
    "width":400,
    "height":300
}
```

Device reply message:

```json
{
    "_type": "success",
    "_id": "b2aa241e-c33e-431e-9f0b-1a461b06bf0f",
    "timestamp": 1552296747116
}
```

## 

## 2,Stop playing stream media

Send a message:

```json
{
    "type":"callLiveService",
    "_type":"StopLiveVideo"    
}
```

Device reply message:

```json
{
    "_type": "success",
    "_id": "b2aa241e-c33e-431e-9f0b-1a461b06bf0f",
    "timestamp": 1552296747116
}
```
