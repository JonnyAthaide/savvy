var step = {
    init: function () {
        $('.step-carousel').owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            nav: true,
            navText: ['<img src="./assets/img/arrow-left.png">', '<img src="./assets/img/arrow-right.png">  '],
            navContainer: '.owl-nav-arrow',
            dots: false,
        })
    }
}

var mask = {
    init: function () {
        var SPMaskBehavior = function (val) {
                return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
            },
            spOptions = {
                onKeyPress: function (val, e, field, options) {
                    field.mask(SPMaskBehavior.apply({}, arguments), options);
                }
            };

        $('.telefone').mask(SPMaskBehavior, spOptions);
    }
}

var modulo = {
    init: function () {
        $('.owl-modulo').owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            nav: true,
            navText: ['<img src="./assets/img/arrow-left.png">', '<img src="./assets/img/arrow-right.png">  '],
            navContainer: '.owl-nav-funct',
            dots: false,
        })
    }
}

let scroll = {
    init: function () {
        $('.scroll-link').on('click', function (event) {
            event.preventDefault();
            var section = $(this).attr('href');
            var top = $(section).offset().top - 70;
            $('html').scrollTop(top);
        });
    }
}

let scrollClass = {
    init: function () {
        var nav = $('.navbar');
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                nav.addClass("scroll");
            } else {
                nav.removeClass("scroll");
            }
        });
        console.log('scroll')
    }
}

let resize = {
    init: function () {        

        if ( window.innerWidth < 540) {
            $('.owl-modulo').addClass('owl-carousel owl-theme owl-loaded')
        } else {
            $('.owl-modulo').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded owl-theme');
        }
        
        $(window).on('resize', function () {
            var win = $(window).width()
            if (win < 540) {
                $('.owl-modulo').addClass('owl-carousel owl-theme owl-loaded')
            } else {
                $('.owl-modulo').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded owl-theme');
            }
            console.log(win);
        });
    }
}

$(document).ready(function () {
    // resize.init();
    step.init();
    modulo.init();
    scroll.init();
    mask.init();
    scrollClass.init();
})