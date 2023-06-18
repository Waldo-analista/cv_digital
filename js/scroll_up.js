jQuery(document).ready(function( $ ){
    jQuery(window).scroll(function() {
      if (jQuery(this).scrollTop() >95) {
          jQuery('.to-top').fadeIn();
      } else {
          jQuery('.to-top').fadeOut();
      }
    });
  
    jQuery(".to-top").click(function () {
    jQuery("html, body").animate({scrollTop: 0}, 1000);
    });
  });