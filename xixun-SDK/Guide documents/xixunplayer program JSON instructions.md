To explain necessary properties of video, image, Flash, single/mutil line text, digital clock, countdown and weather forecast materials supported by xixunplayer, please refer to following content:

 

Recommend to retain the properties not explained in this document, please ignore the properties not quoted in this document. 

{

​	//realtime interface command type，to note xixunplayer to display information, content is fixed,case sensitivity

​    "type":"commandXixunPlayer",

​	//command data

​    "command":{

​		//xixunplayer command type，to display program, content is fixed,case sensitivity        "_type":"PlayXixunTask",

​		//id must has irrepeat content

​        "id":"3be5e443-d025-4f8d-b708-62ac89c5b5fe", 

​		//preDownloadURL property very important, xixunplayer will connect preDownloadURL and source id property in program through character string to constitute a valid //http download link. If preDownloadURL property not correct then can not download the image or video file. 

 

​		//TIPS：if not use preDownloadURL+id as url to download file, then can add url property in source ofVideo、Image、Flash materials to specify the download path.

​        "preDownloadURL":"https://m2mled.net/file/download?id=",

​		//notificationURL property will be used to note customer server of program download process. If not set this property then customer will has no idea of download status. 

​		//data format of download process, please refer to protocolC document

​        "notificationURL":"",

​		//program task data

​        "task":{

​			//_id must has irrepeat content

​            "_id":"55f5b637-a529-4807-8063-deeb3c12f9ab",

​			//program name

​            "name":"demo",

​			// belonging department, can be null or empty character string

​            "_department":null,

​			//a task contains more than one programs, each program corresponds one item, play rules sorted by time first, if time same then sort by priority property value from small to large (value small display first)

​            "items":[

​                {

​					//_id must has irrepeat content

​                    "_id":"0d10f114-b93d-4eb7-a1a7-60311eeab6b2",

​					//program data

​                    "_program":{

​						//_id must has irrepeat content

​                        "_id":"5c909eca4477c9247940613b",

​						//cumulative sum of each material’s size property in current programs’ sources array

​                        "totalSize":14545722,

​						//program name

​                        "name":"name",

​						//program window width and height

​                        "width":300,

​                        "height":240,

​						//company id，not important, can be randomly if not use AIPS platform

​                        "_company":"alahover",

​						//department id，not important, can be randomly if not use AIPS platform

​                        "_department":"539eaaedb6e1232a1566d9c2",

​						// role id，not important, can be randomly if not use AIPS platform

 

​                        "_role":"539eaaedb6e1232a1566d9c3",

​						//user，not important, can be randomly if not use AIPS platform

​                        "_user":"yzd",

​						//program version type,default 0, no need modify, will be modified by xixunplayer 

​                        "__v":0,

​						//layer is the time axis for program editing in AIPS platform, for play content in layers, can preview effect in AIPS platform

​                        "layers":[

​                            {

​								//some repeat=true，sources of current layer will repeat play according to the longest layer, normally set false

​                                "repeat":false,

​								//material data

​                                "sources":[

​                                    {

​										//video play duration, can ignore, xixunplayer not use this value

​                                        "maxPlayTime":7,

​										//material is video type, must be Video, case sensitivity 

​                                        "_type":"Video",

​										//video file content MD5 value                                        "md5":"eb2415b138b3c2a5984db4d57652f4c9",

​										//video name

​                                        "name":"iphone.MOV",

​										//mp4 file, please use "video/mp4"

​                                        "mime":"video/quicktime",

​										//material file size, unit bytes

​                                        "size":14237682,

​										//6 properties in below can ignore, xixunplayer not use

​                                        "enabled":true,

​                                        "enabledBy":"check",

​                                        "mediaGroup":null,

​                                        "deletedBy":null,

​                                        "deleted":null,

​                                        "newName":null,

​										//platform file store path, can be empty character string

​                                        "oldFilePath":"/home/xixun/upload/alahover/20191/5c6f81b6d17fe59b436f5257",

​										//file extension name, can be empty string

​                                        "fileExt":".MOV",

​										//material id，can not be empty, can not repeat with other id

​                                        "id":"5c6f81b6d17fe59b436f5257",

​										//start time in time axis , unit second

​                                        "playTime":10,

​										//play duration time, unit second

​                                        "timeSpan":7,

​										//top left coordinate of material, unit pixel

​                                        "left":0,

​                                        "top":0,

​										//width and height of material, unit pixel

​                                        "width":150,

​                                        "height":120,

​										//enter and exit effect, please refer to appendix1

​                                        "entryEffect":"None",

​                                        "exitEffect":"None",

​										//duration of enter and exit effect, unit second

​                                        "entryEffectTimeSpan":0,

​                                        "exitEffectTimeSpan":0

​                                    },

​                                    {

​										//material is image type, must be Image, case sensitivity

​                                        "_type":"Image",

​										//file content MD5 value

​                                        "md5":"43103948f8bf4418e54819552cd18b5e",

​										//material name

​                                        "name":"1234.jpg",

​										//GIF use"image/gif"

​                                        "mime":"image/jpeg",

​										//material file size, unit bytes

​                                        "size":3370,

​										//following properties same like that of Video

​                                        "enabled":true,

​                                        "enabledBy":"test1",

​                                        "mediaGroup":null,

​                                        "deletedBy":null,

​                                        "deleted":null,

​                                        "newName":null,

​                                        "oldFilePath":"/home/xixun/upload/alahover/201811/5c122925a62960b53ca66dd9",

​                                        "fileExt":".jpg",

​                                        "id":"5c122925a62960b53ca66dd9",

​                                        "playTime":0,

​                                        "timeSpan":10,

​                                        "left":0,

​                                        "top":0,

​                                        "width":150,

​                                        "height":120,

​                                        "entryEffect":"None",

​                                        "exitEffect":"None",

​                                        "entryEffectTimeSpan":0,

​                                        "exitEffectTimeSpan":0

​                                    },

​                                    {

​										//material id，can not be empty and can not repeat with other id 

​                                        "id":"555d5adc1c0170327ff45b93",

​                                        "name":"001",

​										//material is analog clock, must be AnalogClock,case sensitivity 

​                                        "_type":"AnalogClock",

​										//__TODO to be determined

​                                        "shade":0,

​                                        "opacity":1,

​                                        "showBg":true,

​                                        "bgColor":"#482c51",

​                                        "showHourScale":true,

​                                        "scaleHourColor":"#12229c",

​                                        "showMinScale":true,

​                                        "scaleMinColor":"#3bc73b",

​                                        "scaleStyle":3,

​                                        "showScaleNum":true,

​                                        "pinStyle":1,

​                                        "pinHourColor":"#ff0000",

​                                        "pinMinColor":"#00ffd2",

​                                        "pinSecColor":"#fbca00",

​                                        "showSecond":true,

​										//following properties are the same with those ofVideo

​                                        "playTime":17,

​                                        "timeSpan":10,

​                                        "left":0,

​                                        "top":0,

​                                        "width":150,

​                                        "height":120,

​                                        "entryEffect":"None",

​                                        "exitEffect":"None",

​                                        "entryEffectTimeSpan":0,

​                                        "exitEffectTimeSpan":0

​                                    },

​                                    {

​										//digital clock material id，can be empty, can set value

​                                        "id":"",

​                                        "name":"DigitalClock",

​										//material is digital clock type, must be DigitalClock，case sensitivity

​                                        "_type":"DigitalClock",

​										//content needs to be playe，html format，

​										//placeholder meanings：%y:year,%M:month(digital, case sensitivity),%Mw:month( text, case sensitivity),%d:day,%w:week,%H:hour(24 hour ,case sensitivity),%h:hour (12 hour),%am:morning time or afternoon time,%m:minute,%s:second,

​                                        "html":"%w, %Mw %d %y<br />%h:%m:%s %am",

​										//line height

​                                        "lineHeight":1.4,

​										//show the corresponding time zone of current time

​                                        "timezone":8,

​										//can choose cn，en，pt-BR，fr

​                                        "language":"en",

​										//following properties same with those of Video

​                                        "playTime":27,

​                                        "timeSpan":10,

​                                        "left":0,

​                                        "top":0,

​                                        "width":150,

​                                        "height":120,

​                                        "entryEffect":"None",

​                                        "exitEffect":"None",

​                                        "entryEffectTimeSpan":0,

​                                        "exitEffectTimeSpan":0

​                                    },

​                                    {

​										//countdown material id，can be empty, can set value

​                                        "id":"",

​                                        "name":"Countdown",

​										//material is countdown type, must be Countdown，case sensitivity

​                                        "_type":"Countdown",

​										//line height

​                                        "lineHeight":1.4,

​										//target time

​                                        "time":"2014-5-1 10:30",

​										//show information，html format，place holder meanings：%d:rest days,%h:rest hours,%m:rest minutes,%s:rest seconds

​                                        "html":"Remain<br />%dDay%hHours%mMins%sSecs",

​										//following properties same with those of Video

​                                        "playTime":37,

​                                        "timeSpan":10,

​                                        "left":0,

​                                        "top":0,

​                                        "width":150,

​                                        "height":120,

​                                        "entryEffect":"None",

​                                        "exitEffect":"None",

​                                        "entryEffectTimeSpan":0,

​                                        "exitEffectTimeSpan":0

​                                    },

​                                    {

​										//single line material id，can be empty, can set value

​                                        "id":"",

​                                        "name":"SingleText",

​										//material is single line text type, must be SingleLineText，case sensitivity

​                                        "_type":"SingleLineText",

​										//line height

​                                        "lineHeight":1.4,

​										//text move speed, means text move from begin to end in the specified time, value bigger, speed slower, unit second

​                                        "speed":20,

​										//text content，html format

​                                        "html":"Please write something...",

​										//following properties are the same with those ofVideo

​                                        "playTime":47,

​                                        "timeSpan":10,

​                                        "left":0,

​                                        "top":0,

​                                        "width":150,

​                                        "height":120,

​                                        "entryEffect":"None",

​                                        "exitEffect":"None",

​                                        "entryEffectTimeSpan":0,

​                                        "exitEffectTimeSpan":0

​                                    },

​                                    {

​										//background color，a is transparent value

​                                        "backgroundColor":"rgba(0,0,0,1)",

​										//multi-line text material id，can be empty, can set value

​                                        "id":"",

​                                        "name":"MultiText",

​										//material is multi-line text, must be MultiLineText，case sensitivity

​                                        "_type":"MultiLineText",

​										//turn the page waiting time，unit second

​                                        "speed":10,

​										//text line height

​                                        "lineHeight":1.4,

​										//text center or not

​                                        "center":true,

​										//multi-line content，html format

​                                        "html":"<p>First Page：<br />temperature:%c℃(%f℉)</p>",

​										//following properties are the same with those ofVideo

​                                        "playTime":57,

​                                        "timeSpan":10,

​                                        "left":0,

​                                        "top":0,

​                                        "width":150,

​                                        "height":120,

​                                        "entryEffect":"None",

​                                        "exitEffect":"None",

​                                        "entryEffectTimeSpan":0,

​                                        "exitEffectTimeSpan":0,

​										//following two properties can ignore, xixunplayer not use

​                                        "sUrl":"",

​                                        "sInterval":0

​                                    },

​                                    {

​										//sensor material id，can be empty, can set value

​                                        "id":"",

​                                        "name":"Sensor",

​										//material is sensor data type, must be MultiLineText，case sensitivity

​                                        "_type":"MultiLineText",

​										//turn the page waiting time, unit second

​                                        "speed":10,

​										//text line height

​                                        "lineHeight":1.4,

​										//text center or not

​                                        "center":true,

​										//text content，html format

​                                        "html":"<p>temperature:%c℃(%f℉)</p>",

​										following properties are the same with those ofVideo

​                                        "playTime":67,

​                                        "timeSpan":10,

​                                        "left":0,

​                                        "top":0,

​                                        "width":150,

​                                        "height":120,

​                                        "entryEffect":"None",

​                                        "exitEffect":"None",

​                                        "entryEffectTimeSpan":0,

​                                        "exitEffectTimeSpan":0,

​										//following two properties can ignore, xixunplayer not use

​                                        "sUrl":"",

​                                        "sInterval":0,

​										//background color，a is transparent value

​                                        "backgroundColor":"rgba(0, 0, 0, 0)"

​                                    },

​                                    {

​										//material is Flash type，must be Flash，case sensitivity

​                                        "_type":"Flash",

​										//flash file content MD5 value

​                                        "md5":"f8b875a75a9231c7f9632cd5ce3af485",

​										//material name

​                                        "name":"download.swf",

​										//mime type，flash use this character string

​                                        "mime":"application/x-shockwave-flash",

​										//file size, unit bytes

​                                        "size":304670,

​										//following 6 properties can ignore,xixunplayer not use

​                                        "enabled":true,

​                                        "enabledBy":"yzd",

​                                        "mediaGroup":null,

​                                        "deletedBy":null,

​                                        "deleted":null,

​                                        "newName":null,

​										//platform file store path, can be empty character string 

​                                        "oldFilePath":"/home/xixun/upload/alahover/20165/57708d39342b5da0102f82c6",

​										//file extension name, can not be empty, please set as flash extension name

​                                        "fileExt":".swf",

​										//id must be irrepeat content

​                                        "id":"57708d39342b5da0102f82c6",

​										//following properties are the same with those of Video

​                                        "playTime":77,

​                                        "timeSpan":10,

​                                        "left":0,

​                                        "top":0,

​                                        "width":150,

​                                        "height":120,

​                                        "entryEffect":"None",

​                                        "exitEffect":"None",

​                                        "entryEffectTimeSpan":0,

​                                        "exitEffectTimeSpan":0

​                                    },

​                                    {

​										//weather forecast material id，can be empty, can set value

​                                        "id":"",

​                                        "name":"today",

​										//material is weather forecast type, must be Weather，case sensitivity

​                                        "_type":"Weather",

​										//city name，support almost all cities in China

​                                        "city":"Shanghai",

​										//text line height

​                                        "lineHeight":1,

​										//show content，html format

​										//%{current}:current temperature

​										//%{aqi}:AQI（air quality index）

​										//%{arr.0.date}:date（include realtime temperature）

​										//%{arr.0.type}:weather condition of the day

​										//%{arr.0.high}:maximum temperature of the day

​										//%{arr.0.low}:Minimum temperature of the day

 

​										//%{arr.0.fx}:wind direction of the day

​										//%{arr.0.fl}:wind power of the day

​										//%{arr.0.img-32-32}:weather condition image of the day，format：img-width-height(blue)，img2-width-height（gray）

​										//all yesterday in { } in above means yesterday，arr.0 means today，1 means tomorrow，2 means the day after tomorrow，3 means three days from now，4 means 4 days from now

​                                        "html":"today：%{arr.0.date}<br />realtime temperature：%{current}℃<br />air quality ：%{aqi}<br />%{arr.0.img-32-32}%{arr.0.type}<br />highest:%{arr.0.high}℃ lowest：%{arr.0.low}℃<br />%{arr.0.fx} %{arr.0.fl}",

​										//following properties are the same with those ofVideo

​                                        "playTime":87,

​                                        "timeSpan":10,

​                                        "left":0,

​                                        "top":0,

​                                        "width":150,

​                                        "height":120,

​                                        "entryEffect":"None",

​                                        "exitEffect":"None",

​                                        "entryEffectTimeSpan":0,

​                                        "exitEffectTimeSpan":0,

​										//city code，please refer to appendix 2

​                                        "code":101020100

​                                    }

​                                ]

​                            }

​                        ],

​						//create time, can be empty

​                        "dateCreated":"2019-03-19T07:48:26.984Z"

​                    },

​					//task item priority，smaller value higher priority, multiple programs in the same play time section display by this priority

​                    "priority":0,

​					//play times after get right to display according to priority

​                    "repeatTimes":1,

​					//0 is advance program，2 is simple program					//simple program can only be  Video or Image，can not specify effect，default display coordinate 0，0，material width and height default to be same as program width and height.                    "version":0,

​					//display in schedule time，date, time and week day can be setup in the same time, and logic relationship

​                    "schedules":[

​                {

​					//All no specified date

​                    "dateType":"All",

​                    "startDate":null,

​                    "endDate":null,

​					//All no specified time

​                    "timeType":"All",

​                    "startTime":null,

​                    "endTime":null,

​					//specified work days，display at Monday, Tuesday and Wednesday

​                    "filterType":"Week",

​                    "weekFilter":[

​                        1,

​                        2,

​                        3

​                    ],

​					//no specified month

​                    "monthFilter":[

 

​                    ],

​					//language, can ignore

​                    "lng":"zh-CN"

​                },

​                {

​				//All no specified date

​                    "dateType":"All",

​                    "startDate":null,

​                    "endDate":null,

​					//specified time section, display during 00:00-23：59

​                    "timeType":"Range",

​                    "startTime":"00:00",

​                    "endTime":"23:59",

​					//no specified week day            

​         "filterType":"None",

​                    "weekFilter":[

 

​                    ],

​					//no specified month

​                    "monthFilter":[

 

​                    ],

​                    "lng":"zh-CN"

​                },

​                {

​				//specified display in month

​                    "dateType":"Range",

​                    "startDate":"2019-03-03",

​                    "endDate":"2019-03-26",

​                    "timeType":"All",

​                    "startTime":null,

​                    "endTime":null,

​                    "filterType":"None",

​                    "weekFilter":[

 

​                    ],

​                    "monthFilter":[

 

​                    ],

​                    "lng":"zh-CN"

​                }

​            ]

​                }

​            ],

​			//can specified download program date and time , recommend to set null

​            "executeDate":null,

​			//command id，recommend to set valid character string, not repeat with other id

​            "cmdId":"55f5b637-a529-4807-8063-deeb3c12f9ab"

​        }

​    }

}

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

Appendix 1：effects type：fade out and zoom out can not be as enter in effects, fade in and zoom in cannot be as exit effects.

​	None,		

​	ALPHA_IN,					//fade in 

​	ALPHA_OUT,					//fade out

​	MOVING_LEFT,				//continue moving left

​	MOVING_RIGHT,				//continue moving right

​	MOVING_TOP,					//continue moving up

​	MOVING_BOTTOM,				//continue moving bottom

​	ZOOM_IN,					//zoom in

​	ZOOM_OUT,					//zoom out

​	ZOOM_IN_LEFT_BOTTOM,		//zoom in left bottom

​	ZOOM_IN_LEFT_TOP,			//zoom in left top

​	ZOOM_IN_RIGHT_TOP,			//zoom in right top

​	ZOOM_IN_RIGHT_BOTTOM,		//zoom in right bottom

​	ZOOM_OUT_LEFT_BOTTOM,		//zoom out left bottom

​	ZOOM_OUT_LEFT_TOP,			//zoom out left top

​	ZOOM_OUT_RIGHT_TOP,			//zoom out right top

​	ZOOM_OUT_RIGHT_BOTTOM,		//zoom out right bottom

​	ROTATE_RIGHT,				//rotate right

​	ROTATE_LEFT					//rotate left

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

​	

附录2： 天气预报城市代码对应表

{ code: 101010100, area: '北京', city: '北京', province: '北京' },

​    { code: 101010200, area: '海淀', city: '北京', province: '北京' },

​    { code: 101010300, area: '朝阳', city: '北京', province: '北京' },

​    { code: 101010400, area: '顺义', city: '北京', province: '北京' },

​    { code: 101010500, area: '怀柔', city: '北京', province: '北京' },

​    { code: 101010600, area: '通州', city: '北京', province: '北京' },

​    { code: 101010700, area: '昌平', city: '北京', province: '北京' },

​    { code: 101010800, area: '延庆', city: '北京', province: '北京' },

​    { code: 101010900, area: '丰台', city: '北京', province: '北京' },

​    { code: 101011000, area: '石景山', city: '北京', province: '北京' },

​    { code: 101011100, area: '大兴', city: '北京', province: '北京' },

​    { code: 101011200, area: '房山', city: '北京', province: '北京' },

​    { code: 101011300, area: '密云', city: '北京', province: '北京' },

​    { code: 101011400, area: '门头沟', city: '北京', province: '北京' },

​    { code: 101011500, area: '平谷', city: '北京', province: '北京' },

​    { code: 101020100, area: '上海', city: '上海', province: '上海' },

​    { code: 101020200, area: '闵行', city: '上海', province: '上海' },

​    { code: 101020300, area: '宝山', city: '上海', province: '上海' },

​    { code: 101020500, area: '嘉定', city: '上海', province: '上海' },

​    { code: 101020600, area: '南汇', city: '上海', province: '上海' },

​    { code: 101020700, area: '金山', city: '上海', province: '上海' },

​    { code: 101020800, area: '青浦', city: '上海', province: '上海' },

​    { code: 101020900, area: '松江', city: '上海', province: '上海' },

​    { code: 101021000, area: '奉贤', city: '上海', province: '上海' },

​    { code: 101021100, area: '崇明', city: '上海', province: '上海' },

​    { code: 101021200, area: '徐家汇', city: '上海', province: '上海' },

​    { code: 101021300, area: '浦东', city: '上海', province: '上海' },

​    { code: 101030100, area: '天津', city: '天津', province: '天津' },

​    { code: 101030200, area: '武清', city: '天津', province: '天津' },

​    { code: 101030300, area: '宝坻', city: '天津', province: '天津' },

​    { code: 101030400, area: '东丽', city: '天津', province: '天津' },

​    { code: 101030500, area: '西青', city: '天津', province: '天津' },

​    { code: 101030600, area: '北辰', city: '天津', province: '天津' },

​    { code: 101030700, area: '宁河', city: '天津', province: '天津' },

​    { code: 101030800, area: '汉沽', city: '天津', province: '天津' },

​    { code: 101030900, area: '静海', city: '天津', province: '天津' },

​    { code: 101031000, area: '津南', city: '天津', province: '天津' },

​    { code: 101031100, area: '塘沽', city: '天津', province: '天津' },

​    { code: 101031200, area: '大港', city: '天津', province: '天津' },

​    { code: 101031400, area: '蓟县', city: '天津', province: '天津' },

​    { code: 101040100, area: '重庆', city: '重庆', province: '重庆' },

​    { code: 101040200, area: '永川', city: '重庆', province: '重庆' },

​    { code: 101040300, area: '合川', city: '重庆', province: '重庆' },

​    { code: 101040400, area: '南川', city: '重庆', province: '重庆' },

​    { code: 101040500, area: '江津', city: '重庆', province: '重庆' },

​    { code: 101040600, area: '万盛', city: '重庆', province: '重庆' },

​    { code: 101040700, area: '渝北', city: '重庆', province: '重庆' },

​    { code: 101040800, area: '北碚', city: '重庆', province: '重庆' },

​    { code: 101040900, area: '巴南', city: '重庆', province: '重庆' },

​    { code: 101041000, area: '长寿', city: '重庆', province: '重庆' },

​    { code: 101041100, area: '黔江', city: '重庆', province: '重庆' },

​    { code: 101041300, area: '万州', city: '重庆', province: '重庆' },

​    { code: 101041400, area: '涪陵', city: '重庆', province: '重庆' },

​    { code: 101041500, area: '开县', city: '重庆', province: '重庆' },

​    { code: 101041600, area: '城口', city: '重庆', province: '重庆' },

​    { code: 101041700, area: '云阳', city: '重庆', province: '重庆' },

​    { code: 101041800, area: '巫溪', city: '重庆', province: '重庆' },

​    { code: 101041900, area: '奉节', city: '重庆', province: '重庆' },

​    { code: 101042000, area: '巫山', city: '重庆', province: '重庆' },

​    { code: 101042100, area: '潼南', city: '重庆', province: '重庆' },

​    { code: 101042200, area: '垫江', city: '重庆', province: '重庆' },

​    { code: 101042300, area: '梁平', city: '重庆', province: '重庆' },

​    { code: 101042400, area: '忠县', city: '重庆', province: '重庆' },

​    { code: 101042500, area: '石柱', city: '重庆', province: '重庆' },

​    { code: 101042600, area: '大足', city: '重庆', province: '重庆' },

​    { code: 101042700, area: '荣昌', city: '重庆', province: '重庆' },

​    { code: 101042800, area: '铜梁', city: '重庆', province: '重庆' },

​    { code: 101042900, area: '璧山', city: '重庆', province: '重庆' },

​    { code: 101043000, area: '丰都', city: '重庆', province: '重庆' },

​    { code: 101043100, area: '武隆', city: '重庆', province: '重庆' },

​    { code: 101043200, area: '彭水', city: '重庆', province: '重庆' },

​    { code: 101043300, area: '綦江', city: '重庆', province: '重庆' },

​    { code: 101043400, area: '酉阳', city: '重庆', province: '重庆' },

​    { code: 101043600, area: '秀山', city: '重庆', province: '重庆' },

​    { code: 101050101, area: '哈尔滨', city: '哈尔滨', province: '黑龙江' },

​    { code: 101050102, area: '双城', city: '哈尔滨', province: '黑龙江' },

​    { code: 101050103, area: '呼兰', city: '哈尔滨', province: '黑龙江' },

​    { code: 101050104, area: '阿城', city: '哈尔滨', province: '黑龙江' },

​    { code: 101050105, area: '宾县', city: '哈尔滨', province: '黑龙江' },

​    { code: 101050106, area: '依兰', city: '哈尔滨', province: '黑龙江' },

​    { code: 101050107, area: '巴彦', city: '哈尔滨', province: '黑龙江' },

​    { code: 101050108, area: '通河', city: '哈尔滨', province: '黑龙江' },

​    { code: 101050109, area: '方正', city: '哈尔滨', province: '黑龙江' },

​    { code: 101050110, area: '延寿', city: '哈尔滨', province: '黑龙江' },

​    { code: 101050111, area: '尚志', city: '哈尔滨', province: '黑龙江' },

​    { code: 101050112, area: '五常', city: '哈尔滨', province: '黑龙江' },

​    { code: 101050113, area: '木兰', city: '哈尔滨', province: '黑龙江' },

​    { code: 101050201, area: '齐齐哈尔', city: '齐齐哈尔', province: '黑龙江' },

​    { code: 101050202, area: '讷河', city: '齐齐哈尔', province: '黑龙江' },

​    { code: 101050203, area: '龙江', city: '齐齐哈尔', province: '黑龙江' },

​    { code: 101050204, area: '甘南', city: '齐齐哈尔', province: '黑龙江' },

​    { code: 101050205, area: '富裕', city: '齐齐哈尔', province: '黑龙江' },

​    { code: 101050206, area: '依安', city: '齐齐哈尔', province: '黑龙江' },

​    { code: 101050207, area: '拜泉', city: '齐齐哈尔', province: '黑龙江' },

​    { code: 101050208, area: '克山', city: '齐齐哈尔', province: '黑龙江' },

​    { code: 101050209, area: '克东', city: '齐齐哈尔', province: '黑龙江' },

​    { code: 101050210, area: '泰来', city: '齐齐哈尔', province: '黑龙江' },

​    { code: 101050301, area: '牡丹江', city: '牡丹江', province: '黑龙江' },

​    { code: 101050302, area: '海林', city: '牡丹江', province: '黑龙江' },

​    { code: 101050303, area: '穆棱', city: '牡丹江', province: '黑龙江' },

​    { code: 101050304, area: '林口', city: '牡丹江', province: '黑龙江' },

​    { code: 101050305, area: '绥芬河', city: '牡丹江', province: '黑龙江' },

​    { code: 101050306, area: '宁安', city: '牡丹江', province: '黑龙江' },

​    { code: 101050307, area: '东宁', city: '牡丹江', province: '黑龙江' },

​    { code: 101050401, area: '佳木斯', city: '佳木斯', province: '黑龙江' },

​    { code: 101050402, area: '汤原', city: '佳木斯', province: '黑龙江' },

​    { code: 101050403, area: '抚远', city: '佳木斯', province: '黑龙江' },

​    { code: 101050404, area: '桦川', city: '佳木斯', province: '黑龙江' },

​    { code: 101050405, area: '桦南', city: '佳木斯', province: '黑龙江' },

​    { code: 101050406, area: '同江', city: '佳木斯', province: '黑龙江' },

​    { code: 101050407, area: '富锦', city: '佳木斯', province: '黑龙江' },

​    { code: 101050501, area: '绥化', city: '绥化', province: '黑龙江' },

​    { code: 101050502, area: '肇东', city: '绥化', province: '黑龙江' },

