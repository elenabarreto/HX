$(document).ready(function(){

	$('.register-lightbox .blue-close-btn').click(function(){
		$('.register-overlay').hide();
	});

	$('.plans-lightbox .blue-close-btn').click(function(){
		$('.plans-overlay').hide();
	});

});

function show_register_lightbox(){
	$('.register-overlay').show();
}

function show_plans_lightbox(){
	$('.plans-overlay').show();
}