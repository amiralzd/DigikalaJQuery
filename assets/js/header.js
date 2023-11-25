$(document).ready(function(){
    $(".search").click(function(e){
        e.stopPropagation();
        $(".search-container").fadeIn();
        $(".box").hide();
        $(".bg-search-hover").fadeIn();
        $("body").css({
            "overflow": "hidden",
        });
    });

    $(document).click(function() {
        $(".search-container").fadeOut();
        $(".box").show();
        $(".bg-search-hover").fadeOut();
        $("body").css({
            "overflow": "auto",
        });
    });
});





