

document.addEventListener("DOMContentLoaded", () => {

    $(function() {
        $(".slider").slick({
            arrows: false,
            fade: true,
            autoplay: true
        });
    });
    
    $(function() {
        $(".slider-popular__inner").slick({
            centerMode: true,
            slidesToShow: 3,
            dots: false,
            prevArrow:'<button class="slick-arrow prev-arrow"><img src="images/icons/prev-arrow.svg"></button>',
            nextArrow: '<button class="slick-arrow next-arrow"><img src="images/icons/next-arrow.svg"></button>',
    
            responsive: [
                {
                breakpoint: 920,
                settings: {
                    arrows:false,
                    }
                },
        
                {
                    breakpoint:500,
                    settings: {
                        arrows:false,
                        slidesToShow: 1,
                    }
                }
            ]
        });
    });
    

    function changeWidthNew(){
        $('.new__inner').slick({
            responsive: [
                {
                    breakpoint: 2000,
                    settings: "unslick"
                },
                {
                    breakpoint: 500,
                    settings: {
                        centerMode: true,
                        arrows:false,
                        autoplay: true,
                        speed: 300,
                        fade: true,
                        dots: false,
                    }
                }
            ]
        });
    }
    changeWidthNew();

    $(window).resize(function(){
        var $windowWidth = $(window).width();
        if ($windowWidth <= 500) {
            changeWidthNew();   
        }
    });
    

    function changeWidthDiscounts(){
        $('.discounts__inner').slick({
            responsive: [
                {
                    breakpoint: 2000,
                    settings: "unslick"
                },
                {
                    breakpoint: 500,
                    settings: {
                        centerMode: true,
                        arrows:false,
                        fade: true,
                        dots: false,
                    }
                }
            ]
        });
    }
    changeWidthDiscounts();

    $(window).resize(function(){
        var $windowWidth = $(window).width();
        if ($windowWidth <= 500) {
            changeWidthDiscounts();   
        }
    });
    
});
































