/*=============== GALLERY SWIPER ===============*/
let swiperHome = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: -24,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        1220: {
            spaceBetween: -32,
        }
    }
})

/*=============== ARTICLES SWIPER ===============*/
let swiperFeatured = new Swiper('.featured__swiper', {
    loop: true,
    spaceBetween: 24,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            spaceBetween: 16,
        },
        768: {
            spaceBetween: 20,
        },
        1150: {
            spaceBetween: 24,
        }
    }
})

/*=============== CERTIFICATES COLLAPSE ===============*/
document.querySelectorAll('.cert-group-header').forEach((btn) => {
  btn.addEventListener('click', () => {
    const group = btn.closest('.cert-group');
    group.classList.toggle('open');
  });
});

/*=============== SCROLL REVEAL ===============*/
if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '50px',
        duration: 900,
        delay: 100,
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        reset: false
    });

    sr.reveal('.about-col-1',        { origin: 'left',   distance: '60px' });
    sr.reveal('.about-col-2',        { origin: 'right',  distance: '60px', delay: 200 });
    sr.reveal('.services-list div',  { interval: 120 });
    sr.reveal('.cert-group',         { interval: 80 });
    sr.reveal('.work',               { interval: 80 });
    sr.reveal('.contact-left',       { origin: 'left',   distance: '60px' });
    sr.reveal('.contact-right',      { origin: 'right',  distance: '60px', delay: 150 });
}
