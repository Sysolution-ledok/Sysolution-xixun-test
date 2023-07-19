[TOC]



# Brightness

#### Applied for：adjust led display brightness level through manual or schedule

## 1、set brightness

send message：

```json
{ 
    "type": "callCardService", 				//Fixed string, case sensitive
    "fn": "setBrightness", 					//Fixed string, case sensitive
    "arg1": 6 								//The brightness value to be set, int integer, with a numerical range of 1-255
}
```

controller return message：

```json
//success
{"result":true}
//failed
{"result":false}//失The reason for the failure is usually that the current minimum brightness value set by the device is higher than the brightness value set by the send message
```

## 

## 2、Query brightness

send message：

```json
{ 
    "type": "callCardService", 			//Fixed string, case sensitive
    "fn": "getBrightness" 				//Fixed string, case sensitive
} 
```

controller return message：

```json
{"result":6}				//controller current brightness level 
```

## 

## 3、set auto brightness, it will auto adjust according to light sensor data

send message：

```json
{ 
    "type": "setAutoBrightness",//Fixed string, case sensitive
    "sensitivity":"80",		//sensitivity，The larger the value, the more sensitive it is. int integer, with a numerical range of 1-100, recommended range of 60-80
    "minBrightness":"1"	//Set the lower limit of brightness. When manually setting the brightness below this value, it will cause the brightness setting to fail
}
```

controller return message：

```json
{
    "_type": "success",
    "_id": "cb4eee0b-a8e1-47b7-bac0-a7e61a392e28",
    "timestamp": 1553833293474
}
```

### Note: To cancel automatic brightness, you can manually call the brightness setting interface once to cancel the automatic brightness mode. The previously minimum brightness value remains unchanged



## 4、brightness schedule, brightness change according to schedule time range 

send message：

```json
{ 
    "type": "timedBrightness",//Fixed string, case sensitive
    "task":{
        "_id":"591d519f5e3f190f697aaf18",        //all id should be uuid then can be used
        "defaultBrightness":6,//default brightness level 
        "name":"Timing Brightness",//task name
        "items":[
            {
                "brightness":32,//scheduled brightness level
                "_id":"591d519f5e3f190f697aaf1a",
                "schedules":[
                    {
                        //All means not specify date
                        "dateType":"All",//specify Range for date
                        "startDate":null,//start date
                        "endDate":null,//end date
                        "timeType":"Range",//specify Range for time
                        "startTime":"08:30",//start time
                        "endTime":"18:00",//end time
                        "filterType":"None",//specify Week
                        "weekFilter":[//week，0-6，Sunday is 0，Monday is 1, and so on

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

controller return message：

```json
{
    "_type": "success",
    "_id": "e3147a0c-d792-48c1-aaec-dfe2cf1e2aea",
    "timestamp": 1553847710833
}
```

### Note: Only one scheduled brightness task is saved. Issuing a new scheduled brightness task will clear the previously issued scheduled brightness task. To cancel the scheduled brightness task, you can manually call the brightness setting interface once to cancel it.

## 5、Query brightness schedule 

send message：

```json
{
	"_id":"123",		
	"type":"getTimedBrightness"
}
```

controller return message：

```json
//when has schedule：
{
    "_id": "123",
    "_type": "success",
    "task": "{\"createBy\":\"Emily2\",\"createDate\":\"2017-05-18T07:47:43.590Z\",\"name\":\"Timing Brightness\",\"items\":[{\"schedules\":[{\"dateType\":\"All\",\"endDate\":null,\"endTime\":\"18:00\",\"filterType\":\"None\",\"monthFilter\":[],\"startDate\":null,\"startTime\":\"08:30\",\"timeType\":\"Range\",\"weekFilter\":[]}],\"brightness\":32}],\"defaultBrightness\":6,\"brightness\":32}"		
}
//when no schedule：
{
    "_id": "123",
    "_type": "success",
    "task": "null"
}
```