​    { code: 101050503, area: '安达', city: '绥化', province: '黑龙江' },

​    { code: 101050504, area: '海伦', city: '绥化', province: '黑龙江' },

​    { code: 101050505, area: '明水', city: '绥化', province: '黑龙江' },

​    { code: 101050506, area: '望奎', city: '绥化', province: '黑龙江' },

​    { code: 101050507, area: '兰西', city: '绥化', province: '黑龙江' },

​    { code: 101050508, area: '青冈', city: '绥化', province: '黑龙江' },

​    { code: 101050509, area: '庆安', city: '绥化', province: '黑龙江' },

​    { code: 101050510, area: '绥棱', city: '绥化', province: '黑龙江' },

​    { code: 101050601, area: '黑河', city: '黑河', province: '黑龙江' },

​    { code: 101050602, area: '嫩江', city: '黑河', province: '黑龙江' },

​    { code: 101050603, area: '孙吴', city: '黑河', province: '黑龙江' },

​    { code: 101050604, area: '逊克', city: '黑河', province: '黑龙江' },

​    { code: 101050605, area: '五大连池', city: '黑河', province: '黑龙江' },

​    { code: 101050606, area: '北安', city: '黑河', province: '黑龙江' },

​    { code: 101050701, area: '大兴安岭', city: '大兴安岭', province: '黑龙江' },

​    { code: 101050702, area: '塔河', city: '大兴安岭', province: '黑龙江' },

​    { code: 101050703, area: '漠河', city: '大兴安岭', province: '黑龙江' },

​    { code: 101050704, area: '呼玛', city: '大兴安岭', province: '黑龙江' },

​    { code: 101050705, area: '呼中', city: '大兴安岭', province: '黑龙江' },

​    { code: 101050706, area: '新林', city: '大兴安岭', province: '黑龙江' },

​    { code: 101050708, area: '加格达奇', city: '大兴安岭', province: '黑龙江' },

​    { code: 101050801, area: '伊春', city: '伊春', province: '黑龙江' },

​    { code: 101050802, area: '乌伊岭', city: '伊春', province: '黑龙江' },

​    { code: 101050803, area: '五营', city: '伊春', province: '黑龙江' },

​    { code: 101050804, area: '铁力', city: '伊春', province: '黑龙江' },

​    { code: 101050805, area: '嘉荫', city: '伊春', province: '黑龙江' },

​    { code: 101050901, area: '大庆', city: '大庆', province: '黑龙江' },

​    { code: 101050902, area: '林甸', city: '大庆', province: '黑龙江' },

​    { code: 101050903, area: '肇州', city: '大庆', province: '黑龙江' },

​    { code: 101050904, area: '肇源', city: '大庆', province: '黑龙江' },

​    { code: 101050905, area: '杜尔伯特', city: '大庆', province: '黑龙江' },

​    { code: 101051002, area: '七台河', city: '七台河', province: '黑龙江' },

​    { code: 101051003, area: '勃利', city: '七台河', province: '黑龙江' },

​    { code: 101051101, area: '鸡西', city: '鸡西', province: '黑龙江' },

​    { code: 101051102, area: '虎林', city: '鸡西', province: '黑龙江' },

​    { code: 101051103, area: '密山', city: '鸡西', province: '黑龙江' },

​    { code: 101051104, area: '鸡东', city: '鸡西', province: '黑龙江' },

​    { code: 101051201, area: '鹤岗', city: '鹤岗', province: '黑龙江' },

​    { code: 101051202, area: '绥滨', city: '鹤岗', province: '黑龙江' },

​    { code: 101051203, area: '萝北', city: '鹤岗', province: '黑龙江' },

​    { code: 101051301, area: '双鸭山', city: '双鸭山', province: '黑龙江' },

​    { code: 101051302, area: '集贤', city: '双鸭山', province: '黑龙江' },

​    { code: 101051303, area: '宝清', city: '双鸭山', province: '黑龙江' },

​    { code: 101051304, area: '饶河', city: '双鸭山', province: '黑龙江' },

​    { code: 101051305, area: '友谊', city: '双鸭山', province: '黑龙江' },

​    { code: 101060101, area: '长春', city: '长春', province: '吉林' },

​    { code: 101060102, area: '农安', city: '长春', province: '吉林' },

​    { code: 101060103, area: '德惠', city: '长春', province: '吉林' },

​    { code: 101060104, area: '九台', city: '长春', province: '吉林' },

​    { code: 101060105, area: '榆树', city: '长春', province: '吉林' },

​    { code: 101060106, area: '双阳', city: '长春', province: '吉林' },

​    { code: 101060201, area: '吉林', city: '吉林', province: '吉林' },

​    { code: 101060202, area: '舒兰', city: '吉林', province: '吉林' },

​    { code: 101060203, area: '永吉', city: '吉林', province: '吉林' },

​    { code: 101060204, area: '蛟河', city: '吉林', province: '吉林' },

​    { code: 101060205, area: '磐石', city: '吉林', province: '吉林' },

​    { code: 101060206, area: '桦甸', city: '吉林', province: '吉林' },

​    { code: 101060301, area: '延吉', city: '延边', province: '吉林' },

​    { code: 101060302, area: '敦化', city: '延边', province: '吉林' },

​    { code: 101060303, area: '安图', city: '延边', province: '吉林' },

​    { code: 101060304, area: '汪清', city: '延边', province: '吉林' },

​    { code: 101060305, area: '和龙', city: '延边', province: '吉林' },

​    { code: 101060307, area: '龙井', city: '延边', province: '吉林' },

​    { code: 101060308, area: '珲春', city: '延边', province: '吉林' },

​    { code: 101060309, area: '图们', city: '延边', province: '吉林' },

​    { code: 101060401, area: '四平', city: '四平', province: '吉林' },

​    { code: 101060402, area: '双辽', city: '四平', province: '吉林' },

​    { code: 101060403, area: '梨树', city: '四平', province: '吉林' },

​    { code: 101060404, area: '公主岭', city: '四平', province: '吉林' },

​    { code: 101060405, area: '伊通', city: '四平', province: '吉林' },

​    { code: 101060501, area: '通化', city: '通化', province: '吉林' },

​    { code: 101060502, area: '梅河口', city: '通化', province: '吉林' },

​    { code: 101060503, area: '柳河', city: '通化', province: '吉林' },

​    { code: 101060504, area: '辉南', city: '通化', province: '吉林' },

​    { code: 101060505, area: '集安', city: '通化', province: '吉林' },

​    { code: 101060506, area: '通化县', city: '通化', province: '吉林' },

​    { code: 101060601, area: '白城', city: '白城', province: '吉林' },

​    { code: 101060602, area: '洮南', city: '白城', province: '吉林' },

​    { code: 101060603, area: '大安', city: '白城', province: '吉林' },

​    { code: 101060604, area: '镇赉', city: '白城', province: '吉林' },

​    { code: 101060605, area: '通榆', city: '白城', province: '吉林' },

​    { code: 101060701, area: '辽源', city: '辽源', province: '吉林' },

​    { code: 101060702, area: '东丰', city: '辽源', province: '吉林' },

​    { code: 101060703, area: '东辽', city: '辽源', province: '吉林' },

​    { code: 101060801, area: '松原', city: '松原', province: '吉林' },

​    { code: 101060802, area: '乾安', city: '松原', province: '吉林' },

​    { code: 101060803, area: '前郭', city: '松原', province: '吉林' },

​    { code: 101060804, area: '长岭', city: '松原', province: '吉林' },

​    { code: 101060805, area: '扶余', city: '松原', province: '吉林' },

​    { code: 101060901, area: '白山', city: '白山', province: '吉林' },

​    { code: 101060902, area: '靖宇', city: '白山', province: '吉林' },

​    { code: 101060903, area: '临江', city: '白山', province: '吉林' },

​    { code: 101060904, area: '东岗', city: '白山', province: '吉林' },

​    { code: 101060905, area: '长白', city: '白山', province: '吉林' },

​    { code: 101060906, area: '抚松', city: '白山', province: '吉林' },

​    { code: 101060907, area: '江源', city: '白山', province: '吉林' },

​    { code: 101070101, area: '沈阳', city: '沈阳', province: '辽宁' },

​    { code: 101070103, area: '辽中', city: '沈阳', province: '辽宁' },

​    { code: 101070104, area: '康平', city: '沈阳', province: '辽宁' },

​    { code: 101070105, area: '法库', city: '沈阳', province: '辽宁' },

​    { code: 101070106, area: '新民', city: '沈阳', province: '辽宁' },

​    { code: 101070201, area: '大连', city: '大连', province: '辽宁' },

​    { code: 101070202, area: '瓦房店', city: '大连', province: '辽宁' },

​    { code: 101070203, area: '金州', city: '大连', province: '辽宁' },

​    { code: 101070204, area: '普兰店', city: '大连', province: '辽宁' },

​    { code: 101070205, area: '旅顺', city: '大连', province: '辽宁' },

​    { code: 101070206, area: '长海', city: '大连', province: '辽宁' },

​    { code: 101070207, area: '庄河', city: '大连', province: '辽宁' },

​    { code: 101070301, area: '鞍山', city: '鞍山', province: '辽宁' },

​    { code: 101070302, area: '台安', city: '鞍山', province: '辽宁' },

​    { code: 101070303, area: '岫岩', city: '鞍山', province: '辽宁' },

​    { code: 101070304, area: '海城', city: '鞍山', province: '辽宁' },

​    { code: 101070401, area: '抚顺', city: '抚顺', province: '辽宁' },

​    { code: 101070402, area: '新宾', city: '抚顺', province: '辽宁' },

​    { code: 101070403, area: '清原', city: '抚顺', province: '辽宁' },

​    { code: 101070404, area: '章党', city: '抚顺', province: '辽宁' },

​    { code: 101070501, area: '本溪', city: '本溪', province: '辽宁' },

​    { code: 101070502, area: '本溪县', city: '本溪', province: '辽宁' },

​    { code: 101070504, area: '桓仁', city: '本溪', province: '辽宁' },

​    { code: 101070601, area: '丹东', city: '丹东', province: '辽宁' },

​    { code: 101070602, area: '凤城', city: '丹东', province: '辽宁' },

​    { code: 101070603, area: '宽甸', city: '丹东', province: '辽宁' },

​    { code: 101070604, area: '东港', city: '丹东', province: '辽宁' },

​    { code: 101070701, area: '锦州', city: '锦州', province: '辽宁' },

​    { code: 101070702, area: '凌海', city: '锦州', province: '辽宁' },

​    { code: 101070704, area: '义县', city: '锦州', province: '辽宁' },

​    { code: 101070705, area: '黑山', city: '锦州', province: '辽宁' },

​    { code: 101070706, area: '北镇', city: '锦州', province: '辽宁' },

​    { code: 101070801, area: '营口', city: '营口', province: '辽宁' },

​    { code: 101070802, area: '大石桥', city: '营口', province: '辽宁' },

​    { code: 101070803, area: '盖州', city: '营口', province: '辽宁' },

​    { code: 101070901, area: '阜新', city: '阜新', province: '辽宁' },

​    { code: 101070902, area: '彰武', city: '阜新', province: '辽宁' },

​    { code: 101071001, area: '辽阳', city: '辽阳', province: '辽宁' },

​    { code: 101071002, area: '辽阳县', city: '辽阳', province: '辽宁' },

​    { code: 101071003, area: '灯塔', city: '辽阳', province: '辽宁' },

​    { code: 101071004, area: '弓长岭', city: '辽阳', province: '辽宁' },

​    { code: 101071101, area: '铁岭', city: '铁岭', province: '辽宁' },

​    { code: 101071102, area: '开原', city: '铁岭', province: '辽宁' },

​    { code: 101071103, area: '昌图', city: '铁岭', province: '辽宁' },

​    { code: 101071104, area: '西丰', city: '铁岭', province: '辽宁' },

​    { code: 101071105, area: '铁法', city: '铁岭', province: '辽宁' },

​    { code: 101071201, area: '朝阳', city: '朝阳', province: '辽宁' },

​    { code: 101071203, area: '凌源', city: '朝阳', province: '辽宁' },

​    { code: 101071204, area: '喀左', city: '朝阳', province: '辽宁' },

​    { code: 101071205, area: '北票', city: '朝阳', province: '辽宁' },

​    { code: 101071207, area: '建平县', city: '朝阳', province: '辽宁' },

​    { code: 101071301, area: '盘锦', city: '盘锦', province: '辽宁' },

​    { code: 101071302, area: '大洼', city: '盘锦', province: '辽宁' },

​    { code: 101071303, area: '盘山', city: '盘锦', province: '辽宁' },

​    { code: 101071401, area: '葫芦岛', city: '葫芦岛', province: '辽宁' },

​    { code: 101071402, area: '建昌', city: '葫芦岛', province: '辽宁' },

​    { code: 101071403, area: '绥中', city: '葫芦岛', province: '辽宁' },

​    { code: 101071404, area: '兴城', city: '葫芦岛', province: '辽宁' },

​    { code: 101080101, area: '呼和浩特', city: '呼和浩特', province: '内蒙古' },

​    { code: 101080102, area: '土左旗', city: '呼和浩特', province: '内蒙古' },

​    { code: 101080103, area: '托县', city: '呼和浩特', province: '内蒙古' },

​    { code: 101080104, area: '和林', city: '呼和浩特', province: '内蒙古' },

​    { code: 101080105, area: '清水河', city: '呼和浩特', province: '内蒙古' },

​    { code: 101080106, area: '呼市郊区', city: '呼和浩特', province: '内蒙古' },

​    { code: 101080107, area: '武川', city: '呼和浩特', province: '内蒙古' },

​    { code: 101080201, area: '包头', city: '包头', province: '内蒙古' },

​    { code: 101080202, area: '白云鄂博', city: '包头', province: '内蒙古' },

​    { code: 101080203, area: '满都拉', city: '包头', province: '内蒙古' },

​    { code: 101080204, area: '土右旗', city: '包头', province: '内蒙古' },

​    { code: 101080205, area: '固阳', city: '包头', province: '内蒙古' },

​    { code: 101080206, area: '达茂旗', city: '包头', province: '内蒙古' },

​    { code: 101080207, area: '希拉穆仁', city: '包头', province: '内蒙古' },

​    { code: 101080301, area: '乌海', city: '乌海', province: '内蒙古' },

​    { code: 101080401, area: '集宁', city: '乌兰察布', province: '内蒙古' },

​    { code: 101080402, area: '卓资', city: '乌兰察布', province: '内蒙古' },

​    { code: 101080403, area: '化德', city: '乌兰察布', province: '内蒙古' },

​    { code: 101080404, area: '商都', city: '乌兰察布', province: '内蒙古' },

​    { code: 101080406, area: '兴和', city: '乌兰察布', province: '内蒙古' },

​    { code: 101080407, area: '凉城', city: '乌兰察布', province: '内蒙古' },

​    { code: 101080408, area: '察右前旗', city: '乌兰察布', province: '内蒙古' },

​    { code: 101080409, area: '察右中旗', city: '乌兰察布', province: '内蒙古' },

​    { code: 101080410, area: '察右后旗', city: '乌兰察布', province: '内蒙古' },

​    { code: 101080411, area: '四子王旗', city: '乌兰察布', province: '内蒙古' },

​    { code: 101080412, area: '丰镇', city: '乌兰察布', province: '内蒙古' },

​    { code: 101080501, area: '通辽', city: '通辽', province: '内蒙古' },

​    { code: 101080502, area: '舍伯吐', city: '通辽', province: '内蒙古' },

​    { code: 101080503, area: '科左中旗', city: '通辽', province: '内蒙古' },

​    { code: 101080504, area: '科左后旗', city: '通辽', province: '内蒙古' },

​    { code: 101080505, area: '青龙山', city: '通辽', province: '内蒙古' },

​    { code: 101080506, area: '开鲁', city: '通辽', province: '内蒙古' },

​    { code: 101080507, area: '库伦', city: '通辽', province: '内蒙古' },

​    { code: 101080508, area: '奈曼', city: '通辽', province: '内蒙古' },

​    { code: 101080509, area: '扎鲁特', city: '通辽', province: '内蒙古' },

​    { code: 101080510, area: '高力板', city: '兴安盟', province: '内蒙古' },

​    { code: 101080511, area: '巴雅尔吐胡硕', city: '通辽', province: '内蒙古' },

​    { code: 101080601, area: '赤峰', city: '赤峰', province: '内蒙古' },

​    { code: 101080603, area: '阿鲁旗', city: '赤峰', province: '内蒙古' },

​    { code: 101080604, area: '浩尔吐', city: '赤峰', province: '内蒙古' },

​    { code: 101080605, area: '巴林左旗', city: '赤峰', province: '内蒙古' },

​    { code: 101080606, area: '巴林右旗', city: '赤峰', province: '内蒙古' },

​    { code: 101080607, area: '林西', city: '赤峰', province: '内蒙古' },

​    { code: 101080608, area: '克什克腾', city: '赤峰', province: '内蒙古' },

​    { code: 101080609, area: '翁牛特', city: '赤峰', province: '内蒙古' },

​    { code: 101080610, area: '岗子', city: '赤峰', province: '内蒙古' },

​    { code: 101080611, area: '喀喇沁', city: '赤峰', province: '内蒙古' },

​    { code: 101080612, area: '八里罕', city: '赤峰', province: '内蒙古' },

​    { code: 101080613, area: '宁城', city: '赤峰', province: '内蒙古' },

​    { code: 101080614, area: '敖汉', city: '赤峰', province: '内蒙古' },

​    { code: 101080615, area: '宝国吐', city: '赤峰', province: '内蒙古' },

​    { code: 101080701, area: '鄂尔多斯', city: '鄂尔多斯', province: '内蒙古' },

​    { code: 101080703, area: '达拉特', city: '鄂尔多斯', province: '内蒙古' },

​    { code: 101080704, area: '准格尔', city: '鄂尔多斯', province: '内蒙古' },

​    { code: 101080705, area: '鄂前旗', city: '鄂尔多斯', province: '内蒙古' },

​    { code: 101080706, area: '河南', city: '鄂尔多斯', province: '内蒙古' },

​    { code: 101080707, area: '伊克乌素', city: '鄂尔多斯', province: '内蒙古' },

​    { code: 101080708, area: '鄂托克', city: '鄂尔多斯', province: '内蒙古' },

​    { code: 101080709, area: '杭锦旗', city: '鄂尔多斯', province: '内蒙古' },

​    { code: 101080710, area: '乌审旗', city: '鄂尔多斯', province: '内蒙古' },

​    { code: 101080711, area: '伊金霍洛', city: '鄂尔多斯', province: '内蒙古' },

​    { code: 101080712, area: '乌审召', city: '鄂尔多斯', province: '内蒙古' },

​    { code: 101080713, area: '东胜', city: '鄂尔多斯', province: '内蒙古' },

​    { code: 101080801, area: '临河', city: '巴彦淖尔', province: '内蒙古' },

​    { code: 101080802, area: '五原', city: '巴彦淖尔', province: '内蒙古' },

​    { code: 101080803, area: '磴口', city: '巴彦淖尔', province: '内蒙古' },

​    { code: 101080804, area: '乌前旗', city: '巴彦淖尔', province: '内蒙古' },

​    { code: 101080805, area: '大佘太', city: '巴彦淖尔', province: '内蒙古' },

​    { code: 101080806, area: '乌中旗', city: '巴彦淖尔', province: '内蒙古' },

​    { code: 101080807, area: '乌后旗', city: '巴彦淖尔', province: '内蒙古' },

​    { code: 101080808, area: '海力素', city: '巴彦淖尔', province: '内蒙古' },

​    { code: 101080809, area: '那仁宝力格', city: '巴彦淖尔', province: '内蒙古' },

​    { code: 101080810, area: '杭锦后旗', city: '巴彦淖尔', province: '内蒙古' },

​    { code: 101080901, area: '锡林浩特', city: '锡林郭勒', province: '内蒙古' },

​    { code: 101080903, area: '二连浩特', city: '锡林郭勒', province: '内蒙古' },

​    { code: 101080904, area: '阿巴嘎', city: '锡林郭勒', province: '内蒙古' },

​    { code: 101080906, area: '苏左旗', city: '锡林郭勒', province: '内蒙古' },

​    { code: 101080907, area: '苏右旗', city: '锡林郭勒', province: '内蒙古' },

​    { code: 101080908, area: '朱日和', city: '锡林郭勒', province: '内蒙古' },

​    { code: 101080909, area: '东乌旗', city: '锡林郭勒', province: '内蒙古' },

​    { code: 101080910, area: '西乌旗', city: '锡林郭勒', province: '内蒙古' },

​    { code: 101080911, area: '太仆寺', city: '锡林郭勒', province: '内蒙古' },

​    { code: 101080912, area: '镶黄旗', city: '锡林郭勒', province: '内蒙古' },

​    { code: 101080913, area: '正镶白旗', city: '锡林郭勒', province: '内蒙古' },

​    { code: 101080914, area: '正兰旗', city: '锡林郭勒', province: '内蒙古' },

​    { code: 101080915, area: '多伦', city: '锡林郭勒', province: '内蒙古' },

​    { code: 101080916, area: '博克图', city: '锡林郭勒', province: '内蒙古' },

​    { code: 101080917, area: '乌拉盖', city: '锡林郭勒', province: '内蒙古' },

​    { code: 101081000, area: '呼伦贝尔', city: '呼伦贝尔', province: '内蒙古' },

​    { code: 101081001, area: '海拉尔', city: '呼伦贝尔', province: '内蒙古' },

​    { code: 101081002, area: '小二沟', city: '呼伦贝尔', province: '内蒙古' },

​    { code: 101081003, area: '阿荣旗', city: '呼伦贝尔', province: '内蒙古' },

​    { code: 101081004, area: '莫力达瓦', city: '呼伦贝尔', province: '内蒙古' },

​    { code: 101081005, area: '鄂伦春旗', city: '呼伦贝尔', province: '内蒙古' },

​    { code: 101081006, area: '鄂温克旗', city: '呼伦贝尔', province: '内蒙古' },

​    { code: 101081007, area: '陈旗', city: '呼伦贝尔', province: '内蒙古' },

​    { code: 101081008, area: '新左旗', city: '呼伦贝尔', province: '内蒙古' },

​    { code: 101081009, area: '新右旗', city: '呼伦贝尔', province: '内蒙古' },

​    { code: 101081010, area: '满洲里', city: '呼伦贝尔', province: '内蒙古' },

​    { code: 101081011, area: '牙克石', city: '呼伦贝尔', province: '内蒙古' },

​    { code: 101081012, area: '扎兰屯', city: '呼伦贝尔', province: '内蒙古' },

​    { code: 101081014, area: '额尔古纳', city: '呼伦贝尔', province: '内蒙古' },

​    { code: 101081015, area: '根河', city: '呼伦贝尔', province: '内蒙古' },

​    { code: 101081016, area: '图里河', city: '呼伦贝尔', province: '内蒙古' },

​    { code: 101081101, area: '乌兰浩特', city: '兴安盟', province: '内蒙古' },

​    { code: 101081102, area: '阿尔山', city: '兴安盟', province: '内蒙古' },

​    { code: 101081103, area: '科右中旗', city: '兴安盟', province: '内蒙古' },

​    { code: 101081104, area: '胡尔勒', city: '兴安盟', province: '内蒙古' },

​    { code: 101081105, area: '扎赉特', city: '兴安盟', province: '内蒙古' },

​    { code: 101081106, area: '索伦', city: '兴安盟', province: '内蒙古' },

​    { code: 101081107, area: '突泉', city: '兴安盟', province: '内蒙古' },

​    { code: 101081108, area: '霍林郭勒', city: '通辽', province: '内蒙古' },

​    { code: 101081109, area: '科右前旗', city: '兴安盟', province: '内蒙古' },

​    { code: 101081201, area: '阿左旗', city: '阿拉善盟', province: '内蒙古' },

​    { code: 101081202, area: '阿右旗', city: '阿拉善盟', province: '内蒙古' },

​    { code: 101081203, area: '额济纳', city: '阿拉善盟', province: '内蒙古' },

​    { code: 101081204, area: '拐子湖', city: '阿拉善盟', province: '内蒙古' },

​    { code: 101081205, area: '吉兰太', city: '阿拉善盟', province: '内蒙古' },

​    { code: 101081206, area: '锡林高勒', city: '阿拉善盟', province: '内蒙古' },

​    { code: 101081207, area: '头道湖', city: '阿拉善盟', province: '内蒙古' },

​    { code: 101081208, area: '中泉子', city: '阿拉善盟', province: '内蒙古' },

​    { code: 101081209, area: '诺尔公', city: '阿拉善盟', province: '内蒙古' },

​    { code: 101081210, area: '雅布赖', city: '阿拉善盟', province: '内蒙古' },

​    { code: 101081211, area: '乌斯泰', city: '阿拉善盟', province: '内蒙古' },

​    { code: 101081212, area: '孪井滩', city: '阿拉善盟', province: '内蒙古' },

​    { code: 101090101, area: '石家庄', city: '石家庄', province: '河北' },

​    { code: 101090102, area: '井陉', city: '石家庄', province: '河北' },

​    { code: 101090103, area: '正定', city: '石家庄', province: '河北' },

​    { code: 101090104, area: '栾城', city: '石家庄', province: '河北' },

​    { code: 101090105, area: '行唐', city: '石家庄', province: '河北' },

​    { code: 101090106, area: '灵寿', city: '石家庄', province: '河北' },

​    { code: 101090107, area: '高邑', city: '石家庄', province: '河北' },

​    { code: 101090108, area: '深泽', city: '石家庄', province: '河北' },

​    { code: 101090109, area: '赞皇', city: '石家庄', province: '河北' },

​    { code: 101090110, area: '无极', city: '石家庄', province: '河北' },

​    { code: 101090111, area: '平山', city: '石家庄', province: '河北' },

​    { code: 101090112, area: '元氏', city: '石家庄', province: '河北' },

​    { code: 101090113, area: '赵县', city: '石家庄', province: '河北' },

​    { code: 101090114, area: '辛集', city: '石家庄', province: '河北' },

​    { code: 101090115, area: '藁城', city: '石家庄', province: '河北' },

​    { code: 101090116, area: '晋州', city: '石家庄', province: '河北' },

​    { code: 101090117, area: '新乐', city: '石家庄', province: '河北' },

​    { code: 101090118, area: '鹿泉', city: '石家庄', province: '河北' },

​    { code: 101090201, area: '保定', city: '保定', province: '河北' },

​    { code: 101090202, area: '满城', city: '保定', province: '河北' },

​    { code: 101090203, area: '阜平', city: '保定', province: '河北' },

​    { code: 101090204, area: '徐水', city: '保定', province: '河北' },

​    { code: 101090205, area: '唐县', city: '保定', province: '河北' },

​    { code: 101090206, area: '高阳', city: '保定', province: '河北' },

​    { code: 101090207, area: '容城', city: '保定', province: '河北' },

​    { code: 101090209, area: '涞源', city: '保定', province: '河北' },

​    { code: 101090210, area: '望都', city: '保定', province: '河北' },

​    { code: 101090211, area: '安新', city: '保定', province: '河北' },

​    { code: 101090212, area: '易县', city: '保定', province: '河北' },

​    { code: 101090214, area: '曲阳', city: '保定', province: '河北' },

​    { code: 101090215, area: '蠡县', city: '保定', province: '河北' },

​    { code: 101090216, area: '顺平', city: '保定', province: '河北' },

​    { code: 101090217, area: '雄县', city: '保定', province: '河北' },

​    { code: 101090218, area: '涿州', city: '保定', province: '河北' },

​    { code: 101090219, area: '定州', city: '保定', province: '河北' },

​    { code: 101090220, area: '安国', city: '保定', province: '河北' },

​    { code: 101090221, area: '高碑店', city: '保定', province: '河北' },

​    { code: 101090222, area: '涞水', city: '保定', province: '河北' },

​    { code: 101090223, area: '定兴', city: '保定', province: '河北' },

​    { code: 101090224, area: '清苑', city: '保定', province: '河北' },

​    { code: 101090225, area: '博野', city: '保定', province: '河北' },

​    { code: 101090301, area: '张家口', city: '张家口', province: '河北' },

​    { code: 101090302, area: '宣化', city: '张家口', province: '河北' },

​    { code: 101090303, area: '张北', city: '张家口', province: '河北' },

