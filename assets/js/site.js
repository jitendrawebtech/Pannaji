$(document).ready(function () {
	$(".accordion .submenu ul").slideUp();

    // WOW SETTINGS OPEN
/*     new WOW({
        animateClass: 'animate__animated',
        offset: 100
    }).init(); */

    // WOW SETTINGS CLOSE

    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        var mainMenu = $(".mainMenu").outerHeight();

        if (scrollTop > mainMenu + mainMenu*1.5 ) {
            $(".mainMenu").addClass("scrolled");
            // $(".logo img").addClass("w-50");
        }
        else {
            $(".mainMenu").removeClass("scrolled");
            // $(".logo img").removeClass("w-50");
        }

        if ( $(this).scrollTop() > mainMenu + mainMenu*1.5 ) {
            $("#back_top").css('transform', 'scale(1, 1)');
        }
        else{
           $("#back_top").css('transform', 'scale(0,0)');
        }

    });

    $("#back_top").click(function() {
        $("html").animate({scrollTop: 0}, 400);
    });

    $('.bars-btn, header .mMenu .navMob > ul li a[href*="#"]').click(function(){
        $(".navMob").slideToggle(400);
    });
	
	
    //ACCRODIAN MENU OPEN HERE
/*     $(".bars-btn, .close-btn, .side-nav-overlay").click(function () {
        $(".accordion").toggleClass("offsetX-0");
        $(".side-nav-overlay").toggleClass("js-overlay-active");
        $("body").toggleClass("overflow-hidden");
    }); */
	
	$(".accordion .side-nav a").click(function() {
			var link = $(this);
			var closest_ul = link.closest("ul");
			var parallel_active_links = closest_ul.find(".active");
			var closest_li = link.closest("li");
			var link_status = closest_li.hasClass("active");
			var count = 0;

			closest_ul.find("ul").slideUp(function() {
					if (++count === closest_ul.find("ul").length){
							parallel_active_links.removeClass("active");	
					}
			});

			if (!link_status) {
					closest_li.children("ul").slideDown();
					closest_li.addClass("active");
			}
	});
	
	
	
	

    // CAROUSELES OPEN HERE
	
    $('.mainSlider').owlCarousel({
		items: 1,
        loop: true,
        //margin: 10,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
        nav: false,
      	/*animateIn: "animate__backInRight",
		animateOut: "animate__backOutLeft",*/
        navText: [
          '<img class="img-fluid" src="assets/images/leftArrow.png" alt="Left Arrow">',
          '<img class="img-fluid" src="assets/images/rightArrow.png" alt="Right Arrow">'
        ],
        responsive: {
          992: {
            nav: true
          }
        }
      });
	
    $('.homeTestiSlider').owlCarousel({
        loop: true,
        margin: 30,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
        /* nav: true,
        navText: [
          "<i class='fa fa-caret-left'></i>",
          "<i class='fa fa-caret-right'></i>"
        ], */
        responsive: {
          0: {
            dots: true,
            items: 1
          },
          768: {
            dots: true,
            items: 2
          },
          992: {
            items: 3
          }
        }
      });
    // CAROUSELES CLOSE HERE

    $('.contact-form input, .contact-form textarea').on('focusin', function () {
        $(this).parent().find('label').addClass('active');
    });

    $('.contact-form input, .contact-form textarea').on('focusout', function () {
        if (!this.value) {
            $(this).parent().find('label').removeClass('active');
        }
    });

});