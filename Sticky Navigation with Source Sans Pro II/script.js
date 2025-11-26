/*
This projects are created by Ashraf Morningstar
GitHub Profile: https://github.com/AshrafMorningstar
*/

$(function() {
  $(document).bind('ready scroll', function() {
	   	var docScroll = $(document).scrollTop();
		  if (docScroll >= 100 & $('html').height() > 768) {
			  if (!$('body').hasClass('sticky')) {
				  $('body').addClass('sticky');
  			}
	  	} else {
		  	$('body').removeClass('sticky');
		  	$('.site-nav').removeAttr('style');
	  	}
    });
  
  $('.site-nav a').click(function(e){
    if(!$(this).hasClass('search-trigger'))
    {
      $('.site-nav a.active').removeClass('active');
      $(this).addClass('active');
    }
    $(this).blur()
    e.preventDefault();
  });
});