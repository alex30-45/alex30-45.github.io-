$(document).ready(function(){
    $('.slider').slick({
    slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 6000,
    dots: false,
    speed: 2000
    });
  });
  $(document).ready(function(){
    $('.text-slider').slick({
	  autoplay: true,
	  autoplaySpeed: 6000,
    infinite: true,
    speed: 2000,
    fade: true,
    cssEase: 'linear',
    dots: false,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false
    });
  });
