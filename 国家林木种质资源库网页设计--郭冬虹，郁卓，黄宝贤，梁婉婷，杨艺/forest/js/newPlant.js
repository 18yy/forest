$(function() {
	var count = dataList.length;
	for (var i = 0;i < count;i++) {
		var li = $('<li>'
						+'<span class="cut-text"><span>' + (i+1) + '</span><a href="'+dataList[i].linkUrl+'">'+ dataList[i].name +'</a></span>'
						+'<span class="cut-text">'+dataList[i].genusName+'</span>'
						+'<span class="cut-text">'+dataList[i].kind+'</span>'
						+'<span class="cut-text">'+dataList[i].area+'</span>'
						+'<span class="cut-text">'+dataList[i].country+'</span>'
						+'<span class="cut-text">'+dataList[i].year+'</span>'
						+'<span class="cut-text">'+dataList[i].number+'</span>'
						+'<span class="cut-text">'+dataList[i].owner+'</span>'
						+'<span class="cut-text">'+dataList[i].foster+'</span>'
					+'</li>');
		$('#h_tree-list').append(li);
	}
})