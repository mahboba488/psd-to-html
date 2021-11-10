jQuery(document).ready(function($){
    $(".Homepage-slides").owlCarousel({
        items:1,
        loop:true,
        
        dots:true,
       
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

    $(".portfolio-filter li ").on('click',function(){
      $(".portfolio-filter li").removeClass("active");
      $(this).addClass("active");

      var filterValue= $(this).attr("data-filter");
      $(".portfolio-list").isotope({
        filter : filterValue
      })

    });
    

    $(".portfolio-list").isotope({
      layoutMode:"masonry",
      masonry:{
        columnWidth:".col-md-6",
        horizontalOrder: false
        

      }


    })



});



    $('.circlechart').circlechart();

   
      
    