​    { code: 101090304, area: '康保', city: '张家口', province: '河北' },

​    { code: 101090305, area: '沽源', city: '张家口', province: '河北' },

​    { code: 101090306, area: '尚义', city: '张家口', province: '河北' },

​    { code: 101090307, area: '蔚县', city: '张家口', province: '河北' },

​    { code: 101090308, area: '阳原', city: '张家口', province: '河北' },

​    { code: 101090309, area: '怀安', city: '张家口', province: '河北' },

​    { code: 101090310, area: '万全', city: '张家口', province: '河北' },

​    { code: 101090311, area: '怀来', city: '张家口', province: '河北' },

​    { code: 101090312, area: '涿鹿', city: '张家口', province: '河北' },

​    { code: 101090313, area: '赤城', city: '张家口', province: '河北' },

​    { code: 101090314, area: '崇礼', city: '张家口', province: '河北' },

​    { code: 101090402, area: '承德', city: '承德', province: '河北' },

​    { code: 101090403, area: '承德县', city: '承德', province: '河北' },

​    { code: 101090404, area: '兴隆', city: '承德', province: '河北' },

​    { code: 101090405, area: '平泉', city: '承德', province: '河北' },

​    { code: 101090406, area: '滦平', city: '承德', province: '河北' },

​    { code: 101090407, area: '隆化', city: '承德', province: '河北' },

​    { code: 101090408, area: '丰宁', city: '承德', province: '河北' },

​    { code: 101090409, area: '宽城', city: '承德', province: '河北' },

​    { code: 101090410, area: '围场', city: '承德', province: '河北' },

​    { code: 101090501, area: '唐山', city: '唐山', province: '河北' },

​    { code: 101090502, area: '丰南', city: '唐山', province: '河北' },

​    { code: 101090503, area: '丰润', city: '唐山', province: '河北' },

​    { code: 101090504, area: '滦县', city: '唐山', province: '河北' },

​    { code: 101090505, area: '滦南', city: '唐山', province: '河北' },

​    { code: 101090506, area: '乐亭', city: '唐山', province: '河北' },

​    { code: 101090507, area: '迁西', city: '唐山', province: '河北' },

​    { code: 101090508, area: '玉田', city: '唐山', province: '河北' },

​    { code: 101090509, area: '唐海', city: '唐山', province: '河北' },

​    { code: 101090510, area: '遵化', city: '唐山', province: '河北' },

​    { code: 101090511, area: '迁安', city: '唐山', province: '河北' },

​    { code: 101090512, area: '曹妃甸', city: '唐山', province: '河北' },

​    { code: 101090601, area: '廊坊', city: '廊坊', province: '河北' },

​    { code: 101090602, area: '固安', city: '廊坊', province: '河北' },

​    { code: 101090603, area: '永清', city: '廊坊', province: '河北' },

​    { code: 101090604, area: '香河', city: '廊坊', province: '河北' },

​    { code: 101090605, area: '大城', city: '廊坊', province: '河北' },

​    { code: 101090606, area: '文安', city: '廊坊', province: '河北' },

​    { code: 101090607, area: '大厂', city: '廊坊', province: '河北' },

​    { code: 101090608, area: '霸州', city: '廊坊', province: '河北' },

​    { code: 101090609, area: '三河', city: '廊坊', province: '河北' },

​    { code: 101090701, area: '沧州', city: '沧州', province: '河北' },

​    { code: 101090702, area: '青县', city: '沧州', province: '河北' },

​    { code: 101090703, area: '东光', city: '沧州', province: '河北' },

​    { code: 101090704, area: '海兴', city: '沧州', province: '河北' },

​    { code: 101090705, area: '盐山', city: '沧州', province: '河北' },

​    { code: 101090706, area: '肃宁', city: '沧州', province: '河北' },

​    { code: 101090707, area: '南皮', city: '沧州', province: '河北' },

​    { code: 101090708, area: '吴桥', city: '沧州', province: '河北' },

​    { code: 101090709, area: '献县', city: '沧州', province: '河北' },

​    { code: 101090710, area: '孟村', city: '沧州', province: '河北' },

​    { code: 101090711, area: '泊头', city: '沧州', province: '河北' },

​    { code: 101090712, area: '任丘', city: '沧州', province: '河北' },

​    { code: 101090713, area: '黄骅', city: '沧州', province: '河北' },

​    { code: 101090714, area: '河间', city: '沧州', province: '河北' },

​    { code: 101090716, area: '沧县', city: '沧州', province: '河北' },

​    { code: 101090801, area: '衡水', city: '衡水', province: '河北' },

​    { code: 101090802, area: '枣强', city: '衡水', province: '河北' },

​    { code: 101090803, area: '武邑', city: '衡水', province: '河北' },

​    { code: 101090804, area: '武强', city: '衡水', province: '河北' },

​    { code: 101090805, area: '饶阳', city: '衡水', province: '河北' },

​    { code: 101090806, area: '安平', city: '衡水', province: '河北' },

​    { code: 101090807, area: '故城', city: '衡水', province: '河北' },

​    { code: 101090808, area: '景县', city: '衡水', province: '河北' },

​    { code: 101090809, area: '阜城', city: '衡水', province: '河北' },

​    { code: 101090810, area: '冀州', city: '衡水', province: '河北' },

​    { code: 101090811, area: '深州', city: '衡水', province: '河北' },

​    { code: 101090901, area: '邢台', city: '邢台', province: '河北' },

​    { code: 101090902, area: '临城', city: '邢台', province: '河北' },

​    { code: 101090904, area: '内丘', city: '邢台', province: '河北' },

​    { code: 101090905, area: '柏乡', city: '邢台', province: '河北' },

​    { code: 101090906, area: '隆尧', city: '邢台', province: '河北' },

​    { code: 101090907, area: '南和', city: '邢台', province: '河北' },

​    { code: 101090908, area: '宁晋', city: '邢台', province: '河北' },

​    { code: 101090909, area: '巨鹿', city: '邢台', province: '河北' },

​    { code: 101090910, area: '新河', city: '邢台', province: '河北' },

​    { code: 101090911, area: '广宗', city: '邢台', province: '河北' },

​    { code: 101090912, area: '平乡', city: '邢台', province: '河北' },

​    { code: 101090913, area: '威县', city: '邢台', province: '河北' },

​    { code: 101090914, area: '清河', city: '邢台', province: '河北' },

​    { code: 101090915, area: '临西', city: '邢台', province: '河北' },

​    { code: 101090916, area: '南宫', city: '邢台', province: '河北' },

​    { code: 101090917, area: '沙河', city: '邢台', province: '河北' },

​    { code: 101090918, area: '任县', city: '邢台', province: '河北' },

​    { code: 101091001, area: '邯郸', city: '邯郸', province: '河北' },

​    { code: 101091002, area: '峰峰', city: '邯郸', province: '河北' },

​    { code: 101091003, area: '临漳', city: '邯郸', province: '河北' },

​    { code: 101091004, area: '成安', city: '邯郸', province: '河北' },

​    { code: 101091005, area: '大名', city: '邯郸', province: '河北' },

​    { code: 101091006, area: '涉县', city: '邯郸', province: '河北' },

​    { code: 101091007, area: '磁县', city: '邯郸', province: '河北' },

​    { code: 101091008, area: '肥乡', city: '邯郸', province: '河北' },

​    { code: 101091009, area: '永年', city: '邯郸', province: '河北' },

​    { code: 101091010, area: '邱县', city: '邯郸', province: '河北' },

​    { code: 101091011, area: '鸡泽', city: '邯郸', province: '河北' },

​    { code: 101091012, area: '广平', city: '邯郸', province: '河北' },

​    { code: 101091013, area: '馆陶', city: '邯郸', province: '河北' },

​    { code: 101091014, area: '魏县', city: '邯郸', province: '河北' },

​    { code: 101091015, area: '曲周', city: '邯郸', province: '河北' },

​    { code: 101091016, area: '武安', city: '邯郸', province: '河北' },

​    { code: 101091101, area: '秦皇岛', city: '秦皇岛', province: '河北' },

​    { code: 101091102, area: '青龙', city: '秦皇岛', province: '河北' },

​    { code: 101091103, area: '昌黎', city: '秦皇岛', province: '河北' },

​    { code: 101091104, area: '抚宁', city: '秦皇岛', province: '河北' },

​    { code: 101091105, area: '卢龙', city: '秦皇岛', province: '河北' },

​    { code: 101091106, area: '北戴河', city: '秦皇岛', province: '河北' },

​    { code: 101100101, area: '太原', city: '太原', province: '山西' },

​    { code: 101100102, area: '清徐', city: '太原', province: '山西' },

​    { code: 101100103, area: '阳曲', city: '太原', province: '山西' },

​    { code: 101100104, area: '娄烦', city: '太原', province: '山西' },

​    { code: 101100105, area: '古交', city: '太原', province: '山西' },

​    { code: 101100106, area: '尖草坪区', city: '太原', province: '山西' },

​    { code: 101100107, area: '小店区', city: '太原', province: '山西' },

​    { code: 101100201, area: '大同', city: '大同', province: '山西' },

​    { code: 101100202, area: '阳高', city: '大同', province: '山西' },

​    { code: 101100203, area: '大同县', city: '大同', province: '山西' },

​    { code: 101100204, area: '天镇', city: '大同', province: '山西' },

​    { code: 101100205, area: '广灵', city: '大同', province: '山西' },

​    { code: 101100206, area: '灵丘', city: '大同', province: '山西' },

​    { code: 101100207, area: '浑源', city: '大同', province: '山西' },

​    { code: 101100208, area: '左云', city: '大同', province: '山西' },

​    { code: 101100301, area: '阳泉', city: '阳泉', province: '山西' },

​    { code: 101100302, area: '盂县', city: '阳泉', province: '山西' },

​    { code: 101100303, area: '平定', city: '阳泉', province: '山西' },

​    { code: 101100401, area: '晋中', city: '晋中', province: '山西' },

​    { code: 101100402, area: '榆次', city: '晋中', province: '山西' },

​    { code: 101100403, area: '榆社', city: '晋中', province: '山西' },

​    { code: 101100404, area: '左权', city: '晋中', province: '山西' },

​    { code: 101100405, area: '和顺', city: '晋中', province: '山西' },

​    { code: 101100406, area: '昔阳', city: '晋中', province: '山西' },

​    { code: 101100407, area: '寿阳', city: '晋中', province: '山西' },

​    { code: 101100408, area: '太谷', city: '晋中', province: '山西' },

​    { code: 101100409, area: '祁县', city: '晋中', province: '山西' },

​    { code: 101100410, area: '平遥', city: '晋中', province: '山西' },

​    { code: 101100411, area: '灵石', city: '晋中', province: '山西' },

​    { code: 101100412, area: '介休', city: '晋中', province: '山西' },

​    { code: 101100501, area: '长治', city: '长治', province: '山西' },

​    { code: 101100502, area: '黎城', city: '长治', province: '山西' },

​    { code: 101100503, area: '屯留', city: '长治', province: '山西' },

​    { code: 101100504, area: '潞城', city: '长治', province: '山西' },

​    { code: 101100505, area: '襄垣', city: '长治', province: '山西' },

​    { code: 101100506, area: '平顺', city: '长治', province: '山西' },

​    { code: 101100507, area: '武乡', city: '长治', province: '山西' },

​    { code: 101100508, area: '沁县', city: '长治', province: '山西' },

​    { code: 101100509, area: '长子', city: '长治', province: '山西' },

​    { code: 101100510, area: '沁源', city: '长治', province: '山西' },

​    { code: 101100511, area: '壶关', city: '长治', province: '山西' },

​    { code: 101100601, area: '晋城', city: '晋城', province: '山西' },

​    { code: 101100602, area: '沁水', city: '晋城', province: '山西' },

​    { code: 101100603, area: '阳城', city: '晋城', province: '山西' },

​    { code: 101100604, area: '陵川', city: '晋城', province: '山西' },

​    { code: 101100605, area: '高平', city: '晋城', province: '山西' },

​    { code: 101100606, area: '泽州', city: '晋城', province: '山西' },

​    { code: 101100701, area: '临汾', city: '临汾', province: '山西' },

​    { code: 101100702, area: '曲沃', city: '临汾', province: '山西' },

​    { code: 101100703, area: '永和', city: '临汾', province: '山西' },

​    { code: 101100704, area: '隰县', city: '临汾', province: '山西' },

​    { code: 101100705, area: '大宁', city: '临汾', province: '山西' },

​    { code: 101100706, area: '吉县', city: '临汾', province: '山西' },

​    { code: 101100707, area: '襄汾', city: '临汾', province: '山西' },

​    { code: 101100708, area: '蒲县', city: '临汾', province: '山西' },

​    { code: 101100709, area: '汾西', city: '临汾', province: '山西' },

​    { code: 101100710, area: '洪洞', city: '临汾', province: '山西' },

​    { code: 101100711, area: '霍州', city: '临汾', province: '山西' },

​    { code: 101100712, area: '乡宁', city: '临汾', province: '山西' },

​    { code: 101100713, area: '翼城', city: '临汾', province: '山西' },

​    { code: 101100714, area: '侯马', city: '临汾', province: '山西' },

​    { code: 101100715, area: '浮山', city: '临汾', province: '山西' },

​    { code: 101100716, area: '安泽', city: '临汾', province: '山西' },

​    { code: 101100717, area: '古县', city: '临汾', province: '山西' },

​    { code: 101100801, area: '运城', city: '运城', province: '山西' },

​    { code: 101100802, area: '临猗', city: '运城', province: '山西' },

​    { code: 101100803, area: '稷山', city: '运城', province: '山西' },

​    { code: 101100804, area: '万荣', city: '运城', province: '山西' },

​    { code: 101100805, area: '河津', city: '运城', province: '山西' },

​    { code: 101100806, area: '新绛', city: '运城', province: '山西' },

​    { code: 101100807, area: '绛县', city: '运城', province: '山西' },

​    { code: 101100808, area: '闻喜', city: '运城', province: '山西' },

​    { code: 101100809, area: '垣曲', city: '运城', province: '山西' },

​    { code: 101100810, area: '永济', city: '运城', province: '山西' },

​    { code: 101100811, area: '芮城', city: '运城', province: '山西' },

​    { code: 101100812, area: '夏县', city: '运城', province: '山西' },

​    { code: 101100813, area: '平陆', city: '运城', province: '山西' },

​    { code: 101100901, area: '朔州', city: '朔州', province: '山西' },

​    { code: 101100902, area: '平鲁', city: '朔州', province: '山西' },

​    { code: 101100903, area: '山阴', city: '朔州', province: '山西' },

​    { code: 101100904, area: '右玉', city: '朔州', province: '山西' },

​    { code: 101100905, area: '应县', city: '朔州', province: '山西' },

​    { code: 101100906, area: '怀仁', city: '朔州', province: '山西' },

​    { code: 101101001, area: '忻州', city: '忻州', province: '山西' },

​    { code: 101101002, area: '定襄', city: '忻州', province: '山西' },

​    { code: 101101003, area: '五台县', city: '忻州', province: '山西' },

​    { code: 101101004, area: '河曲', city: '忻州', province: '山西' },

​    { code: 101101005, area: '偏关', city: '忻州', province: '山西' },

​    { code: 101101006, area: '神池', city: '忻州', province: '山西' },

​    { code: 101101007, area: '宁武', city: '忻州', province: '山西' },

​    { code: 101101008, area: '代县', city: '忻州', province: '山西' },

​    { code: 101101009, area: '繁峙', city: '忻州', province: '山西' },

​    { code: 101101010, area: '五台山', city: '忻州', province: '山西' },

​    { code: 101101011, area: '保德', city: '忻州', province: '山西' },

​    { code: 101101012, area: '静乐', city: '忻州', province: '山西' },

​    { code: 101101013, area: '岢岚', city: '忻州', province: '山西' },

​    { code: 101101014, area: '五寨', city: '忻州', province: '山西' },

​    { code: 101101015, area: '原平', city: '忻州', province: '山西' },

​    { code: 101101100, area: '吕梁', city: '吕梁', province: '山西' },

​    { code: 101101101, area: '离石', city: '吕梁', province: '山西' },

​    { code: 101101102, area: '临县', city: '吕梁', province: '山西' },

​    { code: 101101103, area: '兴县', city: '吕梁', province: '山西' },

​    { code: 101101104, area: '岚县', city: '吕梁', province: '山西' },

​    { code: 101101105, area: '柳林', city: '吕梁', province: '山西' },

​    { code: 101101106, area: '石楼', city: '吕梁', province: '山西' },

​    { code: 101101107, area: '方山', city: '吕梁', province: '山西' },

​    { code: 101101108, area: '交口', city: '吕梁', province: '山西' },

​    { code: 101101109, area: '中阳', city: '吕梁', province: '山西' },

​    { code: 101101110, area: '孝义', city: '吕梁', province: '山西' },

​    { code: 101101111, area: '汾阳', city: '吕梁', province: '山西' },

​    { code: 101101112, area: '文水', city: '吕梁', province: '山西' },

​    { code: 101101113, area: '交城', city: '吕梁', province: '山西' },

​    { code: 101110101, area: '西安', city: '西安', province: '陕西' },

​    { code: 101110102, area: '长安', city: '西安', province: '陕西' },

​    { code: 101110103, area: '临潼', city: '西安', province: '陕西' },

​    { code: 101110104, area: '蓝田', city: '西安', province: '陕西' },

​    { code: 101110105, area: '周至', city: '西安', province: '陕西' },

​    { code: 101110106, area: '户县', city: '西安', province: '陕西' },

​    { code: 101110107, area: '高陵', city: '西安', province: '陕西' },

​    { code: 101110200, area: '咸阳', city: '咸阳', province: '陕西' },

​    { code: 101110201, area: '三原', city: '咸阳', province: '陕西' },

​    { code: 101110202, area: '礼泉', city: '咸阳', province: '陕西' },

​    { code: 101110203, area: '永寿', city: '咸阳', province: '陕西' },

​    { code: 101110204, area: '淳化', city: '咸阳', province: '陕西' },

​    { code: 101110205, area: '泾阳', city: '咸阳', province: '陕西' },

​    { code: 101110206, area: '武功', city: '咸阳', province: '陕西' },

​    { code: 101110207, area: '乾县', city: '咸阳', province: '陕西' },

​    { code: 101110208, area: '彬县', city: '咸阳', province: '陕西' },

​    { code: 101110209, area: '长武', city: '咸阳', province: '陕西' },

​    { code: 101110210, area: '旬邑', city: '咸阳', province: '陕西' },

​    { code: 101110211, area: '兴平', city: '咸阳', province: '陕西' },

​    { code: 101110300, area: '延安', city: '延安', province: '陕西' },

​    { code: 101110301, area: '延长', city: '延安', province: '陕西' },

​    { code: 101110302, area: '延川', city: '延安', province: '陕西' },

​    { code: 101110303, area: '子长', city: '延安', province: '陕西' },

​    { code: 101110304, area: '宜川', city: '延安', province: '陕西' },

​    { code: 101110305, area: '富县', city: '延安', province: '陕西' },

​    { code: 101110306, area: '志丹', city: '延安', province: '陕西' },

​    { code: 101110307, area: '安塞', city: '延安', province: '陕西' },

​    { code: 101110308, area: '甘泉', city: '延安', province: '陕西' },

​    { code: 101110309, area: '洛川', city: '延安', province: '陕西' },

​    { code: 101110310, area: '黄陵', city: '延安', province: '陕西' },

​    { code: 101110311, area: '黄龙', city: '延安', province: '陕西' },

​    { code: 101110312, area: '吴起', city: '延安', province: '陕西' },

​    { code: 101110401, area: '榆林', city: '榆林', province: '陕西' },

​    { code: 101110402, area: '府谷', city: '榆林', province: '陕西' },

​    { code: 101110403, area: '神木', city: '榆林', province: '陕西' },

​    { code: 101110404, area: '佳县', city: '榆林', province: '陕西' },

​    { code: 101110405, area: '定边', city: '榆林', province: '陕西' },

​    { code: 101110406, area: '靖边', city: '榆林', province: '陕西' },

​    { code: 101110407, area: '横山', city: '榆林', province: '陕西' },

​    { code: 101110408, area: '米脂', city: '榆林', province: '陕西' },

​    { code: 101110409, area: '子洲', city: '榆林', province: '陕西' },

​    { code: 101110410, area: '绥德', city: '榆林', province: '陕西' },

​    { code: 101110411, area: '吴堡', city: '榆林', province: '陕西' },

​    { code: 101110412, area: '清涧', city: '榆林', province: '陕西' },

​    { code: 101110413, area: '榆阳', city: '榆林', province: '陕西' },

​    { code: 101110501, area: '渭南', city: '渭南', province: '陕西' },

​    { code: 101110502, area: '华县', city: '渭南', province: '陕西' },

​    { code: 101110503, area: '潼关', city: '渭南', province: '陕西' },

​    { code: 101110504, area: '大荔', city: '渭南', province: '陕西' },

​    { code: 101110505, area: '白水', city: '渭南', province: '陕西' },

​    { code: 101110506, area: '富平', city: '渭南', province: '陕西' },

​    { code: 101110507, area: '蒲城', city: '渭南', province: '陕西' },

​    { code: 101110508, area: '澄城', city: '渭南', province: '陕西' },

​    { code: 101110509, area: '合阳', city: '渭南', province: '陕西' },

​    { code: 101110510, area: '韩城', city: '渭南', province: '陕西' },

​    { code: 101110511, area: '华阴', city: '渭南', province: '陕西' },

​    { code: 101110601, area: '商洛', city: '商洛', province: '陕西' },

​    { code: 101110602, area: '洛南', city: '商洛', province: '陕西' },

​    { code: 101110603, area: '柞水', city: '商洛', province: '陕西' },

​    { code: 101110604, area: '商州', city: '商洛', province: '陕西' },

​    { code: 101110605, area: '镇安', city: '商洛', province: '陕西' },

​    { code: 101110606, area: '丹凤', city: '商洛', province: '陕西' },

​    { code: 101110607, area: '商南', city: '商洛', province: '陕西' },

​    { code: 101110608, area: '山阳', city: '商洛', province: '陕西' },

​    { code: 101110701, area: '安康', city: '安康', province: '陕西' },

​    { code: 101110702, area: '紫阳', city: '安康', province: '陕西' },

​    { code: 101110703, area: '石泉', city: '安康', province: '陕西' },

​    { code: 101110704, area: '汉阴', city: '安康', province: '陕西' },

​    { code: 101110705, area: '旬阳', city: '安康', province: '陕西' },

​    { code: 101110706, area: '岚皋', city: '安康', province: '陕西' },

​    { code: 101110707, area: '平利', city: '安康', province: '陕西' },

​    { code: 101110708, area: '白河', city: '安康', province: '陕西' },

​    { code: 101110709, area: '镇坪', city: '安康', province: '陕西' },

​    { code: 101110710, area: '宁陕', city: '安康', province: '陕西' },

​    { code: 101110801, area: '汉中', city: '汉中', province: '陕西' },

​    { code: 101110802, area: '略阳', city: '汉中', province: '陕西' },

​    { code: 101110803, area: '勉县', city: '汉中', province: '陕西' },

​    { code: 101110804, area: '留坝', city: '汉中', province: '陕西' },

​    { code: 101110805, area: '洋县', city: '汉中', province: '陕西' },

​    { code: 101110806, area: '城固', city: '汉中', province: '陕西' },

​    { code: 101110807, area: '西乡', city: '汉中', province: '陕西' },

​    { code: 101110808, area: '佛坪', city: '汉中', province: '陕西' },

​    { code: 101110809, area: '宁强', city: '汉中', province: '陕西' },

​    { code: 101110810, area: '南郑', city: '汉中', province: '陕西' },

​    { code: 101110811, area: '镇巴', city: '汉中', province: '陕西' },

​    { code: 101110901, area: '宝鸡', city: '宝鸡', province: '陕西' },

​    { code: 101110903, area: '千阳', city: '宝鸡', province: '陕西' },

​    { code: 101110904, area: '麟游', city: '宝鸡', province: '陕西' },

​    { code: 101110905, area: '岐山', city: '宝鸡', province: '陕西' },

​    { code: 101110906, area: '凤翔', city: '宝鸡', province: '陕西' },

​    { code: 101110907, area: '扶风', city: '宝鸡', province: '陕西' },

​    { code: 101110908, area: '眉县', city: '宝鸡', province: '陕西' },

​    { code: 101110909, area: '太白', city: '宝鸡', province: '陕西' },

​    { code: 101110910, area: '凤县', city: '宝鸡', province: '陕西' },

​    { code: 101110911, area: '陇县', city: '宝鸡', province: '陕西' },

​    { code: 101110912, area: '陈仓', city: '宝鸡', province: '陕西' },

​    { code: 101111001, area: '铜川', city: '铜川', province: '陕西' },

​    { code: 101111002, area: '耀县', city: '铜川', province: '陕西' },

​    { code: 101111003, area: '宜君', city: '铜川', province: '陕西' },

​    { code: 101111004, area: '耀州', city: '铜川', province: '陕西' },

​    { code: 101111101, area: '杨凌', city: '杨凌', province: '陕西' },

​    { code: 101120101, area: '济南', city: '济南', province: '山东' },

​    { code: 101120102, area: '长清', city: '济南', province: '山东' },

​    { code: 101120103, area: '商河', city: '济南', province: '山东' },

​    { code: 101120104, area: '章丘', city: '济南', province: '山东' },

​    { code: 101120105, area: '平阴', city: '济南', province: '山东' },

​    { code: 101120106, area: '济阳', city: '济南', province: '山东' },

​    { code: 101120107, area: '天桥', city: '济南', province: '山东' },

​    { code: 101120201, area: '青岛', city: '青岛', province: '山东' },

​    { code: 101120202, area: '崂山', city: '青岛', province: '山东' },

​    { code: 101120204, area: '即墨', city: '青岛', province: '山东' },

​    { code: 101120205, area: '胶州', city: '青岛', province: '山东' },

​    { code: 101120206, area: '胶南', city: '青岛', province: '山东' },

​    { code: 101120207, area: '莱西', city: '青岛', province: '山东' },

​    { code: 101120208, area: '平度', city: '青岛', province: '山东' },

​    { code: 101120301, area: '淄博', city: '淄博', province: '山东' },

​    { code: 101120302, area: '淄川', city: '淄博', province: '山东' },

​    { code: 101120303, area: '博山', city: '淄博', province: '山东' },

​    { code: 101120304, area: '高青', city: '淄博', province: '山东' },

​    { code: 101120305, area: '周村', city: '淄博', province: '山东' },

​    { code: 101120306, area: '沂源', city: '淄博', province: '山东' },

​    { code: 101120307, area: '桓台', city: '淄博', province: '山东' },

​    { code: 101120308, area: '临淄', city: '淄博', province: '山东' },

​    { code: 101120401, area: '德州', city: '德州', province: '山东' },

​    { code: 101120402, area: '武城', city: '德州', province: '山东' },

​    { code: 101120403, area: '临邑', city: '德州', province: '山东' },

​    { code: 101120404, area: '陵县', city: '德州', province: '山东' },

​    { code: 101120405, area: '齐河', city: '德州', province: '山东' },

​    { code: 101120406, area: '乐陵', city: '德州', province: '山东' },

​    { code: 101120407, area: '庆云', city: '德州', province: '山东' },

​    { code: 101120408, area: '平原', city: '德州', province: '山东' },

​    { code: 101120409, area: '宁津', city: '德州', province: '山东' },

​    { code: 101120410, area: '夏津', city: '德州', province: '山东' },

​    { code: 101120411, area: '禹城', city: '德州', province: '山东' },

​    { code: 101120501, area: '烟台', city: '烟台', province: '山东' },

​    { code: 101120502, area: '莱州', city: '烟台', province: '山东' },

​    { code: 101120503, area: '长岛', city: '烟台', province: '山东' },

​    { code: 101120504, area: '蓬莱', city: '烟台', province: '山东' },

​    { code: 101120505, area: '龙口', city: '烟台', province: '山东' },

​    { code: 101120506, area: '招远', city: '烟台', province: '山东' },

​    { code: 101120507, area: '栖霞', city: '烟台', province: '山东' },

​    { code: 101120508, area: '福山', city: '烟台', province: '山东' },

​    { code: 101120509, area: '牟平', city: '烟台', province: '山东' },

