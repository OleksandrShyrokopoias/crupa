
//popup slider
  var swiper = new Swiper(".galery_popup-slider", {
    slidesPerView: "auto",
    centeredSlides: true,
    speed: 1000,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      }
    });
//popup
  Fancybox.bind("[data-fancybox]", {
    touch: false
  });
    