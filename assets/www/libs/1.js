/*
 * <1Devs dot="com" department="Mobile" />
 *
 * 1Mobs.com - 1Devs Mobile Department.
 *
 * 1 Javascript Framework for Cross Platform WebApp
 *
 */

(function(_root){_root._1js=(function(z){
	var i,undef,__,doc=_root.document;
	_.phgap=typeof _root.PhoneGap !== "undefined";

	function log (msg){ ( _root['console'] || alert(msg) ) && console.log(msg); }_.log=log;
	if(z==undef){log('Add Zepto.js befor 1.js'); return false;}
	
	function _(s, c){
		s2 = (_.phgap && _.isFunction(s))?function(){deviceready(s)}:s;
		return z(s2, c);
	}
	
	for(i in z){_[i]=z[i];}
	
	_.alert=function(msg,callBack,title,btnName){
		if(_.phgap){
			_root.navigator.notification.alert(msg, callBack, title, btnName);
		}else{
			_root.alert(msg);
		}
	}
	
	_.fn.addEvt=function(evt,fn){
		doc.addEventListener(evt,fn,false);
	}
	
	deviceready=function(fn){
		return _(doc).addEvt("deviceready",fn);
	};_.deviceready=deviceready;
	
	// TODO: add other phgp event like _.deviceready;
	
	function delay(fn,dly){setTimeout(fn,dly);}_.delay=delay;
	
	
	
	
  
	return _;
})(_root.Zepto); '_' in _root || (_root._=_1js);})(window);

(function(_){
	['swipe', 'swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown', 'doubleTap', 'tap', 'longTap'].forEach(function(m){
    	_.fn[m] = function(callback){ return this.bind(_.phgap?m:'click', callback) }
  	});
})(_1js);