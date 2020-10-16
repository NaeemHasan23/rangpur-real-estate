/*  ---------------------------------------------------
    Theme Name: Rangpur Real Estate
    Description: Rangpur Real Estate bootstrap tamplate
    Author: Colorib
    Author URI: https://www.colorib.com/
    Version: 1.0
    Created: Colorib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    // $(window).on('load', function () {
    //     $(".loader").fadeOut();
    //     $("#preloder").delay(200).fadeOut("slow");
    // });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });
    // TOP Menu Sticky
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 400) {
        $("#sticky-header").removeClass("sticky");
        $('#back-top').fadeIn(500);
        } else {
        $("#sticky-header").addClass("sticky");
        $('#back-top').fadeIn(500);
        }
    });

    $(document).ready(function(){
        
        // var menu = $('ul#navigation');
        // if(menu.length){
        //     menu.slicknav({
        //         prependTo: ".mobile_menu",
        //         closedSymbol: '+',
        //         openedSymbol:'-'
        //     });
        // };

    /*------------------
		Navigation
	--------------------*/
    $("ul#navigation").slicknav({
        prependTo: '.mobile_menu',
        // closedSymbol: '+',
        // openedSymbol:'-',
        allowParentLinks: true
    });

    // Canvas Menu
    $(".canvas__open").on('click', function () {
        $(".offcanvas-menu-wrapper").addClass("active");
        $(".offcanvas-menu-overlay").addClass("active");
    });

    $(".offcanvas-menu-overlay").on('click', function () {
        $(".offcanvas-menu-wrapper").removeClass("active");
        $(".offcanvas-menu-overlay").removeClass("active");
    });

    // counter up
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    /*------------------
		Navigation
	--------------------*/
    // $(".mobile-menu").slicknav({
    //     prependTo: '#mobile-menu-wrap',
    //     allowParentLinks: true
    // });

    /*-----------------------
        Hero Slider
    ------------------------*/
    $(".hero__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: true,
        nav: true,
        navText: ["<i class='fa fa-angle-left'><i/>", "<i class='fa fa-angle-right'><i/>"],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1500,
        autoHeight: false,
        autoplay: true,
        mouseDrag: false,
        onInitialized: function (e) {
            var a = this.items().length;
            $("#snh-1").html("<span>01</span><span>" + "0" + a + "</span>");
            var presentage = Math.round((100 / a));
            $('.slider__progress span').css("width", presentage + "%");
        }
    }).on("changed.owl.carousel", function (e) {
        var b = --e.item.index,
            a = e.item.count;
        $("#snh-1").html("<span> " + "0" + (1 > b ? b + a : b > a ? b - a : b) + "</span><span>" + "0" + a + "</span>");

        var current = e.page.index + 1;
        var presentage = Math.round((100 / e.page.count) * current);
        $('.slider__progress span').css("width", presentage + "%");
    });


    /*------------------
		Projects Slider
	--------------------*/
        // slicknav
        $('ul#navigation').slicknav({
            prependTo: ".responsive-menu-wrap"
        });
    
        $('.grid').imagesLoaded(function() {
    
            // filter items on button click
            $('.project-menu').on('click', 'button', function() {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({ filter: filterValue });
            });
    
            // init Isotope
            var $grid = $('.grid').isotope({
                itemSelector: '.project',
                percentPosition: true,
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: '.project',
                }
            });
        });
    
        $('.project-menu button').on('click', function(event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });

    /*------------------
		Projects Slider
	--------------------*/
	// var project = $('#projects-carousel').owlCarousel({
	// 	nav: true,
	// 	loop: true,
	// 	margin:20,
	// 	navText: ['<i class="fa fa-long-arrow-left"></i> PREV', 'NEXT<i class="fa fa-long-arrow-right"></i>'],
	// 	responsive:{
	// 		0:{
	// 			items:1,
	// 			margin: 0
	// 		},
	// 		600:{
	// 			items:2
	// 		},
	// 		800:{
	// 			items:2
	// 		},
	// 		992:{
	// 			items:3
	// 		},
	// 		1200:{
	// 			items:4
	// 		},
	// 	}
    // });
    
	/* animate filter */
	// var owlAnimateFilter = function(even) {
	// 	$(this)
	// 	.addClass('__loading')
	// 	.delay(70 * $(this).parent().index())
	// 	.queue(function() {
	// 		$(this).dequeue().removeClass('__loading')
	// 	});
	// }
    /* Projects filter */
    // $('.projects-filter-nav li').on('click', function(e) {
    //     var filter_data = $(this).data('filter');

	// 	/* return if current */
	// 	if($(this).hasClass('btn-active')) return;

	// 	/* active current */
	// 	$(this).addClass('btn-active').siblings().removeClass('btn-active');

	// 	/* Filter */
	// 	project.owlFilter(filter_data, function(_owl) { 
	// 		$(_owl).find('.single-project').each(owlAnimateFilter); 
	// 	});
	// });

    /*--------------------------
        Project Slider
    ----------------------------*/
    $(".project__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 4,
        dots: false,
        nav: true,
        navText: ["<span class='arrow_carrot-left'><span/>", "<span class='arrow_carrot-right'><span/>"],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: false,
        responsive: {
            320: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

    /*-----------------------------
        Testimonial Slider
    -------------------------------*/
    $('.testimonial__carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        // autoplay:true,
        asNavFor: '.testimonial__client',
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"><i></i></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"><i></i></i></button>',
      });
      $('.testimonial__client').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.testimonial__carousel',
        arrows: false,
        variableWidth: true,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: false
              }
            }
          ]
        
      });

    /*---------------------------------
        Logo Carousel
    ----------------------------------*/
    $(".logo__carousel").owlCarousel({
        loop: true,
        margin: 80,
        items: 5,
        dots: false,
        nav: false,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            320: {
                items: 2
            },
            576: {
                items: 3
            },
            992: {
                items: 5
            },
        }
    });

    /*------------------
        Counter
    --------------------*/
    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
});

})(jQuery);

