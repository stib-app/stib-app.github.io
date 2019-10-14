$(document).ready(function () {
    
    var flag;
  
    // var media = $('.video-tut').get(0);
    // $('#modelId').on('hide.bs.modal', function () {
    //     var videoAttr = $('#source-video').attr("src");
    //     $('#source-video').attr("src", "");
    //     $('#source-video').attr("src", videoAttr);
    // })
    var videoTut = document.getElementById('video-tut');
    $('#modelId').on('hide.bs.modal', function () {
        videoTut.pause();
        videoTut.currentTime = 0;
    })
    $('.video-btn').click(function(){
        videoTut.play();
    })
    var header_top = $('#header').offset().top + 60;

    if (header_top > 60) {
        $("#change-color ul li a").css("color", "#f39c12")

    }
    var videoTrade = document.getElementById('video-trade');

    videoTrade.play();
    $(window).scroll(function () {
    var header_top = $('#header').offset().top + 60;

        var vitrihientai = window.pageYOffset;

        var page1 = $('#page1').offset().top;
        var page2 = page1 + $("#page1").outerHeight(true);
        var distance = $('#show').offset().top;
        var distance3 = distance + 250;
        var header_top = $('#header').offset().top + 60;

        if (vitrihientai > 30) {
            $('#header').addClass('bg-active');
            $('#logo-header').addClass('active');
        }
        else {
            $('#header').removeClass('bg-active');
            $('#logo-header').removeClass('active');
        }
        if (vitrihientai > 300) {
            $('#to-top').addClass('active');
        }
        else {
            $('#to-top').removeClass('active');
        }

        // //////////////////////////////////////////////
        var videoTrade = document.getElementById('video-trade');
        var videoLend = document.getElementById('video-lend');
        if (vitrihientai > $('.dowload').offset().top - 300){
            videoTrade.play();
            if(flag ==true){
                videoTrade.click();
                flag = false ;
            }
            
        }
        else{
            videoTrade.pause();
            videoTrade.currentTime = 0;
        }

        if (vitrihientai > $('#page2Id').offset().top - 300){
            videoLend.play();
            if(flag ==true){
                videoLend.click();
                flag = false ;
            }
        }
        else{
            videoLend.pause();
            videoLend.currentTime = 0;
        }


        // ////////////////////////////////////// animation 
        if (header_top >= distance && header_top < distance3) {
            $("#photo_animation").css("animation-play-state", "running");
            $(".app_provide .detail2").css("animation-play-state", "running");
        } else if (header_top >= distance3) {
            $(".app_provide .detail3").css("animation-play-state", "running");

        } else {
            $("#photo_animation").css("animation-play-state", "paused");
        }
    });
    // //////////////////////////////////////////////////////////////
    //  bottom to top
    $("#to-top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 500);
    })
    // video play
    $("#show_video_download").click(function () {
        $("#video").show();
    });

    
    
});