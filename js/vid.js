$(window).scroll(function() {
    var h1 = $("h1");
    if ($(window).scrollTop() >= 200)
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



// Explosions


$('body').on('click', function(e) {
    explode(e.pageX, e.pageY);
  })
  
  // explosion construction
  function explode(x, y) {
    var particles = 55,

      explosion = $('<div class="explosion"></div>');
  
    $('body').append(explosion);
  
    explosion.css('left', x - explosion.width() / 2);
    explosion.css('top', y - explosion.height() / 2);
  
    for (var i = 0; i < particles; i++) {
      
      var x = (explosion.width() / 2) + rand(200, 250) * Math.cos(2 * Math.PI * i / rand(particles - 10, particles + 10)),
        y = (explosion.height() / 2) + rand(200, 250) * Math.sin(2 * Math.PI * i / rand(particles - 10, particles + 10)),
        color = rand(100, 255), 

        elm = $('<div class="particle" style="' +
          'background-color: rgb(' + color + ', ' +  color + ', ' + color + ') ;' +
          'top: ' + y + 'px; ' +
          'left: ' + x + 'px"></div>');
  
      if (i == 0) { 

        elm.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
          explosion.remove(); 
        });
      }
      explosion.append(elm);
    }
  }
  
  function rand(min, max) {
    return Math.floor(Math.random() * (max + 1)) + min;
  }


