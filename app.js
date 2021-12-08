$(function () {

    //Fixed header
    let header = $('#header');
    let intro = $('#intro');
    let introH = intro.innerHeight();
    let scrollPosition = $(window).scrollTop();

    checkScroll(scrollPosition, introH)

    $(window).on('scroll resize', function () {
        introH = intro.innerHeight();
        scrollPosition = $(this).scrollTop();

        checkScroll(scrollPosition, introH)
    });

    function checkScroll(scrollPosition, introH) {
        if (scrollPosition > introH) {
            header.addClass('fixed');
        }
        else {
            header.removeClass('fixed');
        }
    }

    //Slow scroll
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let elId = $(this).data('scroll');
        let elOffset = $(elId).offset().top;

        $("html, body").animate({
            scrollTop: elOffset - 150
        }, 700);

        nav.removeClass('show')

    });

    //Slider
    let slider = $('#servicesSlider');

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true,
    });

    //Nav burger
    let nav = $("#nav");
    let navBurger = $("#navBurger");

    navBurger.on('click', function (event){
        event.preventDefault();

        nav.toggleClass('show')

    });

});