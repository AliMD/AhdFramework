/*
 * <1Devs dot="com" department="Mobile" />
 *
 * 1Mobs.com - 1Devs Mobile Department.
 *
 * 1 Javascript Framework for Cross Platform WebApp
 *
 */

(function(_root){_root._1js=(function(z){
	var i,undef,__,doc=_root.document,logAlert=false;phgap=false;
	if(typeof _root.PhoneGap !== "undefined"){
		for(i in $.os){
			phgap=true;
			break;
		};
	}_.phgap=phgap;

	function log (msg){ (!!_root['console'] || (logAlert && alert(msg))) && console.log(msg); }_.log=log;
	if(z==undef){log('Add Zepto.js befor 1.js'); return false;}
	
	function _(s, c){
		s2 = (phgap && _.isFunction(s))?function(){deviceready(s)}:s;
		return z(s2, c);
	}
	
	for(i in z){_[i]=z[i];}
	
	_.alert=function(msg,callBack,title,btnName){
		(phgap || _root.alert(msg)) && _root.navigator.notification.alert(msg, callBack, title, btnName);
		return this;
	}
	
	_.fn.addEvt=function(evt,fn){
		return this.each(function(){
			return this.addEventListener(evt,fn,false);
		});
	}
	
	deviceready=function(fn){
		return _(doc).addEvt("deviceready",function(){
			
			['pause','resume','online','offline',
			'backbutton','batterycritical','batterylow','batterystatus',
			'menubutton','searchbutton','startcallbutton','endcallbutton',
			'volumedownbutton','volumeupbutton'].forEach(function(m){
				_.fn[m]=function(fn){
					return this.addEvt(m,fn);
				}
			});
			
			fn();
			
		});
	};_.deviceready=_.fn.deviceready=deviceready;
	
	/*['deviceready','pause','resume','online','offline',
	'backbutton','batterycritical','batterylow','batterystatus',
	'menubutton','searchbutton','startcallbutton','endcallbutton',
	'volumedownbutton','volumeupbutton'].forEach(function(m){
		_.fn[m]=function(fn){
			return this.addEvt(m,fn);
		}
	});
	*/
	function delay(fn,dly){setTimeout(fn,dly);return this;}_.delay=delay;
	
	
	
	
  
	return _;
})(_root.Zepto); '_' in _root || (_root._=_1js);})(window);

(function(_){
	['swipe', 'swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown', 'doubleTap', 'tap', 'longTap','touchstart','touchmove','touchend','touchcancel'].forEach(function(m){
    	_.fn[m] = function(callback){ return this.bind(_.phgap?m:'click', callback) }
  	});
})(_1js);

//core init
_(function(){ _.log("Ahd Mobile WebApp Framework v1 started"+(_.phgap?" in phonegap.":".")); });