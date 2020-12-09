
let a = 0;
$(window).scroll(function () {
  let oTop = $(".shakesecond").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() >= oTop) {
    a++;
    $('.shakefirst').addClass('anime');
    $('.shakesecond').addClass('animetwo');
  }
});
