$(document).ready(function(){

	$('.form .option').click(function(){
		$(this).parent().find('.option').removeClass('active');
		$(this).parent().find('.option').find('input[type="radio"]').prop('checked', false);
		$(this).addClass('active');
		$(this).find('input[type="radio"]').prop('checked', true);
	});

	$('.form form').on('submit', function(event){
		$('.form .error').hide();
		$('.form .options').each(function(idx, options){
			if($(options).find('input:checked').length < 1){
				$(options).siblings('.error').show();
				event.preventDefault();
			}
		});
	});

});