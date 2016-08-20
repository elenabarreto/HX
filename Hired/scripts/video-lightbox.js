$(document).ready(function(){

	var el = '<iframe src="//www.youtube.com/embed/mB5kK-mUmqA?autoplay=1" frameborder="0" allowfullscreen></iframe>';

	$('.video-btn').click(function(){
		$('.video-lightbox').show();
		$('.video-lightbox .video').html(el);
	});

	$('.video-lightbox .close-btn').click(function(){
		$('.video-lightbox .video').empty();
		$('.video-lightbox').hide();
	});

});