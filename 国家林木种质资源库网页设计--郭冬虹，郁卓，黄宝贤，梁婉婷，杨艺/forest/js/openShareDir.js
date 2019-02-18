$(function() {
	var flag = [],//左侧所有目录默认展开
		dir = $('#h_dir-left-box');
	flag[0] = true;
	flag[3] = true;
	flag[5] = true;
	flag[8] = true;

	dir.on('click',function(e) {
		var cur_target = e.target,
			cur_index = $(cur_target).attr('data-index');
		//点到空白处不更换右侧信息
		if (!cur_index) {
			return false;
		}
		for (var i = 0;i < 11;i++) {
			$('.h_first-dir').removeClass('h_dir-active');
			$('.h_second-dir').removeClass('h_dir-active');
			$('#h_dir-right-box'+i).removeClass('h_dir_right-box-active');
		}
		$(cur_target).addClass('h_dir-active');
		$('#h_dir-right-box'+cur_index).addClass('h_dir_right-box-active');

		if ((cur_index == 0 && flag[cur_index]) || (cur_index == 3 && flag[cur_index]) || (cur_index == 5 && flag[cur_index]) || (cur_index == 8 && flag[cur_index])) {
			$(cur_target).next('ul').slideUp();
			$(cur_target).addClass('h_first-dir-close');
			flag[cur_index] = false;
		} else {
			$(cur_target).next('ul').slideDown();
			$(cur_target).removeClass('h_first-dir-close');
			flag[cur_index] = true;
		}
	})
})