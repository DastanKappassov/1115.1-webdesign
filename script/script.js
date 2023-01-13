$(function(){
    // NAV
    $('.nav').mouseenter(function(){
        $('.subnav').stop(true).slideDown(200);
    });
    $('.nav').mouseleave(function(){
        $('.subnav').stop(true).slideUp(200);
    });

    // SLIDE
    setInterval(function(){
        $('.slides').animate({'top':'-100%'}, function(){
            $('.slide:first').appendTo('.slides');
            $('.slides').css({'top':'0%'});
        })
    }, 3000);

    // TABS
    $('.gallery').click(function(){
        $(this).addClass('active');
        $('.notice').removeClass('active');
        $('.notice>ul').fadeOut(200);
        $('.gallery>ul').fadeIn(200);
    });
    $('.notice').click(function(){
        $(this).addClass('active');
        $('.gallery').removeClass('active');
        $('.gallery>ul').fadeOut(200);
        $('.notice>ul').fadeIn(200);
    });

    // SNS
    $('.sns>ul>li').mouseenter(function(){
        $(this).children('.sns>ul>li>a:last-child').stop(true).fadeOut(100);
        $(this).children('.sns>ul>li>a:first-child').stop(true).fadeIn(100);
    });
    $('.sns>ul>li').mouseleave(function(){
        $(this).children('.sns>ul>li>a:last-child').stop(true).fadeIn(100);
        $(this).children('.sns>ul>li>a:first-child').stop(true).fadeOut(100);
    });

    // POPUP
    $('.notice>ul>li:first').click(function(){
        $('#popup').stop(true).fadeIn(200);
    });
    $('.btn').click(function(){
        $('#popup').stop(true).fadeOut(200);
    });
});