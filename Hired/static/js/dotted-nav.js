
$(document).ready(function(){

	$('.dotted-nav').each(function(idx, $el){

		var $el = $($el);

		var $target = $el.find('.dot-nav-target');
		var $dotNav = $el.find('.dot-nav');

		$.each($target.children(), function(idx, child){

			var $dot = $('<div>');

			$dot.click(function(e){

				$target.children().hide();
				$dotNav.children().removeClass('active');
				$(this).addClass('active');

				$target.children('div:nth-child('+($(this).index()+1)+')').show();
			});

			$dotNav.append($dot);
		});

		$dotNav.find('div:first').addClass('active');
		$target.find('div:first').show();
	});
});
