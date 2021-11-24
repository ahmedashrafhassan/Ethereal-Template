$(document).ready(function(){
    // Navbar Links Active Class
    $(".nav-links ul li ").on("click",function(){
        $(this).addClass("active").siblings().removeClass("active");
    });

    // Mobile Menu Toggle
    $(".navbar .fa-bars").on("click",function(){
        $(".mobile-menu").fadeIn(400);
    });

    $(".mobile-menu .fa-times").on("click",function(){
        $(".mobile-menu").fadeOut(200);
    });

    // button overlay
    $(".our-work button").on("mouseenter",function(){
        $(".our-work button .overlay").fadeIn("fast");
    }).on("mouseleave",function(){
        $(".our-work button .overlay").fadeOut("fast");
    });

    // Carousel time
    $(".carousel").carousel({
        interval: 3500
    });
 
    // Counter
    $(window).on("scroll",function(){
        if ($("html,body").scrollTop() > $(".about-us").offset().top - 10) {
            $("#counter").jQuerySimpleCounter({
                start: 0,
                end: 55,
                duration: 3000
            });
            $("#counter2").jQuerySimpleCounter({
                start: 0,
                end: 88,
                duration: 3000
            }); 
        }
    });

    // Input border color change on focus
    $(".contact-us .form form input,textarea").focus(function(){
        $(this).css({
            "border-bottom-color" : "#000"
        });
    });
    $(".contact-us .form form input,textarea").blur(function(){
        $(this).css({
            "border-bottom-color" : "#EB233C"
        });
    });

    // Navigate to section from navbar links

    $(".navbar .nav-links ul li a").click(function(e){
        e.preventDefault();
        $("html,body").animate({
            scrollTop : $("#" + $(this).data("scroll")).offset().top
        }, 700);
    });

    // Navigate to section from mobile menu links
    $(".mobile-menu .mobile-menu-links ul li a").click(function(e){
        e.preventDefault();
        $(".mobile-menu").fadeOut(400);
        $("html,body").animate({
            scrollTop : $("#" + $(this).data("scroll")).offset().top
        }, 700);
    });

});