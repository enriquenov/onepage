$(document).ready(function(){
	$('#wrapper').fullpage({
    anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
    menu: '#navbar',
    css3: true,
    scrollingSpeed: 750
	});

  $('.toggle a').click(function(){
    $('#navbar').toggleClass('active');
    $('.toggle a').toggleClass('active');
  })

  $('ul li a.item').click(function(){
    $('#navbar').toggleClass('active');
    $('.toggle a').toggleClass('active');
  })



});
