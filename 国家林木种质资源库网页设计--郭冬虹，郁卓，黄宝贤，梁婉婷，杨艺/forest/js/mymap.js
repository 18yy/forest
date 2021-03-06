var data = [
     {name: '中国林科院亚热带林业实验中心', value: 101},
     {name: '湖南省林业科学院', value: 112},
     {name: '湖北省林业厅林木种苗管理总站', value: 108},
     {name: '江苏省林业科学研究院', value: 109},
     {name: '黑龙江省林业科学研究所', value: 103},
     {name: '中国林科院资源昆虫研究所', value: 306},
     {name: '中国林科院热带林业研究所', value: 305},
     {name: '中国林科院沙漠林业实验中心', value: 308},
     {name: '浙江省林业科学研究院', value: 114},
     {name: '中国林科院热带林业实验中心', value: 104},
     {name: '山西省林业科学研究院', value: 119},
     {name: '中国林科院林业研究所', value: 000},
     {name: '四川省林科院', value: 102},
     {name: '河南种苗站', value: 105},
     {name: '广西林科院', value: 106},
     {name: '北京种苗站', value: 107},
     {name: '喀什地区林业技术推广站', value: 111},
     {name: '山东种苗站', value: 113},
     {name: '重庆市林科院', value: 118},
     {name: '北京农学院', value: 120},
     {name: '宁夏农林科学院', value: 121},
     {name: '山东农业大学', value: 122},
     {name: '河北农业大学枣中心', value: 123},
     {name: '青海省农林科学院', value: 124},
     {name: '新疆林科院', value: 125},
     {name: '西藏大学农牧学院', value: 126},
     {name: '西藏自治区林木科学研究院', value: 127},
     {name: '辽宁省经济林研究所', value: 128},
     {name: '江西省林业科学院', value: 129},
     {name: '上海市园林科学规划研究院', value: 130},
     {name: '甘肃省治沙研究所', value: 131},
     {name: '国际竹藤中心（竹藤种质资源子平台）', value: 301},
     {name: '中国林科院林业研究所花卉中心', value: 302},
     {name: '中国林科院亚热带林业研究所', value: 304},
     {name: '中国林科院经济林研究开发中心', value: 307},
     {name: '林业所-楸树、云杉', value: 309},
     {name: '国家林业局桉树研究开发中心', value: 702},
     {name: '浙江省林木种质资源子平台', value: '20X'},
     {name: '宁波市林业局林特种苗繁育中心', value: 209},
     {name: '原地保存子平台', value: 401},
     {name: '上海植物园', value: 601},
     {name: '深圳植物园', value: 602},
     {name: '外来树种种质资源子平台', value: 701},
     {name: '浙江省林木种苗站', value: 201},
     {name: '浙江农林大学', value: 202},
     {name: '太白山自然保护区管理局', value: 415},
     {name: '江苏省中国科学院植物研究所', value: 901},
     {name: '白龙江林科所', value: 902},
     {name: '中国西南野生生物种质资源库', value: 210},
     {name: '云南省花卉技术培训推广中心', value: 211},
     {name: '湖南张家界森林公园管理处', value: 416},
     {name: '攀枝花市农林科学研究院', value: 417},
     {name: '重庆市林科院林业所', value: 418},
     {name: '山东省林业科学研究院', value: 132},
     {name: '北京林业大学十二五科技支撑项目', value: 310},
     {name: '南京林业大学十二五科技支撑项目', value: 311},
     {name: '河南农业大学十二五科技支撑项目', value: 312},
     {name: '陕西植物研究所十二五科技支撑项目', value: 313},
     {name: '外来树种子平台（一期）700', value: 700},
     {name: '竹藤中心十二五科技支撑项目', value: 314},
     {name: '新疆喀什地区昆仑林场', value: 419},
     {name: '农科院蔬菜花卉所', value: 133},
     {name: '黄山学院', value: 134},
     {name: '陕西省林木种苗工作站', value: 110},
     {name: '内蒙古自治区林业厅种苗站', value: 116},
     {name: '北京市农林科学院林业果树研究所', value: 115},
     {name: '河北雾灵山国家级自然保护区', value: 408},
     {name: '江西井岗山自然保护区', value: 436},
     {name: '陕西两当白皮松保护区', value: 480},
     {name: '陕西太白山自然保护区', value: 470},
     {name: '陕西太平林场紫荆保护区', value: 490},
     {name: '吉林长白山自然保护区', value: 404},
     {name: '林业所-耐盐碱树种', value: 315},
     {name: '广东湛江市林科所', value: 703},
     {name: '广西合浦林科所', value: 704},
     {name: '福建省长泰岩溪国有林场', value: 705},
     {name: '广东佛山林科所', value: 706},
     {name: '广东江门林科所', value: 707},
     {name: '呼伦贝尔林科所', value: 708},
     {name: '云南楚雄林科所', value: 709},
     {name: '湛江林木良种场', value: 710},
     {name: '江门大沙林场', value: 711},
     {name: '江门狮山林场', value: 712},
     {name: '福建龙海九龙岭林场', value: 713},
     {name: '北京市海棠国家林木种质资源库', value: 801},
     {name: '中国林科院华北林业实验中心华北地区代表性植物国家林木种质资源库', value: 802},
     {name: '国际竹藤中心竹类与花卉国家林木种质资源库', value: 803},
     {name: '河北省遵化市魏进河林场国家板栗种质资源库', value: 804},
     {name: '洪崖山国有林场管理局蒙古栎、栓皮栎国家林木种质资源库', value: 805},
     {name: '丰宁县邓栅子国有林场白榆国家林木种质资源库', value: 806},
     {name: '中国林科院林业研究所绿化树种国家林木种质资源库', value: 807},
     {name: '太岳山国有林管理局石膏山林场白皮松国家林木种质资源库', value: 808},
     {name: '桑干河杨树丰产林实验局杨树国家林木种质资源库', value: 809},
     {name: '鄂尔多斯市造林总场沙柳国家林木种质资源库', value: 810},
     {name: '克什克腾旗沙地云杉国家林木种质资源库', value: 811},
     {name: '库布其濒危和沙生植物国家林木种质资源库', value: 812},
     {name: '中国林科院沙漠林业实验中心沙棘国家林木种质资源库', value: 813},
     {name: '喀左县山杏国家林木种质资源保存库', value: 814},
     {name: '大连市旅顺口区黑松国家林木种质资源库', value: 815},
     {name: '阜新市五角枫、蒙古栎国家林木种质资源库', value: 816},
     {name: '长白县山楂海棠、朝鲜崖柏国家林木种质资源库', value: 817},
     {name: '集安市刺楸国家林木种质资源库', value: 818},
     {name: '黑河市浆果经济树种国家林木种质资源库', value: 819},
     {name: '宾县大泉子林场硬阔树种国家林木种质资源库', value: 820},
     {name: '上海市唇形科植物国家林木种质资源库', value: 821},
     {name: '上海市桃国家林木种质资源库', value: 822},
     {name: '上海市蔷薇属植物国家林木种质资源库', value: 823},
     {name: '江苏省泗洪县陈圩林场国家杨树种质资源库', value: 824},
     {name: '南京市溧水区桂花国家林木种质资源库', value: 825},
     {name: '扬州市海棠国家林木种质资源库', value: 826},
     {name: '常州市油用牡丹国家林木种质资源库', value: 827},
     {name: '无锡市红豆杉国家林木种质资源库', value: 828},
     {name: '浙江省淳安县姥山林场国家马尾松种质资源库', value: 829},
     {name: '浙江省金华市国际山茶物种园国家山茶花种质资源库', value: 830},
     {name: '浙江省安吉县竹博园国家竹子种质资源库', value: 831},
     {name: '诸暨市香榧国家林木种质资源库', value: 832},
     {name: '安吉县龙山林场无患子国家林木种质资源库', value: 833},
     {name: '临安市天目山林场山核桃国家林木种质资源库', value: 834},
     {name: '中国林科院亚热带林业研究所山茶、木兰国家林木种质资源库', value: 835},
     {name: '广德县竹类国家林木种质资源库', value: 836},
     {name: '福建省洋口县林场国家杉木种质资源库', value: 837},
     {name: '福建省漳平市五一林场国家马尾松种质资源库', value: 838},
     {name: '惠安县赤湖国有防护林场木麻黄国家林木种质资源库', value: 839},
     {name: '省林木育种中心苦楝、南酸枣国家林木种质资源库', value: 840},
     {name: '江西省林业科学院', value: 841},
     {name: '齐云山食品有限公司南酸枣国家林木种质资源库', value: 842},
     {name: '中国林科院亚热带林业实验中心亚热带林木国家林木种质资源库', value: 843},
     {name: '省林木种质资源中心暖温带珍稀树种国家林木种质资源库', value: 844},
     {name: '枣庄市石榴国家林木种质资源库', value: 845},
     {name: '淄博市柿树国家林木种质资源库', value: 846},
     {name: '泰安市乡土观赏树种国家林木种质资源库', value: 847},
     {name: '中国林科院林业研究所滨海抗逆树种国家林木种质资源库', value: 848},
     {name: '洛阳市牡丹国家林木种质资源库', value: 849},
     {name: '国家林业局泡桐中心北方主要名优经济树种国家林木种质资源库', value: 850},
     {name: '商丘市刺槐、榆树国家林木种质资源库', value: 851},
     {name: '京山县虎爪山林场枫香、皂荚国家林木种质资源库', value: 852},
     {name: '竹溪县双竹林场楠木国家林木种质资源库', value: 853},
     {name: '湖南省林业科学院实验林场国家油茶种质资源库', value: 854},
     {name: '湖南省泰格林纸集团有限责任公司国家杨树种质资源库', value: 855},
     {name: '湘西土家族苗族自治州油桐国家林木种质资源库', value: 856},
     {name: '省林业种苗中心红花檵木国家林木种质资源库', value: 857},
     {name: '肇庆市大南山林场红锥、香樟国家林木种质资源库', value: 858},
     {name: '乐昌市龙山林场木兰科国家林木种质资源库', value: 859},
     {name: '中国林科院林业研究所古巴加勒比松国家林木种质资源库', value: 860},
     {name: '广西林科院主要珍贵树种国家林木种质资源库', value: 861},
     {name: '中国林科院热带林业实验中心热带与南亚热带珍贵树种国家林木种质资源库', value: 862},
     {name: '中国林科院热带林业研究所试验站热带珍贵树种国家林木种质资源库', value: 863},
     {name: '永川区桢楠国家林木种质资源库', value: 864},
     {name: '四川省洪雅县槽渔滩桫椤自然保护区国家桫椤种质资源库', value: 865},
     {name: '德昌县核桃、山核桃国家林木种质资源库', value: 866},
     {name: '青川县天池国有林场', value: 867},
     {name: '西昌市油橄榄国家林木种质资源库', value: 868},
     {name: '三都县珍贵阔叶树种国家林木种质资源库', value: 869},
     {name: '赤水市竹类国家林木种质资源库', value: 870},
     {name: '望谟县国有林场油桐国家林木种质资源库', value: 871},
     {name: '腾冲市腾冲红花油茶国家林木种质资源库', value: 872},
     {name: '德宏傣族景颇族自治州珍贵树种国家林木种质资源库', value: 873},
     {name: '瑞丽市石斛国家林木种质资源库', value: 874},
     {name: '红河哈尼族彝族自治州柚木国家林木种质资源库', value: 875},
     {name: '拉萨市高寒地区乡土树种国家林木种质资源库', value: 876},
     {name: '榆林市沙生植物国家林木种质资源库', value: 877},
     {name: '清涧县红枣国家林木种质资源库', value: 878},
     {name: '镇安县七叶树国家林木种质资源库', value: 879},
     {name: '桥山林业局油松国家林木种质资源库', value: 880},
     {name: '甘肃省小陇山林业局沙坝国家云杉种质资源库', value: 881},
     {name: '兰州市紫斑牡丹国家林木种质资源库', value: 882},
     {name: '静宁县苹果国家林木种质资源库', value: 883},
     {name: '陇南市油橄榄国家林木种质资源库', value: 884},
     {name: '西宁市湟水林场杨树国家林木种质资源库', value: 885},
     {name: '西宁市丁香国家林木种质资源库', value: 886},
     {name: '宁夏回族自治区中宁县国家枸杞种质资源库', value: 887},
     {name: '银川市枸杞国家林木种质资源库', value: 888},
     {name: '银川植物园沙生植物国家林木种质资源库', value: 889},
     {name: '英吉沙县杏国家林木种质资源库', value: 890},
     {name: '特克斯县野生果树国家林木种质资源库', value: 891},
     {name: '阿里河林业局西伯利亚红松国家林木种质资源库', value: 892},
     {name: '红石林业局水曲柳、胡桃楸国家林木种质资源库', value: 893},
     {name: '金山屯林业局红皮云杉国家林木种质资源库', value: 894},
     {name: '大兴安岭林业集团公司技术推广站国家樟子松种质资源库', value: 895},
     {name: '新林林业局西伯利亚红松国家林木种质资源库', value: 896},
     {name: '呼中林业局钻天柳、偃松国家林木种质资源库', value: 897},
     {name: '石河子文冠果、榛子国家林木种质资源库', value: 898},
     {name: '第九师一六一团野生巴旦杏国家林木种质资源库', value: 899},
     {name: '北京市植物园', value: 603},
     {name: '南召县木兰属', value: 502},
     {name: '河南南召县林业局', value: 502},
     {name: '上海辰山植物园', value: 604},
     {name: '山东林木种质资源中心', value: 135},
     {name: '北京市林业科技推广站', value: 50101},
     {name: '天津市林业工作站', value: 50102},
     {name: '河北省林业科学研究院',value: 50103},
     {name: '山西省林业科学研究院', value: 50104},
     {name: '辽宁省经济林研究所', value: 50105},
     {name: '浙江农林大学', value: 50106},
     {name: '安徽省林业科学研究院', value: 50107},
     {name: '福建省林业科学研究院', value: 50108},
     {name: '江西省林业科学院',value: 50109},
     {name: '山东省林业科学研究院', value: 50110},
     {name: '湖北省林业科学研究院', value: 50111},
     {name: '湖南省森林植物园', value: 50112},
     {name: '广西壮族自治区林业科学研究院', value: 50113},
     {name: '河南农业大学', value: 50114},
     {name: '四川省林业科学研究院',value: 50115},
     {name: '重庆市林业科学研究院', value: 50116},
     {name: '贵州省核桃研究所', value: 50117},
     {name: '云南省林业科学院', value: 50118},
     {name: '陕西省林业技术推广总站',value: 50119},
     {name: '甘肃省林业科学技术推广总站', value: 50120},
     {name: '青海省农林科学院(50121)', value: 50121},
     {name: '宁夏林业技术推广总站', value: 50122},
     {name: '西藏大学农牧学院', value: 50123},
     {name: '新疆林业科学院', value: 50124}
];
var geoCoordMap = {
     '中国林科院亚热带林业实验中心': [114.62,27.78],
     '湖南省林业科学院': [113.03,28.13],
     '湖北省林业厅林木种苗管理总站': [113.88,29.97],
     '江苏省林业科学研究院': [118.46,31.51],
     '黑龙江省林业科学研究所': [130.20,45.17],
     '中国林科院资源昆虫研究所': [102.45,25.03],
     '中国林科院热带林业研究所': [113.54,23.30],
     '中国林科院沙漠林业实验中心': [106.35,40.17],
     '浙江省林业科学研究院': [120.15,30.27],
     '中国林科院热带林业实验中心': [106.74,22.12],
     '山西省林业科学研究院': [112.56,37.91],
     '中国林科院林业研究所': [116.251667,40.01024],
     '四川省林科院': [104.079561,30.685287],
     '河南种苗站': [113.754298,34.75486],
     '广西林科院': [108.361857,22.92395],
     '北京种苗站': [116.643326,40.308881],
     '喀什地区林业技术推广站': [75.98,39.46],
     '山东种苗站': [117.00,36.40],
     '重庆市林科院': [106.427043,29.583542],
     '北京农学院': [116.29986,40.09202],
     '宁夏农林科学院': [106.18,38.48],
     '山东农业大学': [117.13,36.18],
     '河北农业大学枣中心': [115.488972,38.856545],
     '青海省农林科学院': [101.754588,36.727498],
     '新疆林科院': [87.610312,43.829474],
     '西藏大学农牧学院': [94.348576,29.672105],
     '西藏自治区林木科学研究院': [91.12,29.65],
     '辽宁省经济林研究所': [121.595696,38.995892],
     '江西省林业科学院': [115.821437,28.741073],
     '上海市园林科学规划研究院': [121.454585,31.158912],
     '甘肃省治沙研究所': [103.756865,36.092416],
     '国际竹藤中心（竹藤种质资源子平台）': [116.254726,40.010881],
     '中国林科院林业研究所花卉中心': [116.30,39.95],
     '中国林科院亚热带林业研究所': [119.951,30.055],
     '中国林科院经济林研究开发中心': [113.705645,34.778581],
     '林业所-楸树、云杉': [116.252359,40.010852],
     '国家林业局桉树研究开发中心': [116.433469,39.961792],
     '浙江省林木种质资源子平台': [120.198433,30.270927],
     '宁波市林业局林特种苗繁育中心': [121.534579,29.86942],
     '原地保存子平台': [107.19,33.49],
     '上海植物园': [121.26,31.10],
     '深圳植物园': [114.182036,22.582212],
     '外来树种种质资源子平台': [116.254357,40.010882],
     '浙江省林木种苗站': [119.73661,30.257355],
     '浙江农林大学': [119.72,30.23],
     '太白山自然保护区管理局': [107.765077,34.277899],
     '江苏省中国科学院植物研究所': [118.841554,32.059999],
     '白龙江林科所': [102.751759,25.141894],
     '中国西南野生生物种质资源库': [102.751759,25.141894],
     '云南省花卉技术培训推广中心': [102.10,25.10],
     '湖南张家界森林公园管理处': [110.4,29.28],
     '攀枝花市农林科学研究院': [101.73,26.48],
     '重庆市林科院林业所': [117.094194,36.726177],
     '山东省林业科学研究院': [117.094194,36.726177],
     '北京林业大学十二五科技支撑项目': [116.352167,40.008137],
     '南京林业大学十二五科技支撑项目': [118.821591,32.084955],
     '河南农业大学十二五科技支撑项目': [113.669204,34.791415],
     '陕西植物研究所十二五科技支撑项目': [108.081812,34.279027],
     '外来树种子平台（一期）700': [116.252359,40.010852],
     '竹藤中心十二五科技支撑项目': [116.486175,39.994082],
     '新疆喀什地区昆仑林场': [76.806255,37.599709],
     '农科院蔬菜花卉所': [116.338855,39.969598],
     '黄山学院': [118.1738,29.4147],
     '陕西省林木种苗工作站': [108.556735,34.224992],
     '内蒙古自治区林业厅种苗站': [116.227117,39.974562],
     '北京市农林科学院林业果树研究所': [116.227117,39.974562],
     '河北雾灵山国家级自然保护区': [117.48516,40.613458],
     '江西井岗山自然保护区': [114.169225,26.570677],
     '陕西两当白皮松保护区': [106.368805,33.946188],
     '陕西太白山自然保护区': [107.765077,34.277899],
     '陕西太平林场紫荆保护区': [108.921244,34.265374],
     '吉林长白山自然保护区': [127.845592,41.927422],
     '林业所-耐盐碱树种': [116.254348,40.010881],
     '广东湛江市林科所': [110.347027,21.287189],
     '广西合浦林科所': [109.171516,21.461997],
     '福建省长泰岩溪国有林场': [117.77356,24.744184],
     '广东佛山林科所': [112.70197,22.790688],
     '广东江门林科所': [113.04632,22.563476],
     '呼伦贝尔林科所': [120.682181,49.283155],
     '云南楚雄林科所': [101.50815,25.064522],
     '湛江林木良种场': [110.788735,21.420983],
     '江门大沙林场': [112.352234,22.485588],
     '江门狮山林场': [112.534401,22.079171],
     '福建龙海九龙岭林场': [117.671969,24.348795],
     '北京市海棠国家林木种质资源库': [116.4149,40.1031],
     '中国林科院华北林业实验中心华北地区代表性植物国家林木种质资源库': [116.08,39.96],
     '国际竹藤中心竹类与花卉国家林木种质资源库': [116.479859,39.988919],
     '河北省遵化市魏进河林场国家板栗种质资源库': [117.740679,40.20074],
     '洪崖山国有林场管理局蒙古栎、栓皮栎国家林木种质资源库': [115.510665,39.347239],
     '丰宁县邓栅子国有林场白榆国家林木种质资源库': [116.328299,41.234835],
     '中国林科院林业研究所绿化树种国家林木种质资源库': [115.00,36.00],
     '太岳山国有林管理局石膏山林场白皮松国家林木种质资源库': [112.449382,37.857985],
     '桑干河杨树丰产林实验局杨树国家林木种质资源库': [112.543396,37.836294],
     '鄂尔多斯市造林总场沙柳国家林木种质资源库': [109.804587,39.609121],
     '克什克腾旗沙地云杉国家林木种质资源库': [117.0538,43.2918],
     '库布其濒危和沙生植物国家林木种质资源库': [111.707551,40.809364],
     '中国林科院沙漠林业实验中心沙棘国家林木种质资源库': [111.707455,40.809372],
     '喀左县山杏国家林木种质资源保存库': [119.51,41.04],
     '大连市旅顺口区黑松国家林木种质资源库': [121.56158,38.899717],
     '阜新市五角枫、蒙古栎国家林木种质资源库': [121.678826,42.024348],
     '长白县山楂海棠、朝鲜崖柏国家林木种质资源库': [128.1159,41.2451],
     '集安市刺楸国家林木种质资源库': [126.1224,41.0826],
     '黑河市浆果经济树种国家林木种质资源库': [127.340451,49.909745],
     '宾县大泉子林场硬阔树种国家林木种质资源库': [127.3838,45.3688],
     '上海市唇形科植物国家林木种质资源库': [121.1010,31.0418],
     '上海市桃国家林木种质资源库': [121.445008,31.197803],
     '上海市蔷薇属植物国家林木种质资源库': [121.386683,31.191011],
     '江苏省泗洪县陈圩林场国家杨树种质资源库': [118.46,33.44],
     '南京市溧水区桂花国家林木种质资源库': [118.84,32.03],
     '扬州市海棠国家林木种质资源库': [119.6526,32.4474],
     '常州市油用牡丹国家林木种质资源库': [120.00,31.58],
     '无锡市红豆杉国家林木种质资源库': [120.24166,31.545931],
     '浙江省淳安县姥山林场国家马尾松种质资源库': [119.072094,29.538772],
     '浙江省金华市国际山茶物种园国家山茶花种质资源库': [119.590589,29.137753],
     '浙江省安吉县竹博园国家竹子种质资源库': [119.660781,30.590756],
     '诸暨市香榧国家林木种质资源库': [120.246863,29.708692],
     '安吉县龙山林场无患子国家林木种质资源库': [119.709193,30.838192],
     '临安市天目山林场山核桃国家林木种质资源库': [119.391378,30.178425],
     '中国林科院亚热带林业研究所山茶、木兰国家林木种质资源库': [119.956511,30.057214],
     '广德县竹类国家林木种质资源库': [119.23,30.410],
     '福建省洋口县林场国家杉木种质资源库': [117.5329,26.4918],
     '福建省漳平市五一林场国家马尾松种质资源库': [117.42984,25.2949],
     '惠安县赤湖国有防护林场木麻黄国家林木种质资源库': [118.907919,24.908027],
     '省林木育种中心苦楝、南酸枣国家林木种质资源库': [115.815,28.740],
     '江西省林业科学院': [115.4848,28.4421],
     '齐云山食品有限公司南酸枣国家林木种质资源库': [114.49,25.66],
     '中国林科院亚热带林业实验中心亚热带林木国家林木种质资源库': [115.815423,28.740125],
     '省林木种质资源中心暖温带珍稀树种国家林木种质资源库': [117.32702,34.809098],
     '枣庄市石榴国家林木种质资源库': [117.327015,34.809252],
     '淄博市柿树国家林木种质资源库': [117.993958,36.831373],
     '泰安市乡土观赏树种国家林木种质资源库': [117.152101,36.192623],
     '中国林科院林业研究所滨海抗逆树种国家林木种质资源库': [117.058134,36.65434],
     '洛阳市牡丹国家林木种质资源库': [112.40101,34.70612],
     '国家林业局泡桐中心北方主要名优经济树种国家林木种质资源库': [113.699079,34.772909],
     '商丘市刺槐、榆树国家林木种质资源库': [105.932288,29.363625],
     '京山县虎爪山林场枫香、皂荚国家林木种质资源库': [112.898505,31.075289],
     '竹溪县双竹林场楠木国家林木种质资源库': [109.4549,32.1822],
     '湖南省林业科学院实验林场国家油茶种质资源库': [113.058736,28.119238],
     '湖南省泰格林纸集团有限责任公司国家杨树种质资源库': [113.155658,29.43624],
     '湘西土家族苗族自治州油桐国家林木种质资源库': [112.082061,28.155613],
     '省林业种苗中心红花檵木国家林木种质资源库': [113.2128,28.1211],
     '肇庆市大南山林场红锥、香樟国家林木种质资源库': [112.7012,23.3422],
     '乐昌市龙山林场木兰科国家林木种质资源库': [113.345111,25.135338],
     '中国林科院林业研究所古巴加勒比松国家林木种质资源库': [112.333328,22.485707],
     '广西林科院主要珍贵树种国家林木种质资源库': [108.35,22.91],
     '中国林科院热带林业实验中心热带与南亚热带珍贵树种国家林木种质资源库': [106.749357,22.12072],
     '中国林科院热带林业研究所试验站热带珍贵树种国家林木种质资源库': [110.36725,19.99479],
     '永川区桢楠国家林木种质资源库': [105.932288,29.363625],
     '四川省洪雅县槽渔滩桫椤自然保护区国家桫椤种质资源库': [103.16,29.90],
     '德昌县核桃、山核桃国家林木种质资源库': [101.895195,27.812562],
     '青川县天池国有林场': [105.23,32.58],
     '西昌市油橄榄国家林木种质资源库': [102.265337,27.893835],
     '三都县珍贵阔叶树种国家林木种质资源库': [107.525,25.5912],
     '赤水市竹类国家林木种质资源库': [105.93,28.48],
     '望谟县国有林场油桐国家林木种质资源库': [105.00233,25.476737],
     '腾冲市腾冲红花油茶国家林木种质资源库': [98.3250,24.5719],
     '德宏傣族景颇族自治州珍贵树种国家林木种质资源库': [97.5427,24.0354],
     '瑞丽市石斛国家林木种质资源库': [97.855477,24.017836],
     '红河哈尼族彝族自治州柚木国家林木种质资源库': [103.374751,23.363303],
     '拉萨市高寒地区乡土树种国家林木种质资源库': [91.03,29.56],
     '榆林市沙生植物国家林木种质资源库': [109.4318,38.1722],
     '清涧县红枣国家林木种质资源库': [110.121209,37.088878],
     '镇安县七叶树国家林木种质资源库': [109.15,33.42],
     '桥山林业局油松国家林木种质资源库': [109.257119,35.587015],
     '甘肃省小陇山林业局沙坝国家云杉种质资源库': [105.4736,34.3242],
     '兰州市紫斑牡丹国家林木种质资源库': [101.75,36.72],
     '静宁县苹果国家林木种质资源库': [105.736252,35.532165],
     '陇南市油橄榄国家林木种质资源库': [104.942717,33.390641],
     '西宁市湟水林场杨树国家林木种质资源库': [101.73,36.63],
     '西宁市丁香国家林木种质资源库': [101.4428,36.4023],
     '宁夏回族自治区中宁县国家枸杞种质资源库': [105.67,37.49],
     '银川市枸杞国家林木种质资源库': [106.21962,38.474319],
     '银川植物园沙生植物国家林木种质资源库': [106.181609,38.418516],
     '英吉沙县杏国家林木种质资源库': [76.0922,38.5825],
     '特克斯县野生果树国家林木种质资源库': [83.264957,43.437095],
     '阿里河林业局西伯利亚红松国家林木种质资源库': [123.4237,50.3645],
     '红石林业局水曲柳、胡桃楸国家林木种质资源库': [125.325633,43.873055],
     '金山屯林业局红皮云杉国家林木种质资源库': [126.651328,45.766679],
     '大兴安岭林业集团公司技术推广站国家樟子松种质资源库': [124.123061,50.424618],
     '新林林业局西伯利亚红松国家林木种质资源库': [124.394925,51.673782],
     '呼中林业局钻天柳、偃松国家林木种质资源库': [123.586138,52.033489],
     '石河子文冠果、榛子国家林木种质资源库': [87.613121,43.802468],
     '第九师一六一团野生巴旦杏国家林木种质资源库': [87.54,43.90],
     '北京市植物园': [116.209714,40.001403],
     '南召县木兰属': [112.429859,33.49317],
     '河南南召县林业局': [112.423417,33.48695],
     '上海辰山植物园': [121.181241,31.069863],
     '山东林木种质资源中心': [119.473402,35.460199],
     '北京市林业科技推广站': [116.344051,40.001192],
     '天津市林业工作站': [117.656353,39.022636],
     '河北省林业科学研究院': [114.476247,38.140441],
     '山西省林业科学研究院': [112.551659,37.843172],
     '辽宁省经济林研究所': [123.398558,41.771611],
     '浙江农林大学': [119.734742,30.262818],
     '安徽省林业科学研究院': [117.210996,31.856721],
     '福建省林业科学研究院': [119.28961,26.14693],
     '江西省林业科学院': [115.814767,28.735307],
     '山东省林业科学研究院': [117.058134,36.65434],
     '湖北省林业科学研究院': [114.49,30.50],
     '湖南省森林植物园': [113.03,28.103],
     '广西壮族自治区林业科学研究院': [108.29,22.84],
     '河南农业大学': [113.66,34.78],
     '四川省林业科学研究院': [104.07,30.67],
     '重庆市林业科学研究院': [106.420671,29.577522],
     '贵州省核桃研究所': [106.739215,26.493671],
     '云南省林业科学院': [102.746,25.14],
     '陕西省林业技术推广总站': [107.41,34.51],
     '甘肃省林业科学技术推广总站': [103.86,36.08],
     '青海省农林科学院(50121)': [101.754589,36.727499],
     '宁夏林业技术推广总站': [106.27,38.46],
     '西藏大学农牧学院': [94.34,29.66],
     '新疆林业科学院': [87.60,43.82]
};
var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

