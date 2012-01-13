/*
 * <1Devs dot="com" department="Mobile" alt="www.1mobs.com" />
 *
 * 1Mobs.com - 1Devs Mobile Department.
 *
 * Ahd Mobile WebApp Framework
 *
 */

_(function(){
	_('h1').tap(function(){
		_.alert('Powered By _1js',null,'Hi');
	});
	_('h2').tap(function(){
		_.log('Powered By _1js');
	});
	_('body>*').tap(function(){
		_(this).css({color:'red'});
	});
	
});