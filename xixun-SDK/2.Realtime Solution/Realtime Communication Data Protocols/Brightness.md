[TOC]



# 亮度相关

#### 应用场景：自动或手动调整显示屏亮度

## 1、设置亮度

发送消息：

```json
{ 
    "type": "callCardService", 				//固定字符串，大小写敏感
    "fn": "setBrightness", 					//固定字符串，大小写敏感
    "arg1": 6 								//要设置的亮度值，int整型，数值范围1-255
}
```

设备回复消息：

```json
//成功
{"result":true}
//失败
{"result":false}//失败原因通常为设备当前设定的最低亮度值高于发送消息设置的亮度值
```

## 

## 2、查询亮度

发送消息：

```json
{ 
    "type": "callCardService", 			//固定字符串，大小写敏感
    "fn": "getBrightness" 				//固定字符串，大小写敏感
} 
```

设备回复消息：

```json
{"result":6}				//设备当前亮度值
```

## 

## 3、设置自动亮度，亮度根据传感器数据变化自动调整

发送消息：

```json
{ 
    "type": "setAutoBrightness",//固定字符串，大小写敏感
    "sensitivity":"80",		//灵敏度，数值越大越灵敏,int整型，数值范围1-100,推荐范围60-80
    "minBrightness":"1"	//设置亮度下限，当手动设置亮度低于这个值时会导致设置亮度失败
}
```

设备回复消息：

```json
{
    "_type": "success",
    "_id": "cb4eee0b-a8e1-47b7-bac0-a7e61a392e28",
    "timestamp": 1553833293474
}
```

### 注：若要取消自动亮度，可手动调用一次设置亮度接口即可取消自动亮度模式，之前设置的最低亮度值不变



## 4、定时亮度，不同时段切换对应亮度值

发送消息：

```json
{ 
    "type": "timedBrightness",//固定字符串，大小写敏感
    "task":{
        "_id":"591d519f5e3f190f697aaf18",        //所有id为uuid即可
        "defaultBrightness":6,//定时未开始时的亮度
        "name":"Timing Brightness",//任务名
        "items":[
            {
                "brightness":32,//定时开始后的亮度
                "_id":"591d519f5e3f190f697aaf1a",
                "schedules":[
                    {
                        //All不限定日期
                        "dateType":"All",//日期限定为Range
                        "startDate":null,//开始日期
                        "endDate":null,//停止日期
                        "timeType":"Range",//时间限定为Range
                        "startTime":"08:30",//开始时间
                        "endTime":"18:00",//停止时间
                        "filterType":"None",//星期限定为Week
                        "weekFilter":[//星期，0-6，周日为0，周一为1，以此类推

                        ]
                    }
                ],
                "id":"591d519f5e3f190f697aaf1a"
            }
        ],
        "id":"591d519f5e3f190f697aaf18"
	}
} 
```

设备回复消息：

```json
{
    "_type": "success",
    "_id": "e3147a0c-d792-48c1-aaec-dfe2cf1e2aea",
    "timestamp": 1553847710833
}
```

### 注：定时亮度任务只保存一条，下发新定时亮度任务会清除之前下发的定时亮度任务，若要取消定时亮度，可手动调用一次设置亮度接口即可取消定时亮度任务。

## 5、查询定时亮度

发送消息：

```json
{
	"_id":"123",		
	"type":"getTimedBrightness"
}
```

设备回复消息：

```json
//有定时的时候：
{
    "_id": "123",
    "_type": "success",
    "task": "{\"createBy\":\"Emily2\",\"createDate\":\"2017-05-18T07:47:43.590Z\",\"name\":\"Timing Brightness\",\"items\":[{\"schedules\":[{\"dateType\":\"All\",\"endDate\":null,\"endTime\":\"18:00\",\"filterType\":\"None\",\"monthFilter\":[],\"startDate\":null,\"startTime\":\"08:30\",\"timeType\":\"Range\",\"weekFilter\":[]}],\"brightness\":32}],\"defaultBrightness\":6,\"brightness\":32}"		
}
//无定时的时候：
{
    "_id": "123",
    "_type": "success",
    "task": "null"
}
```

