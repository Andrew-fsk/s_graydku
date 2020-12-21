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

    $('.farmers-slider').slick({
        dots: true,
        infinite: false,
        speed: 500,
        fade: false,
        slidesToShow: 3,
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

    $(' .item-slider').slick({
        dots: false,
        infinite: false,
        speed: 500,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        swipeToSlide: true,
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

    $('.info-all').on('click touchend', function () {
        $(this).parent().toggleClass('show');
        return false;
    })

    $(document).on('keydown', '[name^=count], [name^=update]', function(e){
        -1!==$.inArray(e.keyCode,[17,46,8,9,27,13,110,190])||/65|67|86|88/.test(e.keyCode)&&(!0===e.ctrlKey||!0===e.metaKey)||35<=e.keyCode&&40>=e.keyCode||(e.shiftKey||48>e.keyCode||57<e.keyCode)&&(96>e.keyCode||105<e.keyCode)&&e.preventDefault()
    });

    $('body').on('click touchend', '.minus', function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('body').on('click touchend', '.plus', function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) + 1;
        if (max = parseInt($input.attr('max'))) {
            count = count > max ? max : count;
        }
        $input.val(count);
        $input.change();
        return false;
    });

    $(function () {
        var tabContainers = $('.tabs > div');
        tabContainers.hide().filter(':first').show();
        $('.tabs .tab-list a').click(function () {
            tabContainers.hide();
            tabContainers.filter(this.hash).show();
            $('.catalog-slider').slick('setPosition');  //если в Табе используется слайдер
            $('.tabs .tab-list>li').removeClass('active');
            $(this).parent('li').addClass('active');
            return false;
        }).filter(':first').click();
    });
})