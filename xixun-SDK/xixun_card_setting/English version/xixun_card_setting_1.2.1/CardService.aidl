package com.xixun.joey.aidlset;

//import com.xixun.joey.aidlset.RegData;
import com.xixun.joey.aidlset.FpgaInfomation;
import com.xixun.contract.model.TaskToKeepScreenOn;
import com.xixun.contract.model.TaskToSetBrightness;
import com.xixun.contract.model.TaskToSetVolume;
import com.xixun.joey.aidlset.ThresholdRange;

interface CardService {
	String	getSoftVersion();
	// brightness
	boolean	setBrightness(int brightness);
	int		getBrightness();
	// screen switch
	boolean	setScreenOpen(boolean open);
	boolean	isScreenOpen();
	// get screen width and height after configuration
	int		getScreenWidth();
	int		getScreenHeight();
	// control card hardware parameters
	List<FpgaInfomation> getFpgaInfomation();	
	//on or off screen
	boolean setTimingTaskScreen(in TaskToKeepScreenOn task);
	TaskToKeepScreenOn getTaskToKeepScreenOn();
	//brightness
	boolean setTimingTaskBrightness(in TaskToSetBrightness task);
	TaskToSetBrightness getTaskToSetBrightness();
	//volume
	boolean setTimingTaskVolume(in TaskToSetVolume task);
	TaskToSetVolume getTaskToSetVolume();
	// time sync with server and timezone
	boolean setTimeSync(String ntpServer, String timezone);  //Asia/Shanghai, UTC+8:00
	String getNtpServer();
	String getTimezone();
	// language
	void setCardLanguage(String language);
	String getNetworkType();
	// volume
	boolean setVolume(int volume);
	int		getVolume();
	// screen shot
	byte[] screenshot(int quality, int scale);
	/* following are the warning switches value interface */
	// temperature：default value null，means disable warning
	boolean setAlarmTemperature(in ThresholdRange temperatureRange);
	ThresholdRange getAlarmTemperature();	
	// humidity：default value null，means disable warning
	boolean setAlarmHumidity(in ThresholdRange humidity);
	ThresholdRange getAlarmHumidity();	
	// controller power voltage：default value null，means disable warning
	boolean setAlarmVoltage(in ThresholdRange voltage);
	ThresholdRange getAlarmVoltage();	
	// external power voltage1：default value null，means disable warning
	boolean setAlarmVoltage1(in ThresholdRange voltage1);
	ThresholdRange getAlarmVoltage1();	
	// external power voltage2：default value null，means disable warning
	boolean setAlarmVoltage2(in ThresholdRange voltage2);
	ThresholdRange getAlarmVoltage2();	
	// door status：default value false，means disable warning
	boolean setAlarmDoorOpened(boolean needAlarm);
	boolean isAlarmDoorOpened();	
	// smoke status：default value false，means disable warning
	boolean setAlarmSmoke(boolean needAlarm);
	boolean isAlarmSmoke();
	// reboot
	boolean reboot(int delayForSecond);
	// common interface
	String executeJsonCommand(String json);	
	// recovery json
	boolean recoveryConfig();
	// player clean program
	boolean cleanPlayerAllTasks();
}