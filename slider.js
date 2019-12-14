var swiper = new Swiper('.swiper-container', {
   effect: 'coverflow',
   grabCursor: true,
   centeredSlides: true,
   slidesPerView: 'auto',

   autoplay: {
     delay: 1500,
     disableOnInteraction: false,
   },
   
   coverflowEffect: {
     rotate: 30,
     stretch: 100,
     depth: 300,
     modifier: 1,
     slideShadows : true,
   },
   pagination: {
     el: '.swiper-pagination',
     clickable: true,
   },
 });