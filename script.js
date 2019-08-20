var btn = document.querySelectorAll('.btns a');

var tl = new TimelineMax();
var ctrl = new ScrollMagic.Controller();

$(document).ready(function () {
  $('.scroll').each(function (i) {
    var identificator = $(this).attr('id');
    if ($(this).position().top <= $(document).scrollTop() + 100) {
      $('.btns a').removeClass('active');
      $('.btns a.' + identificator).addClass('active');
    }

  })

  $(btn).each(function (i) {

    $(this).on('click', function (e) {
      e.preventDefault();
      $(btn).removeClass('active');
      $(this).addClass('active');
      TweenMax.to(window, .8, {
        scrollTo: {
          y: '.s' + (i + 1),
          // offsetY: 63, 
          ease: Power4.easeOut
        }
      })
    })
  })


  // var handle= function(){
  //   clearTimeout(time);
  //   var time= setTimeout(function(){


  //     $('.scroll').each(function(i){
  //       var identificator= $(this).attr('id');

  //        if( $(this).position().top <= $(document).scrollTop() + 100){ 

  //          $('.btns a').removeClass('active');

  //          $('.btns a.' + identificator).addClass('active');
  //        }

  //    })

  //  },250)
  // }


  tl.from('.text .span_f', 1, {
      y: '100%',
      ease: Power4.easeOut
    })
    .from('.text .span_s', 1, {
      y: '100%',
      ease: Power4.easeOut
    }, '-=.8')
    .from('.text .span_t', 1, {
      y: '100%',
      ease: Power4.easeOut
    }, '-=.8')
    .from('.text .span_fh', 1, {
      y: '100%',
      ease: Power4.easeOut
    }, '-=.8');


  /*  TIMELINEMAX and SCROLLMAGIC */
  var liontl = new TimelineMax();
  liontl.from('.lion', 2, {
      opacity: 0,
      ease: Power4.easeOut
    })
    .from('.s2_container_relative .s2_text', .7, {
      transform: 'rotateX(90deg)',
      transformOrigin: 'left bottom'
    }, "-=1.5");

  var bridgetl = new TimelineMax();
  bridgetl.from('.bridge', .7, {
    opacity: 0,
    x: 350
  });

  new ScrollMagic.Scene({
    triggerElement: '.s2_text',
    //reverse:false
  }).setTween(liontl).addTo(ctrl);

  new ScrollMagic.Scene({
    triggerElement: '.s3'
  }).setTween(bridgetl).addTo(ctrl);
/* SPLITTING ANIMATION*/
  $(window).on('scroll', function () {
    if ($('.s3').offset().top <= $(document).scrollTop() + 510) {
      $('.s3_text').css({'opacity':1})
      Splitting();
    }
  })

});
