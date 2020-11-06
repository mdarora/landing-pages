$(()=>{

    // $(".num").counterUp({delay:10, time:1000});

    let rankingDiscount = 0;
    let subsDiscount = 0;
    let rankingPrice = 0;
    let subsPrice = 149;
    let priceValue = 20;
    let times = 1;
    let pages = 100;
    const inputPrice = $("#input-price");
    const inputTimes = $("#times");
    const inputPages = $("#pages");

    $(".day-list").click(function(){
        $(this).addClass("active-li");
        $(this).siblings().removeClass("active-li");
    });

    $("#M1").click(function(){
        $(this).addClass("active-p");
        $(this).nextAll().removeClass("active-p");
        $("#backline").addClass("point1");
        $("#backline").removeClass("point2");
        $("#backline").removeClass("point3");
        $("#backline").removeClass("point4");
        $("#backline").removeClass("point5");

        subsDiscount = 0; 
        $("#discount-price").text(subsDiscount + rankingDiscount +"%");

        subsPrice = 149;
        priceValue = rankingPrice + subsPrice;
        inputPrice.val(priceValue);
        $(".para-price").html("$"+  priceValue + "<span>/month</span>");

        pages = 100;
        inputPages.val(pages);
    });
    $("#M2").click(function(){
        $(this).addClass("active-p");
        $(this).nextAll().removeClass("active-p");
        $(this).prevAll().addClass("active-p");
        $("#backline").addClass("point2");
        $("#backline").removeClass("point1");
        $("#backline").removeClass("point3");
        $("#backline").removeClass("point4");
        $("#backline").removeClass("point5");

        subsDiscount = 5;
        $("#discount-price").text(subsDiscount + rankingDiscount +"%");

        subsPrice = 599;
        priceValue = rankingPrice + subsPrice;
        inputPrice.val(priceValue);
        $(".para-price").html("$"+  priceValue + "<span>/month</span>");

        pages = 500;
        inputPages.val(pages);
    });
    $("#M3").click(function(){
        $(this).addClass("active-p");
        $(this).nextAll().removeClass("active-p");
        $(this).prevAll().addClass("active-p");
        $("#backline").addClass("point3");
        $("#backline").removeClass("point1");
        $("#backline").removeClass("point2");
        $("#backline").removeClass("point4");
        $("#backline").removeClass("point5");

        subsDiscount = 10;
        $("#discount-price").text(subsDiscount + rankingDiscount +"%");

        subsPrice = 999;
        priceValue = rankingPrice + subsPrice;
        inputPrice.val(priceValue);
        $(".para-price").html("$"+  priceValue + "<span>/month</span>");

        pages = 1000;
        inputPages.val(pages);
    });
    $("#M4").click(function(){
        $(this).addClass("active-p");
        $(this).nextAll().removeClass("active-p");
        $(this).prevAll().addClass("active-p");
        $("#backline").addClass("point4");
        $("#backline").removeClass("point1");
        $("#backline").removeClass("point3");
        $("#backline").removeClass("point2");
        $("#backline").removeClass("point5");

        subsDiscount = 15;
        $("#discount-price").text(subsDiscount + rankingDiscount +"%");

        subsPrice = 3900;
        priceValue = rankingPrice + subsPrice;
        inputPrice.val(priceValue);
        $(".para-price").html("$"+  priceValue + "<span>/month</span>");

        pages = 5000;
        inputPages.val(pages);
    });
    $("#M5").click(function(){
        $(this).addClass("active-p");
        $(this).prevAll().addClass("active-p");
        $("#backline").addClass("point5");
        $("#backline").removeClass("point2");
        $("#backline").removeClass("point3");
        $("#backline").removeClass("point4");
        $("#backline").removeClass("point1");

        subsDiscount = 20;
        $("#discount-price").text(subsDiscount + rankingDiscount +"%");

        subsPrice = 7999;
        priceValue = rankingPrice + subsPrice;
        inputPrice.val(priceValue);
        $(".para-price").html("$"+  priceValue + "<span>/month</span>");

        pages = 10000;
        inputPages.val(pages);
    });

    

    $("#one-time").click(function(){
        rankingDiscount = 0;
        $("#discount-price").text(subsDiscount + rankingDiscount +"%");

        rankingPrice = 0;
        priceValue = rankingPrice + subsPrice;
        inputPrice.val(priceValue);
        $(".para-price").html("$"+  priceValue + "<span>/month</span>");

        times = 1;
        inputTimes.val(times);
    });
    $("#Every4months").click(function(){
        rankingDiscount = 10;
        $("#discount-price").text(subsDiscount + rankingDiscount +"%");

        rankingPrice = -10;
        priceValue = rankingPrice + subsPrice;
        inputPrice.val(priceValue);
        $(".para-price").html("$"+  priceValue + "<span>/month</span>");

        times = 4;
        inputTimes.val(times);
    });
    /*
    $("#weekly").click(function(){
        rankingDiscount = 40;
        $("#discount-price").text(subsDiscount + rankingDiscount +"%");

        rankingPrice = 30;
        priceValue = rankingPrice + subsPrice;
        inputPrice.val(priceValue);
        $(".para-price").html("$"+  priceValue + "<span>/month</span>");
    });
    */


    $("#submit").click(function(){
    //    console.log($("#input-price").val());
       alert ( "price Value is $" + inputPrice.val() + ", Times =" + inputTimes.val() + ", pages =" + inputPages.val());
    });

    $('#st-btn').click(function(){
        $('html, body').animate({ scrollTop: $( $(this).attr('href') ).offset().top }, 1000);
        return false;
    });
});