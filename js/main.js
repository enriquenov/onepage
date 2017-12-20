$(document).ready(function(){

	var $isAnimatedPage2 = $('.page2 .is-animated');
	var $isAnimatedPage3 = $('.page3 .is-animated');
	var $isAnimatedPage4 = $('.page4 .is-animated');
	var $isAnimatedPage5 = $('.page5 .is-animated');

	$('#wrapper').fullpage({
    anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
    menu: '#navbar',
    css3: true,
    scrollingSpeed: 750,
		scrollOverflow: true,

		onLeave: function(index, nextIndex, direction){
			if( index == 1 && direction == 'down' ){
				$isAnimatedPage2.addClass('animated fadeInUp');
				$isAnimatedPage2.eq(0).css('animation-delay', '.3s');
    		$isAnimatedPage2.eq(1).css('animation-delay', '.9s');

			} else if( index == 2 && direction == 'down' ){
				$isAnimatedPage3.addClass('animated fadeInUp');
				$isAnimatedPage3.eq(0).css('animation-delay', '.3s');
    		$isAnimatedPage3.eq(1).css('animation-delay', '.9s');

			} else if( index == 3 && direction == 'down' ) {
				$isAnimatedPage4.addClass('animated fadeInRight').css('animation-delay', '.9s');
				$('.page4 .left').addClass('animated fadeInUp').css('animation-delay', '.3s');

			} else if( index == 4 && direction == 'down' ) {
				$isAnimatedPage5.addClass('animated fadeInLeft');
			}
		},

		afterLoad: function(anchorLink, index){
        if(index == 6 || index == 7) {
            $('.menu').css('background-color', '#ededed');
        }
        else{
            $('.menu').css('background-color', '#FFF');
        }
    }

	});

  $('.toggle a').click(function(){
    $('#navbar').toggleClass('active');
    $('.toggle a').toggleClass('active');
  })

  $('ul li a.item').click(function(){
    $('#navbar').toggleClass('active');
    $('.toggle a').toggleClass('active');
  })

	$('.logo a').click(function(){
		if ($('navbar active')) {
			$('#navbar').removeClass('active');
			$('.toggle a').removeClass('active');
		}
	})

	$('#wrapper').click(function(){
		if ($('navbar active')) {
			$('#navbar').removeClass('active');
			$('.toggle a').removeClass('active');
		}
	})


});


$(window).on('load', function() {
	/*------------------
		Preloader
	--------------------*/
	$(".loader").fadeOut();
	$("#preloader").delay(400).fadeOut("slow");


});
