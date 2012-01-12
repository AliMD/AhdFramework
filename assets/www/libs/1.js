/*
 * <1Devs dot="com" department="Mobile" alt="www.1mobs.com" />
 *
 * 1Mobs.com - 1Devs Mobile Department.
 *
 * 1 Javascript Framework for Cross Platform WebApp
 *
 */

(function(_root){_root.$1_js=(function(z){
	var i,undef,__,doc=_root.document,phgap=typeof PhoneGap === "undefined";
	
	function log (msg){ ( _root['console'] || alert(msg) ) && console.log(msg); }
	if(z==undef){log('Add Zepto.js befor 1.js'); return false;}
	
	function _(s, c){
		s2 = (phgap && _.isFunction(s))?function(){_.deviceready(fn)}:s;
		return z(s, c);
	}
	
	for(i in z){_[i]=z[i];}
	
	_.alert=function(msg,callBack,title,btnName){
		if(phgap){
			navigator.notification.alert(msg, callBack, title, btnName)
		}else{
			_root.alert(msg);
		}
	}
	
	/*_.docAddEvt=function(evt,fn){
		doc.addEventListener(evt,fn,false);
	};*/
	
	_.deviceready=function(fn){
		return _(doc).bind("deviceready",fn);
	}
	
	return _;
})(_root.Zepto); '_' in _root || (_root._=$1_js);})(window);