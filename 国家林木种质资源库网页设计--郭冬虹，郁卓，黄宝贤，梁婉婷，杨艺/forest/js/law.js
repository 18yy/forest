/* 
 * @Author: YY
 * @Date:   2017-10-15 09:51:43
 * @Last Modified by:   anchen
 * @Last Modified time: 2017-10-21 16:39:45
 */
$(document).ready(function() {
    
    $('#l_tab li').click(function() {
        var i = $(this).index(); 
       /* nav选中状态的切换*/
        $(this).children().addClass('l_nav-selected').parent().siblings().children().removeClass('l_nav-selected');
        
        $(".l_content-box").addClass("l_content-box-active").eq(i);
        /*$(".l_content-box").eq(i).siblings(".l_content-box").children(".l_news").addClass('animated rotateOutUpLeft');*/
        $(".l_content-box").eq(i).siblings(".l_content-box").removeClass("l_content-box-active");


        /*已选中的div动态进入*/
        $(".l_content-box-active").children('.l_news').addClass('animated rotateInUpRight');
        $(".l_content-box-active").children('.l_images').addClass('animated rotateInUpLeft');
    });

    
});