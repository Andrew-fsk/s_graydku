$(document).ready(function () {
    $('.touch-menu').PopupSlider({
        effect: 'right',
        button: '.burger',
        closeButton: '.burger',
        container: 'header ',
        onMenuOpen: function () {
            document.activeElement.blur();
        },
        onMenuClose: function () {
            document.activeElement.blur();
        }
    });


    if($(window).innerWidth() <= 1024){
        $('.catalog-list').addClass('popular-slider slider')
    }

    $('.catalog-top').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: false,
        slidesToShow: 9,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    autoplay:true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.main-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.popular-slider').slick({
        dots: true,
        infinite: false,
        speed: 500,
        fade: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

})