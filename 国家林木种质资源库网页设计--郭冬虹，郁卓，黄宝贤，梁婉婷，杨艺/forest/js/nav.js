$(function() {
	var $nav1 = $('.h_first-nav');
	$nav1.hover(
		function() {
      $(this).children('.h_second-nav').addClass('h_second-nav-active');
    },function() {
      $(this).children('.h_second-nav').removeClass('h_second-nav-active');
    })
    var $nav2=$('.h_search-nav-ico');

    $nav2.click(function() {
      $('.h_search-box-nav').css({
        'display':'block'
      });
   })
    $('.h_search-box-nav>li').click(function(event) {
       $('.h_search-box-nav').css({
        'display':'none'
      });
    });

})