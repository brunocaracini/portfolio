$(".box").hover(function(){
    
    $(this).find('.after').css({
        "background-color": '#95C22B',
        'transition':'background-color .2s ease-in'
    });
    $(this).css({
        "background-color": "rgb(42, 44, 70)",
        'transition':'background-color .2s ease-in'
    });
});

$(".box").mouseleave(function(){
    $(this).find('.after').css({
        "background-color": 'transparent',
        'transition':'background-color .1s ease-in'
    });
    $(this).css({
        "background-color": "rgb(36,38,59)",
        'transition':'background-color .1s ease-in'
    });
});
