// Swiper Silde  Salid_bar

var swiper = new Swiper(".side-swp", {
        pagination: {
                el: ".swiper-pagination",
                dynamicBullests: true,
                clickable: true,
        },
        autoplay: {
                delay: 2500
        },
        loop:true,

});

// Sale Silde  Sale_Slide

var swiper = new Swiper(".sale_sec ", {

        slidesPerView: 5,
        spaceBetween: 20,
        autoplay: {
                delay : 3000,
        },
        navigation :{
                nextEl : ".swiper-button-next",
                prevEl : ".swiper-button-prev"
        },
        loop:true,
        breakpoints:{
                1600 : {
                        slidesPerView:5,
                },
                1200 : {
                        slidesPerView:5,
                },
                700 : {
                        slidesPerView:3,
                spaceBetween: 15,

                },
                600 : {
                        slidesPerView:3
                },
                0 : {
                        slidesPerView:2,
                        spaceBetween: 10,

                },
        },
});

// Sale Silde  All Products

var swiper = new Swiper(".product_swip ", {

        slidesPerView: 4,
        spaceBetween: 15,
        autoplay: {
                delay : 3000,
        },
        navigation :{
                nextEl : ".swiper-button-next",
                prevEl : ".swiper-button-prev"
        },
        loop:true,
        breakpoints:{
                1600 : {
                        slidesPerView:4,
                },
                1200 : {
                        slidesPerView:3,
                },
                700 : {
                        slidesPerView:3,
                spaceBetween: 15,

                },
                600 : {
                        slidesPerView:2
                },
                0 : {
                        slidesPerView:2,
                        spaceBetween: 10,

                },
        },
});
