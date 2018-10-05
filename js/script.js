$(document).ready(function() {
    var itemFlip = document.querySelectorAll('.menu_item');
    //Анимация бургера
    $('.menu_button').click(function() {
        $(this).toggleClass('open');
        //Анимация итемов меню
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
    $('.item a').on('click', function(e) {
        e.preventDefault();
        var _this = $(this),
            item = _this.closest('.item'),
            direction = _this.attr('href').replace('#', ''),
            reqSection = $('section').filter('[data-target="' + direction + '"]'),
            reqSecPos = reqSection.offset().top;
        $('html, body').animate({
            scrollTop: reqSecPos
        }, 500);
    })
    $(window).on('scroll', function() {
        $('section').each(function(){
            var _this = $(this),
                topSection = _this.offset().top - 50,
                botSection = topSection + _this.height(),
                wScroll = $(window).scrollTop();
            if(topSection < wScroll && botSection > wScroll) {
                var id = _this.index(),
                    stroka = _this.attr('data-target'),
                    reqItem = $('.item a').eq(id);
                reqItem.closest('.item').addClass('active').siblings().removeClass('active');
                window.location.hash = stroka;
            }
        })
    })
})