​    { code: 101120510, area: '莱阳', city: '烟台', province: '山东' },

​    { code: 101120511, area: '海阳', city: '烟台', province: '山东' },

​    { code: 101120601, area: '潍坊', city: '潍坊', province: '山东' },

​    { code: 101120602, area: '青州', city: '潍坊', province: '山东' },

​    { code: 101120603, area: '寿光', city: '潍坊', province: '山东' },

​    { code: 101120604, area: '临朐', city: '潍坊', province: '山东' },

​    { code: 101120605, area: '昌乐', city: '潍坊', province: '山东' },

​    { code: 101120606, area: '昌邑', city: '潍坊', province: '山东' },

​    { code: 101120607, area: '安丘', city: '潍坊', province: '山东' },

​    { code: 101120608, area: '高密', city: '潍坊', province: '山东' },

​    { code: 101120609, area: '诸城', city: '潍坊', province: '山东' },

​    { code: 101120701, area: '济宁', city: '济宁', province: '山东' },

​    { code: 101120702, area: '嘉祥', city: '济宁', province: '山东' },

​    { code: 101120703, area: '微山', city: '济宁', province: '山东' },

​    { code: 101120704, area: '鱼台', city: '济宁', province: '山东' },

​    { code: 101120705, area: '兖州', city: '济宁', province: '山东' },

​    { code: 101120706, area: '金乡', city: '济宁', province: '山东' },

​    { code: 101120707, area: '汶上', city: '济宁', province: '山东' },

​    { code: 101120708, area: '泗水', city: '济宁', province: '山东' },

​    { code: 101120709, area: '梁山', city: '济宁', province: '山东' },

​    { code: 101120710, area: '曲阜', city: '济宁', province: '山东' },

​    { code: 101120711, area: '邹城', city: '济宁', province: '山东' },

​    { code: 101120801, area: '泰安', city: '泰安', province: '山东' },

​    { code: 101120802, area: '新泰', city: '泰安', province: '山东' },

​    { code: 101120804, area: '肥城', city: '泰安', province: '山东' },

​    { code: 101120805, area: '东平', city: '泰安', province: '山东' },

​    { code: 101120806, area: '宁阳', city: '泰安', province: '山东' },

​    { code: 101120901, area: '临沂', city: '临沂', province: '山东' },

​    { code: 101120902, area: '莒南', city: '临沂', province: '山东' },

​    { code: 101120903, area: '沂南', city: '临沂', province: '山东' },

​    { code: 101120904, area: '苍山', city: '临沂', province: '山东' },

​    { code: 101120905, area: '临沭', city: '临沂', province: '山东' },

​    { code: 101120906, area: '郯城', city: '临沂', province: '山东' },

​    { code: 101120907, area: '蒙阴', city: '临沂', province: '山东' },

​    { code: 101120908, area: '平邑', city: '临沂', province: '山东' },

​    { code: 101120909, area: '费县', city: '临沂', province: '山东' },

​    { code: 101120910, area: '沂水', city: '临沂', province: '山东' },

​    { code: 101121001, area: '菏泽', city: '菏泽', province: '山东' },

​    { code: 101121002, area: '鄄城', city: '菏泽', province: '山东' },

​    { code: 101121003, area: '郓城', city: '菏泽', province: '山东' },

​    { code: 101121004, area: '东明', city: '菏泽', province: '山东' },

​    { code: 101121005, area: '定陶', city: '菏泽', province: '山东' },

​    { code: 101121006, area: '巨野', city: '菏泽', province: '山东' },

​    { code: 101121007, area: '曹县', city: '菏泽', province: '山东' },

​    { code: 101121008, area: '成武', city: '菏泽', province: '山东' },

​    { code: 101121009, area: '单县', city: '菏泽', province: '山东' },

​    { code: 101121101, area: '滨州', city: '滨州', province: '山东' },

​    { code: 101121102, area: '博兴', city: '滨州', province: '山东' },

​    { code: 101121103, area: '无棣', city: '滨州', province: '山东' },

​    { code: 101121104, area: '阳信', city: '滨州', province: '山东' },

​    { code: 101121105, area: '惠民', city: '滨州', province: '山东' },

​    { code: 101121106, area: '沾化', city: '滨州', province: '山东' },

​    { code: 101121107, area: '邹平', city: '滨州', province: '山东' },

​    { code: 101121201, area: '东营', city: '东营', province: '山东' },

​    { code: 101121202, area: '河口', city: '东营', province: '山东' },

​    { code: 101121203, area: '垦利', city: '东营', province: '山东' },

​    { code: 101121204, area: '利津', city: '东营', province: '山东' },

​    { code: 101121205, area: '广饶', city: '东营', province: '山东' },

​    { code: 101121301, area: '威海', city: '威海', province: '山东' },

​    { code: 101121302, area: '文登', city: '威海', province: '山东' },

​    { code: 101121303, area: '荣成', city: '威海', province: '山东' },

​    { code: 101121304, area: '乳山', city: '威海', province: '山东' },

​    { code: 101121305, area: '成山头', city: '威海', province: '山东' },

​    { code: 101121306, area: '石岛', city: '威海', province: '山东' },

​    { code: 101121401, area: '枣庄', city: '枣庄', province: '山东' },

​    { code: 101121402, area: '薛城', city: '枣庄', province: '山东' },

​    { code: 101121403, area: '峄城', city: '枣庄', province: '山东' },

​    { code: 101121404, area: '台儿庄', city: '枣庄', province: '山东' },

​    { code: 101121405, area: '滕州', city: '枣庄', province: '山东' },

​    { code: 101121501, area: '日照', city: '日照', province: '山东' },

​    { code: 101121502, area: '五莲', city: '日照', province: '山东' },

​    { code: 101121503, area: '莒县', city: '日照', province: '山东' },

​    { code: 101121601, area: '莱芜', city: '莱芜', province: '山东' },

​    { code: 101121701, area: '聊城', city: '聊城', province: '山东' },

​    { code: 101121702, area: '冠县', city: '聊城', province: '山东' },

​    { code: 101121703, area: '阳谷', city: '聊城', province: '山东' },

​    { code: 101121704, area: '高唐', city: '聊城', province: '山东' },

​    { code: 101121705, area: '茌平', city: '聊城', province: '山东' },

​    { code: 101121706, area: '东阿', city: '聊城', province: '山东' },

​    { code: 101121707, area: '临清', city: '聊城', province: '山东' },

​    { code: 101121709, area: '莘县', city: '聊城', province: '山东' },

​    { code: 101130101, area: '乌鲁木齐', city: '乌鲁木齐', province: '新疆' },

​    { code: 101130103, area: '小渠子', city: '乌鲁木齐', province: '新疆' },

​    { code: 101130104, area: '巴仑台', city: '乌鲁木齐', province: '新疆' },

​    { code: 101130105, area: '达坂城', city: '乌鲁木齐', province: '新疆' },

​    { code: 101130108, area: '乌鲁木齐牧试站', city: '乌鲁木齐', province: '新疆' },

​    { code: 101130109, area: '天池', city: '乌鲁木齐', province: '新疆' },

​    { code: 101130110, area: '白杨沟', city: '乌鲁木齐', province: '新疆' },

​    { code: 101130201, area: '克拉玛依', city: '克拉玛依', province: '新疆' },

​    { code: 101130202, area: '乌尔禾', city: '克拉玛依', province: '新疆' },

​    { code: 101130203, area: '白碱滩', city: '克拉玛依', province: '新疆' },

​    { code: 101130301, area: '石河子', city: '石河子', province: '新疆' },

​    { code: 101130302, area: '炮台', city: '石河子', province: '新疆' },

​    { code: 101130303, area: '莫索湾', city: '石河子', province: '新疆' },

​    { code: 101130401, area: '昌吉', city: '昌吉', province: '新疆' },

​    { code: 101130402, area: '呼图壁', city: '昌吉', province: '新疆' },

​    { code: 101130403, area: '米泉', city: '昌吉', province: '新疆' },

​    { code: 101130404, area: '阜康', city: '昌吉', province: '新疆' },

​    { code: 101130405, area: '吉木萨尔', city: '昌吉', province: '新疆' },

​    { code: 101130406, area: '奇台', city: '昌吉', province: '新疆' },

​    { code: 101130407, area: '玛纳斯', city: '昌吉', province: '新疆' },

​    { code: 101130408, area: '木垒', city: '昌吉', province: '新疆' },

​    { code: 101130409, area: '蔡家湖', city: '昌吉', province: '新疆' },

​    { code: 101130501, area: '吐鲁番', city: '吐鲁番', province: '新疆' },

​    { code: 101130502, area: '托克逊', city: '吐鲁番', province: '新疆' },

​    { code: 101130503, area: '克孜勒', city: '吐鲁番', province: '新疆' },

​    { code: 101130504, area: '鄯善', city: '吐鲁番', province: '新疆' },

​    { code: 101130601, area: '库尔勒', city: '巴音郭楞', province: '新疆' },

​    { code: 101130602, area: '轮台', city: '巴音郭楞', province: '新疆' },

​    { code: 101130603, area: '尉犁', city: '巴音郭楞', province: '新疆' },

​    { code: 101130604, area: '若羌', city: '巴音郭楞', province: '新疆' },

​    { code: 101130605, area: '且末', city: '巴音郭楞', province: '新疆' },

​    { code: 101130606, area: '和静', city: '巴音郭楞', province: '新疆' },

​    { code: 101130607, area: '焉耆', city: '巴音郭楞', province: '新疆' },

​    { code: 101130608, area: '和硕', city: '巴音郭楞', province: '新疆' },

​    { code: 101130610, area: '巴音布鲁克', city: '巴音郭楞', province: '新疆' },

​    { code: 101130611, area: '铁干里克', city: '巴音郭楞', province: '新疆' },

​    { code: 101130612, area: '博湖', city: '巴音郭楞', province: '新疆' },

​    { code: 101130613, area: '塔中', city: '巴音郭楞', province: '新疆' },

​    { code: 101130701, area: '阿拉尔', city: '阿拉尔', province: '新疆' },

​    { code: 101130801, area: '阿克苏', city: '阿克苏', province: '新疆' },

​    { code: 101130802, area: '乌什', city: '阿克苏', province: '新疆' },

​    { code: 101130803, area: '温宿', city: '阿克苏', province: '新疆' },

​    { code: 101130804, area: '拜城', city: '阿克苏', province: '新疆' },

​    { code: 101130805, area: '新和', city: '阿克苏', province: '新疆' },

​    { code: 101130806, area: '沙雅', city: '阿克苏', province: '新疆' },

​    { code: 101130807, area: '库车', city: '阿克苏', province: '新疆' },

​    { code: 101130808, area: '柯坪', city: '阿克苏', province: '新疆' },

​    { code: 101130809, area: '阿瓦提', city: '阿克苏', province: '新疆' },

​    { code: 101130901, area: '喀什', city: '喀什', province: '新疆' },

​    { code: 101130902, area: '英吉沙', city: '喀什', province: '新疆' },

​    { code: 101130903, area: '塔什库尔干', city: '喀什', province: '新疆' },

​    { code: 101130904, area: '麦盖提', city: '喀什', province: '新疆' },

​    { code: 101130905, area: '莎车', city: '喀什', province: '新疆' },

​    { code: 101130906, area: '叶城', city: '喀什', province: '新疆' },

​    { code: 101130907, area: '泽普', city: '喀什', province: '新疆' },

​    { code: 101130908, area: '巴楚', city: '喀什', province: '新疆' },

​    { code: 101130909, area: '岳普湖', city: '喀什', province: '新疆' },

​    { code: 101130910, area: '伽师', city: '喀什', province: '新疆' },

​    { code: 101130911, area: '疏附', city: '喀什', province: '新疆' },

​    { code: 101130912, area: '疏勒', city: '喀什', province: '新疆' },

​    { code: 101131001, area: '伊宁', city: '伊犁', province: '新疆' },

​    { code: 101131002, area: '察布查尔', city: '伊犁', province: '新疆' },

​    { code: 101131003, area: '尼勒克', city: '伊犁', province: '新疆' },

​    { code: 101131004, area: '伊宁县', city: '伊犁', province: '新疆' },

​    { code: 101131005, area: '巩留', city: '伊犁', province: '新疆' },

​    { code: 101131006, area: '新源', city: '伊犁', province: '新疆' },

​    { code: 101131007, area: '昭苏', city: '伊犁', province: '新疆' },

​    { code: 101131008, area: '特克斯', city: '伊犁', province: '新疆' },

​    { code: 101131009, area: '霍城', city: '伊犁', province: '新疆' },

​    { code: 101131010, area: '霍尔果斯', city: '伊犁', province: '新疆' },

​    { code: 101131011, area: '奎屯', city: '伊犁', province: '新疆' },

​    { code: 101131101, area: '塔城', city: '塔城', province: '新疆' },

​    { code: 101131102, area: '裕民', city: '塔城', province: '新疆' },

​    { code: 101131103, area: '额敏', city: '塔城', province: '新疆' },

​    { code: 101131104, area: '和布克赛尔', city: '塔城', province: '新疆' },

​    { code: 101131105, area: '托里', city: '塔城', province: '新疆' },

​    { code: 101131106, area: '乌苏', city: '塔城', province: '新疆' },

​    { code: 101131107, area: '沙湾', city: '塔城', province: '新疆' },

​    { code: 101131108, area: '和丰', city: '塔城', province: '新疆' },

​    { code: 101131201, area: '哈密', city: '哈密', province: '新疆' },

​    { code: 101131203, area: '巴里坤', city: '哈密', province: '新疆' },

​    { code: 101131204, area: '伊吾', city: '哈密', province: '新疆' },

​    { code: 101131301, area: '和田', city: '和田', province: '新疆' },

​    { code: 101131302, area: '皮山', city: '和田', province: '新疆' },

​    { code: 101131303, area: '策勒', city: '和田', province: '新疆' },

​    { code: 101131304, area: '墨玉', city: '和田', province: '新疆' },

​    { code: 101131305, area: '洛浦', city: '和田', province: '新疆' },

​    { code: 101131306, area: '民丰', city: '和田', province: '新疆' },

​    { code: 101131307, area: '于田', city: '和田', province: '新疆' },

​    { code: 101131401, area: '阿勒泰', city: '阿勒泰', province: '新疆' },

​    { code: 101131402, area: '哈巴河', city: '阿勒泰', province: '新疆' },

​    { code: 101131405, area: '吉木乃', city: '阿勒泰', province: '新疆' },

​    { code: 101131406, area: '布尔津', city: '阿勒泰', province: '新疆' },

​    { code: 101131407, area: '福海', city: '阿勒泰', province: '新疆' },

​    { code: 101131408, area: '富蕴', city: '阿勒泰', province: '新疆' },

​    { code: 101131409, area: '青河', city: '阿勒泰', province: '新疆' },

​    { code: 101131501, area: '阿图什', city: '克州', province: '新疆' },

​    { code: 101131502, area: '乌恰', city: '克州', province: '新疆' },

​    { code: 101131503, area: '阿克陶', city: '克州', province: '新疆' },

​    { code: 101131504, area: '阿合奇', city: '克州', province: '新疆' },

​    { code: 101131601, area: '博乐', city: '博尔塔拉', province: '新疆' },

​    { code: 101131602, area: '温泉', city: '博尔塔拉', province: '新疆' },

​    { code: 101131603, area: '精河', city: '博尔塔拉', province: '新疆' },

​    { code: 101131606, area: '阿拉山口', city: '博尔塔拉', province: '新疆' },

​    { code: 101140101, area: '拉萨', city: '拉萨', province: '西藏' },

​    { code: 101140102, area: '当雄', city: '拉萨', province: '西藏' },

​    { code: 101140103, area: '尼木', city: '拉萨', province: '西藏' },

​    { code: 101140104, area: '林周', city: '拉萨', province: '西藏' },

​    { code: 101140105, area: '堆龙德庆', city: '拉萨', province: '西藏' },

​    { code: 101140106, area: '曲水', city: '拉萨', province: '西藏' },

​    { code: 101140107, area: '达孜', city: '拉萨', province: '西藏' },

​    { code: 101140108, area: '墨竹工卡', city: '拉萨', province: '西藏' },

​    { code: 101140201, area: '日喀则', city: '日喀则', province: '西藏' },

​    { code: 101140202, area: '拉孜', city: '日喀则', province: '西藏' },

​    { code: 101140203, area: '南木林', city: '日喀则', province: '西藏' },

​    { code: 101140204, area: '聂拉木', city: '日喀则', province: '西藏' },

​    { code: 101140205, area: '定日', city: '日喀则', province: '西藏' },

​    { code: 101140206, area: '江孜', city: '日喀则', province: '西藏' },

​    { code: 101140207, area: '帕里', city: '日喀则', province: '西藏' },

​    { code: 101140208, area: '仲巴', city: '日喀则', province: '西藏' },

​    { code: 101140209, area: '萨嘎', city: '日喀则', province: '西藏' },

​    { code: 101140210, area: '吉隆', city: '日喀则', province: '西藏' },

​    { code: 101140211, area: '昂仁', city: '日喀则', province: '西藏' },

​    { code: 101140212, area: '定结', city: '日喀则', province: '西藏' },

​    { code: 101140213, area: '萨迦', city: '日喀则', province: '西藏' },

​    { code: 101140214, area: '谢通门', city: '日喀则', province: '西藏' },

​    { code: 101140216, area: '岗巴', city: '日喀则', province: '西藏' },

​    { code: 101140217, area: '白朗', city: '日喀则', province: '西藏' },

​    { code: 101140218, area: '亚东', city: '日喀则', province: '西藏' },

​    { code: 101140219, area: '康马', city: '日喀则', province: '西藏' },

​    { code: 101140220, area: '仁布', city: '日喀则', province: '西藏' },

​    { code: 101140301, area: '山南', city: '山南', province: '西藏' },

​    { code: 101140302, area: '贡嘎', city: '山南', province: '西藏' },

​    { code: 101140303, area: '札囊', city: '山南', province: '西藏' },

​    { code: 101140304, area: '加查', city: '山南', province: '西藏' },

​    { code: 101140305, area: '浪卡子', city: '山南', province: '西藏' },

​    { code: 101140306, area: '错那', city: '山南', province: '西藏' },

​    { code: 101140307, area: '隆子', city: '山南', province: '西藏' },

​    { code: 101140308, area: '泽当', city: '山南', province: '西藏' },

​    { code: 101140309, area: '乃东', city: '山南', province: '西藏' },

​    { code: 101140310, area: '桑日', city: '山南', province: '西藏' },

​    { code: 101140311, area: '洛扎', city: '山南', province: '西藏' },

​    { code: 101140312, area: '措美', city: '山南', province: '西藏' },

​    { code: 101140313, area: '琼结', city: '山南', province: '西藏' },

​    { code: 101140314, area: '曲松', city: '山南', province: '西藏' },

​    { code: 101140401, area: '林芝', city: '林芝', province: '西藏' },

​    { code: 101140402, area: '波密', city: '林芝', province: '西藏' },

​    { code: 101140403, area: '米林', city: '林芝', province: '西藏' },

​    { code: 101140404, area: '察隅', city: '林芝', province: '西藏' },

​    { code: 101140405, area: '工布江达', city: '林芝', province: '西藏' },

​    { code: 101140406, area: '朗县', city: '林芝', province: '西藏' },

​    { code: 101140407, area: '墨脱', city: '林芝', province: '西藏' },

​    { code: 101140501, area: '昌都', city: '昌都', province: '西藏' },

​    { code: 101140502, area: '丁青', city: '昌都', province: '西藏' },

​    { code: 101140503, area: '边坝', city: '昌都', province: '西藏' },

​    { code: 101140504, area: '洛隆', city: '昌都', province: '西藏' },

​    { code: 101140505, area: '左贡', city: '昌都', province: '西藏' },

​    { code: 101140506, area: '芒康', city: '昌都', province: '西藏' },

​    { code: 101140507, area: '类乌齐', city: '昌都', province: '西藏' },

​    { code: 101140508, area: '八宿', city: '昌都', province: '西藏' },

​    { code: 101140509, area: '江达', city: '昌都', province: '西藏' },

​    { code: 101140510, area: '察雅', city: '昌都', province: '西藏' },

​    { code: 101140511, area: '贡觉', city: '昌都', province: '西藏' },

​    { code: 101140601, area: '那曲', city: '那曲', province: '西藏' },

​    { code: 101140602, area: '尼玛', city: '那曲', province: '西藏' },

​    { code: 101140603, area: '嘉黎', city: '那曲', province: '西藏' },

​    { code: 101140604, area: '班戈', city: '那曲', province: '西藏' },

​    { code: 101140605, area: '安多', city: '那曲', province: '西藏' },

​    { code: 101140606, area: '索县', city: '那曲', province: '西藏' },

​    { code: 101140607, area: '聂荣', city: '那曲', province: '西藏' },

​    { code: 101140608, area: '巴青', city: '那曲', province: '西藏' },

​    { code: 101140609, area: '比如', city: '那曲', province: '西藏' },

​    { code: 101140701, area: '阿里', city: '阿里', province: '西藏' },

​    { code: 101140702, area: '改则', city: '阿里', province: '西藏' },

​    { code: 101140703, area: '申扎', city: '阿里', province: '西藏' },

​    { code: 101140704, area: '狮泉河', city: '阿里', province: '西藏' },

​    { code: 101140705, area: '普兰', city: '阿里', province: '西藏' },

​    { code: 101140706, area: '札达', city: '阿里', province: '西藏' },

​    { code: 101140707, area: '噶尔', city: '阿里', province: '西藏' },

​    { code: 101140708, area: '日土', city: '阿里', province: '西藏' },

​    { code: 101140709, area: '革吉', city: '阿里', province: '西藏' },

​    { code: 101140710, area: '措勤', city: '阿里', province: '西藏' },

​    { code: 101150101, area: '西宁', city: '西宁', province: '青海' },

​    { code: 101150102, area: '大通', city: '西宁', province: '青海' },

​    { code: 101150103, area: '湟源', city: '西宁', province: '青海' },

​    { code: 101150104, area: '湟中', city: '西宁', province: '青海' },

​    { code: 101150201, area: '海东', city: '海东', province: '青海' },

​    { code: 101150202, area: '乐都', city: '海东', province: '青海' },

​    { code: 101150203, area: '民和', city: '海东', province: '青海' },

​    { code: 101150204, area: '互助', city: '海东', province: '青海' },

​    { code: 101150205, area: '化隆', city: '海东', province: '青海' },

​    { code: 101150206, area: '循化', city: '海东', province: '青海' },

​    { code: 101150207, area: '冷湖', city: '海东', province: '青海' },

​    { code: 101150208, area: '平安', city: '海东', province: '青海' },

​    { code: 101150301, area: '黄南', city: '黄南', province: '青海' },

​    { code: 101150302, area: '尖扎', city: '黄南', province: '青海' },

​    { code: 101150303, area: '泽库', city: '黄南', province: '青海' },

​    { code: 101150304, area: '河南', city: '黄南', province: '青海' },

​    { code: 101150305, area: '同仁', city: '黄南', province: '青海' },

​    { code: 101150401, area: '海南', city: '海南', province: '青海' },

​    { code: 101150404, area: '贵德', city: '海南', province: '青海' },

​    { code: 101150406, area: '兴海', city: '海南', province: '青海' },

​    { code: 101150407, area: '贵南', city: '海南', province: '青海' },

​    { code: 101150408, area: '同德', city: '海南', province: '青海' },

​    { code: 101150409, area: '共和', city: '海南', province: '青海' },

​    { code: 101150501, area: '果洛', city: '果洛', province: '青海' },

​    { code: 101150502, area: '班玛', city: '果洛', province: '青海' },

​    { code: 101150503, area: '甘德', city: '果洛', province: '青海' },

​    { code: 101150504, area: '达日', city: '果洛', province: '青海' },

​    { code: 101150505, area: '久治', city: '果洛', province: '青海' },

​    { code: 101150506, area: '玛多', city: '果洛', province: '青海' },

​    { code: 101150507, area: '多县', city: '果洛', province: '青海' },

​    { code: 101150508, area: '玛沁', city: '果洛', province: '青海' },

​    { code: 101150601, area: '玉树', city: '玉树', province: '青海' },

​    { code: 101150602, area: '称多', city: '玉树', province: '青海' },

​    { code: 101150603, area: '治多', city: '玉树', province: '青海' },

​    { code: 101150604, area: '杂多', city: '玉树', province: '青海' },

​    { code: 101150605, area: '囊谦', city: '玉树', province: '青海' },

​    { code: 101150606, area: '曲麻莱', city: '玉树', province: '青海' },

​    { code: 101150701, area: '海西', city: '海西', province: '青海' },

​    { code: 101150708, area: '天峻', city: '海西', province: '青海' },

​    { code: 101150709, area: '乌兰', city: '海西', province: '青海' },

​    { code: 101150712, area: '茫崖', city: '海西', province: '青海' },

​    { code: 101150713, area: '大柴旦', city: '海西', province: '青海' },

​    { code: 101150716, area: '德令哈', city: '海西', province: '青海' },

​    { code: 101150801, area: '海北', city: '海北', province: '青海' },

​    { code: 101150802, area: '门源', city: '海北', province: '青海' },

​    { code: 101150803, area: '祁连', city: '海北', province: '青海' },

​    { code: 101150804, area: '海晏', city: '海北', province: '青海' },

​    { code: 101150806, area: '刚察', city: '海北', province: '青海' },

​    { code: 101150901, area: '格尔木', city: '格尔木', province: '青海' },

​    { code: 101150902, area: '都兰', city: '格尔木', province: '青海' },

​    { code: 101160101, area: '兰州', city: '兰州', province: '甘肃' },

​    { code: 101160102, area: '皋兰', city: '兰州', province: '甘肃' },

​    { code: 101160103, area: '永登', city: '兰州', province: '甘肃' },

​    { code: 101160104, area: '榆中', city: '兰州', province: '甘肃' },

​    { code: 101160201, area: '定西', city: '定西', province: '甘肃' },

​    { code: 101160202, area: '通渭', city: '定西', province: '甘肃' },

​    { code: 101160203, area: '陇西', city: '定西', province: '甘肃' },

​    { code: 101160204, area: '渭源', city: '定西', province: '甘肃' },

​    { code: 101160205, area: '临洮', city: '定西', province: '甘肃' },

​    { code: 101160206, area: '漳县', city: '定西', province: '甘肃' },

​    { code: 101160207, area: '岷县', city: '定西', province: '甘肃' },

​    { code: 101160208, area: '安定', city: '定西', province: '甘肃' },

​    { code: 101160301, area: '平凉', city: '平凉', province: '甘肃' },

​    { code: 101160302, area: '泾川', city: '平凉', province: '甘肃' },

​    { code: 101160303, area: '灵台', city: '平凉', province: '甘肃' },

​    { code: 101160304, area: '崇信', city: '平凉', province: '甘肃' },

​    { code: 101160305, area: '华亭', city: '平凉', province: '甘肃' },

​    { code: 101160306, area: '庄浪', city: '平凉', province: '甘肃' },

​    { code: 101160307, area: '静宁', city: '平凉', province: '甘肃' },

​    { code: 101160308, area: '崆峒', city: '平凉', province: '甘肃' },

​    { code: 101160401, area: '庆阳', city: '庆阳', province: '甘肃' },

​    { code: 101160402, area: '西峰', city: '庆阳', province: '甘肃' },

​    { code: 101160403, area: '环县', city: '庆阳', province: '甘肃' },

​    { code: 101160404, area: '华池', city: '庆阳', province: '甘肃' },

​    { code: 101160405, area: '合水', city: '庆阳', province: '甘肃' },

​    { code: 101160406, area: '正宁', city: '庆阳', province: '甘肃' },

​    { code: 101160407, area: '宁县', city: '庆阳', province: '甘肃' },

​    { code: 101160408, area: '镇原', city: '庆阳', province: '甘肃' },

​    { code: 101160409, area: '庆城', city: '庆阳', province: '甘肃' },

​    { code: 101160501, area: '武威', city: '武威', province: '甘肃' },

​    { code: 101160502, area: '民勤', city: '武威', province: '甘肃' },

​    { code: 101160503, area: '古浪', city: '武威', province: '甘肃' },

​    { code: 101160505, area: '天祝', city: '武威', province: '甘肃' },

