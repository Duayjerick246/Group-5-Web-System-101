 (function ($) {
  
  "use strict";

    
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    $(function() {
      $('.hero-slides').vegas({
          slides: [
              { src: 'images/slides/me.jpg' },
              { src: 'images/slides/her.jpeg' },
              { src: 'images/slides/roof.jpeg' },
              { src: 'images/slides/rooftop.jpeg' },
              { src: 'images/slides/tropa.jpeg' },
              { src: 'images/fel.jpeg' },
              { src: 'images/1.jpeg' },
              { src: 'images/cutepic.jpg' },
              { src: 'images/cutiepie.jpeg' },
              { src: 'images/slides/withher.jpeg' }
          ],
          timer: false,
          animation: 'kenburns',
      });
    });
    
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height() + 60;
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
  
  })(window.jQuery);