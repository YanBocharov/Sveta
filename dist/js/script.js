$(function() {
    $('.holiday__slider').slick({
        slidesToShow: 1,
        arrows: true,
        dots: false,
        waitForAnimate: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 425,
                settings: {
                    arrows: false
                }
            }
        ]
    });
});