$(function () {
            var container = $('.s_sideWrap');
            var list = $('.s_picShow');
            var buttons = $('.s_btn');
            var prev = $('.left-arrow');
            var next = $('.right-arrow');
            var index = 1;
            var len = 5;
            var interval = 3000;
            var timer;


            function animate (offset) {
                var left = parseInt(list.css('left')) + offset;
                if (offset>0) {
                    offset = '+=' + offset;
                }
                else {
                    offset = '-=' + Math.abs(offset);
                }
                list.animate({left: offset}, 300, function () {
                    if(left > -200){
                        list.css('left', -315 * len);
                    }
                    if(left < (-315 * len)) {
                        list.css('left', -315);
                    }
                });
            }

            function showButton() {
                buttons.eq(index-1).addClass('s_btn_on').siblings().removeClass('s_btn_on');
            }

            function play() {
                timer = setTimeout(function () {
                    next.trigger('click');
                    play();
                }, interval);
            }
            function stop() {
                clearTimeout(timer);
            }

            next.bind('click', function () {
                if (list.is(':animated')) {
                    return;
                }
                if (index == 5) {
                    index = 1;
                }
                else {
                    index += 1;
                }
                animate(-315);
                showButton();
            });

            prev.bind('click', function () {
                if (list.is(':animated')) {
                    return;
                }
                if (index == 1) {
                    index = 5;
                }
                else {
                    index -= 1;
                }
                animate(315);
                showButton();
            });

            buttons.each(function () {
                 $(this).bind('click', function () {
                     if (list.is(':animated') || $(this).attr('class')=='s_btn_on') {
                         return;
                     }
                     var myIndex = parseInt($(this).attr('index'));
                     var offset = -315 * (myIndex - index);
                     animate(offset);
                     index = myIndex;
                     showButton();
                 })
            });

            container.hover(stop, play);

            play();

        });