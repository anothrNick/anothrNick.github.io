$("li").hover(function () {
    $(this).animate({
        paddingTop: "+=10px"
    }, 100);
}, function () {
    $(this).animate({
        paddingTop: "-=10px"
    }, 100);
});