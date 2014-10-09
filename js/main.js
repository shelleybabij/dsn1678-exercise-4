var $win = $(window);
var $sun = $('.sun');
var $sunSection = $('.sun-section');
var $dipperSection = $('.dipper-section');
var $dipper = $('.dipper');
var $shuttleSection = $('.shuttle-section');
var $shuttle = $('.shuttle');
var $shipSection = $('.ship-section');
var $ship = $('.ship');
var $ship1 = $('.ship1');
var $ship2 = $('.ship2');
var $ship3 = $('.ship3');
var $ship4 = $('.ship4');

$win.on('scroll', function (){
	var scrollPos = $win.scrollTop();

	$sun.css('transform', 'rotate(' + scrollPos / 5 + 'deg)');
	$sunSection.css('background-position', 'center ' + scrollPos 	/ 2 + 'px');
	$shipSection.css('background-position', 'center ' + scrollPos / 3 + 'px');
});

$dipperSection.waypoint(function () {
	$dipper.addClass('js-dipper-fade');
}, { offset: '50%' });

$shuttleSection.waypoint(function () {
	$shuttle.addClass('js-shuttle-fade');
}, { offset: '50%'});


$shipSection.waypoint(function () {
	$ship1.addClass('js-ship-fade-1');
	$ship2.addClass('js-ship-fade-2');
	$ship3.addClass('js-ship-fade-1');
	$ship4.addClass('js-ship-fade-2');
}, { offset: '50%' });
