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
        items:3,
        margin:30,
        loop:true,
        nav:false,
        dots:true,
       
        autoplay:false
    


    });



});



    $('.circlechart').circlechart();
  
