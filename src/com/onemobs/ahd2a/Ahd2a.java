package com.onemobs.ahd2a;

import android.os.Bundle;
import com.phonegap.*;
import android.webkit.WebSettings;
import android.webkit.WebSettings.RenderPriority;
import android.webkit.WebView;
import android.view.Display;
import android.view.WindowManager;
import android.content.Context;
//import android.util.Log;
import android.content.res.Configuration;


public class Ahd2a extends DroidGap {
	
	public void fixZoom(WebView appView, float appWidth){
		WebSettings appViewSett = appView.getSettings();
		
		appView.setBackgroundColor(0x000000);
        appView.setHorizontalScrollBarEnabled(false);
        appView.setHorizontalScrollbarOverlay(false);
        appView.setVerticalScrollBarEnabled(false);
        appView.setVerticalScrollbarOverlay(false);
        
        appViewSett.setRenderPriority( RenderPriority.HIGH );
        appViewSett.setBuiltInZoomControls(false);
        appViewSett.setSupportZoom(false);
        appViewSett.setDefaultZoom(WebSettings.ZoomDensity.FAR);
        appViewSett.setUseWideViewPort(true);
        appViewSett.setLoadWithOverviewMode(true);
        
        Display display = ((WindowManager) getSystemService(Context.WINDOW_SERVICE)).getDefaultDisplay();
        float width = display.getWidth();
        double scale = Math.ceil( ( width / appWidth ) * 100 );
        /*
        Log.v( "app width", " = " + appWidth );
        Log.v( "display width", " = " + width );
        Log.v( "current scale()", " = " + appView.getScale() );
        Log.v( "scale", " = " + scale );
        */
        appView.setInitialScale( (int) scale );
	}
	
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.setIntegerProperty("splashscreen", R.drawable.splash);
        
        String baseUrl = "file:///android_asset/www/";
        super.loadUrl(baseUrl+"init.html",300);
        
        fixZoom(this.appView, 480);
        
    }
    
    @Override
    public void onConfigurationChanged(Configuration newConfig)
    {
        super.onConfigurationChanged(newConfig);
        //setContentView(R.layout.main);

        fixZoom(this.appView, 480);
    }
    
}