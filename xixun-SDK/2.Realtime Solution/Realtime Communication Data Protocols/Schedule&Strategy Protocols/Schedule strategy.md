[TOC]

# Schedule Strategy

## 1、Brief introduction

This protocols mainly provide some automatical interfaces for screen switch schedule and brightness schedule

## 2、Interfaces

### 2.1、brightness schedule, brightness will auto switch to certain value according to schedule time(conn10.0.5T or above)

interface JSON format, example：

```json
{ 
    "type": "timedBrightness",
    "task":{
        "_id":"591d519f5e3f190f697aaf18",
        "defaultBrightness":6,
        "name":"Timing Brightness",
        "_company":"alahover",
        "_department":"539eaaedb6e1232a1566d9c2",
        "_role":"539eaaedb6e1232a1566d9c3",
        "_user":"Emily2",
        "__v":0,
        "items":[
            {
                "brightness":32,
                "_id":"591d519f5e3f190f697aaf1a",
                "schedules":[
                    {
                        "dateType":"All",
                        "startDate":null,
                        "endDate":null,
                        "timeType":"Range",
                        "startTime":"08:30",
                        "endTime":"18:00",
                        "filterType":"None",
                        "weekFilter":[

                        ],
                        "monthFilter":[

                        ],
                        "lng":"en"
                    }
                ],
                "id":"591d519f5e3f190f697aaf1a"
            }
        ],
        "dateCreated":"2017-05-18T07:47:43.590Z",
        "createDate":"2017-05-18T07:47:43.590Z",
        "createBy":"Emily2",
        "id":"591d519f5e3f190f697aaf18",
        "lng":"zh-CN"
	}
} 
```

return success data format,example：

```json
{
    "_type": "success",
    "_id": "e3147a0c-d792-48c1-aaec-dfe2cf1e2aea",
    "timestamp": 1553847710833
}
```

### 2.2、Interface of query brightness schedule (conn10.0.5T or above)

interface JSON format, example：

```json
{
	"_id":"123",
	"type":"getTimedBrightness"
}
```

return success data format,example：

```json
{
    "_id": "123",
    "_type": "success",
    "task": "{\"createBy\":\"Emily2\",\"createDate\":\"2017-05-18T07:47:43.590Z\",\"name\":\"Timing Brightness\",\"items\":[{\"schedules\":[{\"dateType\":\"All\",\"endDate\":null,\"endTime\":\"18:00\",\"filterType\":\"None\",\"monthFilter\":[],\"startDate\":null,\"startTime\":\"08:30\",\"timeType\":\"Range\",\"weekFilter\":[]}],\"brightness\":32}],\"defaultBrightness\":6,\"brightness\":32}"
}
```

### 2.3、set screen switch schedule (conn10.0.5T or above)

interface JSON format, example：

```json
{ 
    "type": "timedScreening",
    "task":{
        "_id":"5ba098d0502da61b67899c09",
        "name":"7-0.58",
        "_company":"alahover",
        "_department":"539eaaedb6e1232a1566d9c2",
        "_role":"539eaaedb6e1232a1566d9c3",
        "_user":"check",
        "__v":0,
        "schedules":[
            {
                "lng":"zh-CN",
                "monthFilter":[

                ],
                "weekFilter":[

                ],
                "filterType":"None",
                "endTime":"00:58",
                "startTime":"07:00",
                "timeType":"Range",
                "endDate":null,
                "startDate":null,
                "dateType":"All"
            }
        ],
        "dateCreated":"2018-09-18T06:18:56.513Z",
        "createDate":"2018-09-18T06:18:56.513Z",
        "createBy":"check",
        "id":"5ba098d0502da61b67899c09",
        "lng":"zh-CN"
    }
} 
```

### 2.4、query screen switch schedule(conn10.0.5T or above)

interface JSON format, example：

```json
{
	"type":"getTimedScreening"
}
```

return data：
no schedule

```json
{
    "_id": "123",
    "_type": "success",
    "task": "null"
}
```

has schedule:

```json
{
    "_id": "123",
    "_type": "success",
    "task": "{\"createBy\":\"check\",\"createDate\":\"2018-09-18T06:18:56.513Z\",\"name\":\"7-0.58\",\"schedules\":[{\"dateType\":\"All\",\"endDate\":null,\"endTime\":\"00:58\",\"filterType\":\"None\",\"monthFilter\":[],\"startDate\":null,\"startTime\":\"07:00\",\"timeType\":\"Range\",\"weekFilter\":[]}]}"
}
```

### 2.5、Interface of Reboot in schedule(conn10.0.5T or above)

controller will restart in specified time per day after invoke this interface, so be cautious. 

if want to delete the shedule, please invoke this interfae and speficied time as empty character string.

interface JSON format, example：

```json
{ 
    "type": "timedReboot", 
    "time":"00:15"
} 
```

return success, example：

```json
{
    "_type": "success",
    "_id": "0c2a0b6b-0426-48b3-a75f-94fda9f0b2b7",
    "timestamp": 1553848422950
}
```

### 2.6 Query restart schedule time(conn10.0.5T or above)

interface JSON format, example：

```json
{ 
    "type": "getTimedReboot"
}
```

return success, example：

```json
{
    "_id": "f8bf5d2b-ecff-42fe-bb98-24289e4fa59b",
    "_type": "success",
    "time": "00:15"
}
```