​    { code: 101160601, area: '金昌', city: '金昌', province: '甘肃' },

​    { code: 101160602, area: '永昌', city: '金昌', province: '甘肃' },

​    { code: 101160701, area: '张掖', city: '张掖', province: '甘肃' },

​    { code: 101160702, area: '肃南', city: '张掖', province: '甘肃' },

​    { code: 101160703, area: '民乐', city: '张掖', province: '甘肃' },

​    { code: 101160704, area: '临泽', city: '张掖', province: '甘肃' },

​    { code: 101160705, area: '高台', city: '张掖', province: '甘肃' },

​    { code: 101160706, area: '山丹', city: '张掖', province: '甘肃' },

​    { code: 101160801, area: '酒泉', city: '酒泉', province: '甘肃' },

​    { code: 101160803, area: '金塔', city: '酒泉', province: '甘肃' },

​    { code: 101160804, area: '阿克塞', city: '酒泉', province: '甘肃' },

​    { code: 101160805, area: '瓜州', city: '酒泉', province: '甘肃' },

​    { code: 101160806, area: '肃北', city: '酒泉', province: '甘肃' },

​    { code: 101160807, area: '玉门', city: '酒泉', province: '甘肃' },

​    { code: 101160808, area: '敦煌', city: '酒泉', province: '甘肃' },

​    { code: 101160901, area: '天水', city: '天水', province: '甘肃' },

​    { code: 101160903, area: '清水', city: '天水', province: '甘肃' },

​    { code: 101160904, area: '秦安', city: '天水', province: '甘肃' },

​    { code: 101160905, area: '甘谷', city: '天水', province: '甘肃' },

​    { code: 101160906, area: '武山', city: '天水', province: '甘肃' },

​    { code: 101160907, area: '张家川', city: '天水', province: '甘肃' },

​    { code: 101160908, area: '麦积', city: '天水', province: '甘肃' },

​    { code: 101161001, area: '武都', city: '陇南', province: '甘肃' },

​    { code: 101161002, area: '成县', city: '陇南', province: '甘肃' },

​    { code: 101161003, area: '文县', city: '陇南', province: '甘肃' },

​    { code: 101161004, area: '宕昌', city: '陇南', province: '甘肃' },

​    { code: 101161005, area: '康县', city: '陇南', province: '甘肃' },

​    { code: 101161006, area: '西和', city: '陇南', province: '甘肃' },

​    { code: 101161007, area: '礼县', city: '陇南', province: '甘肃' },

​    { code: 101161008, area: '徽县', city: '陇南', province: '甘肃' },

​    { code: 101161009, area: '两当', city: '陇南', province: '甘肃' },

​    { code: 101161101, area: '临夏', city: '临夏', province: '甘肃' },

​    { code: 101161102, area: '康乐', city: '临夏', province: '甘肃' },

​    { code: 101161103, area: '永靖', city: '临夏', province: '甘肃' },

​    { code: 101161104, area: '广河', city: '临夏', province: '甘肃' },

​    { code: 101161105, area: '和政', city: '临夏', province: '甘肃' },

​    { code: 101161106, area: '东乡', city: '临夏', province: '甘肃' },

​    { code: 101161107, area: '积石山', city: '临夏', province: '甘肃' },

​    { code: 101161201, area: '合作', city: '甘南', province: '甘肃' },

​    { code: 101161202, area: '临潭', city: '甘南', province: '甘肃' },

​    { code: 101161203, area: '卓尼', city: '甘南', province: '甘肃' },

​    { code: 101161204, area: '舟曲', city: '甘南', province: '甘肃' },

​    { code: 101161205, area: '迭部', city: '甘南', province: '甘肃' },

​    { code: 101161206, area: '玛曲', city: '甘南', province: '甘肃' },

​    { code: 101161207, area: '碌曲', city: '甘南', province: '甘肃' },

​    { code: 101161208, area: '夏河', city: '甘南', province: '甘肃' },

​    { code: 101161301, area: '白银', city: '白银', province: '甘肃' },

​    { code: 101161302, area: '靖远', city: '白银', province: '甘肃' },

​    { code: 101161303, area: '会宁', city: '白银', province: '甘肃' },

​    { code: 101161304, area: '平川', city: '白银', province: '甘肃' },

​    { code: 101161305, area: '景泰', city: '白银', province: '甘肃' },

​    { code: 101161401, area: '嘉峪关', city: '嘉峪关', province: '甘肃' },

​    { code: 101170101, area: '银川', city: '银川', province: '宁夏' },

​    { code: 101170102, area: '永宁', city: '银川', province: '宁夏' },

​    { code: 101170103, area: '灵武', city: '银川', province: '宁夏' },

​    { code: 101170104, area: '贺兰', city: '银川', province: '宁夏' },

​    { code: 101170201, area: '石嘴山', city: '石嘴山', province: '宁夏' },

​    { code: 101170202, area: '惠农', city: '石嘴山', province: '宁夏' },

​    { code: 101170203, area: '平罗', city: '石嘴山', province: '宁夏' },

​    { code: 101170204, area: '陶乐', city: '石嘴山', province: '宁夏' },

​    { code: 101170206, area: '大武口', city: '石嘴山', province: '宁夏' },

​    { code: 101170301, area: '吴忠', city: '吴忠', province: '宁夏' },

​    { code: 101170302, area: '同心', city: '吴忠', province: '宁夏' },

​    { code: 101170303, area: '盐池', city: '吴忠', province: '宁夏' },

​    { code: 101170306, area: '青铜峡', city: '吴忠', province: '宁夏' },

​    { code: 101170401, area: '固原', city: '固原', province: '宁夏' },

​    { code: 101170402, area: '西吉', city: '固原', province: '宁夏' },

​    { code: 101170403, area: '隆德', city: '固原', province: '宁夏' },

​    { code: 101170404, area: '泾源', city: '固原', province: '宁夏' },

​    { code: 101170406, area: '彭阳', city: '固原', province: '宁夏' },

​    { code: 101170501, area: '中卫', city: '中卫', province: '宁夏' },

​    { code: 101170502, area: '中宁', city: '中卫', province: '宁夏' },

​    { code: 101170504, area: '海原', city: '中卫', province: '宁夏' },

​    { code: 101180101, area: '郑州', city: '郑州', province: '河南' },

​    { code: 101180102, area: '巩义', city: '郑州', province: '河南' },

​    { code: 101180103, area: '荥阳', city: '郑州', province: '河南' },

​    { code: 101180104, area: '登封', city: '郑州', province: '河南' },

​    { code: 101180105, area: '新密', city: '郑州', province: '河南' },

​    { code: 101180106, area: '新郑', city: '郑州', province: '河南' },

​    { code: 101180107, area: '中牟', city: '郑州', province: '河南' },

​    { code: 101180108, area: '上街', city: '郑州', province: '河南' },

​    { code: 101180201, area: '安阳', city: '安阳', province: '河南' },

​    { code: 101180202, area: '汤阴', city: '安阳', province: '河南' },

​    { code: 101180203, area: '滑县', city: '安阳', province: '河南' },

​    { code: 101180204, area: '内黄', city: '安阳', province: '河南' },

​    { code: 101180205, area: '林州', city: '安阳', province: '河南' },

​    { code: 101180301, area: '新乡', city: '新乡', province: '河南' },

​    { code: 101180302, area: '获嘉', city: '新乡', province: '河南' },

​    { code: 101180303, area: '原阳', city: '新乡', province: '河南' },

​    { code: 101180304, area: '辉县', city: '新乡', province: '河南' },

​    { code: 101180305, area: '卫辉', city: '新乡', province: '河南' },

​    { code: 101180306, area: '延津', city: '新乡', province: '河南' },

​    { code: 101180307, area: '封丘', city: '新乡', province: '河南' },

​    { code: 101180308, area: '长垣', city: '新乡', province: '河南' },

​    { code: 101180401, area: '许昌', city: '许昌', province: '河南' },

​    { code: 101180402, area: '鄢陵', city: '许昌', province: '河南' },

​    { code: 101180403, area: '襄城', city: '许昌', province: '河南' },

​    { code: 101180404, area: '长葛', city: '许昌', province: '河南' },

​    { code: 101180405, area: '禹州', city: '许昌', province: '河南' },

​    { code: 101180501, area: '平顶山', city: '平顶山', province: '河南' },

​    { code: 101180502, area: '郏县', city: '平顶山', province: '河南' },

​    { code: 101180503, area: '宝丰', city: '平顶山', province: '河南' },

​    { code: 101180504, area: '汝州', city: '平顶山', province: '河南' },

​    { code: 101180505, area: '叶县', city: '平顶山', province: '河南' },

​    { code: 101180506, area: '舞钢', city: '平顶山', province: '河南' },

​    { code: 101180507, area: '鲁山', city: '平顶山', province: '河南' },

​    { code: 101180508, area: '石龙', city: '平顶山', province: '河南' },

​    { code: 101180601, area: '信阳', city: '信阳', province: '河南' },

​    { code: 101180602, area: '息县', city: '信阳', province: '河南' },

​    { code: 101180603, area: '罗山', city: '信阳', province: '河南' },

​    { code: 101180604, area: '光山', city: '信阳', province: '河南' },

​    { code: 101180605, area: '新县', city: '信阳', province: '河南' },

​    { code: 101180606, area: '淮滨', city: '信阳', province: '河南' },

​    { code: 101180607, area: '潢川', city: '信阳', province: '河南' },

​    { code: 101180608, area: '固始', city: '信阳', province: '河南' },

​    { code: 101180609, area: '商城', city: '信阳', province: '河南' },

​    { code: 101180701, area: '南阳', city: '南阳', province: '河南' },

​    { code: 101180702, area: '南召', city: '南阳', province: '河南' },

​    { code: 101180703, area: '方城', city: '南阳', province: '河南' },

​    { code: 101180704, area: '社旗', city: '南阳', province: '河南' },

​    { code: 101180705, area: '西峡', city: '南阳', province: '河南' },

​    { code: 101180706, area: '内乡', city: '南阳', province: '河南' },

​    { code: 101180707, area: '镇平', city: '南阳', province: '河南' },

​    { code: 101180708, area: '淅川', city: '南阳', province: '河南' },

​    { code: 101180709, area: '新野', city: '南阳', province: '河南' },

​    { code: 101180710, area: '唐河', city: '南阳', province: '河南' },

​    { code: 101180711, area: '邓州', city: '南阳', province: '河南' },

​    { code: 101180712, area: '桐柏', city: '南阳', province: '河南' },

​    { code: 101180801, area: '开封', city: '开封', province: '河南' },

​    { code: 101180802, area: '杞县', city: '开封', province: '河南' },

​    { code: 101180803, area: '尉氏', city: '开封', province: '河南' },

​    { code: 101180804, area: '通许', city: '开封', province: '河南' },

​    { code: 101180805, area: '兰考', city: '开封', province: '河南' },

​    { code: 101180901, area: '洛阳', city: '洛阳', province: '河南' },

​    { code: 101180902, area: '新安', city: '洛阳', province: '河南' },

​    { code: 101180903, area: '孟津', city: '洛阳', province: '河南' },

​    { code: 101180904, area: '宜阳', city: '洛阳', province: '河南' },

​    { code: 101180905, area: '洛宁', city: '洛阳', province: '河南' },

​    { code: 101180906, area: '伊川', city: '洛阳', province: '河南' },

​    { code: 101180907, area: '嵩县', city: '洛阳', province: '河南' },

​    { code: 101180908, area: '偃师', city: '洛阳', province: '河南' },

​    { code: 101180909, area: '栾川', city: '洛阳', province: '河南' },

​    { code: 101180910, area: '汝阳', city: '洛阳', province: '河南' },

​    { code: 101180911, area: '吉利', city: '洛阳', province: '河南' },

​    { code: 101181001, area: '商丘', city: '商丘', province: '河南' },

​    { code: 101181003, area: '睢县', city: '商丘', province: '河南' },

​    { code: 101181004, area: '民权', city: '商丘', province: '河南' },

​    { code: 101181005, area: '虞城', city: '商丘', province: '河南' },

​    { code: 101181006, area: '柘城', city: '商丘', province: '河南' },

​    { code: 101181007, area: '宁陵', city: '商丘', province: '河南' },

​    { code: 101181008, area: '夏邑', city: '商丘', province: '河南' },

​    { code: 101181009, area: '永城', city: '商丘', province: '河南' },

​    { code: 101181101, area: '焦作', city: '焦作', province: '河南' },

​    { code: 101181102, area: '修武', city: '焦作', province: '河南' },

​    { code: 101181103, area: '武陟', city: '焦作', province: '河南' },

​    { code: 101181104, area: '沁阳', city: '焦作', province: '河南' },

​    { code: 101181106, area: '博爱', city: '焦作', province: '河南' },

​    { code: 101181107, area: '温县', city: '焦作', province: '河南' },

​    { code: 101181108, area: '孟州', city: '焦作', province: '河南' },

​    { code: 101181201, area: '鹤壁', city: '鹤壁', province: '河南' },

​    { code: 101181202, area: '浚县', city: '鹤壁', province: '河南' },

​    { code: 101181203, area: '淇县', city: '鹤壁', province: '河南' },

​    { code: 101181301, area: '濮阳', city: '濮阳', province: '河南' },

​    { code: 101181302, area: '台前', city: '濮阳', province: '河南' },

​    { code: 101181303, area: '南乐', city: '濮阳', province: '河南' },

​    { code: 101181304, area: '清丰', city: '濮阳', province: '河南' },

​    { code: 101181305, area: '范县', city: '濮阳', province: '河南' },

​    { code: 101181401, area: '周口', city: '周口', province: '河南' },

​    { code: 101181402, area: '扶沟', city: '周口', province: '河南' },

​    { code: 101181403, area: '太康', city: '周口', province: '河南' },

​    { code: 101181404, area: '淮阳', city: '周口', province: '河南' },

​    { code: 101181405, area: '西华', city: '周口', province: '河南' },

​    { code: 101181406, area: '商水', city: '周口', province: '河南' },

​    { code: 101181407, area: '项城', city: '周口', province: '河南' },

​    { code: 101181408, area: '郸城', city: '周口', province: '河南' },

​    { code: 101181409, area: '鹿邑', city: '周口', province: '河南' },

​    { code: 101181410, area: '沈丘', city: '周口', province: '河南' },

​    { code: 101181501, area: '漯河', city: '漯河', province: '河南' },

​    { code: 101181502, area: '临颍', city: '漯河', province: '河南' },

​    { code: 101181503, area: '舞阳', city: '漯河', province: '河南' },

​    { code: 101181601, area: '驻马店', city: '驻马店', province: '河南' },

​    { code: 101181602, area: '西平', city: '驻马店', province: '河南' },

​    { code: 101181603, area: '遂平', city: '驻马店', province: '河南' },

​    { code: 101181604, area: '上蔡', city: '驻马店', province: '河南' },

​    { code: 101181605, area: '汝南', city: '驻马店', province: '河南' },

​    { code: 101181606, area: '泌阳', city: '驻马店', province: '河南' },

​    { code: 101181607, area: '平舆', city: '驻马店', province: '河南' },

​    { code: 101181608, area: '新蔡', city: '驻马店', province: '河南' },

​    { code: 101181609, area: '确山', city: '驻马店', province: '河南' },

​    { code: 101181610, area: '正阳', city: '驻马店', province: '河南' },

​    { code: 101181701, area: '三门峡', city: '三门峡', province: '河南' },

​    { code: 101181702, area: '灵宝', city: '三门峡', province: '河南' },

​    { code: 101181703, area: '渑池', city: '三门峡', province: '河南' },

​    { code: 101181704, area: '卢氏', city: '三门峡', province: '河南' },

​    { code: 101181705, area: '义马', city: '三门峡', province: '河南' },

​    { code: 101181706, area: '陕县', city: '三门峡', province: '河南' },

​    { code: 101181801, area: '济源', city: '济源', province: '河南' },

​    { code: 101190101, area: '南京', city: '南京', province: '江苏' },

​    { code: 101190102, area: '溧水', city: '南京', province: '江苏' },

​    { code: 101190103, area: '高淳', city: '南京', province: '江苏' },

​    { code: 101190104, area: '江宁', city: '南京', province: '江苏' },

​    { code: 101190105, area: '六合', city: '南京', province: '江苏' },

​    { code: 101190106, area: '江浦', city: '南京', province: '江苏' },

​    { code: 101190107, area: '浦口', city: '南京', province: '江苏' },

​    { code: 101190201, area: '无锡', city: '无锡', province: '江苏' },

​    { code: 101190202, area: '江阴', city: '无锡', province: '江苏' },

​    { code: 101190203, area: '宜兴', city: '无锡', province: '江苏' },

​    { code: 101190204, area: '锡山', city: '无锡', province: '江苏' },

​    { code: 101190301, area: '镇江', city: '镇江', province: '江苏' },

​    { code: 101190302, area: '丹阳', city: '镇江', province: '江苏' },

​    { code: 101190303, area: '扬中', city: '镇江', province: '江苏' },

​    { code: 101190304, area: '句容', city: '镇江', province: '江苏' },

​    { code: 101190305, area: '丹徒', city: '镇江', province: '江苏' },

​    { code: 101190401, area: '苏州', city: '苏州', province: '江苏' },

​    { code: 101190402, area: '常熟', city: '苏州', province: '江苏' },

​    { code: 101190403, area: '张家港', city: '苏州', province: '江苏' },

​    { code: 101190404, area: '昆山', city: '苏州', province: '江苏' },

​    { code: 101190405, area: '吴中', city: '苏州', province: '江苏' },

​    { code: 101190407, area: '吴江', city: '苏州', province: '江苏' },

​    { code: 101190408, area: '太仓', city: '苏州', province: '江苏' },

​    { code: 101190501, area: '南通', city: '南通', province: '江苏' },

​    { code: 101190502, area: '海安', city: '南通', province: '江苏' },

​    { code: 101190503, area: '如皋', city: '南通', province: '江苏' },

​    { code: 101190504, area: '如东', city: '南通', province: '江苏' },

​    { code: 101190507, area: '启东', city: '南通', province: '江苏' },

​    { code: 101190508, area: '海门', city: '南通', province: '江苏' },

​    { code: 101190509, area: '通州', city: '南通', province: '江苏' },

​    { code: 101190601, area: '扬州', city: '扬州', province: '江苏' },

​    { code: 101190602, area: '宝应', city: '扬州', province: '江苏' },

​    { code: 101190603, area: '仪征', city: '扬州', province: '江苏' },

​    { code: 101190604, area: '高邮', city: '扬州', province: '江苏' },

​    { code: 101190605, area: '江都', city: '扬州', province: '江苏' },

​    { code: 101190606, area: '邗江', city: '扬州', province: '江苏' },

​    { code: 101190701, area: '盐城', city: '盐城', province: '江苏' },

​    { code: 101190702, area: '响水', city: '盐城', province: '江苏' },

​    { code: 101190703, area: '滨海', city: '盐城', province: '江苏' },

​    { code: 101190704, area: '阜宁', city: '盐城', province: '江苏' },

​    { code: 101190705, area: '射阳', city: '盐城', province: '江苏' },

​    { code: 101190706, area: '建湖', city: '盐城', province: '江苏' },

​    { code: 101190707, area: '东台', city: '盐城', province: '江苏' },

​    { code: 101190708, area: '大丰', city: '盐城', province: '江苏' },

​    { code: 101190709, area: '盐都', city: '盐城', province: '江苏' },

​    { code: 101190801, area: '徐州', city: '徐州', province: '江苏' },

​    { code: 101190802, area: '铜山', city: '徐州', province: '江苏' },

​    { code: 101190803, area: '丰县', city: '徐州', province: '江苏' },

​    { code: 101190804, area: '沛县', city: '徐州', province: '江苏' },

​    { code: 101190805, area: '邳州', city: '徐州', province: '江苏' },

​    { code: 101190806, area: '睢宁', city: '徐州', province: '江苏' },

​    { code: 101190807, area: '新沂', city: '徐州', province: '江苏' },

​    { code: 101190901, area: '淮安', city: '淮安', province: '江苏' },

​    { code: 101190902, area: '金湖', city: '淮安', province: '江苏' },

​    { code: 101190903, area: '盱眙', city: '淮安', province: '江苏' },

​    { code: 101190904, area: '洪泽', city: '淮安', province: '江苏' },

​    { code: 101190905, area: '涟水', city: '淮安', province: '江苏' },

​    { code: 101190906, area: '淮阴区', city: '淮安', province: '江苏' },

​    { code: 101190908, area: '淮安区', city: '淮安', province: '江苏' },

​    { code: 101191001, area: '连云港', city: '连云港', province: '江苏' },

​    { code: 101191002, area: '东海', city: '连云港', province: '江苏' },

​    { code: 101191003, area: '赣榆', city: '连云港', province: '江苏' },

​    { code: 101191004, area: '灌云', city: '连云港', province: '江苏' },

​    { code: 101191005, area: '灌南', city: '连云港', province: '江苏' },

​    { code: 101191101, area: '常州', city: '常州', province: '江苏' },

​    { code: 101191102, area: '溧阳', city: '常州', province: '江苏' },

​    { code: 101191103, area: '金坛', city: '常州', province: '江苏' },

​    { code: 101191104, area: '武进', city: '常州', province: '江苏' },

​    { code: 101191201, area: '泰州', city: '泰州', province: '江苏' },

​    { code: 101191202, area: '兴化', city: '泰州', province: '江苏' },

​    { code: 101191203, area: '泰兴', city: '泰州', province: '江苏' },

​    { code: 101191204, area: '姜堰', city: '泰州', province: '江苏' },

​    { code: 101191205, area: '靖江', city: '泰州', province: '江苏' },

​    { code: 101191301, area: '宿迁', city: '宿迁', province: '江苏' },

​    { code: 101191302, area: '沭阳', city: '宿迁', province: '江苏' },

​    { code: 101191303, area: '泗阳', city: '宿迁', province: '江苏' },

​    { code: 101191304, area: '泗洪', city: '宿迁', province: '江苏' },

​    { code: 101191305, area: '宿豫', city: '宿迁', province: '江苏' },

​    { code: 101200101, area: '武汉', city: '武汉', province: '湖北' },

​    { code: 101200102, area: '蔡甸', city: '武汉', province: '湖北' },

​    { code: 101200103, area: '黄陂', city: '武汉', province: '湖北' },

​    { code: 101200104, area: '新洲', city: '武汉', province: '湖北' },

​    { code: 101200105, area: '江夏', city: '武汉', province: '湖北' },

​    { code: 101200106, area: '东西湖', city: '武汉', province: '湖北' },

​    { code: 101200201, area: '襄阳', city: '襄阳', province: '湖北' },

​    { code: 101200202, area: '襄州', city: '襄阳', province: '湖北' },

​    { code: 101200203, area: '保康', city: '襄阳', province: '湖北' },

​    { code: 101200204, area: '南漳', city: '襄阳', province: '湖北' },

​    { code: 101200205, area: '宜城', city: '襄阳', province: '湖北' },

​    { code: 101200206, area: '老河口', city: '襄阳', province: '湖北' },

​    { code: 101200207, area: '谷城', city: '襄阳', province: '湖北' },

​    { code: 101200208, area: '枣阳', city: '襄阳', province: '湖北' },

​    { code: 101200301, area: '鄂州', city: '鄂州', province: '湖北' },

​    { code: 101200302, area: '梁子湖', city: '鄂州', province: '湖北' },

​    { code: 101200401, area: '孝感', city: '孝感', province: '湖北' },

​    { code: 101200402, area: '安陆', city: '孝感', province: '湖北' },

​    { code: 101200403, area: '云梦', city: '孝感', province: '湖北' },

​    { code: 101200404, area: '大悟', city: '孝感', province: '湖北' },

​    { code: 101200405, area: '应城', city: '孝感', province: '湖北' },

​    { code: 101200406, area: '汉川', city: '孝感', province: '湖北' },

​    { code: 101200407, area: '孝昌', city: '孝感', province: '湖北' },

​    { code: 101200501, area: '黄冈', city: '黄冈', province: '湖北' },

​    { code: 101200502, area: '红安', city: '黄冈', province: '湖北' },

​    { code: 101200503, area: '麻城', city: '黄冈', province: '湖北' },

​    { code: 101200504, area: '罗田', city: '黄冈', province: '湖北' },

​    { code: 101200505, area: '英山', city: '黄冈', province: '湖北' },

​    { code: 101200506, area: '浠水', city: '黄冈', province: '湖北' },

​    { code: 101200507, area: '蕲春', city: '黄冈', province: '湖北' },

​    { code: 101200508, area: '黄梅', city: '黄冈', province: '湖北' },

​    { code: 101200509, area: '武穴', city: '黄冈', province: '湖北' },

​    { code: 101200510, area: '团风', city: '黄冈', province: '湖北' },

​    { code: 101200601, area: '黄石', city: '黄石', province: '湖北' },

​    { code: 101200602, area: '大冶', city: '黄石', province: '湖北' },

​    { code: 101200603, area: '阳新', city: '黄石', province: '湖北' },

​    { code: 101200604, area: '铁山', city: '黄石', province: '湖北' },

​    { code: 101200605, area: '下陆', city: '黄石', province: '湖北' },

​    { code: 101200606, area: '西塞山', city: '黄石', province: '湖北' },

​    { code: 101200701, area: '咸宁', city: '咸宁', province: '湖北' },

​    { code: 101200702, area: '赤壁', city: '咸宁', province: '湖北' },

​    { code: 101200703, area: '嘉鱼', city: '咸宁', province: '湖北' },

​    { code: 101200704, area: '崇阳', city: '咸宁', province: '湖北' },

​    { code: 101200705, area: '通城', city: '咸宁', province: '湖北' },

​    { code: 101200706, area: '通山', city: '咸宁', province: '湖北' },

​    { code: 101200801, area: '荆州', city: '荆州', province: '湖北' },

​    { code: 101200802, area: '江陵', city: '荆州', province: '湖北' },

​    { code: 101200803, area: '公安', city: '荆州', province: '湖北' },

​    { code: 101200804, area: '石首', city: '荆州', province: '湖北' },

​    { code: 101200805, area: '监利', city: '荆州', province: '湖北' },

​    { code: 101200806, area: '洪湖', city: '荆州', province: '湖北' },

​    { code: 101200807, area: '松滋', city: '荆州', province: '湖北' },

​    { code: 101200901, area: '宜昌', city: '宜昌', province: '湖北' },

​    { code: 101200902, area: '远安', city: '宜昌', province: '湖北' },

​    { code: 101200903, area: '秭归', city: '宜昌', province: '湖北' },

​    { code: 101200904, area: '兴山', city: '宜昌', province: '湖北' },

​    { code: 101200905, area: '宜昌县', city: '宜昌', province: '湖北' },

​    { code: 101200906, area: '五峰', city: '宜昌', province: '湖北' },

​    { code: 101200907, area: '当阳', city: '宜昌', province: '湖北' },

​    { code: 101200908, area: '长阳', city: '宜昌', province: '湖北' },

​    { code: 101200909, area: '宜都', city: '宜昌', province: '湖北' },

​    { code: 101200910, area: '枝江', city: '宜昌', province: '湖北' },

​    { code: 101200911, area: '三峡', city: '宜昌', province: '湖北' },

​    { code: 101200912, area: '夷陵', city: '宜昌', province: '湖北' },

​    { code: 101201001, area: '恩施', city: '恩施', province: '湖北' },

​    { code: 101201002, area: '利川', city: '恩施', province: '湖北' },

​    { code: 101201003, area: '建始', city: '恩施', province: '湖北' },

​    { code: 101201004, area: '咸丰', city: '恩施', province: '湖北' },

​    { code: 101201005, area: '宣恩', city: '恩施', province: '湖北' },

​    { code: 101201006, area: '鹤峰', city: '恩施', province: '湖北' },

​    { code: 101201007, area: '来凤', city: '恩施', province: '湖北' },

​    { code: 101201008, area: '巴东', city: '恩施', province: '湖北' },

​    { code: 101201101, area: '十堰', city: '十堰', province: '湖北' },

​    { code: 101201102, area: '竹溪', city: '十堰', province: '湖北' },

​    { code: 101201103, area: '郧西', city: '十堰', province: '湖北' },

​    { code: 101201104, area: '郧县', city: '十堰', province: '湖北' },

​    { code: 101201105, area: '竹山', city: '十堰', province: '湖北' },

