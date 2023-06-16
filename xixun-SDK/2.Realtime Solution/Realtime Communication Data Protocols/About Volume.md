[TOC]



# Volume Interface

Applications：adjust the volume of the controller audio output 

## 1、setup volume

send message：

```json
{ 
    "type": "callCardService", 
    "fn": "setVolume", 
    "arg1": 10 				//Volume value, numerical range 0-15
} 
```

device reply message：

```json
{"result":true}
```

## 

## 2、Query current volume

send message：

```json
{ 
    "type": "callCardService", 
    "fn": "getVolume" 
} 
```

device reply message：

```json
{"result":10}
```

## 

## 3、set volume schedule task （support since conn1064）

send message：

```json
{ 
    "type": "timedVolume",
    "task":{
         "_id":"591d519f5e3f190f697aaf18",    
        "defaultVolume":6,
        "name":"Timing Brightness",
        "items":[
            {
                "volume":15,
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

device reply message：

```json
{
    "_type": "success",
    "_id": "be840400-737b-4127-9b59-2b7d4765875a",
    "timestamp": 1664157525811
}
```

## 

## 4、Get volume schedule task（support since conn1064）

send message：

```json
{	
	"type":"getTimedVolume"
}
```

device reply message：

```json
{
    "task": "{\"createBy\":null,\"createDate\":null,\"defaultVolume\":6,\"items\":[{\"schedules\":[{\"dateType\":\"All\",\"endDate\":null,\"endTime\":\"18:00\",\"filterType\":\"None\",\"monthFilter\":[],\"startDate\":null,\"startTime\":\"08:30\",\"timeType\":\"Range\",\"weekFilter\":[]}],\"volume\":15}],\"name\":\"Timing Brightness\",\"volume\":15}",
    "_type": "success",
    "_id": "832e483b-4525-45e3-9788-32b37bec0575"
}
```

## 