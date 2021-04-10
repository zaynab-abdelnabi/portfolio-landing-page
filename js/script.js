$(window).scroll(function () {
    if ($(this).scrollTop() >= 200) {
        $("#navBar").addClass("noTransparent");
    } else {
        $("#navBar").removeClass("noTransparent");
    }

});
function checkVisible(elm, eval) {
    eval = eval || "visible";
    var vpH = $(window).height(),
        st = $(window).scrollTop(),
        y = $(elm).offset().top,
        elementHeight = $(elm).height();

    if (eval == "visible") return ((y < (vpH + st)) && (y > (st - elementHeight)));
    if (eval == "above") return ((y < (vpH + st)));
}


var isLoaded = false;

$(window).scroll(function () {
    if (!isLoaded) {

        if (checkVisible($('#statistics'))) {



            $('.circle').circleProgress({
                startAngle: -Math.PI / 2,
                fill: "#0575e6",
            }).on('circle-animation-progress', function (event, progress, stepValue) {
                $(this).find('span').html(Math.round(stepValue * 100) + '%');
            });


            isLoaded = true;

        }
    }
});


// $(window).scroll(function () {
//     if (checkVisible($('#statistics'))) {
//         $('.circle').circleProgress({
//             startAngle: -Math.PI / 2,
//             fill: "#0575e6",
//         }).on('circle-animation-progress', function (event, progress, stepValue) {
//             $(this).find('span').html(Math.round(stepValue * 100) + '%');
//         });
//     }
// });
$(document).ready(function () {
    $("a.scroll").on("click", function (event) {
        var hash = this.hash;
        $("html,body").animate({ scrollTop: $(hash).offset().top - 90 }, 800, function () { });
    });
    $(function () {
        $("#commentForm").validate();
    });
    // $('.circle').circleProgress({
    //     startAngle: -Math.PI / 2,
    //     fill: "#0575e6",
    // }).on('circle-animation-progress', function (event, progress, stepValue) {
    //     $(this).find('span').html(Math.round(stepValue * 100) + '%');
    // });
});