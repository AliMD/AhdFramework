package com.onemobs.ahd2a;

import android.os.Bundle;
import com.phonegap.*;
import android.webkit.WebSettings;
import android.webkit.WebSettings.RenderPriority;
import android.webkit.WebView;
import android.view.Display;
import android.view.WindowManager;
import android.content.Context;
import android.util.Log;
import android.content.res.Configuration;


public class Ahd2a extends DroidGap {
	
	protected String baseUrl = "file:///android_asset/www/";
	protected float app_width = 480;
	protected WebView app_view;
	
	public void fixZoom(){
		WebSettings appViewSett = app_view.getSettings();
		
		app_view.setBackgroundColor(0x999999);
		app_view.setHorizontalScrollBarEnabled(false);
		app_view.setHorizontalScrollbarOverlay(false);
		app_view.setVerticalScrollBarEnabled(false);
		app_view.setVerticalScrollbarOverlay(false);
        
        appViewSett.setRenderPriority( RenderPriority.HIGH );
        appViewSett.setBuiltInZoomControls(false);
        appViewSett.setSupportZoom(false);
        appViewSett.setDefaultZoom(WebSettings.ZoomDensity.FAR);
        appViewSett.setUseWideViewPort(true);
        appViewSett.setLoadWithOverviewMode(true);
        
        Display display = ((WindowManager) getSystemService(Context.WINDOW_SERVICE)).getDefaultDisplay();
        float width = display.getWidth();
        double scale = Math.ceil( ( width / app_width ) * 100 );
        
        Log.v( "app width", " = " + app_width );
        Log.v( "display width", " = " + width );
        Log.v( "current scale()", " = " + app_view.getScale() );
        Log.v( "scale", " = " + scale );
        
        app_view.setInitialScale( (int) scale );
	}
	
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.setIntegerProperty("splashscreen", R.drawable.splash);
        
        super.loadUrl(baseUrl+"init.html",200);
        this.app_view = this.appView;
        fixZoom();
        
    }
    
    @Override
    public void onConfigurationChanged(Configuration newConfig){
        super.onConfigurationChanged(newConfig);
        
        //fixZoom();
    }
    
}