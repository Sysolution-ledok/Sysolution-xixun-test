[TOC]



# 开关屏

### 应用场景：手动或者定时开启或关闭显示屏

## 1、开关屏幕

发送消息：

```json
{ 
    "type": "callCardService", 
    "fn": "setScreenOpen",
    "arg1": true 							//boolean类型，true为开屏，fasle为关屏
} 
```

设备回复消息：

```json
{"result":true}
```



## 2、查询当前屏幕状态

发送消息：

```json
{ 
    "type": "callCardService", 
    "fn": "isScreenOpen" 
} 
```

设备返回消息：

```json
{"result":true}//boolean类型，true为开屏，fasle为关屏
```



## 3、定时开关屏

发送消息：

```json
{ 
    "type": "timedScreening",
    "task":{ 
        "_id":"5ba098d0502da61b67899c09",//所有id为uuid即可
        "name":"7-0.58",//任务名
        "schedules":[
            {
                "weekFilter":[//星期，0-6，周日为0，周一为1，以此类推

                ],
                "filterType":"None",//星期限定为Week
                "endTime":"00:58",//关屏时间
                "startTime":"07:00",//开屏时间
                "timeType":"Range",//时间限定为Range
                "endDate":null,//关屏日期
                "startDate":null,//开屏日期
                "dateType":"All"//日期限定为Range,All不限定日期
            }
        ],
        "id":"5ba098d0502da61b67899c09"
    }
} 
```

设备回复消息：

```json
{
    "_type": "success",
    "_id": "5ba098d0502da61b67899c09",
    "timestamp": 1553847710833
}
```

注：CardSystem5263-8以下版本，手动开关屏会将定时开关屏任务清除。



## 4、查询定时开关屏任务

发送消息：

```json
{
	"type":"getTimedScreening"
}
```

设备返回消息：

```json
//有定时的时候：
{
    "_id": "123",
    "_type": "success",
    "task": "{\"createBy\":\"check\",\"createDate\":\"2018-09-18T06:18:56.513Z\",\"name\":\"7-0.58\",\"schedules\":[{\"dateType\":\"All\",\"endDate\":null,\"endTime\":\"00:58\",\"filterType\":\"None\",\"monthFilter\":[],\"startDate\":null,\"startTime\":\"07:00\",\"timeType\":\"Range\",\"weekFilter\":[]}]}"
}
//无定时的时候：
{
    "_id": "123",
    "_type": "success",
    "task": "null"
}
```



## 5、清除定时开关屏任务

发送消息：

```json
{ 
    "type": "timedScreening",
    "task":null
} 
```

设备返回消息：

```json
{
    "_type": "success",
    "_id": "5ba098d0502da61b67899c09",
    "timestamp": 1553847710833
}
```

### 