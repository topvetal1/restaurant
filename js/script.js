$(document).ready(function() {
    var itemFlip = document.querySelectorAll('.menu__item.animate');
    //Анимация бургера
    $('.menu__button').click(function() {
        $(this).toggleClass('open');
        //Анимация итемов меню
        if ($(this).attr('data-click') == 0) {
            $(this).attr('data-click', 1);
            setTimeout(function() {
                Array.from(itemFlip).forEach((item, i) => {
                    setTimeout(() => item.classList.add('animate'), i * 100);
                });
            }, 100);
        } else {
            $(this).attr('data-click', 0);
            setTimeout(function() {
                Array.from(itemFlip).forEach((item, i) => {
                    setTimeout(() => item.classList.remove('animate'), i * 100);
                });
            }, 100);
        }
    });
})