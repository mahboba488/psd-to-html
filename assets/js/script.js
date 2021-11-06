jQuery(document).ready(function($){
    $(".Homepage-slides").owlCarousel({
        items:1,
        loop:true,
        nav:true,
        dots:true,
        navText:["<i class='fa fa-long-arrow-left'></i>" ,"<i class='fa fa-long-arrow-right'></i>"],
        autoplay:false
    


    });

    $(".iteam-list").owlCarousel({
        margin: 20,
           loop: true,
           autoplay: true,
           autoplayTimeout: 3000,
           autoplayHoverPause: true,
           responsive: {
             0:{
               items:1,
               nav: false
             },
             600:{
               items:2,
               nav: false
             },
             1000:{
               items:3,
               nav: false
             }
           }
    


    });

    $(".testimonial-list").owlCarousel({
        margin: 20,
           loop: true,
           autoplay: true,
           autoplayTimeout: 3000,
           autoplayHoverPause: true,
           responsive: {
             0:{
               items:1,
               nav: false
             },
             600:{
               items:2,
               nav: false
             },
             1000:{
               items:3,
               nav: false
             }
           }
    


    });

    $(".logo-carousel").owlCarousel({
        margin: 20,
           loop: true,
           autoplay: true,
           autoplayTimeout: 3000,
           autoplayHoverPause: true,
           responsive: {
             0:{
               items:1,
               nav: false
             },
             600:{
               items:2,
               nav: false
             },
             1000:{
               items:4,
               nav: false
             }
           }
    


    });



});



    $('.circlechart').circlechart();
  
