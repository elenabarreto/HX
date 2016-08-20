$(document).ready(function(){

    $carrousel = $('.carrousel');
    $slider = $carrousel.find('.slider');

    $arrow_right = $carrousel.find('.arrow.right');
    $arrow_left = $carrousel.find('.arrow.left');

    var n_items = $carrousel.find('.slider > div').length;
    var first_item = 1;

    if((window.innerWidth || document.documentElement.clientWidth) > 991){
        paint();
    }

    function paint(){
        $slider.children().hide();
        $first = $slider.find('div:nth-child('+first_item+')');
        $first.show();
        $first.next().show();
        $first.next().next().show();
        update_arrows();
    }

    function update_arrows(){
        if ((first_item + 2) === n_items){
            $arrow_right.addClass('disabled');
        }else{
            $arrow_right.removeClass('disabled');
        }

        if (first_item === 1){
            $arrow_left.addClass('disabled');
        }else{
            $arrow_left.removeClass('disabled');
        }
    }

    function handle_move_right(){
        if ((first_item + 2) < n_items){
            first_item++;
            paint();
        }
    }

    function handle_move_left(){
        if (first_item > 1){
            first_item--;
            paint();
        }
    }


    $arrow_right.click(handle_move_right);
    $arrow_left.click(handle_move_left);
});

