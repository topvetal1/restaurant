$(document).ready(function() {
    var itemFlip = document.querySelectorAll('.menu_item');
    var topItem = $('top_memu a');
    //Анимация бургера
    $('.menu_button').click(function() {
        $(this).toggleClass('open');
        //Анимация итемов меню бургера
        if ($(this).attr('data-click') == 0) {
            $(this).attr('data-click', 1);
            $('.menu_item').each(function(i) {
                var self = $(this);
                setTimeout(function () {
                    self.hide(200);
                }, i * 100);
            });
        } else {
            $(this).attr('data-click', 0);
            $('.menu_item').each(function(i) {
                var self = $(this);
                console.log(self);
                setTimeout(function () {
                    self.show(200);
                }, i * 100);
            });
        }
    });
    //Click and animation top menu
    $('.item a').on('click', function(e) {
        e.preventDefault();
        var _this = $(this),
            item = _this.closest('.item'),
            direction = _this.attr('href').replace('#', ''),
            reqSection = $('.all').filter('[data-target="' + direction + '"]'),
            reqSecPos = reqSection.offset().top;
        $('html, body').animate({
            scrollTop: reqSecPos
        }, 500);
    })
    $(window).on('scroll', function() {
        $('.all').each(function(){
            var _this = $(this),
                topSection = _this.offset().top,
                botSection = topSection + _this.height(),
                wScroll = $(window).scrollTop(),
                wHeight = $(window).height()/2
            if((topSection - wHeight < wScroll) && (botSection - wHeight > wScroll)) {
                var id = _this.index(),
                    stroka = _this.attr('data-target'),
                    reqItem = $('.item a').eq(id);
                reqItem.closest('.item').addClass('active').siblings().removeClass('active');
                window.location.hash = stroka;
            }
        });
    });
})