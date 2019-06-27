module.exports={
	 //授权字符串,用于简单验证发送者身份, 请求端需添加请求头authorization 
	 auth:'it_is_a_long_long_secret',
	//realtimeServer端口
	port: 8081,
	
	/*
	终端重启后，本程序会以这个配置发起Http请求（Get方法），
	请求的实际path是 path + 控制卡序列号
	若host为空，则不请求
	*/
	restartNotification:{
		//ip或域名
		//host: '192.168.8.99',
		//端口
		port: 7777,		
		//路径
		path: '/test?cardId=',
	}
}