​    { code: 101201106, area: '房县', city: '十堰', province: '湖北' },

​    { code: 101201107, area: '丹江口', city: '十堰', province: '湖北' },

​    { code: 101201108, area: '茅箭', city: '十堰', province: '湖北' },

​    { code: 101201109, area: '张湾', city: '十堰', province: '湖北' },

​    { code: 101201201, area: '神农架', city: '神农架', province: '湖北' },

​    { code: 101201301, area: '随州', city: '随州', province: '湖北' },

​    { code: 101201302, area: '广水', city: '随州', province: '湖北' },

​    { code: 101201401, area: '荆门', city: '荆门', province: '湖北' },

​    { code: 101201402, area: '钟祥', city: '荆门', province: '湖北' },

​    { code: 101201403, area: '京山', city: '荆门', province: '湖北' },

​    { code: 101201404, area: '掇刀', city: '荆门', province: '湖北' },

​    { code: 101201405, area: '沙洋', city: '荆门', province: '湖北' },

​    { code: 101201406, area: '沙市', city: '荆州', province: '湖北' },

​    { code: 101201501, area: '天门', city: '天门', province: '湖北' },

​    { code: 101201601, area: '仙桃', city: '仙桃', province: '湖北' },

​    { code: 101201701, area: '潜江', city: '潜江', province: '湖北' },

​    { code: 101210101, area: '杭州', city: '杭州', province: '浙江' },

​    { code: 101210102, area: '萧山', city: '杭州', province: '浙江' },

​    { code: 101210103, area: '桐庐', city: '杭州', province: '浙江' },

​    { code: 101210104, area: '淳安', city: '杭州', province: '浙江' },

​    { code: 101210105, area: '建德', city: '杭州', province: '浙江' },

​    { code: 101210106, area: '余杭', city: '杭州', province: '浙江' },

​    { code: 101210107, area: '临安', city: '杭州', province: '浙江' },

​    { code: 101210108, area: '富阳', city: '杭州', province: '浙江' },

​    { code: 101210201, area: '湖州', city: '湖州', province: '浙江' },

​    { code: 101210202, area: '长兴', city: '湖州', province: '浙江' },

​    { code: 101210203, area: '安吉', city: '湖州', province: '浙江' },

​    { code: 101210204, area: '德清', city: '湖州', province: '浙江' },

​    { code: 101210301, area: '嘉兴', city: '嘉兴', province: '浙江' },

​    { code: 101210302, area: '嘉善', city: '嘉兴', province: '浙江' },

​    { code: 101210303, area: '海宁', city: '嘉兴', province: '浙江' },

​    { code: 101210304, area: '桐乡', city: '嘉兴', province: '浙江' },

​    { code: 101210305, area: '平湖', city: '嘉兴', province: '浙江' },

​    { code: 101210306, area: '海盐', city: '嘉兴', province: '浙江' },

​    { code: 101210401, area: '宁波', city: '宁波', province: '浙江' },

​    { code: 101210403, area: '慈溪', city: '宁波', province: '浙江' },

​    { code: 101210404, area: '余姚', city: '宁波', province: '浙江' },

​    { code: 101210405, area: '奉化', city: '宁波', province: '浙江' },

​    { code: 101210406, area: '象山', city: '宁波', province: '浙江' },

​    { code: 101210408, area: '宁海', city: '宁波', province: '浙江' },

​    { code: 101210410, area: '北仑', city: '宁波', province: '浙江' },

​    { code: 101210411, area: '鄞州', city: '宁波', province: '浙江' },

​    { code: 101210412, area: '镇海', city: '宁波', province: '浙江' },

​    { code: 101210501, area: '绍兴', city: '绍兴', province: '浙江' },

​    { code: 101210502, area: '诸暨', city: '绍兴', province: '浙江' },

​    { code: 101210503, area: '上虞', city: '绍兴', province: '浙江' },

​    { code: 101210504, area: '新昌', city: '绍兴', province: '浙江' },

​    { code: 101210505, area: '嵊州', city: '绍兴', province: '浙江' },

​    { code: 101210601, area: '台州', city: '台州', province: '浙江' },

​    { code: 101210603, area: '玉环', city: '台州', province: '浙江' },

​    { code: 101210604, area: '三门', city: '台州', province: '浙江' },

​    { code: 101210605, area: '天台', city: '台州', province: '浙江' },

​    { code: 101210606, area: '仙居', city: '台州', province: '浙江' },

​    { code: 101210607, area: '温岭', city: '台州', province: '浙江' },

​    { code: 101210609, area: '洪家', city: '台州', province: '浙江' },

​    { code: 101210610, area: '临海', city: '台州', province: '浙江' },

​    { code: 101210611, area: '椒江', city: '台州', province: '浙江' },

​    { code: 101210612, area: '黄岩', city: '台州', province: '浙江' },

​    { code: 101210613, area: '路桥', city: '台州', province: '浙江' },

​    { code: 101210701, area: '温州', city: '温州', province: '浙江' },

​    { code: 101210702, area: '泰顺', city: '温州', province: '浙江' },

​    { code: 101210703, area: '文成', city: '温州', province: '浙江' },

​    { code: 101210704, area: '平阳', city: '温州', province: '浙江' },

​    { code: 101210705, area: '瑞安', city: '温州', province: '浙江' },

​    { code: 101210706, area: '洞头', city: '温州', province: '浙江' },

​    { code: 101210707, area: '乐清', city: '温州', province: '浙江' },

​    { code: 101210708, area: '永嘉', city: '温州', province: '浙江' },

​    { code: 101210709, area: '苍南', city: '温州', province: '浙江' },

​    { code: 101210801, area: '丽水', city: '丽水', province: '浙江' },

​    { code: 101210802, area: '遂昌', city: '丽水', province: '浙江' },

​    { code: 101210803, area: '龙泉', city: '丽水', province: '浙江' },

​    { code: 101210804, area: '缙云', city: '丽水', province: '浙江' },

​    { code: 101210805, area: '青田', city: '丽水', province: '浙江' },

​    { code: 101210806, area: '云和', city: '丽水', province: '浙江' },

​    { code: 101210807, area: '庆元', city: '丽水', province: '浙江' },

​    { code: 101210808, area: '松阳', city: '丽水', province: '浙江' },

​    { code: 101210809, area: '景宁', city: '丽水', province: '浙江' },

​    { code: 101210901, area: '金华', city: '金华', province: '浙江' },

​    { code: 101210902, area: '浦江', city: '金华', province: '浙江' },

​    { code: 101210903, area: '兰溪', city: '金华', province: '浙江' },

​    { code: 101210904, area: '义乌', city: '金华', province: '浙江' },

​    { code: 101210905, area: '东阳', city: '金华', province: '浙江' },

​    { code: 101210906, area: '武义', city: '金华', province: '浙江' },

​    { code: 101210907, area: '永康', city: '金华', province: '浙江' },

​    { code: 101210908, area: '磐安', city: '金华', province: '浙江' },

​    { code: 101211001, area: '衢州', city: '衢州', province: '浙江' },

​    { code: 101211002, area: '常山', city: '衢州', province: '浙江' },

​    { code: 101211003, area: '开化', city: '衢州', province: '浙江' },

​    { code: 101211004, area: '龙游', city: '衢州', province: '浙江' },

​    { code: 101211005, area: '江山', city: '衢州', province: '浙江' },

​    { code: 101211006, area: '衢江', city: '衢州', province: '浙江' },

​    { code: 101211101, area: '舟山', city: '舟山', province: '浙江' },

​    { code: 101211102, area: '嵊泗', city: '舟山', province: '浙江' },

​    { code: 101211104, area: '岱山', city: '舟山', province: '浙江' },

​    { code: 101211105, area: '普陀', city: '舟山', province: '浙江' },

​    { code: 101211106, area: '定海', city: '舟山', province: '浙江' },

​    { code: 101220101, area: '合肥', city: '合肥', province: '安徽' },

​    { code: 101220102, area: '长丰', city: '合肥', province: '安徽' },

​    { code: 101220103, area: '肥东', city: '合肥', province: '安徽' },

​    { code: 101220104, area: '肥西', city: '合肥', province: '安徽' },

​    { code: 101220201, area: '蚌埠', city: '蚌埠', province: '安徽' },

​    { code: 101220202, area: '怀远', city: '蚌埠', province: '安徽' },

​    { code: 101220203, area: '固镇', city: '蚌埠', province: '安徽' },

​    { code: 101220204, area: '五河', city: '蚌埠', province: '安徽' },

​    { code: 101220301, area: '芜湖', city: '芜湖', province: '安徽' },

​    { code: 101220302, area: '繁昌', city: '芜湖', province: '安徽' },

​    { code: 101220303, area: '芜湖县', city: '芜湖', province: '安徽' },

​    { code: 101220304, area: '南陵', city: '芜湖', province: '安徽' },

​    { code: 101220401, area: '淮南', city: '淮南', province: '安徽' },

​    { code: 101220402, area: '凤台', city: '淮南', province: '安徽' },

​    { code: 101220403, area: '潘集', city: '淮南', province: '安徽' },

​    { code: 101220501, area: '马鞍山', city: '马鞍山', province: '安徽' },

​    { code: 101220502, area: '当涂', city: '马鞍山', province: '安徽' },

​    { code: 101220601, area: '安庆', city: '安庆', province: '安徽' },

​    { code: 101220602, area: '枞阳', city: '安庆', province: '安徽' },

​    { code: 101220603, area: '太湖', city: '安庆', province: '安徽' },

​    { code: 101220604, area: '潜山', city: '安庆', province: '安徽' },

​    { code: 101220605, area: '怀宁', city: '安庆', province: '安徽' },

​    { code: 101220606, area: '宿松', city: '安庆', province: '安徽' },

​    { code: 101220607, area: '望江', city: '安庆', province: '安徽' },

​    { code: 101220608, area: '岳西', city: '安庆', province: '安徽' },

​    { code: 101220609, area: '桐城', city: '安庆', province: '安徽' },

​    { code: 101220701, area: '宿州', city: '宿州', province: '安徽' },

​    { code: 101220702, area: '砀山', city: '宿州', province: '安徽' },

​    { code: 101220703, area: '灵璧', city: '宿州', province: '安徽' },

​    { code: 101220704, area: '泗县', city: '宿州', province: '安徽' },

​    { code: 101220705, area: '萧县', city: '宿州', province: '安徽' },

​    { code: 101220801, area: '阜阳', city: '阜阳', province: '安徽' },

​    { code: 101220802, area: '阜南', city: '阜阳', province: '安徽' },

​    { code: 101220803, area: '颍上', city: '阜阳', province: '安徽' },

​    { code: 101220804, area: '临泉', city: '阜阳', province: '安徽' },

​    { code: 101220805, area: '界首', city: '阜阳', province: '安徽' },

​    { code: 101220806, area: '太和', city: '阜阳', province: '安徽' },

​    { code: 101220901, area: '亳州', city: '亳州', province: '安徽' },

​    { code: 101220902, area: '涡阳', city: '亳州', province: '安徽' },

​    { code: 101220903, area: '利辛', city: '亳州', province: '安徽' },

​    { code: 101220904, area: '蒙城', city: '亳州', province: '安徽' },

​    { code: 101221001, area: '黄山', city: '黄山', province: '安徽' },

​    { code: 101221002, area: '黄山区', city: '黄山', province: '安徽' },

​    { code: 101221003, area: '屯溪', city: '黄山', province: '安徽' },

​    { code: 101221004, area: '祁门', city: '黄山', province: '安徽' },

​    { code: 101221005, area: '黟县', city: '黄山', province: '安徽' },

​    { code: 101221006, area: '歙县', city: '黄山', province: '安徽' },

​    { code: 101221007, area: '休宁', city: '黄山', province: '安徽' },

​    { code: 101221008, area: '黄山风景区', city: '黄山', province: '安徽' },

​    { code: 101221101, area: '滁州', city: '滁州', province: '安徽' },

​    { code: 101221102, area: '凤阳', city: '滁州', province: '安徽' },

​    { code: 101221103, area: '明光', city: '滁州', province: '安徽' },

​    { code: 101221104, area: '定远', city: '滁州', province: '安徽' },

​    { code: 101221105, area: '全椒', city: '滁州', province: '安徽' },

​    { code: 101221106, area: '来安', city: '滁州', province: '安徽' },

​    { code: 101221107, area: '天长', city: '滁州', province: '安徽' },

​    { code: 101221201, area: '淮北', city: '淮北', province: '安徽' },

​    { code: 101221202, area: '濉溪', city: '淮北', province: '安徽' },

​    { code: 101221301, area: '铜陵', city: '铜陵', province: '安徽' },

​    { code: 101221401, area: '宣城', city: '宣城', province: '安徽' },

​    { code: 101221402, area: '泾县', city: '宣城', province: '安徽' },

​    { code: 101221403, area: '旌德', city: '宣城', province: '安徽' },

​    { code: 101221404, area: '宁国', city: '宣城', province: '安徽' },

​    { code: 101221405, area: '绩溪', city: '宣城', province: '安徽' },

​    { code: 101221406, area: '广德', city: '宣城', province: '安徽' },

​    { code: 101221407, area: '郎溪', city: '宣城', province: '安徽' },

​    { code: 101221501, area: '六安', city: '六安', province: '安徽' },

​    { code: 101221502, area: '霍邱', city: '六安', province: '安徽' },

​    { code: 101221503, area: '寿县', city: '六安', province: '安徽' },

​    { code: 101221505, area: '金寨', city: '六安', province: '安徽' },

​    { code: 101221506, area: '霍山', city: '六安', province: '安徽' },

​    { code: 101221507, area: '舒城', city: '六安', province: '安徽' },

​    { code: 101221601, area: '巢湖', city: '巢湖', province: '安徽' },

​    { code: 101221602, area: '庐江', city: '巢湖', province: '安徽' },

​    { code: 101221603, area: '无为', city: '巢湖', province: '安徽' },

​    { code: 101221604, area: '含山', city: '巢湖', province: '安徽' },

​    { code: 101221605, area: '和县', city: '巢湖', province: '安徽' },

​    { code: 101221701, area: '池州', city: '池州', province: '安徽' },

​    { code: 101221702, area: '东至', city: '池州', province: '安徽' },

​    { code: 101221703, area: '青阳', city: '池州', province: '安徽' },

​    { code: 101221704, area: '九华山', city: '池州', province: '安徽' },

​    { code: 101221705, area: '石台', city: '池州', province: '安徽' },

​    { code: 101230101, area: '福州', city: '福州', province: '福建' },

​    { code: 101230102, area: '闽清', city: '福州', province: '福建' },

​    { code: 101230103, area: '闽侯', city: '福州', province: '福建' },

​    { code: 101230104, area: '罗源', city: '福州', province: '福建' },

​    { code: 101230105, area: '连江', city: '福州', province: '福建' },

​    { code: 101230107, area: '永泰', city: '福州', province: '福建' },

​    { code: 101230108, area: '平潭', city: '福州', province: '福建' },

​    { code: 101230110, area: '长乐', city: '福州', province: '福建' },

​    { code: 101230111, area: '福清', city: '福州', province: '福建' },

​    { code: 101230201, area: '厦门', city: '厦门', province: '福建' },

​    { code: 101230202, area: '同安', city: '厦门', province: '福建' },

​    { code: 101230301, area: '宁德', city: '宁德', province: '福建' },

​    { code: 101230302, area: '古田', city: '宁德', province: '福建' },

​    { code: 101230303, area: '霞浦', city: '宁德', province: '福建' },

​    { code: 101230304, area: '寿宁', city: '宁德', province: '福建' },

​    { code: 101230305, area: '周宁', city: '宁德', province: '福建' },

​    { code: 101230306, area: '福安', city: '宁德', province: '福建' },

​    { code: 101230307, area: '柘荣', city: '宁德', province: '福建' },

​    { code: 101230308, area: '福鼎', city: '宁德', province: '福建' },

​    { code: 101230309, area: '屏南', city: '宁德', province: '福建' },

​    { code: 101230401, area: '莆田', city: '莆田', province: '福建' },

​    { code: 101230402, area: '仙游', city: '莆田', province: '福建' },

​    { code: 101230403, area: '秀屿港', city: '莆田', province: '福建' },

​    { code: 101230404, area: '涵江', city: '莆田', province: '福建' },

​    { code: 101230405, area: '秀屿', city: '莆田', province: '福建' },

​    { code: 101230406, area: '荔城', city: '莆田', province: '福建' },

​    { code: 101230407, area: '城厢', city: '莆田', province: '福建' },

​    { code: 101230501, area: '泉州', city: '泉州', province: '福建' },

​    { code: 101230502, area: '安溪', city: '泉州', province: '福建' },

​    { code: 101230504, area: '永春', city: '泉州', province: '福建' },

​    { code: 101230505, area: '德化', city: '泉州', province: '福建' },

​    { code: 101230506, area: '南安', city: '泉州', province: '福建' },

​    { code: 101230507, area: '崇武', city: '泉州', province: '福建' },

​    { code: 101230508, area: '惠安', city: '泉州', province: '福建' },

​    { code: 101230509, area: '晋江', city: '泉州', province: '福建' },

​    { code: 101230510, area: '石狮', city: '泉州', province: '福建' },

​    { code: 101230601, area: '漳州', city: '漳州', province: '福建' },

​    { code: 101230602, area: '长泰', city: '漳州', province: '福建' },

​    { code: 101230603, area: '南靖', city: '漳州', province: '福建' },

​    { code: 101230604, area: '平和', city: '漳州', province: '福建' },

​    { code: 101230605, area: '龙海', city: '漳州', province: '福建' },

​    { code: 101230606, area: '漳浦', city: '漳州', province: '福建' },

​    { code: 101230607, area: '诏安', city: '漳州', province: '福建' },

​    { code: 101230608, area: '东山', city: '漳州', province: '福建' },

​    { code: 101230609, area: '云霄', city: '漳州', province: '福建' },

​    { code: 101230610, area: '华安', city: '漳州', province: '福建' },

​    { code: 101230701, area: '龙岩', city: '龙岩', province: '福建' },

​    { code: 101230702, area: '长汀', city: '龙岩', province: '福建' },

​    { code: 101230703, area: '连城', city: '龙岩', province: '福建' },

​    { code: 101230704, area: '武平', city: '龙岩', province: '福建' },

​    { code: 101230705, area: '上杭', city: '龙岩', province: '福建' },

​    { code: 101230706, area: '永定', city: '龙岩', province: '福建' },

​    { code: 101230707, area: '漳平', city: '龙岩', province: '福建' },

​    { code: 101230801, area: '三明', city: '三明', province: '福建' },

​    { code: 101230802, area: '宁化', city: '三明', province: '福建' },

​    { code: 101230803, area: '清流', city: '三明', province: '福建' },

​    { code: 101230804, area: '泰宁', city: '三明', province: '福建' },

​    { code: 101230805, area: '将乐', city: '三明', province: '福建' },

​    { code: 101230806, area: '建宁', city: '三明', province: '福建' },

​    { code: 101230807, area: '明溪', city: '三明', province: '福建' },

​    { code: 101230808, area: '沙县', city: '三明', province: '福建' },

​    { code: 101230809, area: '尤溪', city: '三明', province: '福建' },

​    { code: 101230810, area: '永安', city: '三明', province: '福建' },

​    { code: 101230811, area: '大田', city: '三明', province: '福建' },

​    { code: 101230901, area: '南平', city: '南平', province: '福建' },

​    { code: 101230902, area: '顺昌', city: '南平', province: '福建' },

​    { code: 101230903, area: '光泽', city: '南平', province: '福建' },

​    { code: 101230904, area: '邵武', city: '南平', province: '福建' },

​    { code: 101230905, area: '武夷山', city: '南平', province: '福建' },

​    { code: 101230906, area: '浦城', city: '南平', province: '福建' },

​    { code: 101230907, area: '建阳', city: '南平', province: '福建' },

​    { code: 101230908, area: '松溪', city: '南平', province: '福建' },

​    { code: 101230909, area: '政和', city: '南平', province: '福建' },

​    { code: 101230910, area: '建瓯', city: '南平', province: '福建' },

​    { code: 101231001, area: '钓鱼岛', city: '钓鱼岛', province: '福建' },

​    { code: 101240101, area: '南昌', city: '南昌', province: '江西' },

​    { code: 101240102, area: '新建', city: '南昌', province: '江西' },

​    { code: 101240103, area: '南昌县', city: '南昌', province: '江西' },

​    { code: 101240104, area: '安义', city: '南昌', province: '江西' },

​    { code: 101240105, area: '进贤', city: '南昌', province: '江西' },

​    { code: 101240106, area: '莲塘', city: '南昌', province: '江西' },

​    { code: 101240201, area: '九江', city: '九江', province: '江西' },

​    { code: 101240202, area: '瑞昌', city: '九江', province: '江西' },

​    { code: 101240203, area: '庐山', city: '九江', province: '江西' },

​    { code: 101240204, area: '武宁', city: '九江', province: '江西' },

​    { code: 101240205, area: '德安', city: '九江', province: '江西' },

​    { code: 101240206, area: '永修', city: '九江', province: '江西' },

​    { code: 101240207, area: '湖口', city: '九江', province: '江西' },

​    { code: 101240208, area: '彭泽', city: '九江', province: '江西' },

​    { code: 101240209, area: '星子', city: '九江', province: '江西' },

​    { code: 101240210, area: '都昌', city: '九江', province: '江西' },

​    { code: 101240212, area: '修水', city: '九江', province: '江西' },

​    { code: 101240213, area: '澎泽', city: '九江', province: '江西' },

​    { code: 101240301, area: '上饶', city: '上饶', province: '江西' },

​    { code: 101240302, area: '鄱阳', city: '上饶', province: '江西' },

​    { code: 101240303, area: '婺源', city: '上饶', province: '江西' },

​    { code: 101240305, area: '余干', city: '上饶', province: '江西' },

​    { code: 101240306, area: '万年', city: '上饶', province: '江西' },

​    { code: 101240307, area: '德兴', city: '上饶', province: '江西' },

​    { code: 101240308, area: '上饶县', city: '上饶', province: '江西' },

​    { code: 101240309, area: '弋阳', city: '上饶', province: '江西' },

​    { code: 101240310, area: '横峰', city: '上饶', province: '江西' },

​    { code: 101240311, area: '铅山', city: '上饶', province: '江西' },

​    { code: 101240312, area: '玉山', city: '上饶', province: '江西' },

​    { code: 101240313, area: '广丰', city: '上饶', province: '江西' },

​    { code: 101240401, area: '抚州', city: '抚州', province: '江西' },

​    { code: 101240402, area: '广昌', city: '抚州', province: '江西' },

​    { code: 101240403, area: '乐安', city: '抚州', province: '江西' },

​    { code: 101240404, area: '崇仁', city: '抚州', province: '江西' },

​    { code: 101240405, area: '金溪', city: '抚州', province: '江西' },

​    { code: 101240406, area: '资溪', city: '抚州', province: '江西' },

​    { code: 101240407, area: '宜黄', city: '抚州', province: '江西' },

​    { code: 101240408, area: '南城', city: '抚州', province: '江西' },

​    { code: 101240409, area: '南丰', city: '抚州', province: '江西' },

​    { code: 101240410, area: '黎川', city: '抚州', province: '江西' },

​    { code: 101240411, area: '东乡', city: '抚州', province: '江西' },

​    { code: 101240501, area: '宜春', city: '宜春', province: '江西' },

​    { code: 101240502, area: '铜鼓', city: '宜春', province: '江西' },

​    { code: 101240503, area: '宜丰', city: '宜春', province: '江西' },

​    { code: 101240504, area: '万载', city: '宜春', province: '江西' },

​    { code: 101240505, area: '上高', city: '宜春', province: '江西' },

​    { code: 101240506, area: '靖安', city: '宜春', province: '江西' },

​    { code: 101240507, area: '奉新', city: '宜春', province: '江西' },

​    { code: 101240508, area: '高安', city: '宜春', province: '江西' },

​    { code: 101240509, area: '樟树', city: '宜春', province: '江西' },

​    { code: 101240510, area: '丰城', city: '宜春', province: '江西' },

​    { code: 101240601, area: '吉安', city: '吉安', province: '江西' },

​    { code: 101240602, area: '吉安县', city: '吉安', province: '江西' },

​    { code: 101240603, area: '吉水', city: '吉安', province: '江西' },

​    { code: 101240604, area: '新干', city: '吉安', province: '江西' },

​    { code: 101240605, area: '峡江', city: '吉安', province: '江西' },

​    { code: 101240606, area: '永丰', city: '吉安', province: '江西' },

​    { code: 101240607, area: '永新', city: '吉安', province: '江西' },

​    { code: 101240608, area: '井冈山', city: '吉安', province: '江西' },

​    { code: 101240609, area: '万安', city: '吉安', province: '江西' },

​    { code: 101240610, area: '遂川', city: '吉安', province: '江西' },

​    { code: 101240611, area: '泰和', city: '吉安', province: '江西' },

​    { code: 101240612, area: '安福', city: '吉安', province: '江西' },

​    { code: 101240613, area: '宁冈', city: '吉安', province: '江西' },

​    { code: 101240701, area: '赣州', city: '赣州', province: '江西' },

​    { code: 101240702, area: '崇义', city: '赣州', province: '江西' },

​    { code: 101240703, area: '上犹', city: '赣州', province: '江西' },

​    { code: 101240704, area: '南康', city: '赣州', province: '江西' },

​    { code: 101240705, area: '大余', city: '赣州', province: '江西' },

​    { code: 101240706, area: '信丰', city: '赣州', province: '江西' },

​    { code: 101240707, area: '宁都', city: '赣州', province: '江西' },

​    { code: 101240708, area: '石城', city: '赣州', province: '江西' },

​    { code: 101240709, area: '瑞金', city: '赣州', province: '江西' },

​    { code: 101240710, area: '于都', city: '赣州', province: '江西' },

​    { code: 101240711, area: '会昌', city: '赣州', province: '江西' },

​    { code: 101240712, area: '安远', city: '赣州', province: '江西' },

​    { code: 101240713, area: '全南', city: '赣州', province: '江西' },

​    { code: 101240714, area: '龙南', city: '赣州', province: '江西' },

​    { code: 101240715, area: '定南', city: '赣州', province: '江西' },

​    { code: 101240716, area: '寻乌', city: '赣州', province: '江西' },

​    { code: 101240717, area: '兴国', city: '赣州', province: '江西' },

​    { code: 101240718, area: '赣县', city: '赣州', province: '江西' },

​    { code: 101240801, area: '景德镇', city: '景德镇', province: '江西' },

​    { code: 101240802, area: '乐平', city: '景德镇', province: '江西' },

​    { code: 101240803, area: '浮梁', city: '景德镇', province: '江西' },

​    { code: 101240901, area: '萍乡', city: '萍乡', province: '江西' },

​    { code: 101240902, area: '莲花', city: '萍乡', province: '江西' },

​    { code: 101240903, area: '上栗', city: '萍乡', province: '江西' },

​    { code: 101240904, area: '安源', city: '萍乡', province: '江西' },

​    { code: 101240905, area: '芦溪', city: '萍乡', province: '江西' },

​    { code: 101240906, area: '湘东', city: '萍乡', province: '江西' },

​    { code: 101241001, area: '新余', city: '新余', province: '江西' },

​    { code: 101241002, area: '分宜', city: '新余', province: '江西' },

​    { code: 101241101, area: '鹰潭', city: '鹰潭', province: '江西' },

​    { code: 101241102, area: '余江', city: '鹰潭', province: '江西' },

​    { code: 101241103, area: '贵溪', city: '鹰潭', province: '江西' },

​    { code: 101250101, area: '长沙', city: '长沙', province: '湖南' },

​    { code: 101250102, area: '宁乡', city: '长沙', province: '湖南' },

​    { code: 101250103, area: '浏阳', city: '长沙', province: '湖南' },

​    { code: 101250104, area: '马坡岭', city: '长沙', province: '湖南' },

​    { code: 101250105, area: '望城', city: '长沙', province: '湖南' },

​    { code: 101250201, area: '湘潭', city: '湘潭', province: '湖南' },

​    { code: 101250202, area: '韶山', city: '湘潭', province: '湖南' },

​    { code: 101250203, area: '湘乡', city: '湘潭', province: '湖南' },

​    { code: 101250301, area: '株洲', city: '株洲', province: '湖南' },

