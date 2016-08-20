$(document).ready(function(){

	var $fixedMenu = $('.header.fixed .fixed-only ul');
	var sections = [
		'highlights',
		'plan',
		'jobs',
		'agenda',
		'teachers'
	];

	$.each(sections, function(idx, secId){

		var query = '#' + secId;

		$(query).on('scrollSpy:enter', function(){
			
			$fixedMenu.find('li').removeClass('active');
			$fixedMenu.find('a[href="#'+$(this).attr('id')+'"]').parent().addClass('active');
		});

		$(query).scrollSpy();

	});

});