$(function() {
    $('.holiday__slider').slick({
        slidesToShow: 1,
        arrows: true,
        dots: false,
        waitForAnimate: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 426,
                settings: {
                    arrows: true  
                }
            }
        ]
    });
});