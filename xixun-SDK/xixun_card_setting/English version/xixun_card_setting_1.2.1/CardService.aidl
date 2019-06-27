package com.xixun.joey.aidlset;

//import com.xixun.joey.aidlset.RegData;
import com.xixun.joey.aidlset.FpgaInfomation;
import com.xixun.contract.model.TaskToKeepScreenOn;
import com.xixun.contract.model.TaskToSetBrightness;
import com.xixun.contract.model.TaskToSetVolume;
import com.xixun.joey.aidlset.ThresholdRange;

interface CardService {
	String	getSoftVersion();
	// 亮度
	boolean	setBrightness(int brightness);
	int		getBrightness();
	// 屏幕开关
	boolean	setScreenOpen(boolean open);
	boolean	isScreenOpen();
	// 获取设置后屏幕宽高
	int		getScreenWidth();
	int		getScreenHeight();
	// 控制卡硬件参数
	List<FpgaInfomation> getFpgaInfomation();	
	//开关屏幕
	boolean setTimingTaskScreen(in TaskToKeepScreenOn task);
	TaskToKeepScreenOn getTaskToKeepScreenOn();
	//亮度
	boolean setTimingTaskBrightness(in TaskToSetBrightness task);
	TaskToSetBrightness getTaskToSetBrightness();
	//声音
	boolean setTimingTaskVolume(in TaskToSetVolume task);
	TaskToSetVolume getTaskToSetVolume();
	// 时间同步服务器及时区
	boolean setTimeSync(String ntpServer, String timezone);  //Asia/Shanghai, UTC+8:00
	String getNtpServer();
	String getTimezone();
	// 语言
	void setCardLanguage(String language);
	String getNetworkType();
	// 音量
	boolean setVolume(int volume);
	int		getVolume();
	// 屏幕截图
	byte[] screenshot(int quality, int scale);
	/* 以下是警报阀值接口 */
	// 温度：默认值null，表示不开启报警
	boolean setAlarmTemperature(in ThresholdRange temperatureRange);
	ThresholdRange getAlarmTemperature();	
	// 湿度：默认值null，表示不开启报警
	boolean setAlarmHumidity(in ThresholdRange humidity);
	ThresholdRange getAlarmHumidity();	
	// 卡电压：默认值null，表示不开启报警
	boolean setAlarmVoltage(in ThresholdRange voltage);
	ThresholdRange getAlarmVoltage();	
	// 外部电压1：默认值null，表示不开启报警
	boolean setAlarmVoltage1(in ThresholdRange voltage1);
	ThresholdRange getAlarmVoltage1();	
	// 外部电压2：默认值null，表示不开启报警
	boolean setAlarmVoltage2(in ThresholdRange voltage2);
	ThresholdRange getAlarmVoltage2();	
	// 门状态：默认值false，表示不开启报警
	boolean setAlarmDoorOpened(boolean needAlarm);
	boolean isAlarmDoorOpened();	
	// 烟雾状态：默认值false，表示不开启报警
	boolean setAlarmSmoke(boolean needAlarm);
	boolean isAlarmSmoke();
	// 重启
	boolean reboot(int delayForSecond);
	// 通用接口
	String executeJsonCommand(String json);	
	// 一键恢复 json
	boolean recoveryConfig();
	// player清节目
	boolean cleanPlayerAllTasks();
}