$(".list ul li a").click(function(){
    $("#first").addClass("active");
    $("#third").addclass("active");
    $("#sech").addclass("active");
    $("#fourt").addclass("active");
    $(".list ul li a").removeClass("active");
    $(this).addClass("active");
    $(".tab").removeClass("active")
    $("#" + $(this).attr("data-tab")).addClass("active");
    });