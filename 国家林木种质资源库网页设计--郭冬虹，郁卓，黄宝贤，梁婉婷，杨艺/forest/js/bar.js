$(function() {
	var tab_box = $('.h_sm-tab-box1')[0];
	$(tab_box).on('click',function(e) {
		var cur_target = e.target,
			cur_index = $(cur_target).attr('data-index');
		if (!cur_index) {
			return false;
		} else {
			var tabs = $('.h_sm-tab-btn1'),
				bars = $('.h_bars');
			for (var i = 0;i < tabs.length;i++) {
				$(tabs[i]).removeClass('h_sm-tab-btn-active');
				$(bars[i]).removeClass('h_tables-active');
			}
			$(tabs[cur_index]).addClass('h_sm-tab-btn-active');
			$(bars[cur_index]).addClass('h_tables-active');
		}
		createBar(cur_index);
	})
})
var data = {
	'family': {
		'max': 2020,
		'charts': {
			'大风子科': 98,
			'杜英科': 105,
			'柿树科': 108,
			'红豆杉科': 121,
			'胡颓子科': 144,
			'槭树科': 154,
			'含羞草科': 156,
			'紫葳科': 157,
			'玄参科': 161,
			'禾本科': 199,
			'无患子科': 236,
			'芸香科': 252,
			'苏木科': 267,
			'胡桃科': 271,
			'鼠李科': 281,
			'壳斗科': 375,
			'木兰科': 394,
			'山茶科': 412,
			'木犀科': 412,
			'柏科': 421,
			'金缕梅科': 422,
			'樟科': 471,
			'大戟科': 529,
			'桦木科': 562,
			'马鞭草科': 723,
			'蝶形花科': 731,
			'银杏科': 753,
			'杉科': 856,
			'杜仲科': 1050,
			'杨柳科': 1190,
			'茄科': 1260,
			'蔷薇科': 1330,
			'桃金娘科': 1370,
			'松科': 2020
		}	
	},
	'genus': {
		'max': 1740,
		'charts': {
			'黄檗属': 146,
			'黄檀属': 148,
			'侧柏属': 148,
			'胡桃属': 149,
			'栲属, [锥属]': 151,
			'泡桐属': 156,
			'梓树属': 157,
			'木犀榄属': 157,
			'木莲属': 158,
			'乌桕属': 158,
			'栾树属': 163,
			'樟属': 165,
			'栎属': 170,
			'木荷属': 191,
			'云杉属': 211,
			'杏属': 236,
			'桃属': 242,
			'楠属': 274,
			'枣属': 281,
			'花楸属': 318,
			'油桐属': 351,
			'蔷薇属': 353,
			'桉树属': 368,
			'枫香树属': 422,
			'槐属': 452,
			'桦木属': 557,
			'柚木属': 693,
			'杉木属': 704,
			'银杏属': 753,
			'桉属': 964,
			'杜仲属': 1050,
			'杨属': 1190,
			'枸杞属': 1260,
			'松属': 1740
		}
	},
	'species': {
		'max': 1240,
		'charts': {
			'紫楠': 124,
			'桧柏': 124,
			'水杉': 128,
			'柏木': 138,
			'格木': 138,
			'刺槐': 141,
			'降香黄檀': 145,
			'灰木莲': 157,
			'木犀榄': 157,
			'花楸树': 157,
			'乌桕': 157,
			'枣': 166,
			'辽东栎': 168,
			'千年桐': 178,
			'青海云杉': 200,
			'核桃': 201,
			'月季花': 206,
			'油松': 218,
			'银杏': 223,
			'蓝桉': 242,
			'粗皮桉': 245,
			'云南松': 253,
			'尾叶桉': 296,
			'槐树': 308,
			'巨桉': 355,
			'思茅松': 370,
			'枫香': 419,
			'光皮桦': 470,
			'杉木': 653,
			'柚木': 693,
			'马尾松': 804,
			'美洲黑杨': 903,
			'杜仲': 1050,
			'宁夏枸杞': 1240
		}
	},
	'vip': {
		'max': 2680,
		'charts': {
			'宁波市林业局林特种苗繁育中心': 12,
			'中国林科院沙漠林业实验中心': 51,
			'中国林科院亚热带林业研究所': 72,
			'辽宁省经济林研究所': 74,
			'黑龙江省林业科学研究所': 84,
			'太白山自然保护区管理局': 85,
			'江西省林业科学院': 160,
			'北京市农林科学院林业果树研究所': 181,
			'福建龙海九龙岭林场': 200,
			'林业所-楸树、云杉': 200,
			'浙江农林大学': 279,
			'西藏自治区林木科学研究院': 289,
			'外来树种种质资源子平台': 308,
			'云南省花卉技术培训推广中心': 338,
			'北京农学院': 460,
			'四川省林科院': 514,
			'中国林科院资源昆虫研究所': 798,
			'山东农业大学': 895,
			'国家林业局桉树研究开发中心': 964,
			'宁夏农林科学院': 1260,
			'重庆市林科院': 1690,
			'中国林科院经济林研究开发中心': 1710,
			'山西省林业科学研究院': 1760,
			'湖北省林业厅林木种苗管理总站': 1980,
			'中国林科院亚热带林业实验中心': 2020,
			'中国林科院热带林业研究所': 2680
		}
	},
	'province': {
		'max': 1710,
		'charts': {
			'辽宁': 85,
			' ': 86,
			'甘肃': 92,
			'北海道': 100,
			'老街省': 101,
			'浙江、四川、湖北': 127,
			'黑龙江': 148,
			'新疆': 162,
			'安徽': 178,
			'青海': 206,
			'陕西': 230,
			'广东': 246,
			'贵州': 286,
			'河北': 291,
			'东努沙登加拉省': 296,
			'西藏': 310,
			'福建': 341,
			'新南威尔士': 417,
			'河南': 422,
			'浙江': 527,
			'广西': 556,
			'四川': 564,
			'昆士兰': 600,
			'重庆': 628,
			'北京': 824,
			'江西': 831,
			'山东': 910,
			'湖南': 963,
			'江苏': 980,
			'云南': 991,
			'湖北': 1020,
			'海南': 1090,
			'宁夏': 1250,
			'山西': 1710
		}
	}
}
createBar(0);
function createBar(n) {
	var myChart = echarts.init($('#h_bar'+n)[0]);
	var subtext = '';
	var barsData = {};
	if (n == '0') {
		subtext = '排名前34名科 资源数量柱状图';
		barsData = data.family;
	} else if (n == '1') {
		subtext = '排名前34名属 资源数量柱状图';
		barsData = data.genus;
	} else if (n == '2') {
		subtext = '排名前34名种 资源数量柱状图';
		barsData = data.species;
	} else if (n == '3') {
		subtext = '排名前26名会员单位 资源数量柱状图';
		barsData = data.vip;
	} else if (n == '4') {
		subtext = '排名前34名省 资源数量柱状图';
		barsData = data.province;
	}

	var option = {
    tooltip: {},
    title: [{
        text: '林木种质资源实时分类统计图',
        subtext: subtext,
        x: '50%',
        textAlign: 'center'
    }],
    grid: [{
        top: 50,
        width: '94%',
        bottom: '45%',
        left: 10,
        containLabel: true
    }],
    xAxis: [{
        type: 'value',
        max: barsData.max,
        splitLine: {
            show: false
        }
    }],
    yAxis: [{
        type: 'category',
        data: Object.keys(barsData.charts),
        axisLabel: {
            interval: 0,
            rotate: 30
        },
        splitLine: {
            show: false
        }
    }],
    series: [{
        type: 'bar',
        stack: 'chart',
        z: 3,
        itemStyle: {
            normal: {
                color: 'rgb(217,184,221)'
            }
        },
        label: {
            normal: {
                position: 'right',
                show: true
            }
        },
        data: Object.keys(barsData.charts).map(function (key) {
            return barsData.charts[key];
        })
    }, {
        type: 'bar',
        stack: 'chart',
        silent: true,
        itemStyle: {
            normal: {
                color: '#eee'
            }
        },
        data: Object.keys(barsData.charts).map(function (key) {
            return barsData.max - barsData.charts[key];
        })
    }]
}
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
}