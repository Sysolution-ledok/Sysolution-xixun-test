package com.ts.resolutioncheck;


import android.app.Activity;
import android.graphics.Color;
import android.os.Bundle;
import android.util.Log;
import android.view.Gravity;
import android.widget.LinearLayout;
import android.widget.LinearLayout.LayoutParams;
import android.widget.TextView;
import android.widget.Toast;

import androidx.core.content.ContextCompat;

import com.xixun.joey.aidlset.CardService;
import com.xixun.joey.aidlset.CommunicationJoey;



public class SampleSplashScreen extends Activity {
    private int screenHeight, screenWidth;
    private CardService card;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        /**
         * You can already get the width and height here,
         * However, in a Linearlayout, a second boot is required to set the width and height to be obtained,
         * You need to modify it here,Absolutelayout is recommended to try
         * And since boot I have registered in the AndroidManifest.xml
         */
        new Thread(new Runnable() {
            @Override
            public void run() {
                try {
                    card = CommunicationJoey.autoBind(SampleSplashScreen.this);
                    screenHeight = card.getScreenHeight();
                    screenWidth = card.getScreenWidth();
                    Log.i("aaa", "screen height:" + screenHeight);
                    Log.i("aaa", "screen width:" + screenWidth);
                }catch (Exception e){
                    Log.i("aaa", "error:" + e.getMessage());
                    e.printStackTrace();
                }
            }
        }).start();


        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Toast.makeText(this, "Width : " + screenWidth + "  HEIGHT : " + screenHeight, Toast.LENGTH_LONG).show();



        // setting background image for the linear layout
        LinearLayout linLayout = new LinearLayout(this);
        linLayout.setOrientation(LinearLayout.VERTICAL);
        LayoutParams linLayoutParam = new LayoutParams(screenWidth, screenHeight);
        linLayout.setBackground(ContextCompat.getDrawable(this, R.drawable.ic_launcher_background));
        setContentView(linLayout, linLayoutParam);

       // setting a text in linear layout
        LinearLayout.LayoutParams rightGravityParams = new LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.WRAP_CONTENT, LinearLayout.LayoutParams.WRAP_CONTENT);
        rightGravityParams.gravity = Gravity.CENTER;

        TextView tv = new TextView(this);
        tv.setText("Kuhlse resolution Sample check");
        tv.setTextColor(Color.parseColor("#ffffff"));
        linLayout.addView(tv, rightGravityParams);

    }


}