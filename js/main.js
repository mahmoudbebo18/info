$(document).ready(function() {
    $(".tourist .owl-carousel").owlCarousel({
        items: 6,
        rtl: false,
        loop: true,
        margin: 15,
        nav: false,
        dots: false,
        autoplay: true,
        mouseDrag: true,
        touchDrag: true,
        autoplayTimeout: 2000,
        responsive: {
            320: {
                items: 1,
            },
            425: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 5,
            },
        },
    });

    $('.tabs ul li').click(function() {
        $(this).addClass('active').siblings().removeClass('active')
        $(".tabs .my-tab").hide();
        $($(this).data("class")).show();
    })
})