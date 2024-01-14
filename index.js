$(".list ul li a").click(function(){
    $(".list ul li a").removeClass("active");
    $(this).addClass("active");
    $(".tab").removeClass("active")
    $("#" + $(this).attr("data-tab")).addClass("active");
    });