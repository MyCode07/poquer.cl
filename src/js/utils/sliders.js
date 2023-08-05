import { Swiper, Pagination } from "swiper";

const slidersDrag = document.querySelectorAll('.slides__flex-swiper');

if (slidersDrag) {

    slidersDrag.forEach(sliderDrag => {
        const slider = sliderDrag.querySelector('.swiper');
        const sliderSlides = sliderDrag.querySelectorAll('.swiper-slide');

        if (sliderSlides.length) {
            new Swiper(slider, {
                slidesPerView: 'auto',
                grabCursor: true,
                spaceBetween: 20
            })
        }
    });
}