​    { code: 101250302, area: '攸县', city: '株洲', province: '湖南' },

​    { code: 101250303, area: '醴陵', city: '株洲', province: '湖南' },

​    { code: 101250305, area: '茶陵', city: '株洲', province: '湖南' },

​    { code: 101250306, area: '炎陵', city: '株洲', province: '湖南' },

​    { code: 101250401, area: '衡阳', city: '衡阳', province: '湖南' },

​    { code: 101250402, area: '衡山', city: '衡阳', province: '湖南' },

​    { code: 101250403, area: '衡东', city: '衡阳', province: '湖南' },

​    { code: 101250404, area: '祁东', city: '衡阳', province: '湖南' },

​    { code: 101250405, area: '衡阳县', city: '衡阳', province: '湖南' },

​    { code: 101250406, area: '常宁', city: '衡阳', province: '湖南' },

​    { code: 101250407, area: '衡南', city: '衡阳', province: '湖南' },

​    { code: 101250408, area: '耒阳', city: '衡阳', province: '湖南' },

​    { code: 101250409, area: '南岳', city: '衡阳', province: '湖南' },

​    { code: 101250501, area: '郴州', city: '郴州', province: '湖南' },

​    { code: 101250502, area: '桂阳', city: '郴州', province: '湖南' },

​    { code: 101250503, area: '嘉禾', city: '郴州', province: '湖南' },

​    { code: 101250504, area: '宜章', city: '郴州', province: '湖南' },

​    { code: 101250505, area: '临武', city: '郴州', province: '湖南' },

​    { code: 101250507, area: '资兴', city: '郴州', province: '湖南' },

​    { code: 101250508, area: '汝城', city: '郴州', province: '湖南' },

​    { code: 101250509, area: '安仁', city: '郴州', province: '湖南' },

​    { code: 101250510, area: '永兴', city: '郴州', province: '湖南' },

​    { code: 101250511, area: '桂东', city: '郴州', province: '湖南' },

​    { code: 101250512, area: '苏仙', city: '郴州', province: '湖南' },

​    { code: 101250601, area: '常德', city: '常德', province: '湖南' },

​    { code: 101250602, area: '安乡', city: '常德', province: '湖南' },

​    { code: 101250603, area: '桃源', city: '常德', province: '湖南' },

​    { code: 101250604, area: '汉寿', city: '常德', province: '湖南' },

​    { code: 101250605, area: '澧县', city: '常德', province: '湖南' },

​    { code: 101250606, area: '临澧', city: '常德', province: '湖南' },

​    { code: 101250607, area: '石门', city: '常德', province: '湖南' },

​    { code: 101250608, area: '津市', city: '常德', province: '湖南' },

​    { code: 101250700, area: '益阳', city: '益阳', province: '湖南' },

​    { code: 101250701, area: '赫山区', city: '益阳', province: '湖南' },

​    { code: 101250702, area: '南县', city: '益阳', province: '湖南' },

​    { code: 101250703, area: '桃江', city: '益阳', province: '湖南' },

​    { code: 101250704, area: '安化', city: '益阳', province: '湖南' },

​    { code: 101250705, area: '沅江', city: '益阳', province: '湖南' },

​    { code: 101250801, area: '娄底', city: '娄底', province: '湖南' },

​    { code: 101250802, area: '双峰', city: '娄底', province: '湖南' },

​    { code: 101250803, area: '冷水江', city: '娄底', province: '湖南' },

​    { code: 101250805, area: '新化', city: '娄底', province: '湖南' },

​    { code: 101250806, area: '涟源', city: '娄底', province: '湖南' },

​    { code: 101250901, area: '邵阳', city: '邵阳', province: '湖南' },

​    { code: 101250902, area: '隆回', city: '邵阳', province: '湖南' },

​    { code: 101250903, area: '洞口', city: '邵阳', province: '湖南' },

​    { code: 101250904, area: '新邵', city: '邵阳', province: '湖南' },

​    { code: 101250905, area: '邵东', city: '邵阳', province: '湖南' },

​    { code: 101250906, area: '绥宁', city: '邵阳', province: '湖南' },

​    { code: 101250907, area: '新宁', city: '邵阳', province: '湖南' },

​    { code: 101250908, area: '武冈', city: '邵阳', province: '湖南' },

​    { code: 101250909, area: '城步', city: '邵阳', province: '湖南' },

​    { code: 101250910, area: '邵阳县', city: '邵阳', province: '湖南' },

​    { code: 101251001, area: '岳阳', city: '岳阳', province: '湖南' },

​    { code: 101251002, area: '华容', city: '岳阳', province: '湖南' },

​    { code: 101251003, area: '湘阴', city: '岳阳', province: '湖南' },

​    { code: 101251004, area: '汨罗', city: '岳阳', province: '湖南' },

​    { code: 101251005, area: '平江', city: '岳阳', province: '湖南' },

​    { code: 101251006, area: '临湘', city: '岳阳', province: '湖南' },

​    { code: 101251101, area: '张家界', city: '张家界', province: '湖南' },

​    { code: 101251102, area: '桑植', city: '张家界', province: '湖南' },

​    { code: 101251103, area: '慈利', city: '张家界', province: '湖南' },

​    { code: 101251104, area: '武陵源', city: '张家界', province: '湖南' },

​    { code: 101251201, area: '怀化', city: '怀化', province: '湖南' },

​    { code: 101251203, area: '沅陵', city: '怀化', province: '湖南' },

​    { code: 101251204, area: '辰溪', city: '怀化', province: '湖南' },

​    { code: 101251205, area: '靖州', city: '怀化', province: '湖南' },

​    { code: 101251206, area: '会同', city: '怀化', province: '湖南' },

​    { code: 101251207, area: '通道', city: '怀化', province: '湖南' },

​    { code: 101251208, area: '麻阳', city: '怀化', province: '湖南' },

​    { code: 101251209, area: '新晃', city: '怀化', province: '湖南' },

​    { code: 101251210, area: '芷江', city: '怀化', province: '湖南' },

​    { code: 101251211, area: '溆浦', city: '怀化', province: '湖南' },

​    { code: 101251212, area: '中方', city: '怀化', province: '湖南' },

​    { code: 101251213, area: '洪江', city: '怀化', province: '湖南' },

​    { code: 101251401, area: '永州', city: '永州', province: '湖南' },

​    { code: 101251402, area: '祁阳', city: '永州', province: '湖南' },

​    { code: 101251403, area: '东安', city: '永州', province: '湖南' },

​    { code: 101251404, area: '双牌', city: '永州', province: '湖南' },

​    { code: 101251405, area: '道县', city: '永州', province: '湖南' },

​    { code: 101251406, area: '宁远', city: '永州', province: '湖南' },

​    { code: 101251407, area: '江永', city: '永州', province: '湖南' },

​    { code: 101251408, area: '蓝山', city: '永州', province: '湖南' },

​    { code: 101251409, area: '新田', city: '永州', province: '湖南' },

​    { code: 101251410, area: '江华', city: '永州', province: '湖南' },

​    { code: 101251411, area: '冷水滩', city: '永州', province: '湖南' },

​    { code: 101251501, area: '吉首', city: '湘西', province: '湖南' },

​    { code: 101251502, area: '保靖', city: '湘西', province: '湖南' },

​    { code: 101251503, area: '永顺', city: '湘西', province: '湖南' },

​    { code: 101251504, area: '古丈', city: '湘西', province: '湖南' },

​    { code: 101251505, area: '凤凰', city: '湘西', province: '湖南' },

​    { code: 101251506, area: '泸溪', city: '湘西', province: '湖南' },

​    { code: 101251507, area: '龙山', city: '湘西', province: '湖南' },

​    { code: 101251508, area: '花垣', city: '湘西', province: '湖南' },

​    { code: 101260101, area: '贵阳', city: '贵阳', province: '贵州' },

​    { code: 101260102, area: '白云', city: '贵阳', province: '贵州' },

​    { code: 101260103, area: '花溪', city: '贵阳', province: '贵州' },

​    { code: 101260104, area: '乌当', city: '贵阳', province: '贵州' },

​    { code: 101260105, area: '息烽', city: '贵阳', province: '贵州' },

​    { code: 101260106, area: '开阳', city: '贵阳', province: '贵州' },

​    { code: 101260107, area: '修文', city: '贵阳', province: '贵州' },

​    { code: 101260108, area: '清镇', city: '贵阳', province: '贵州' },

​    { code: 101260109, area: '小河', city: '贵阳', province: '贵州' },

​    { code: 101260110, area: '云岩', city: '贵阳', province: '贵州' },

​    { code: 101260111, area: '南明', city: '贵阳', province: '贵州' },

​    { code: 101260201, area: '遵义', city: '遵义', province: '贵州' },

​    { code: 101260202, area: '遵义县', city: '遵义', province: '贵州' },

​    { code: 101260203, area: '仁怀', city: '遵义', province: '贵州' },

​    { code: 101260204, area: '绥阳', city: '遵义', province: '贵州' },

​    { code: 101260205, area: '湄潭', city: '遵义', province: '贵州' },

​    { code: 101260206, area: '凤冈', city: '遵义', province: '贵州' },

​    { code: 101260207, area: '桐梓', city: '遵义', province: '贵州' },

​    { code: 101260208, area: '赤水', city: '遵义', province: '贵州' },

​    { code: 101260209, area: '习水', city: '遵义', province: '贵州' },

​    { code: 101260210, area: '道真', city: '遵义', province: '贵州' },

​    { code: 101260211, area: '正安', city: '遵义', province: '贵州' },

​    { code: 101260212, area: '务川', city: '遵义', province: '贵州' },

​    { code: 101260213, area: '余庆', city: '遵义', province: '贵州' },

​    { code: 101260214, area: '汇川', city: '遵义', province: '贵州' },

​    { code: 101260215, area: '红花岗', city: '遵义', province: '贵州' },

​    { code: 101260301, area: '安顺', city: '安顺', province: '贵州' },

​    { code: 101260302, area: '普定', city: '安顺', province: '贵州' },

​    { code: 101260303, area: '镇宁', city: '安顺', province: '贵州' },

​    { code: 101260304, area: '平坝', city: '安顺', province: '贵州' },

​    { code: 101260305, area: '紫云', city: '安顺', province: '贵州' },

​    { code: 101260306, area: '关岭', city: '安顺', province: '贵州' },

​    { code: 101260401, area: '都匀', city: '黔南', province: '贵州' },

​    { code: 101260402, area: '贵定', city: '黔南', province: '贵州' },

​    { code: 101260403, area: '瓮安', city: '黔南', province: '贵州' },

​    { code: 101260404, area: '长顺', city: '黔南', province: '贵州' },

​    { code: 101260405, area: '福泉', city: '黔南', province: '贵州' },

​    { code: 101260406, area: '惠水', city: '黔南', province: '贵州' },

​    { code: 101260407, area: '龙里', city: '黔南', province: '贵州' },

​    { code: 101260408, area: '罗甸', city: '黔南', province: '贵州' },

​    { code: 101260409, area: '平塘', city: '黔南', province: '贵州' },

​    { code: 101260410, area: '独山', city: '黔南', province: '贵州' },

​    { code: 101260411, area: '三都', city: '黔南', province: '贵州' },

​    { code: 101260412, area: '荔波', city: '黔南', province: '贵州' },

​    { code: 101260501, area: '凯里', city: '黔东南', province: '贵州' },

​    { code: 101260502, area: '岑巩', city: '黔东南', province: '贵州' },

​    { code: 101260503, area: '施秉', city: '黔东南', province: '贵州' },

​    { code: 101260504, area: '镇远', city: '黔东南', province: '贵州' },

​    { code: 101260505, area: '黄平', city: '黔东南', province: '贵州' },

​    { code: 101260507, area: '麻江', city: '黔东南', province: '贵州' },

​    { code: 101260508, area: '丹寨', city: '黔东南', province: '贵州' },

​    { code: 101260509, area: '三穗', city: '黔东南', province: '贵州' },

​    { code: 101260510, area: '台江', city: '黔东南', province: '贵州' },

​    { code: 101260511, area: '剑河', city: '黔东南', province: '贵州' },

​    { code: 101260512, area: '雷山', city: '黔东南', province: '贵州' },

​    { code: 101260513, area: '黎平', city: '黔东南', province: '贵州' },

​    { code: 101260514, area: '天柱', city: '黔东南', province: '贵州' },

​    { code: 101260515, area: '锦屏', city: '黔东南', province: '贵州' },

​    { code: 101260516, area: '榕江', city: '黔东南', province: '贵州' },

​    { code: 101260517, area: '从江', city: '黔东南', province: '贵州' },

​    { code: 101260601, area: '铜仁', city: '铜仁', province: '贵州' },

​    { code: 101260602, area: '江口', city: '铜仁', province: '贵州' },

​    { code: 101260603, area: '玉屏', city: '铜仁', province: '贵州' },

​    { code: 101260604, area: '万山', city: '铜仁', province: '贵州' },

​    { code: 101260605, area: '思南', city: '铜仁', province: '贵州' },

​    { code: 101260607, area: '印江', city: '铜仁', province: '贵州' },

​    { code: 101260608, area: '石阡', city: '铜仁', province: '贵州' },

​    { code: 101260609, area: '沿河', city: '铜仁', province: '贵州' },

​    { code: 101260610, area: '德江', city: '铜仁', province: '贵州' },

​    { code: 101260611, area: '松桃', city: '铜仁', province: '贵州' },

​    { code: 101260701, area: '毕节', city: '毕节', province: '贵州' },

​    { code: 101260702, area: '赫章', city: '毕节', province: '贵州' },

​    { code: 101260703, area: '金沙', city: '毕节', province: '贵州' },

​    { code: 101260704, area: '威宁', city: '毕节', province: '贵州' },

​    { code: 101260705, area: '大方', city: '毕节', province: '贵州' },

​    { code: 101260706, area: '纳雍', city: '毕节', province: '贵州' },

​    { code: 101260707, area: '织金', city: '毕节', province: '贵州' },

​    { code: 101260708, area: '黔西', city: '毕节', province: '贵州' },

​    { code: 101260801, area: '水城', city: '六盘水', province: '贵州' },

​    { code: 101260802, area: '六枝', city: '六盘水', province: '贵州' },

​    { code: 101260804, area: '盘县', city: '六盘水', province: '贵州' },

​    { code: 101260901, area: '兴义', city: '黔西南', province: '贵州' },

​    { code: 101260902, area: '晴隆', city: '黔西南', province: '贵州' },

​    { code: 101260903, area: '兴仁', city: '黔西南', province: '贵州' },

​    { code: 101260904, area: '贞丰', city: '黔西南', province: '贵州' },

​    { code: 101260905, area: '望谟', city: '黔西南', province: '贵州' },

​    { code: 101260907, area: '安龙', city: '黔西南', province: '贵州' },

​    { code: 101260908, area: '册亨', city: '黔西南', province: '贵州' },

​    { code: 101260909, area: '普安', city: '黔西南', province: '贵州' },

​    { code: 101270101, area: '成都', city: '成都', province: '四川' },

​    { code: 101270102, area: '龙泉驿', city: '成都', province: '四川' },

​    { code: 101270103, area: '新都', city: '成都', province: '四川' },

​    { code: 101270104, area: '温江', city: '成都', province: '四川' },

​    { code: 101270105, area: '金堂', city: '成都', province: '四川' },

​    { code: 101270106, area: '双流', city: '成都', province: '四川' },

​    { code: 101270107, area: '郫县', city: '成都', province: '四川' },

​    { code: 101270108, area: '大邑', city: '成都', province: '四川' },

​    { code: 101270109, area: '蒲江', city: '成都', province: '四川' },

​    { code: 101270110, area: '新津', city: '成都', province: '四川' },

​    { code: 101270111, area: '都江堰', city: '成都', province: '四川' },

​    { code: 101270112, area: '彭州', city: '成都', province: '四川' },

​    { code: 101270113, area: '邛崃', city: '成都', province: '四川' },

​    { code: 101270114, area: '崇州', city: '成都', province: '四川' },

​    { code: 101270201, area: '攀枝花', city: '攀枝花', province: '四川' },

​    { code: 101270202, area: '仁和', city: '攀枝花', province: '四川' },

​    { code: 101270203, area: '米易', city: '攀枝花', province: '四川' },

​    { code: 101270204, area: '盐边', city: '攀枝花', province: '四川' },

​    { code: 101270301, area: '自贡', city: '自贡', province: '四川' },

​    { code: 101270302, area: '富顺', city: '自贡', province: '四川' },

​    { code: 101270303, area: '荣县', city: '自贡', province: '四川' },

​    { code: 101270401, area: '绵阳', city: '绵阳', province: '四川' },

​    { code: 101270402, area: '三台', city: '绵阳', province: '四川' },

​    { code: 101270403, area: '盐亭', city: '绵阳', province: '四川' },

​    { code: 101270404, area: '安县', city: '绵阳', province: '四川' },

​    { code: 101270405, area: '梓潼', city: '绵阳', province: '四川' },

​    { code: 101270406, area: '北川', city: '绵阳', province: '四川' },

​    { code: 101270407, area: '平武', city: '绵阳', province: '四川' },

​    { code: 101270408, area: '江油', city: '绵阳', province: '四川' },

​    { code: 101270501, area: '南充', city: '南充', province: '四川' },

​    { code: 101270502, area: '南部', city: '南充', province: '四川' },

​    { code: 101270503, area: '营山', city: '南充', province: '四川' },

​    { code: 101270504, area: '蓬安', city: '南充', province: '四川' },

​    { code: 101270505, area: '仪陇', city: '南充', province: '四川' },

​    { code: 101270506, area: '西充', city: '南充', province: '四川' },

​    { code: 101270507, area: '阆中', city: '南充', province: '四川' },

​    { code: 101270601, area: '达州', city: '达州', province: '四川' },

​    { code: 101270602, area: '宣汉', city: '达州', province: '四川' },

​    { code: 101270603, area: '开江', city: '达州', province: '四川' },

​    { code: 101270604, area: '大竹', city: '达州', province: '四川' },

​    { code: 101270605, area: '渠县', city: '达州', province: '四川' },

​    { code: 101270606, area: '万源', city: '达州', province: '四川' },

​    { code: 101270607, area: '通川', city: '达州', province: '四川' },

​    { code: 101270608, area: '达县', city: '达州', province: '四川' },

​    { code: 101270701, area: '遂宁', city: '遂宁', province: '四川' },

​    { code: 101270702, area: '蓬溪', city: '遂宁', province: '四川' },

​    { code: 101270703, area: '射洪', city: '遂宁', province: '四川' },

​    { code: 101270801, area: '广安', city: '广安', province: '四川' },

​    { code: 101270802, area: '岳池', city: '广安', province: '四川' },

​    { code: 101270803, area: '武胜', city: '广安', province: '四川' },

​    { code: 101270804, area: '邻水', city: '广安', province: '四川' },

​    { code: 101270805, area: '华蓥', city: '广安', province: '四川' },

​    { code: 101270901, area: '巴中', city: '巴中', province: '四川' },

​    { code: 101270902, area: '通江', city: '巴中', province: '四川' },

​    { code: 101270903, area: '南江', city: '巴中', province: '四川' },

​    { code: 101270904, area: '平昌', city: '巴中', province: '四川' },

​    { code: 101271001, area: '泸州', city: '泸州', province: '四川' },

​    { code: 101271003, area: '泸县', city: '泸州', province: '四川' },

​    { code: 101271004, area: '合江', city: '泸州', province: '四川' },

​    { code: 101271005, area: '叙永', city: '泸州', province: '四川' },

​    { code: 101271006, area: '古蔺', city: '泸州', province: '四川' },

​    { code: 101271007, area: '纳溪', city: '泸州', province: '四川' },

​    { code: 101271101, area: '宜宾', city: '宜宾', province: '四川' },

​    { code: 101271103, area: '宜宾县', city: '宜宾', province: '四川' },

​    { code: 101271104, area: '南溪', city: '宜宾', province: '四川' },

​    { code: 101271105, area: '江安', city: '宜宾', province: '四川' },

​    { code: 101271106, area: '长宁', city: '宜宾', province: '四川' },

​    { code: 101271107, area: '高县', city: '宜宾', province: '四川' },

​    { code: 101271108, area: '珙县', city: '宜宾', province: '四川' },

​    { code: 101271109, area: '筠连', city: '宜宾', province: '四川' },

​    { code: 101271110, area: '兴文', city: '宜宾', province: '四川' },

​    { code: 101271111, area: '屏山', city: '宜宾', province: '四川' },

​    { code: 101271201, area: '内江', city: '内江', province: '四川' },

​    { code: 101271202, area: '东兴', city: '内江', province: '四川' },

​    { code: 101271203, area: '威远', city: '内江', province: '四川' },

​    { code: 101271204, area: '资中', city: '内江', province: '四川' },

​    { code: 101271205, area: '隆昌', city: '内江', province: '四川' },

​    { code: 101271301, area: '资阳', city: '资阳', province: '四川' },

​    { code: 101271302, area: '安岳', city: '资阳', province: '四川' },

​    { code: 101271303, area: '乐至', city: '资阳', province: '四川' },

​    { code: 101271304, area: '简阳', city: '资阳', province: '四川' },

​    { code: 101271401, area: '乐山', city: '乐山', province: '四川' },

​    { code: 101271402, area: '犍为', city: '乐山', province: '四川' },

​    { code: 101271403, area: '井研', city: '乐山', province: '四川' },

​    { code: 101271404, area: '夹江', city: '乐山', province: '四川' },

​    { code: 101271405, area: '沐川', city: '乐山', province: '四川' },

​    { code: 101271406, area: '峨边', city: '乐山', province: '四川' },

​    { code: 101271407, area: '马边', city: '乐山', province: '四川' },

​    { code: 101271408, area: '峨眉', city: '乐山', province: '四川' },

​    { code: 101271409, area: '峨眉山', city: '乐山', province: '四川' },

​    { code: 101271501, area: '眉山', city: '眉山', province: '四川' },

​    { code: 101271502, area: '仁寿', city: '眉山', province: '四川' },

​    { code: 101271503, area: '彭山', city: '眉山', province: '四川' },

​    { code: 101271504, area: '洪雅', city: '眉山', province: '四川' },

​    { code: 101271505, area: '丹棱', city: '眉山', province: '四川' },

​    { code: 101271506, area: '青神', city: '眉山', province: '四川' },

​    { code: 101271601, area: '凉山', city: '凉山', province: '四川' },

​    { code: 101271603, area: '木里', city: '凉山', province: '四川' },

​    { code: 101271604, area: '盐源', city: '凉山', province: '四川' },

​    { code: 101271605, area: '德昌', city: '凉山', province: '四川' },

​    { code: 101271606, area: '会理', city: '凉山', province: '四川' },

​    { code: 101271607, area: '会东', city: '凉山', province: '四川' },

​    { code: 101271608, area: '宁南', city: '凉山', province: '四川' },

​    { code: 101271609, area: '普格', city: '凉山', province: '四川' },

​    { code: 101271610, area: '西昌', city: '凉山', province: '四川' },

​    { code: 101271611, area: '金阳', city: '凉山', province: '四川' },

​    { code: 101271612, area: '昭觉', city: '凉山', province: '四川' },

​    { code: 101271613, area: '喜德', city: '凉山', province: '四川' },

​    { code: 101271614, area: '冕宁', city: '凉山', province: '四川' },

​    { code: 101271615, area: '越西', city: '凉山', province: '四川' },

​    { code: 101271616, area: '甘洛', city: '凉山', province: '四川' },

​    { code: 101271617, area: '雷波', city: '凉山', province: '四川' },

​    { code: 101271618, area: '美姑', city: '凉山', province: '四川' },

​    { code: 101271619, area: '布拖', city: '凉山', province: '四川' },

​    { code: 101271701, area: '雅安', city: '雅安', province: '四川' },

​    { code: 101271702, area: '名山', city: '雅安', province: '四川' },

​    { code: 101271703, area: '荥经', city: '雅安', province: '四川' },

​    { code: 101271704, area: '汉源', city: '雅安', province: '四川' },

​    { code: 101271705, area: '石棉', city: '雅安', province: '四川' },

​    { code: 101271706, area: '天全', city: '雅安', province: '四川' },

​    { code: 101271707, area: '芦山', city: '雅安', province: '四川' },

​    { code: 101271708, area: '宝兴', city: '雅安', province: '四川' },

​    { code: 101271801, area: '甘孜', city: '甘孜', province: '四川' },

​    { code: 101271802, area: '康定', city: '甘孜', province: '四川' },

​    { code: 101271803, area: '泸定', city: '甘孜', province: '四川' },

​    { code: 101271804, area: '丹巴', city: '甘孜', province: '四川' },

​    { code: 101271805, area: '九龙', city: '甘孜', province: '四川' },

​    { code: 101271806, area: '雅江', city: '甘孜', province: '四川' },

​    { code: 101271807, area: '道孚', city: '甘孜', province: '四川' },

​    { code: 101271808, area: '炉霍', city: '甘孜', province: '四川' },

​    { code: 101271809, area: '新龙', city: '甘孜', province: '四川' },

​    { code: 101271810, area: '德格', city: '甘孜', province: '四川' },

​    { code: 101271811, area: '白玉', city: '甘孜', province: '四川' },

​    { code: 101271812, area: '石渠', city: '甘孜', province: '四川' },

​    { code: 101271813, area: '色达', city: '甘孜', province: '四川' },

​    { code: 101271814, area: '理塘', city: '甘孜', province: '四川' },

​    { code: 101271815, area: '巴塘', city: '甘孜', province: '四川' },

​    { code: 101271816, area: '乡城', city: '甘孜', province: '四川' },

​    { code: 101271817, area: '稻城', city: '甘孜', province: '四川' },

​    { code: 101271818, area: '得荣', city: '甘孜', province: '四川' },

​    { code: 101271901, area: '阿坝', city: '阿坝', province: '四川' },

​    { code: 101271902, area: '汶川', city: '阿坝', province: '四川' },

​    { code: 101271903, area: '理县', city: '阿坝', province: '四川' },

​    { code: 101271904, area: '茂县', city: '阿坝', province: '四川' },

​    { code: 101271905, area: '松潘', city: '阿坝', province: '四川' },

​    { code: 101271906, area: '九寨沟', city: '阿坝', province: '四川' },

​    { code: 101271907, area: '金川', city: '阿坝', province: '四川' },

​    { code: 101271908, area: '小金', city: '阿坝', province: '四川' },

​    { code: 101271909, area: '黑水', city: '阿坝', province: '四川' },

​    { code: 101271910, area: '马尔康', city: '阿坝', province: '四川' },

​    { code: 101271911, area: '壤塘', city: '阿坝', province: '四川' },

​    { code: 101271912, area: '若尔盖', city: '阿坝', province: '四川' },

​    { code: 101271913, area: '红原', city: '阿坝', province: '四川' },

​    { code: 101271914, area: '南坪', city: '阿坝', province: '四川' },

​    { code: 101272001, area: '德阳', city: '德阳', province: '四川' },

​    { code: 101272002, area: '中江', city: '德阳', province: '四川' },

​    { code: 101272003, area: '广汉', city: '德阳', province: '四川' },

​    { code: 101272004, area: '什邡', city: '德阳', province: '四川' },

​    { code: 101272005, area: '绵竹', city: '德阳', province: '四川' },

​    { code: 101272006, area: '罗江', city: '德阳', province: '四川' },

​    { code: 101272101, area: '广元', city: '广元', province: '四川' },

​    { code: 101272102, area: '旺苍', city: '广元', province: '四川' },

​    { code: 101272103, area: '青川', city: '广元', province: '四川' },

​    { code: 101272104, area: '剑阁', city: '广元', province: '四川' },

​    { code: 101272105, area: '苍溪', city: '广元', province: '四川' },

​    { code: 101280101, area: '广州', city: '广州', province: '广东' },

​    { code: 101280102, area: '番禺', city: '广州', province: '广东' },

​    { code: 101280103, area: '从化', city: '广州', province: '广东' },

​    { code: 101280104, area: '增城', city: '广州', province: '广东' },

​    { code: 101280105, area: '花都', city: '广州', province: '广东' },

​    { code: 101280201, area: '韶关', city: '韶关', province: '广东' },

​    { code: 101280202, area: '乳源', city: '韶关', province: '广东' },

​    { code: 101280203, area: '始兴', city: '韶关', province: '广东' },

