$(document).ready(function(){

    /* slider active*/
    $(".sliders").owlCarousel({
        'items': 1,
        'loop': true,
        'autoplay': true 
    });

     /* testimonials active*/
     $(".testimonials").owlCarousel({
        'items': 3,
        'loop': true,
        'autoplay': true,
        'margin': 30,
        'center': true
    });
    
    /* gallary   */

    /*counter Up active

    $('.count').counterUp({
        delay: 10,
        time: 1000
    });
    
    */
    
    /* Magnific Image Popup
		============================*/
    
    
    
    
        // init Isotope
        var $grid = $('.portfolio-items').isotope();
        // filter items on menu click
        $('.portfolio-menu').on( 'click', 'li', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
            //menu activ class
        $('.portfolio-menu').on( 'click', 'li', function() {
            $(this).addClass('active').siblings().removeClass('active');
        });

  });



$('.count').counterUp({
  delay: 10,
  time: 2000
});



  /*  stiky */

  $(window).load(function(){
      $(window).on('scroll', function(){
        if ($(window).scrollTop()>0) {
            $('.header-area').addClass('sticky')
        }
       else{
        $('.header-area').removeClass('sticky')
       }

      })
  })
 
 

