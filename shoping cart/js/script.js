$('.p-left-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    vertical:true,
    arrows: false,
    centerMode: true,
    centerPadding: '0px',
    rows:0,
    asNavFor: '.p-left-btm-slider',
  });

  $('.p-left-btm-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    centerMode: true,
    centerPadding: '0px',
    asNavFor: '.p-left-slider',
    focusOnSelect: true
  });

$('.project-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:true,
    prevArrow:'.p-left',
    nextArrow: '.p-right'
});
$('.test-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:true,
    prevArrow:'.t-left',
    nextArrow: '.t-right'
});
$('.logo-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:true,
    centerMode: true,
    centerPadding: '0px',
    prevArrow:'.l-left',
    nextArrow: '.l-right'
});