import "./jquery.flexslider-min";

$(function () {
  $("#home_slider").flexslider({
    animation: "slide",
    controlNav: true,
    directionNav: true,
    animationLoop: true,
    slideshow: true,
    slideshowSpeed: 2000,
    useCSS: false,
  });
});
