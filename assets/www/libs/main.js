/*
 * <1Devs dot="com" department="Mobile" />
 *
 * 1Mobs.com - 1Devs Mobile Department.
 *
 * Ahd Mobile WebApp Framework
 *
 */
 
var debug = true;
var appWidth = 480;
var swapState = []; // swaping state cach
var cheatUrlPattern = ['swipeLeft','swipeLeft','swipeRight','swipeRight','swipeUp','swipeDown']; // target pattern for open cutom url cheat

function fixZoom(){
	var bdy = _('body');
	_.phgap || (appWidth*=1.2);
	var scale =Math.floor(bdy.width()*100/appWidth) / 100;
	scale!=1 && bdy.css('zoom',scale);
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
			//lili.setAttribute('lang',j%2?'fa':'ar');
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

_(function(){
	// return false - // build jsx err for test
	_('div.content').append(loadContents());
	_('.preload').removeClass('preload');
	
	fixZoom();
	
	if(!_.phgap){
		_('.container').addClass('pc');
		return false; // after this line js code not work on browser and have err without phonegap
	}
	
	
	
	(debug && window.innerWidth!=480) && alert("width : "+window.innerWidth);
	
	['swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown'].forEach(function(sw){
		_(document)[sw](function(){
			if(swapState.length>=cheatUrlPattern.length) swapState.shift();
			swapState.push(sw);
			if(swapState.join()==cheatUrlPattern.join()){
				var newurl = prompt("You find our cheat !\nEnter your url.",window.location.href);
				(newurl==null || newurl=='' || newurl==window.location.href) || (window.location.href = newurl);
			}
		});
	});
	
	$(document).menubutton(function(){
		alert(swapState.join());
	});
	
	// TODO: btns events ...
	
});