$('.blog-carousel').owlCarousel({
    items:3,
    loop:true,
    margin:25,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:false,
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
});

$('.testimonial-carousel').owlCarousel({
    items:1,
    loop:true,
    nav:false,
    autoplay:false,
    autoplayTimeout:1000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('.latest_case_study_carousel').owlCarousel({
    loop:true,
    autoplay:true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1.2,
            margin: 20,
        },
        1000:{
            items:2.7,
            margin:20,
        }
    }
});

$('.client_logo_carousel').owlCarousel({
    items:4,
    loop:true,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:false,
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
});

$('.client-review-carousel').owlCarousel({
    items:3,
    loop:true,
    margin:25,
    nav:false,
    dots:false,
    autoplay:false,
    autoplayTimeout:1000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        },
        1200:{
            items:3
        }
    }
});
var selector = $('.client-review-carousel');

$('.client-review-next').click(function() {
selector.trigger('next.owl.carousel');
});

$('.client-review-prev').click(function() {
selector.trigger('prev.owl.carousel');
});

$('.expertise-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    items: 1,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('.ios-development-carousel').owlCarousel({
    items:3,
    loop:true,
    margin:25,
    nav:false,
    left: -30,
    dots:false,
    autoplay:false,
    autoplayTimeout:1000,
    // stagePadding: 150, 
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3.5
        }
    }
});

var selectorr = $('.ios-development-carousel');
    $('.ios-development-next').click(function() {
	    selectorr.trigger('next.owl.carousel');
	});
	$('.ios-development-prev').click(function() {
		selectorr.trigger('prev.owl.carousel');
	});

$('.service-testimonial-carousel ').owlCarousel({
    items:2,
    loop:true,
    margin:25,
    nav:true,
    dots:false,
    autoplay:false,
    autoplayTimeout:1000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
});

var selectorrr = $('.service-testimonial-carousel');
    $('.service-testimonial-next').click(function() {
		selectorrr.trigger('next.owl.carousel');
	});
    $('.service-testimonial-prev').click(function() {
		selectorrr.trigger('prev.owl.carousel');
	});






$('.case-study-carousel').on('initialized.owl.carousel changed.owl.carousel', function(e) {
    if (!e.namespace)  {
      return;
    }
    var carousel = e.relatedTarget;
    $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
  }).owlCarousel({
    items: 1,
    loop:true,
    margin:0,
    nav:false,
    dots:false,
    autoplay: true
  });




  $('.leadership-carousel').owlCarousel({
    items:3,
    loop:true,
    margin:25,
    nav:false,
    left: -30,
    dots:false,
    autoplay:false,
    autoplayTimeout:1000,
    // stagePadding: 150, 
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1.5
        },
        600:{
            items:2.5
        },
        1000:{
            items:3.5
        },
        1100:{
            items:4.5
        }
    }
});

var selectorleadership = $('.leadership-carousel');
    $('.leadership-next').click(function() {
		selectorleadership.trigger('next.owl.carousel');
	});
    $('.leadership-prev').click(function() {
		selectorleadership.trigger('prev.owl.carousel');
	});


    $('.culture-carousel').owlCarousel({
        margin:30,
        loop:true,
        autoWidth:true,
        items:2.5,
        nav:false,
        dots: false,
        autoplay: true,
        autoplayTimeout:3000,
    })



    $('.our-journey-carousel').owlCarousel({
        items:3,
        loop:true,
        margin: 10,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            },
            1100:{
                items:4
            }
        }
    });


    $('.belief-carousel').owlCarousel({
        items:3,
        loop:true,
        margin: 30,
        nav:false,
        dots:false,
        autoplay:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1,
            },
            1000:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });

    var selectorbelief = $('.belief-carousel');
    $('.belief-slider-next').click(function() {
		selectorbelief.trigger('next.owl.carousel');
	});
    $('.belief-slider-prev').click(function() {
		selectorbelief.trigger('prev.owl.carousel');
	});



    $('.achievements-carousel').owlCarousel({
        items:4,
        loop:true,
        margin: 30,
        nav:false,
        dots:false,
        // autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });

    var selectorachievements = $('.achievements-carousel');
    $('.achievements-slider-next').click(function() {
		selectorachievements.trigger('next.owl.carousel');
	});
    $('.achievements-slider-prev').click(function() {
		selectorachievements.trigger('prev.owl.carousel');
	});





