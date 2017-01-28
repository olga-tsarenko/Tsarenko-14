$(document).ready(function () {
    $(".industry-carousel").owlCarousel(
        {
            items: 4,
            margin: 27

        }
    );


    $(".about-carousel").owlCarousel({
            items: 5,
            margin: 60,
            nav: true,
        navText:["",""],
            dots: false

        }
    );

    $(".estate-carousel").owlCarousel({
            items: 1,
            margin: 0,
            nav: false,
            dots: true

        }
    );



});

