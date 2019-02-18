/**
 * 统计表tab的显示与隐藏
 */
$(function() {
	var tab_box = $('.h_sm-tab-box')[0];
	$(tab_box).on('click',function(e) {
		var cur_target = e.target,
			cur_index = $(cur_target).attr('data-index');
		if (!cur_index) {
			return false;
		} else {
			var tabs = $('.h_sm-tab-btn'),
				tables = $('.h_tables');
			for (var i = 0;i < tabs.length;i++) {
				$(tabs[i]).removeClass('h_sm-tab-btn-active');
				$(tables[i]).removeClass('h_tables-active');
			}
			$(tabs[cur_index]).addClass('h_sm-tab-btn-active');
			$(tables[cur_index]).addClass('h_tables-active');
		}
	})
})