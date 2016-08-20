
$(document).ready(function(){

	$collapse = $('.menu-button');
	$menu = $('.nav-menu');

	$collapse.on('click', function(){
		$('body').toggleClass('moved');
		$menu.toggle();
	});

});