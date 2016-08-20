$(document).ready(function(){
    if (window.innerWidth < 400){
        $('meta[name=viewport]').attr('content', 'width=400, initial-scale=0.6');
    }

    // IE8 hack
    $('.header-bg').css({backgroundSize: "cover"});
});
