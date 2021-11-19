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
	// screen width and height after getting configuration
	int		getScreenWidth();
	int		getScreenHeight();
	// controller's hardware parameters
	List<FpgaInfomation> getFpgaInfomation();	
	//turn on/off screen
	boolean setTimingTaskScreen(in TaskToKeepScreenOn task);
	TaskToKeepScreenOn getTaskToKeepScreenOn();
	//brightness
	boolean setTimingTaskBrightness(in TaskToSetBrightness task);
	TaskToSetBrightness getTaskToSetBrightness();
	//volume
	boolean setTimingTaskVolume(in TaskToSetVolume task);
	TaskToSetVolume getTaskToSetVolume();
	// time sync server and timezone
	boolean setTimeSync(String ntpServer, String timezone);  //Asia/Shanghai, UTC+8:00
	String getNtpServer();
	String getTimezone();
	// language
	void setCardLanguage(String language);
	String getNetworkType();
	// volume
	boolean setVolume(int volume);
	int		getVolume();
	// screenshot
	byte[] screenshot(int quality, int scale);
	/* alarm interfaces value in below */
	// temperature：default value null，means disable alarm
	boolean setAlarmTemperature(in ThresholdRange temperatureRange);
	ThresholdRange getAlarmTemperature();	
	// humidity：defult value null，means disable alarm
	boolean setAlarmHumidity(in ThresholdRange humidity);
	ThresholdRange getAlarmHumidity();	
	// controller voltage：default value null，means disable alarm
	boolean setAlarmVoltage(in ThresholdRange voltage);
	ThresholdRange getAlarmVoltage();	
	// external voltage1：default value null，means disable alarm
	boolean setAlarmVoltage1(in ThresholdRange voltage1);
	ThresholdRange getAlarmVoltage1();	
	// external voltage2：default value null，means disable alarm
	boolean setAlarmVoltage2(in ThresholdRange voltage2);
	ThresholdRange getAlarmVoltage2();	
	// door status：default value is false，means disable alarm
	boolean setAlarmDoorOpened(boolean needAlarm);
	boolean isAlarmDoorOpened();	
	//smoke status：default value is false，means disable alarm
	boolean setAlarmSmoke(boolean needAlarm);
	boolean isAlarmSmoke();
	// restart
	boolean reboot(int delayForSecond);
	// universal interface
	String executeJsonCommand(String json);	
	// recovery by one key json
	boolean recoveryConfig();
	// player clear program
	boolean cleanPlayerAllTasks();
}