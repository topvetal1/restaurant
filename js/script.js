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
})