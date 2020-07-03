$(document).ready(function(){
    var nexButton = $(".next");
    var prevButton = $(".prev");
    console.log(prevButton);


nexButton.click(function(){
    var imgActive = $(".slider-wrapper img.active");
    imgActive.removeClass("active");

    if(imgActive.hasClass("last") == true) {
        $(".slider-wrapper img.first").addClass("active");
    } else {
    imgActive.next().addClass("active");
    }


});

prevButton.click(function(){
    var imgActive = $(".slider-wrapper img.active");
    imgActive.removeClass("active");

    if(imgActive.hasClass("last") == true) {
        $(".slider-wrapper img.first").addClass("active");
    } else {
    imgActive.next().addClass("active");
    }


    });




});