option = {
    title: {
        text: '保存机构地图位置 - 百度地图',
        subtext: '机构总数 212',
        // sublink: 'http://www.pm25.in',
        left: 'center'
    },
    tooltip : {
        trigger: 'item'
    },
    bmap: {
        center: [104.114129, 37.550339],
        zoom: 5,
        roam: true,
        mapStyle: {
            styleJson: [{
                'featureType': 'water',
                'elementType': 'all',
                'stylers': {
                    // 'color': '#d1d1d1'
                }
            }, {
                'featureType': 'land',
                'elementType': 'all',
                'stylers': {
                    'color': '#f3f3f3'
                }
            }, {
                'featureType': 'railway',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'highway',
                'elementType': 'all',
                'stylers': {
                    'color': '#fdfdfd'
                }
            }, {
                'featureType': 'highway',
                'elementType': 'labels',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'arterial',
                'elementType': 'geometry',
                'stylers': {
                    'color': '#fefefe'
                }
            }, {
                'featureType': 'arterial',
                'elementType': 'geometry.fill',
                'stylers': {
                    'color': '#fefefe'
                }
            }, {
                'featureType': 'poi',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'green',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'subway',
                'elementType': 'all',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'manmade',
                'elementType': 'all',
                'stylers': {
                    'color': '#d1d1d1'
                }
            }, {
                'featureType': 'local',
                'elementType': 'all',
                'stylers': {
                    'color': '#d1d1d1'
                }
            }, {
                'featureType': 'arterial',
                'elementType': 'labels',
                'stylers': {
                    'visibility': 'off'
                }
            }, {
                'featureType': 'boundary',
                'elementType': 'all',
                'stylers': {
                    'color': '#fefefe'
                }
            }, {
                'featureType': 'building',
                'elementType': 'all',
                'stylers': {
                    'color': '#d1d1d1'
                }
            }, {
                'featureType': 'label',
                'elementType': 'labels.text.fill',
                'stylers': {
                    'color': '#999999'
                }
            }]
        }
    },
    series : [
        {
            name: '单位名称，经度，纬度，库编号',
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: convertData(data),
            symbolSize: function (val) {
                return 10;
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: 'purple'
                }
            }
        },
        {
            name: '单位名称，经度，纬度，库编号',
            type: 'effectScatter',
            coordinateSystem: 'bmap',
            data: convertData(data.sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, 6)),
            symbolSize: function (val) {
                return val[2] / 4000;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: 'purple',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        }
    ]
};

$(function() {
     // 基于准备好的dom，初始化echarts实例
     var myChart = echarts.init(document.getElementById('h_map'));
     // 使用刚指定的配置项和数据显示图表。
     myChart.setOption(option);

     var bmap = myChart.getModel().getComponent('bmap').getBMap();
     bmap.addControl(new BMap.MapTypeControl());
     bmap.addControl(new ToolbarControl());
})