
$(document).ready(function(){

	var $fixed = $('.header.fixed');
	var $nav = $('.header-bg .header .container .row:first-child');

	$fixed.find('.container').append($nav.clone());

	$(window).scroll(handle_scroll);
	$(window).resize(handle_scroll);

    function handle_scroll(){
		if (window.scrollY > 96 && window.innerWidth > 991){
			$('.header.fixed').show();
		}else{
			$('.header.fixed').hide();
		}
	}

});
