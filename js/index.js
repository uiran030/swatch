$('#menu li a').on('click', function(){
    var index = $(this).parent().index()
    $(this).parent().addClass('on').siblings().removeClass('on')
    // var offtop = $('#wrap section').eq(index).offset().top
    var offtop = $(window).height()*index
    $('html').animate({scrollTop:offtop}, 500)
    return false
})

$(window).on('click', function(){
var sct = $(this).scrollTop()
var wh = $(this).height()
//     var wh0 = $(this).height()*0       //$('section').eq(0).offset().top
//     var wh1 = $(this).height()*1       //$('section').eq(1).offset().top
//     var wh2 = $(this).height()*2       //$('section').eq(2).offset().top
//     var wh3 = $(this).height()*3       //$('section').eq(3).offset().top
//     console.log (wh1, wh2, wh3)
//     if (sct>=wh0 && sct<wh1) {
//         $('#menu li').eq(0).addClass('on').siblings().removeClass('on')
//     } else if (sct>=wh1 && sct<wh2) {
//         $('#menu li').eq(1).addClass('on').siblings().removeClass('on')
//     } else if (sct>=wh2 && sct<wh3) {
//         $('#menu li').eq(2).addClass('on').siblings().removeClass('on')
//     } else {
//         $('#menu li').eq(3).addClass('on').siblings().removeClass('on')
//     }

// section의 높이가 같은 경우에만 for문을 사용할 수 있음.
    for (let i=0; i<4; i++) {
        if (sct>=wh*i && sct<wh*(i+1)) {
            $('#menu li').eq(i).addClass('on').siblings().removeClass('on')
        }
    }
})

$('section').on('mousewheel', function(e, delta){
    // console.log(delta) : 아래로 -1값 출력, 위로 +1값 출력
    if (delta<0) {
        var offTop = $(this).next().offset().top
    } else if (delta>0) {
        var offTop = $(this).prev().offset().top
    }
    $('html').stop().animate({scrollTop:offTop}, 500)
})