var timerIv = 0;
window.onload = function() { 
	document.addEventListener("deviceready",function () {
// ----

new Ext.Application({
name: 'دعای عهد',
launch: function(){
a = 0;
mp3file = new Media("./lib/farahmand.mp3",
function() {
},
function(err) {
}
);

var btnp = [

{ ui: 'normal', text: 'پخش صدا' },
{ ui: 'normal', text: 'توقف صدا' },
{xtype:'spacer'},
{ ui: 'normal', text: 'تنظیمات' },
{ ui: 'normal', text: 'درباره ما' },
]

var tapHandler = function (btn, evt) {
				if(btn.text=='درباره ما'){
								Ext.Msg.alert('دعای عهد نسخه 1', "<div style='direction:rtl;margin:0;padding:0;'> دپارتمان موبایل گروه 1devs</div>سرپرست تیم : علی عبداللهی<br /> www.1mobs.com", null);
				}
				if(btn.text=='تنظیمات'){
								if (!this.popup) {
												this.popup = new Ext.Panel({
																floating: true,
																modal: true,
																centered: true,
																width: 300,
																height: 250,
																styleHtmlContent: true,
																
																items: [{
																				xtype: 'sliderfield',
																				name: 'value',
																				label: '<span id="" style="font-size:15px;">موقعیت صدا</span>',
																				increment: 1,
																				minValue: 0,
																				maxValue: 10,
																				listeners: {
																								change: function (slider, thumb, newValue, oldValue) {
																												
																												if(oldValue!=0){
																																$('.style1').css({'background-color' : '#e5faf1'});
																																seekv = newValue*1000*60;
																																timerIv=setTimeout(function() {
																																				mp3file.seekTo(seekv);
																																}, 500);
																												}
																								}}
																}, {
																				xtype: 'togglefield',
																				name: 'enable',
																				label: '<span id="" style="font-size:15px;">ترجمه</span>',
																				value: 1,
																				listeners: {
																								change: function (slider, thumb, newValue, oldValue) {
																												
																												if (oldValue == 0 && newValue == 1) {
																																$('.style2').show();
																												}
																												if (oldValue == 1 && newValue == 0) {
																																$('.style2').hide();
																												}
																								}}
																}, {
																				xtype: 'togglefield',
																				name: 'enable',
																				label: '<span id="" style="font-size:15px;">قلم درشت</span>',
																				value: 0,
																				listeners: {
																								change: function (slider, thumb, newValue, oldValue) {
																												
																												if (oldValue == 1 && newValue == 0) {
																																$('.style1').css({'fontSize':'12pt'});
																																$('.style2').css({'fontSize' : '9pt'});
																												}
																												if (oldValue == 0 && newValue == 1) {
																																$('.style1').css({'fontSize' : '16pt'});
																																$('.style2').css({'fontSize' : '12pt'});
																												}
																								}}
																}],
																dockedItems: [{
																				dock: 'top',
																				xtype: 'toolbar',
																				title: 'تنظیمات'
																}]
												});
								}
								this.popup.show('pop');
				}
				if(btn.text=='پخش صدا'){
								mp3file.play();
								var t=setInterval(function(){
												mp3file.getCurrentPosition(
												
												// success callback
												function(position) {
																if (position <= 63 && position >= 0) {
																				var div = Ext.fly('text1');
																				
																				mytest.scroller.scrollTo({
																								x: 0,
																								y: div.dom.offsetTop
																				}, 500)
																}
																if (position <= 126 && position >= 64) {
																				$('#text1').css({'background-color' : '#e5faf1'});
																				$('#text2').css({'background-color' : 'yellow'});
																				
																				var div = Ext.fly('text2');
																				
																				mytest.scroller.scrollTo({
																								x: 0,
																								y: div.dom.offsetTop
																				}, 500)
																}
																if (position <= 180 && position >= 127) {
																				$('#text2').css({'background-color' : '#e5faf1'});
																				$('#text3').css({'background-color' : 'yellow'});
																				var div = Ext.fly('text3');
																				
																				mytest.scroller.scrollTo({
																								x: 0,
																								y: div.dom.offsetTop
																				}, 500)
																}
																if (position <= 263 && position >= 181) {
																				$('#text3').css({'background-color' : '#e5faf1'});
																				$('#text4').css({'background-color' : 'yellow'});
																				var div = Ext.fly('text4');
																				
																				mytest.scroller.scrollTo({
																								x: 0,
																								y: div.dom.offsetTop
																				}, 500)
																}
																if (position <= 300 && position >= 264) {
																				$('#text4').css({'background-color' : '#e5faf1'});
																				$('#text5').css({'background-color' : 'yellow'});
																				var div = Ext.fly('text5');
																				
																				mytest.scroller.scrollTo({
																								x: 0,
																								y: div.dom.offsetTop
																				}, 500)
																}
																if (position <= 345 && position >= 301) {
																				$('#text5').css({'background-color' : '#e5faf1'});
																				$('#text6').css({'background-color' : 'yellow'});
																				
																				var div = Ext.fly('text6');
																				
																				mytest.scroller.scrollTo({
																								x: 0,
																								y: div.dom.offsetTop
																				}, 500)
																}
																if (position <= 393 && position >= 345) {
																				$('#text6').css({'background-color' : '#e5faf1'});
																				$('#text7').css({'background-color' : 'yellow'});
																				
																				var div = Ext.fly('text7');
																				
																				mytest.scroller.scrollTo({
																								x: 0,
																								y: div.dom.offsetTop
																				}, 500)
																}
																if (position <= 479 && position >= 394) {
																				$('#text7').css({'background-color' : '#e5faf1'});
																				$('#text8').css({'background-color' : 'yellow'});
																				
																				var div = Ext.fly('text8');
																				
																				mytest.scroller.scrollTo({
																								x: 0,
																								y: div.dom.offsetTop
																				}, 500)
																}
																if (position <= 524 && position >= 480) {
																				$('#text8').css({'background-color' : '#e5faf1'});
																				$('#text9').css({'background-color' : 'yellow'});
																				
																				var div = Ext.fly('text9');
																				
																				mytest.scroller.scrollTo({
																								x: 0,
																								y: div.dom.offsetTop
																				}, 500)
																}
																if (position <= 577 && position >= 525) {
																				$('#text9').css({'background-color' : '#e5faf1'});
																				$('#text10').css({'background-color' : 'yellow'});
																				
																				var div = Ext.fly('text10');
																				
																				mytest.scroller.scrollTo({
																								x: 0,
																								y: div.dom.offsetTop
																				}, 500)
																}
																if (position <= 584 && position >= 577) {
																				$('#text10').css({'background-color' : '#e5faf1'});
																				$('#text11').css({'background-color' : 'yellow'});
																				
																				var div = Ext.fly('text11');
																				
																				mytest.scroller.scrollTo({
																								x: 0,
																								y: div.dom.offsetTop
																				}, 500)
																}
																if (position <= 592 && position >= 585) {
																				$('#text11').css({'background-color' : '#e5faf1'});
																				$('#text12').css({'background-color' : 'yellow'});
																				var div = Ext.fly('text12');
																				
																				mytest.scroller.scrollTo({
																								x: 0,
																								y: div.dom.offsetTop
																				}, 500)
																}
																if (position <= 600 && position >= 593) {
																				$('#text12').css({'background-color' : '#e5faf1'});
																				$('#text13').css({'background-color' : 'yellow'});
																				var div = Ext.fly('text13');
																				
																				mytest.scroller.scrollTo({
																								x: 0,
																								y: div.dom.offsetTop
																				}, 500)
																}
												}
												);
												
								},1000);
				}
				if(btn.text=='توقف صدا'){
								mp3file.pause();
								clearInterval(timerIv);
								t='';
				}
				
}


var mytest = new Ext.Panel({
				autoScroll: true,
				fullscreen: true,
				scroll: 'vertical',
				layout: {
								type: 'vbox',
								align: 'stretch'
				},
				flex: 1,
				dockedItems:[{xtype:'toolbar',title: 'دعای عهد'},{xtype: 'toolbar',items: btnp,dock: 'bottom',defaults: { handler: tapHandler }}],
				items: [
				{html:text1+text2+text3+text4+text5+text6+text7+text8+text9+text10+text11+text12+text13,itemId:'myText',id:'text1', cls:'textwrap',title: 'text'},
				
				]
});
}
});

navigator.notification.alert("test");
//-----	
	});
};