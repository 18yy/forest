$(function() {
	var count = treeData.length;
	for (var i = 0;i < count;i++) {
		var li = $('<li>'
						+'<span class="cut-text">'+ (i+1) +'<a href="'+treeData[i].linkUrl+'">'+ treeData[i].specificName +'</a></span>'
						+'<span class="cut-text">'+treeData[i].familyName+'</span>'
						+'<span class="cut-text">'+treeData[i].genusName+'</span>'
						+'<span class="cut-text" title="'+treeData[i].latinName+'">'+treeData[i].latinName+'</span>'
						+'<span class="cut-text">'+treeData[i].treeCode+'</span>'
						+'<span class="cut-text">'+treeData[i].internationalCode+'</span>'
						+'<span class="cut-text"><a href="'+treeData[i].linkUrl+'">查看</a></span>'
					+'</li>');
		$('#h_tree-list').append(li);
	}
/*检索页面*/
	var count2=24;
	for (var i = 0;i < count2;i++) {
		var li = $('<li>'
						+'<span class="cut-text">'+ (i+1) +'<a href="'+SearchtreeData[0].linkUrl+'">'+ SearchtreeData[0].specificName +'</a></span>'
						+'<span class="cut-text">'+SearchtreeData[0].familyName+'</span>'
						+'<span class="cut-text">'+SearchtreeData[0].genusName+'</span>'
						+'<span class="cut-text" title="'+SearchtreeData[0].latinName+'">'+SearchtreeData[0].latinName+'</span>'
						+'<span class="cut-text">'+SearchtreeData[0].treeCode+'</span>'
						+'<span class="cut-text">'+SearchtreeData[0].internationalCode+'</span>'
						+'<span class="cut-text"><a href="'+SearchtreeData[0].linkUrl+'">查看</a></span>'
					+'</li>');
		$('#h_tree-list-search').append(li);
	}
})