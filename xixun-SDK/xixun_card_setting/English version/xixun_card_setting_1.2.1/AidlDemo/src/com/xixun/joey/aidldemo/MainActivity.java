package com.xixun.joey.aidldemo;

import com.xixun.contract.model.TaskToSetBrightness;
import com.xixun.joey.aidlset.CardService;
import com.xixun.joey.aidlset.CommunicationJoey;
import com.xixun.joey.aidlset.FpgaInfomation;

import android.os.Bundle;
import android.os.RemoteException;
import android.app.Activity;
import android.util.Log;
import android.view.Menu;

public class MainActivity extends Activity {
	private static String TAG = "aidldemo";

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);
				
		new Thread(new Runnable() {
			@Override
			public void run() {
				// TODO Auto-generated method stub
				CardService card = null;
				
				try {
//					Log.e(TAG, "Upgrading ...");
					card = CommunicationJoey.getCardService(MainActivity.this);
					if (null != card) {
						Log.i(TAG, "Brightness is: " + card.getBrightness());
						FpgaInfomation info = (FpgaInfomation) card.getFpgaInfomation().get(0);
						Log.i(TAG, "Temperature is: " + info.temperature);
						Log.i(TAG, "Humidity is: " + info.humidity);
						Log.i(TAG, "CardVoltage is: " + info.cardVoltage);
						Log.i(TAG, "ExternalVoltage1 is: " + info.externalVoltage1);
						Log.i(TAG, "ExternalVoltage2 is: " + info.externalVoltage2);
						Log.i(TAG, "DoorOpened is: " + info.doorOpened);
						Log.i(TAG, "Smoke is: " + info.smoke);
						TaskToSetBrightness tts = new TaskToSetBrightness();
						card.setTimingTaskBrightness(tts);
					} else {
						Log.i(TAG, "Is NULL.");
					}
				} catch (RemoteException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}			
		}).start();
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.main, menu);
		return true;
	}
}
