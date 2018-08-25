// var headerTop = $("h1").top.offset();


$(window).scroll(function() {
    var h1 = $("h1");

    if ($(window).scrollTop() >= 300)
    {
        h1.addClass("h1-bgcolor");
    } else 
    {
        h1.removeClass("h1-bgcolor");
    }
});

// // Carousel:

$(document).ready(function(){
    $('.carousel').carousel();
});

$('.carousel').carousel({
    dist: 0,
    padding: 20,
    indicators: true
});


$('.nextButton').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $(this).parent().carousel('next');
});

$('.previousButton').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $(this).parent().carousel('prev');
});

// // Popout Video:

var w = $(window).width();
var h = $(window).height();
var popout = document.getElementById('popout');
var divW = $(popout).width();
var divH = $(popout).height();

popout.style.position="fixed";
popout.style.top = (h/2)-(divH/2)+"px";
popout.style.left = (w/2)-(divW/2)+"px";

var videos = $("video");

var popoutVid = $(popout).find("video");
var oldSource = $(popoutVid).find("source");


videos.click(function() {
    var sources = $(this).find( "source" );
    $(sources).clone().appendTo(popoutVid);
    var video = $(popoutVid).get(0);
    video.load();
    popout.style.display = "flex";
    video.play();
});

var exit = $(".exit-popout");

$(document).keydown(function(e) {
    if (e.keyCode == 27) {
        clearPopout();
    }
});

exit.click(function() {
    clearPopout();
});

var clearPopout = () => {
    var video = $(popoutVid).get(0);
    video.pause();
    oldSource = $(popoutVid).find("source");
    $(oldSource).remove();

    popout.style.display = "none";
};

////

function rand(min, max) {
    return Math.floor(Math.random() * (max + 1)) + min;
}


