$(document).ready(function () {
    $(".industry-carousel").owlCarousel(
        {
            items: 4,
            margin: 27,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }


        }
    );


    $(".about-carousel").owlCarousel({
            items: 5,
            margin: 60,
            nav: true,
        navText:["",""],
            dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }

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

