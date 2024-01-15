//tab start
$(".list ul li a").click(function(){
    $(".list ul li a").removeClass("active");
    $(this).addClass("active");
    $(".tab").removeClass("active");
    $("#" + $(this).attr("data-tab")).addClass("active");
    });
    //tab end
    //footer click start
    $(".fotterlist1 h3").click(function(){
        $(".fotterlist1 h3").removeClass("active");
        $(this).addClass("active");
        $(".click").removeClass("active");
        $("#" + $(this).attr("data-click")).addClass("active");
        });
    //footer click end