$(function() {
	var tab_title = $('#h_tab-title');
	tab_title.on('click',function(e) {
		var cur_target = e.target,
			cur_index = $(cur_target).attr('data-index');
		for (var i = 0;i < 5;i++) {
			$('#h_tab'+i).removeClass('h_tab-active');
			$('#h_tree-list'+i).removeClass('h_tree-list-active');
		}
		$('#h_tab'+cur_index).addClass('h_tab-active');
		$('#h_tree-list'+cur_index).addClass('h_tree-list-active');
	})
}) 