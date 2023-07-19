[TOC]



# Screen Switch 

### Applied for：turn on or off led display through manual or through schedule

## 1、Screen switch

send message：

```json
{ 
    "type": "callCardService", 
    "fn": "setScreenOpen",
    "arg1": true 							//boolean type，true on ，fasle off
} 
```

controller return message：

```json
{"result":true}
```



## 2、Query led display current status

send message：

```json
{ 
    "type": "callCardService", 
    "fn": "isScreenOpen" 
} 
```

controller return message：

```json
{"result":true}//boolean type ，true on ，fasle off
```



## 3、screen switch by schedule 

send message：

```json
{ 
    "type": "timedScreening",
    "task":{ 
        "_id":"5ba098d0502da61b67899c09",//ALL id should be uuid then can be used
        "name":"7-0.58",//task name
        "schedules":[
            {
                "weekFilter":[//week，0-6，Sunday is 0，Monday is 1，and so on

                ],
                "filterType":"None",//specify Week
                "endTime":"00:58",//screen off time 
                "startTime":"07:00",//screen on time
                "timeType":"Range",//specify Range for time
                "endDate":null,//screen off date
                "startDate":null,//screen on date
                "dateType":"All"//specify Range for date ,All means not soecify date
            }
        ],
        "id":"5ba098d0502da61b67899c09"
    }
} 
```

controller return message：

```json
{
    "_type": "success",
    "_id": "5ba098d0502da61b67899c09",
    "timestamp": 1553847710833
}
```

Note: For CardSystem5263-8 and below, the manual switch screen will clear the task of the Time switch screen.



## 4、query screen switch schedule task 

send message：

```json
{
	"type":"getTimedScreening"
}
```

controller return message：

```json
//when has schedule task：
{
    "_id": "123",
    "_type": "success",
    "task": "{\"createBy\":\"check\",\"createDate\":\"2018-09-18T06:18:56.513Z\",\"name\":\"7-0.58\",\"schedules\":[{\"dateType\":\"All\",\"endDate\":null,\"endTime\":\"00:58\",\"filterType\":\"None\",\"monthFilter\":[],\"startDate\":null,\"startTime\":\"07:00\",\"timeType\":\"Range\",\"weekFilter\":[]}]}"
}
//when no schedule task：
{
    "_id": "123",
    "_type": "success",
    "task": "null"
}
```



## 5、Clear screen switch schedule task

send message：

```json
{ 
    "type": "timedScreening",
    "task":null
} 
```

controller return message：

```json
{
    "_type": "success",
    "_id": "5ba098d0502da61b67899c09",
    "timestamp": 1553847710833
}
```

### 