​    { code: 101280204, area: '翁源', city: '韶关', province: '广东' },

​    { code: 101280205, area: '乐昌', city: '韶关', province: '广东' },

​    { code: 101280206, area: '仁化', city: '韶关', province: '广东' },

​    { code: 101280207, area: '南雄', city: '韶关', province: '广东' },

​    { code: 101280208, area: '新丰', city: '韶关', province: '广东' },

​    { code: 101280209, area: '曲江', city: '韶关', province: '广东' },

​    { code: 101280210, area: '浈江', city: '韶关', province: '广东' },

​    { code: 101280211, area: '武江', city: '韶关', province: '广东' },

​    { code: 101280301, area: '惠州', city: '惠州', province: '广东' },

​    { code: 101280302, area: '博罗', city: '惠州', province: '广东' },

​    { code: 101280303, area: '惠阳', city: '惠州', province: '广东' },

​    { code: 101280304, area: '惠东', city: '惠州', province: '广东' },

​    { code: 101280305, area: '龙门', city: '惠州', province: '广东' },

​    { code: 101280401, area: '梅州', city: '梅州', province: '广东' },

​    { code: 101280402, area: '兴宁', city: '梅州', province: '广东' },

​    { code: 101280403, area: '蕉岭', city: '梅州', province: '广东' },

​    { code: 101280404, area: '大埔', city: '梅州', province: '广东' },

​    { code: 101280406, area: '丰顺', city: '梅州', province: '广东' },

​    { code: 101280407, area: '平远', city: '梅州', province: '广东' },

​    { code: 101280408, area: '五华', city: '梅州', province: '广东' },

​    { code: 101280409, area: '梅县', city: '梅州', province: '广东' },

​    { code: 101280501, area: '汕头', city: '汕头', province: '广东' },

​    { code: 101280502, area: '潮阳', city: '汕头', province: '广东' },

​    { code: 101280503, area: '澄海', city: '汕头', province: '广东' },

​    { code: 101280504, area: '南澳', city: '汕头', province: '广东' },

​    { code: 101280601, area: '深圳', city: '深圳', province: '广东' },

​    { code: 101280701, area: '珠海', city: '珠海', province: '广东' },

​    { code: 101280702, area: '斗门', city: '珠海', province: '广东' },

​    { code: 101280703, area: '金湾', city: '珠海', province: '广东' },

​    { code: 101280800, area: '佛山', city: '佛山', province: '广东' },

​    { code: 101280801, area: '顺德', city: '佛山', province: '广东' },

​    { code: 101280802, area: '三水', city: '佛山', province: '广东' },

​    { code: 101280803, area: '南海', city: '佛山', province: '广东' },

​    { code: 101280804, area: '高明', city: '佛山', province: '广东' },

​    { code: 101280901, area: '肇庆', city: '肇庆', province: '广东' },

​    { code: 101280902, area: '广宁', city: '肇庆', province: '广东' },

​    { code: 101280903, area: '四会', city: '肇庆', province: '广东' },

​    { code: 101280905, area: '德庆', city: '肇庆', province: '广东' },

​    { code: 101280906, area: '怀集', city: '肇庆', province: '广东' },

​    { code: 101280907, area: '封开', city: '肇庆', province: '广东' },

​    { code: 101280908, area: '高要', city: '肇庆', province: '广东' },

​    { code: 101281001, area: '湛江', city: '湛江', province: '广东' },

​    { code: 101281002, area: '吴川', city: '湛江', province: '广东' },

​    { code: 101281003, area: '雷州', city: '湛江', province: '广东' },

​    { code: 101281004, area: '徐闻', city: '湛江', province: '广东' },

​    { code: 101281005, area: '廉江', city: '湛江', province: '广东' },

​    { code: 101281006, area: '赤坎', city: '湛江', province: '广东' },

​    { code: 101281007, area: '遂溪', city: '湛江', province: '广东' },

​    { code: 101281008, area: '坡头', city: '湛江', province: '广东' },

​    { code: 101281009, area: '霞山', city: '湛江', province: '广东' },

​    { code: 101281010, area: '麻章', city: '湛江', province: '广东' },

​    { code: 101281101, area: '江门', city: '江门', province: '广东' },

​    { code: 101281103, area: '开平', city: '江门', province: '广东' },

​    { code: 101281104, area: '新会', city: '江门', province: '广东' },

​    { code: 101281105, area: '恩平', city: '江门', province: '广东' },

​    { code: 101281106, area: '台山', city: '江门', province: '广东' },

​    { code: 101281107, area: '蓬江', city: '江门', province: '广东' },

​    { code: 101281108, area: '鹤山', city: '江门', province: '广东' },

​    { code: 101281109, area: '江海', city: '江门', province: '广东' },

​    { code: 101281201, area: '河源', city: '河源', province: '广东' },

​    { code: 101281202, area: '紫金', city: '河源', province: '广东' },

​    { code: 101281203, area: '连平', city: '河源', province: '广东' },

​    { code: 101281204, area: '和平', city: '河源', province: '广东' },

​    { code: 101281205, area: '龙川', city: '河源', province: '广东' },

​    { code: 101281206, area: '东源', city: '河源', province: '广东' },

​    { code: 101281301, area: '清远', city: '清远', province: '广东' },

​    { code: 101281302, area: '连南', city: '清远', province: '广东' },

​    { code: 101281303, area: '连州', city: '清远', province: '广东' },

​    { code: 101281304, area: '连山', city: '清远', province: '广东' },

​    { code: 101281305, area: '阳山', city: '清远', province: '广东' },

​    { code: 101281306, area: '佛冈', city: '清远', province: '广东' },

​    { code: 101281307, area: '英德', city: '清远', province: '广东' },

​    { code: 101281308, area: '清新', city: '清远', province: '广东' },

​    { code: 101281401, area: '云浮', city: '云浮', province: '广东' },

​    { code: 101281402, area: '罗定', city: '云浮', province: '广东' },

​    { code: 101281403, area: '新兴', city: '云浮', province: '广东' },

​    { code: 101281404, area: '郁南', city: '云浮', province: '广东' },

​    { code: 101281406, area: '云安', city: '云浮', province: '广东' },

​    { code: 101281501, area: '潮州', city: '潮州', province: '广东' },

​    { code: 101281502, area: '饶平', city: '潮州', province: '广东' },

​    { code: 101281503, area: '潮安', city: '潮州', province: '广东' },

​    { code: 101281601, area: '东莞', city: '东莞', province: '广东' },

​    { code: 101281701, area: '中山', city: '中山', province: '广东' },

​    { code: 101281801, area: '阳江', city: '阳江', province: '广东' },

​    { code: 101281802, area: '阳春', city: '阳江', province: '广东' },

​    { code: 101281803, area: '阳东', city: '阳江', province: '广东' },

​    { code: 101281804, area: '阳西', city: '阳江', province: '广东' },

​    { code: 101281901, area: '揭阳', city: '揭阳', province: '广东' },

​    { code: 101281902, area: '揭西', city: '揭阳', province: '广东' },

​    { code: 101281903, area: '普宁', city: '揭阳', province: '广东' },

​    { code: 101281904, area: '惠来', city: '揭阳', province: '广东' },

​    { code: 101281905, area: '揭东', city: '揭阳', province: '广东' },

​    { code: 101282001, area: '茂名', city: '茂名', province: '广东' },

​    { code: 101282002, area: '高州', city: '茂名', province: '广东' },

​    { code: 101282003, area: '化州', city: '茂名', province: '广东' },

​    { code: 101282004, area: '电白', city: '茂名', province: '广东' },

​    { code: 101282005, area: '信宜', city: '茂名', province: '广东' },

​    { code: 101282006, area: '茂港', city: '茂名', province: '广东' },

​    { code: 101282101, area: '汕尾', city: '汕尾', province: '广东' },

​    { code: 101282102, area: '海丰', city: '汕尾', province: '广东' },

​    { code: 101282103, area: '陆丰', city: '汕尾', province: '广东' },

​    { code: 101282104, area: '陆河', city: '汕尾', province: '广东' },

​    { code: 101290101, area: '昆明', city: '昆明', province: '云南' },

​    { code: 101290103, area: '东川', city: '昆明', province: '云南' },

​    { code: 101290104, area: '寻甸', city: '昆明', province: '云南' },

​    { code: 101290105, area: '晋宁', city: '昆明', province: '云南' },

​    { code: 101290106, area: '宜良', city: '昆明', province: '云南' },

​    { code: 101290107, area: '石林', city: '昆明', province: '云南' },

​    { code: 101290108, area: '呈贡', city: '昆明', province: '云南' },

​    { code: 101290109, area: '富民', city: '昆明', province: '云南' },

​    { code: 101290110, area: '嵩明', city: '昆明', province: '云南' },

​    { code: 101290111, area: '禄劝', city: '昆明', province: '云南' },

​    { code: 101290112, area: '安宁', city: '昆明', province: '云南' },

​    { code: 101290113, area: '太华山', city: '昆明', province: '云南' },

​    { code: 101290201, area: '大理', city: '大理', province: '云南' },

​    { code: 101290202, area: '云龙', city: '大理', province: '云南' },

​    { code: 101290203, area: '漾濞', city: '大理', province: '云南' },

​    { code: 101290204, area: '永平', city: '大理', province: '云南' },

​    { code: 101290205, area: '宾川', city: '大理', province: '云南' },

​    { code: 101290206, area: '弥渡', city: '大理', province: '云南' },

​    { code: 101290207, area: '祥云', city: '大理', province: '云南' },

​    { code: 101290208, area: '巍山', city: '大理', province: '云南' },

​    { code: 101290209, area: '剑川', city: '大理', province: '云南' },

​    { code: 101290210, area: '洱源', city: '大理', province: '云南' },

​    { code: 101290211, area: '鹤庆', city: '大理', province: '云南' },

​    { code: 101290212, area: '南涧', city: '大理', province: '云南' },

​    { code: 101290301, area: '红河', city: '红河', province: '云南' },

​    { code: 101290302, area: '石屏', city: '红河', province: '云南' },

​    { code: 101290303, area: '建水', city: '红河', province: '云南' },

​    { code: 101290304, area: '弥勒', city: '红河', province: '云南' },

​    { code: 101290305, area: '元阳', city: '红河', province: '云南' },

​    { code: 101290306, area: '绿春', city: '红河', province: '云南' },

​    { code: 101290307, area: '开远', city: '红河', province: '云南' },

​    { code: 101290308, area: '个旧', city: '红河', province: '云南' },

​    { code: 101290309, area: '蒙自', city: '红河', province: '云南' },

​    { code: 101290310, area: '屏边', city: '红河', province: '云南' },

​    { code: 101290311, area: '泸西', city: '红河', province: '云南' },

​    { code: 101290312, area: '金平', city: '红河', province: '云南' },

​    { code: 101290313, area: '河口', city: '红河', province: '云南' },

​    { code: 101290401, area: '曲靖', city: '曲靖', province: '云南' },

​    { code: 101290402, area: '沾益', city: '曲靖', province: '云南' },

​    { code: 101290403, area: '陆良', city: '曲靖', province: '云南' },

​    { code: 101290404, area: '富源', city: '曲靖', province: '云南' },

​    { code: 101290405, area: '马龙', city: '曲靖', province: '云南' },

​    { code: 101290406, area: '师宗', city: '曲靖', province: '云南' },

​    { code: 101290407, area: '罗平', city: '曲靖', province: '云南' },

​    { code: 101290408, area: '会泽', city: '曲靖', province: '云南' },

​    { code: 101290409, area: '宣威', city: '曲靖', province: '云南' },

​    { code: 101290501, area: '保山', city: '保山', province: '云南' },

​    { code: 101290503, area: '龙陵', city: '保山', province: '云南' },

​    { code: 101290504, area: '施甸', city: '保山', province: '云南' },

​    { code: 101290505, area: '昌宁', city: '保山', province: '云南' },

​    { code: 101290506, area: '腾冲', city: '保山', province: '云南' },

​    { code: 101290601, area: '文山', city: '文山', province: '云南' },

​    { code: 101290602, area: '西畴', city: '文山', province: '云南' },

​    { code: 101290603, area: '马关', city: '文山', province: '云南' },

​    { code: 101290604, area: '麻栗坡', city: '文山', province: '云南' },

​    { code: 101290605, area: '砚山', city: '文山', province: '云南' },

​    { code: 101290606, area: '丘北', city: '文山', province: '云南' },

​    { code: 101290607, area: '广南', city: '文山', province: '云南' },

​    { code: 101290608, area: '富宁', city: '文山', province: '云南' },

​    { code: 101290701, area: '玉溪', city: '玉溪', province: '云南' },

​    { code: 101290702, area: '澄江', city: '玉溪', province: '云南' },

​    { code: 101290703, area: '江川', city: '玉溪', province: '云南' },

​    { code: 101290704, area: '通海', city: '玉溪', province: '云南' },

​    { code: 101290705, area: '华宁', city: '玉溪', province: '云南' },

​    { code: 101290706, area: '新平', city: '玉溪', province: '云南' },

​    { code: 101290707, area: '易门', city: '玉溪', province: '云南' },

​    { code: 101290708, area: '峨山', city: '玉溪', province: '云南' },

​    { code: 101290709, area: '元江', city: '玉溪', province: '云南' },

​    { code: 101290801, area: '楚雄', city: '楚雄', province: '云南' },

​    { code: 101290802, area: '大姚', city: '楚雄', province: '云南' },

​    { code: 101290803, area: '元谋', city: '楚雄', province: '云南' },

​    { code: 101290804, area: '姚安', city: '楚雄', province: '云南' },

​    { code: 101290805, area: '牟定', city: '楚雄', province: '云南' },

​    { code: 101290806, area: '南华', city: '楚雄', province: '云南' },

​    { code: 101290807, area: '武定', city: '楚雄', province: '云南' },

​    { code: 101290808, area: '禄丰', city: '楚雄', province: '云南' },

​    { code: 101290809, area: '双柏', city: '楚雄', province: '云南' },

​    { code: 101290810, area: '永仁', city: '楚雄', province: '云南' },

​    { code: 101290901, area: '普洱', city: '普洱', province: '云南' },

​    { code: 101290902, area: '景谷', city: '普洱', province: '云南' },

​    { code: 101290903, area: '景东', city: '普洱', province: '云南' },

​    { code: 101290904, area: '澜沧', city: '普洱', province: '云南' },

​    { code: 101290906, area: '墨江', city: '普洱', province: '云南' },

​    { code: 101290907, area: '江城', city: '普洱', province: '云南' },

​    { code: 101290908, area: '孟连', city: '普洱', province: '云南' },

​    { code: 101290909, area: '西盟', city: '普洱', province: '云南' },

​    { code: 101290911, area: '镇沅', city: '普洱', province: '云南' },

​    { code: 101290912, area: '宁洱', city: '普洱', province: '云南' },

​    { code: 101291001, area: '昭通', city: '昭通', province: '云南' },

​    { code: 101291002, area: '鲁甸', city: '昭通', province: '云南' },

​    { code: 101291003, area: '彝良', city: '昭通', province: '云南' },

​    { code: 101291004, area: '镇雄', city: '昭通', province: '云南' },

​    { code: 101291005, area: '威信', city: '昭通', province: '云南' },

​    { code: 101291006, area: '巧家', city: '昭通', province: '云南' },

​    { code: 101291007, area: '绥江', city: '昭通', province: '云南' },

​    { code: 101291008, area: '永善', city: '昭通', province: '云南' },

​    { code: 101291009, area: '盐津', city: '昭通', province: '云南' },

​    { code: 101291010, area: '大关', city: '昭通', province: '云南' },

​    { code: 101291011, area: '水富', city: '昭通', province: '云南' },

​    { code: 101291101, area: '临沧', city: '临沧', province: '云南' },

​    { code: 101291102, area: '沧源', city: '临沧', province: '云南' },

​    { code: 101291103, area: '耿马', city: '临沧', province: '云南' },

​    { code: 101291104, area: '双江', city: '临沧', province: '云南' },

​    { code: 101291105, area: '凤庆', city: '临沧', province: '云南' },

​    { code: 101291106, area: '永德', city: '临沧', province: '云南' },

​    { code: 101291107, area: '云县', city: '临沧', province: '云南' },

​    { code: 101291108, area: '镇康', city: '临沧', province: '云南' },

​    { code: 101291201, area: '怒江', city: '怒江', province: '云南' },

​    { code: 101291203, area: '福贡', city: '怒江', province: '云南' },

​    { code: 101291204, area: '兰坪', city: '怒江', province: '云南' },

​    { code: 101291205, area: '泸水', city: '怒江', province: '云南' },

​    { code: 101291206, area: '六库', city: '怒江', province: '云南' },

​    { code: 101291207, area: '贡山', city: '怒江', province: '云南' },

​    { code: 101291301, area: '香格里拉', city: '迪庆', province: '云南' },

​    { code: 101291302, area: '德钦', city: '迪庆', province: '云南' },

​    { code: 101291303, area: '维西', city: '迪庆', province: '云南' },

​    { code: 101291304, area: '中甸', city: '迪庆', province: '云南' },

​    { code: 101291401, area: '丽江', city: '丽江', province: '云南' },

​    { code: 101291402, area: '永胜', city: '丽江', province: '云南' },

​    { code: 101291403, area: '华坪', city: '丽江', province: '云南' },

​    { code: 101291404, area: '宁蒗', city: '丽江', province: '云南' },

​    { code: 101291501, area: '德宏', city: '德宏', province: '云南' },

​    { code: 101291503, area: '陇川', city: '德宏', province: '云南' },

​    { code: 101291504, area: '盈江', city: '德宏', province: '云南' },

​    { code: 101291506, area: '瑞丽', city: '德宏', province: '云南' },

​    { code: 101291507, area: '梁河', city: '德宏', province: '云南' },

​    { code: 101291508, area: '潞西', city: '德宏', province: '云南' },

​    { code: 101291601, area: '景洪', city: '西双版纳', province: '云南' },

​    { code: 101291603, area: '勐海', city: '西双版纳', province: '云南' },

​    { code: 101291605, area: '勐腊', city: '西双版纳', province: '云南' },

​    { code: 101300101, area: '南宁', city: '南宁', province: '广西' },

​    { code: 101300103, area: '邕宁', city: '南宁', province: '广西' },

​    { code: 101300104, area: '横县', city: '南宁', province: '广西' },

​    { code: 101300105, area: '隆安', city: '南宁', province: '广西' },

​    { code: 101300106, area: '马山', city: '南宁', province: '广西' },

​    { code: 101300107, area: '上林', city: '南宁', province: '广西' },

​    { code: 101300108, area: '武鸣', city: '南宁', province: '广西' },

​    { code: 101300109, area: '宾阳', city: '南宁', province: '广西' },

​    { code: 101300201, area: '崇左', city: '崇左', province: '广西' },

​    { code: 101300202, area: '天等', city: '崇左', province: '广西' },

​    { code: 101300203, area: '龙州', city: '崇左', province: '广西' },

​    { code: 101300204, area: '凭祥', city: '崇左', province: '广西' },

​    { code: 101300205, area: '大新', city: '崇左', province: '广西' },

​    { code: 101300206, area: '扶绥', city: '崇左', province: '广西' },

​    { code: 101300207, area: '宁明', city: '崇左', province: '广西' },

​    { code: 101300301, area: '柳州', city: '柳州', province: '广西' },

​    { code: 101300302, area: '柳城', city: '柳州', province: '广西' },

​    { code: 101300304, area: '鹿寨', city: '柳州', province: '广西' },

​    { code: 101300305, area: '柳江', city: '柳州', province: '广西' },

​    { code: 101300306, area: '融安', city: '柳州', province: '广西' },

​    { code: 101300307, area: '融水', city: '柳州', province: '广西' },

​    { code: 101300308, area: '三江', city: '柳州', province: '广西' },

​    { code: 101300401, area: '来宾', city: '来宾', province: '广西' },

​    { code: 101300402, area: '忻城', city: '来宾', province: '广西' },

​    { code: 101300403, area: '金秀', city: '来宾', province: '广西' },

​    { code: 101300404, area: '象州', city: '来宾', province: '广西' },

​    { code: 101300405, area: '武宣', city: '来宾', province: '广西' },

​    { code: 101300406, area: '合山', city: '来宾', province: '广西' },

​    { code: 101300501, area: '桂林', city: '桂林', province: '广西' },

​    { code: 101300503, area: '龙胜', city: '桂林', province: '广西' },

​    { code: 101300504, area: '永福', city: '桂林', province: '广西' },

​    { code: 101300505, area: '临桂', city: '桂林', province: '广西' },

​    { code: 101300506, area: '兴安', city: '桂林', province: '广西' },

​    { code: 101300507, area: '灵川', city: '桂林', province: '广西' },

​    { code: 101300508, area: '全州', city: '桂林', province: '广西' },

​    { code: 101300509, area: '灌阳', city: '桂林', province: '广西' },

​    { code: 101300510, area: '阳朔', city: '桂林', province: '广西' },

​    { code: 101300511, area: '恭城', city: '桂林', province: '广西' },

​    { code: 101300512, area: '平乐', city: '桂林', province: '广西' },

​    { code: 101300513, area: '荔浦', city: '桂林', province: '广西' },

​    { code: 101300514, area: '资源', city: '桂林', province: '广西' },

​    { code: 101300601, area: '梧州', city: '梧州', province: '广西' },

​    { code: 101300602, area: '藤县', city: '梧州', province: '广西' },

​    { code: 101300604, area: '苍梧', city: '梧州', province: '广西' },

​    { code: 101300605, area: '蒙山', city: '梧州', province: '广西' },

​    { code: 101300606, area: '岑溪', city: '梧州', province: '广西' },

​    { code: 101300607, area: '长洲', city: '梧州', province: '广西' },

​    { code: 101300701, area: '贺州', city: '贺州', province: '广西' },

​    { code: 101300702, area: '昭平', city: '贺州', province: '广西' },

​    { code: 101300703, area: '富川', city: '贺州', province: '广西' },

​    { code: 101300704, area: '钟山', city: '贺州', province: '广西' },

​    { code: 101300801, area: '贵港', city: '贵港', province: '广西' },

​    { code: 101300802, area: '桂平', city: '贵港', province: '广西' },

​    { code: 101300803, area: '平南', city: '贵港', province: '广西' },

​    { code: 101300901, area: '玉林', city: '玉林', province: '广西' },

​    { code: 101300902, area: '博白', city: '玉林', province: '广西' },

​    { code: 101300903, area: '北流', city: '玉林', province: '广西' },

​    { code: 101300904, area: '容县', city: '玉林', province: '广西' },

​    { code: 101300905, area: '陆川', city: '玉林', province: '广西' },

​    { code: 101300906, area: '兴业', city: '玉林', province: '广西' },

​    { code: 101301001, area: '百色', city: '百色', province: '广西' },

​    { code: 101301002, area: '那坡', city: '百色', province: '广西' },

​    { code: 101301003, area: '田阳', city: '百色', province: '广西' },

​    { code: 101301004, area: '德保', city: '百色', province: '广西' },

​    { code: 101301005, area: '靖西', city: '百色', province: '广西' },

​    { code: 101301006, area: '田东', city: '百色', province: '广西' },

​    { code: 101301007, area: '平果', city: '百色', province: '广西' },

​    { code: 101301008, area: '隆林', city: '百色', province: '广西' },

​    { code: 101301009, area: '西林', city: '百色', province: '广西' },

​    { code: 101301010, area: '乐业', city: '百色', province: '广西' },

​    { code: 101301011, area: '凌云', city: '百色', province: '广西' },

​    { code: 101301012, area: '田林', city: '百色', province: '广西' },

​    { code: 101301101, area: '钦州', city: '钦州', province: '广西' },

​    { code: 101301102, area: '浦北', city: '钦州', province: '广西' },

​    { code: 101301103, area: '灵山', city: '钦州', province: '广西' },

​    { code: 101301201, area: '河池', city: '河池', province: '广西' },

​    { code: 101301202, area: '天峨', city: '河池', province: '广西' },

​    { code: 101301203, area: '东兰', city: '河池', province: '广西' },

​    { code: 101301204, area: '巴马', city: '河池', province: '广西' },

​    { code: 101301205, area: '环江', city: '河池', province: '广西' },

​    { code: 101301206, area: '罗城', city: '河池', province: '广西' },

​    { code: 101301207, area: '宜州', city: '河池', province: '广西' },

​    { code: 101301208, area: '凤山', city: '河池', province: '广西' },

​    { code: 101301209, area: '南丹', city: '河池', province: '广西' },

​    { code: 101301210, area: '都安', city: '河池', province: '广西' },

​    { code: 101301211, area: '大化', city: '河池', province: '广西' },

​    { code: 101301301, area: '北海', city: '北海', province: '广西' },

​    { code: 101301302, area: '合浦', city: '北海', province: '广西' },

​    { code: 101301303, area: '涠洲岛', city: '北海', province: '广西' },

​    { code: 101301401, area: '防城港', city: '防城港', province: '广西' },

​    { code: 101301402, area: '上思', city: '防城港', province: '广西' },

​    { code: 101301403, area: '东兴', city: '防城港', province: '广西' },

​    { code: 101301405, area: '防城', city: '防城港', province: '广西' },

​    { code: 101310101, area: '海口', city: '海口', province: '海南' },

​    { code: 101310201, area: '三亚', city: '三亚', province: '海南' },

​    { code: 101310202, area: '东方', city: '东方', province: '海南' },

​    { code: 101310203, area: '临高', city: '临高', province: '海南' },

​    { code: 101310204, area: '澄迈', city: '澄迈', province: '海南' },

​    { code: 101310205, area: '儋州', city: '儋州', province: '海南' },

​    { code: 101310206, area: '昌江', city: '昌江', province: '海南' },

​    { code: 101310207, area: '白沙', city: '白沙', province: '海南' },

​    { code: 101310208, area: '琼中', city: '琼中', province: '海南' },

​    { code: 101310209, area: '定安', city: '定安', province: '海南' },

​    { code: 101310210, area: '屯昌', city: '屯昌', province: '海南' },

​    { code: 101310211, area: '琼海', city: '琼海', province: '海南' },

​    { code: 101310212, area: '文昌', city: '文昌', province: '海南' },

​    { code: 101310214, area: '保亭', city: '保亭', province: '海南' },

​    { code: 101310215, area: '万宁', city: '万宁', province: '海南' },

​    { code: 101310216, area: '陵水', city: '陵水', province: '海南' },

​    { code: 101310217, area: '西沙', city: '西沙', province: '海南' },

​    { code: 101310220, area: '南沙', city: '南沙', province: '海南' },

​    { code: 101310221, area: '乐东', city: '乐东', province: '海南' },

​    { code: 101310222, area: '五指山', city: '五指山', province: '海南' },

​    { code: 101320101, area: '香港', city: '香港', province: '香港' },

​    { code: 101320103, area: '新界', city: '香港', province: '香港' },

​    { code: 101330101, area: '澳门', city: '澳门', province: '澳门' },

​    { code: 101330102, area: '氹仔岛', city: '澳门', province: '澳门' },

​    { code: 101330103, area: '路环岛', city: '澳门', province: '澳门' },

​    { code: 101340101, area: '台北', city: '台北', province: '台湾' },

​    { code: 101340102, area: '桃园', city: '台北', province: '台湾' },

​    { code: 101340103, area: '新竹', city: '台北', province: '台湾' },

​    { code: 101340104, area: '宜兰', city: '台北', province: '台湾' },

​    { code: 101340201, area: '高雄', city: '高雄', province: '台湾' },

​    { code: 101340202, area: '嘉义', city: '高雄', province: '台湾' },

​    { code: 101340203, area: '台南', city: '高雄', province: '台湾' },

​    { code: 101340204, area: '台东', city: '高雄', province: '台湾' },

​    { code: 101340205, area: '屏东', city: '高雄', province: '台湾' },

​    { code: 101340401, area: '台中', city: '台中', province: '台湾' },

​    { code: 101340402, area: '苗栗', city: '台中', province: '台湾' },

​    { code: 101340403, area: '彰化', city: '台中', province: '台湾' },

​    { code: 101340404, area: '南投', city: '台中', province: '台湾' },

​    { code: 101340405, area: '花莲', city: '台中', province: '台湾' },

​    { code: 101340406, area: '云林', city: '台中', province: '台湾' } 	