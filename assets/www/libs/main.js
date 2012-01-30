/*
 * <1Devs dot="com" department="Mobile" />
 *
 * 1Mobs.com - 1Devs Mobile Department.
 *
 * Ahd Mobile WebApp Framework
 *
 */
 
var debug = true;
var appWidth = _.phgap?480:520;
var minTimeBitweenTouch = 100;
var cheatUrlPattern = ['swipeLeft','swipeLeft','swipeRight','swipeRight','swipeUp','swipeDown']; // target pattern for open cutom url cheat

var swapState = []; // swaping state cach
var lastTouch = Date.now(); // last touch in ms

function fixZoom(){
	var scale =Math.floor(window.innerWidth*100/appWidth) / 100;
	scale!=1 && (document.body.style['zoom']=scale);
	_.log('app width : '+appWidth);
	_.log('win width : '+window.innerWidth);
	_.log('css zoom : '+scale);
}

function loadData(url){
	var dataArr,data = _.ajax({url:url,async: false});
	data=data.replace(/(?:\r\n|\r|\n)+/g,'\n');
	if(data.length<4) {
		_.log("Err in loading "+url);
		return [];
	}
	dataArr = data.split('\n.\n');
	dataArr.forEach(function(m,i){
		dataArr[i]=m.split('\n');
	});
	return dataArr;
}

function mixArr(arr1,arr2){
	if(arr1.length!=arr2.length){_.log("Err in mix arrs. len must be equal."); return false;}
	var arr3=[];
	arr1.forEach(function(arr,i){
		arr3[i]=[];
		arr.forEach(function(tx,j){
			arr3[i].push(arr1[i][j]);
			arr3[i].push(arr2[i][j]);
		});
	});
	return arr3;
}

function arr2ul(arr){
	var ul = document.createElement('ul');
	arr.forEach(function(pr){
		var ulul = document.createElement('ul');
		pr.forEach(function(tx,j){
			var lili = document.createElement('li');
			lili.appendChild(document.createTextNode(tx));
			lili.lang=j%2?'fa':'ar';
			ulul.appendChild(lili);
		});
		var li = document.createElement('li');
		li.appendChild(ulul);
		ul.appendChild(li);
	});
	return ul;
}

function loadContents(){
	var dataAr = loadData('./res/contents/arabic.bin');
	var dataFa = loadData('./res/contents/persian.bin');
	var data = mixArr(dataAr,dataFa);
	if(data.length==0) return false;
	return arr2ul(data);
}

function playAudio(){
	_.log('Play Audio');
	
	return true;
}

function nextAudio(){
	_.log('Next Audio');
	
	return true;
}

function about(){
	_.log('About Us');
	
	return true;
}

function backAudio(){
	_.log('Back Audio');
	
	return true;
}

function touchDown(){
	_(this).addClass('touch');
}

function touchUp(){
	_(this).removeClass('touch');
	
	(now = Date.now())-lastTouch<minTimeBitweenTouch
	||(lastTouch = now) && 0
	||$(this).hasClass('play') && playAudio()
	||$(this).hasClass('next') && nextAudio()
	||$(this).hasClass('back') && backAudio()
	||$(this).hasClass('about') && about();
}

_(function(){
	// return false; // build js err for test
	
	_('div.content').append(loadContents());
	_('.preload').removeClass('preload');
	
	fixZoom();
	//window.onresize=fixZoom ;)
	
	_('div.btn').tap(function(){
		_.alert('click !');
	});
	
	//$('div.btn').mousedown(touchDown).mouseup(touchUp);
	/*_('div.btn.about').tap(touchUp);
	_('div.btn.play').touchstart(touchUp);
	_('div.btn.next').touchend(touchUp);
	_('div.btn.back').touchcancel(touchUp); // must test on devices
	*/
	
	if(!_.phgap){
		_('.container').addClass('pc');
		return false; // after this line js code not work on browser and have err without phonegap
	}
	
	//---
	
	(debug && window.innerWidth!=480) && alert("width : "+window.innerWidth);
	
	['swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown'].forEach(function(sw){
		_(document)[sw](function(){
			swapState.push(sw);
			swapState.length>cheatUrlPattern.length && swapState.shift();
			if(swapState.join()==cheatUrlPattern.join()){
				var newurl = prompt("You find our cheat !\nEnter your url.",window.location.href);
				(newurl==null || newurl=='' || newurl==window.location.href) || (window.location.href = newurl);
			}
		});
	});
	
	$(document).menubutton(function(){
		
	});
	
});