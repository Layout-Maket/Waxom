$(function(){

    $('.slider__top-inner').slick({
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<button type="button" class="slick-arrows slick-prev"><img src="images/left.svg" alt="prev"></button>',
        nextArrow: '<button type="button" class="slick-arrows slick-next"><img src="images/right.svg" alt="next"></button>',
        fade: true,
        responsive: [
            {
                breakpoint: 1101,
                settings: {
                    arrows: false,
                }
            }
        ]
    });

    
    $('.projects-tabs__link').on('click', function(a){
        a.preventDefault();
        $('.projects-tabs__link').removeClass('projects-tabs__link--active');
        $(this).addClass('projects-tabs__link--active');
        
        $('.projects-tabs__content').removeClass('projects-tabs__content--active');
        $($(this).attr('href')).addClass('projects-tabs__content--active');
    })

    $('.posts__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button type="button" class="slick-arrows slick-prev"><img src="images/post-arrow-left.svg" alt="prev"></button>',
        nextArrow: '<button type="button" class="slick-arrows slick-next"><img src="images/post-arrow-right.svg" alt="next"></button>',
        responsive: [
            {
                breakpoint: 1241,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 651,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    $(".menu__btn").on('click', function(){
        $('.menu__list').toggleClass('menu__list--active');
    });
});