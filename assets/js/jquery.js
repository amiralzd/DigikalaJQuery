$(document).ready(function(){
    $(".search").click(function(e){
        e.stopPropagation();
        $(".search-container").show();
        $(".box").hide();
        $(".bg-search-hover").show();
        $("body").css({
            "overflow": "hidden",
        });
    });

    $(document).click(function() {
        $(".search-container").hide();
        $(".box").show();
        $(".bg-search-hover").hide();
        $("body").css({
            "overflow": "auto",
        });
    });
});

$(window).scroll(function(){
    if($(this).scrollTop() >= 50){
        $(".nav").fadeOut();
    }else if($(".nav").scrollTop >= "-10"){
        $(".nav").fadeIn();
    }
});