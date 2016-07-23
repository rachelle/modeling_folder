$(document).ready(function(){

  $('.parallax').parallax();
  /* Side Nav Collapse */
  $(".button-collapse").sideNav(); 

  /* Slider */
  $('.slider').slider({
      full_width: false,
      height:650, 
      interval:5000, 
      transition: 800, 
  });

  // Pause slider
  $('.slider').slider('pause');
  // Start slider
  $('.slider').slider('start');
  // Next slide
  $('.slider').slider('next');
  // Previous slide
 $('.slider').slider('prev');



});