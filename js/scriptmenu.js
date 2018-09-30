$(document).ready(function () {
//    var menu = [
//        [
//            {
//                t_img: "img/pizza/pr.jpg",
//                t_name: 'Панцеротти рикотта с зеленью',
//                t_dose: 200,
//                t_price: 80
//            },
//            {
//                t_img: 'img/pizza/pp.jpg',
//                t_name: 'Панцеротти пармезан с орехами',
//                t_dose: 180,
//                t_price: 80
//            },
//            {
//                t_img: 'img/pizza/margarita.jpg',
//                t_name: 'Маргаритта',
//                t_dose: 400,
//                t_price: 105
//            },
//            {
//                t_img: 'img/pizza/mela.jpg',
//                t_name: 'Меланзана',
//                t_dose: 580,
//                t_price: 175
//            },
//            {
//                t_img: 'img/pizza/4s.jpg',
//                t_name: '4 Сыра',
//                t_dose: 440,
//                t_price: 175
//            },
//            {
//                t_img: 'img/pizza/pollo.jpg',
//                t_name: 'Алла полло',
//                t_dose: 550,
//                t_price: 165
//            },
//            {
//                t_img: 'img/pizza/dia.jpg',
//                t_name: 'Дияволо',
//                t_dose: 450,
//                t_price: 165
//            },
//            {
//                t_img: 'img/pizza/bos.jpg',
//                t_name: 'Боскайола',
//                t_dose: 500,
//                t_price: 185
//            },
//            {
//                t_img: 'img/pizza/fungi.jpg',
//                t_name: 'Прошуто фунги',
//                t_dose: 500,
//                t_price: 165
//            }
//        ],
//        [
//            {
//                t_img: 'img/salad/grek.jpg',
//                t_name: 'Греческий',
//                t_dose: 290,
//                t_price: 105
//            },
//            {
//                t_img: 'img/salad/vald.jpg',
//                t_name: 'Вальдорфский',
//                t_dose: 210,
//                t_price: 115
//            },
//            {
//                t_img: 'img/salad/spin.jpg',
//                t_name: 'Шпинат и авокадо',
//                t_dose: 260,
//                t_price: 145
//            },
//            {
//                t_img: 'img/salad/pe4.jpg',
//                t_name: 'Печень с перепелиными яйцами',
//                t_dose: 210,
//                t_price: 130
//            },
//            {
//                t_img: 'img/salad/utka.jpg',
//                t_name: 'Утиная грудка и сыр камамбер',
//                t_dose: 350,
//                t_price: 195
//            },
//            {
//                t_img: 'img/salad/mid.jpg',
//                t_name: 'Мидии и авокадо',
//                t_dose: 280,
//                t_price: 180
//            },
//            {
//                t_img: 'img/salad/krev.jpg',
//                t_name: 'Тёплый с креветками',
//                t_dose: 250,
//                t_price: 240
//            },
//            {
//                t_img: 'img/salad/tunc.jpg',
//                t_name: 'С тёплым тунцом',
//                t_dose: 250,
//                t_price: 295
//            },
//            {
//                t_img: 'img/salad/tel.png',
//                t_name: 'С телятиной гриль',
//                t_dose: 250,
//                t_price: 165
//            },
//            {
//                t_img: 'img/salad/cez.jpg',
//                t_name: 'Цезарь" с курицей',
//                t_dose: 330,
//                t_price: 130
//            },
//            {
//                t_img: 'img/salad/cez2.jpg',
//                t_name: '"Цезарь" с креветками',
//                t_dose: 330,
//                t_price: 185
//            },
//            {
//                t_img: 'img/salad/cez3.jpg',
//                t_name: '"Цезарь" с форелью',
//                t_dose: 330,
//                t_price: 185
//            }
//        ],
//        [
//            {
//                t_img: 'img/soup/min.jpg',
//                t_name: 'Минестроне',
//                t_dose: 500,
//                t_price: 85
//            },
//            {
//                t_img: 'img/soup/grib.jpg',
//                t_name: 'Крем-суп из лесных грибов',
//                t_dose: 200,
//                t_price: 95
//            },
//            {
//                t_img: 'img/soup/spinat.jpg',
//                t_name: 'Крем-суп из шпината',
//                t_dose: 200,
//                t_price: 85
//            },
//            {
//                t_img: 'img/soup/che.jpg',
//                t_name: 'Крем-суп из чечевицы',
//                t_dose: 200,
//                t_price: 85
//            },
//            {
//                t_img: 'img/soup/gribi.jpg',
//                t_name: 'Бульён куриный по-итальянски',
//                t_dose: 360,
//                t_price: 85
//            },
//            {
//                t_img: 'img/soup/midii.jpg',
//                t_name: 'Крем-суп с мидиями',
//                t_dose: 220,
//                t_price: 115
//            }
//        ],
//        [
//            {
//                t_img: 'img/pasta/ravioli.jpg',
//                t_name: 'Равиоли со шпинатом',
//                t_dose: 280,
//                t_price: 140
//            },
//            {
//                t_img: 'img/pasta/ravtel.jpg',
//                t_name: 'Равиоли с телятиной',
//                t_dose: 280,
//                t_price: 140
//            }
//        ]
//        
//    ];
//    var bar = [
//        [
//            {
//                t_img: 'img/sp/muets.png',
//                t_name: 'Моэт Шандон',
//                t_dose: 750,
//                t_price: 3+' '+250
//            },
//            {
//                t_img: 'img/sp/muetsrose.png',
//                t_name: 'Моэт Шандон Розе',
//                t_dose: 750,
//                t_price: 3+' '+650
//            },
//            {
//                t_img: 'img/sp/ruinart.png',
//                t_name: 'Руинарт',
//                t_dose: 750,
//                t_price: 3+' '+119
//            }
//        ]
//    ];
    $('.logo').on('click', function(e) {
        e.preventDefault();
        $('.main_m, .main_b').fadeOut(300);
        $('.main_first').delay(310).fadeIn(1000);
        $('.progress li').empty();
        $('.tovat_item').empty();
    });
    $('.menu_btn').on('click', function(e) {
        e.preventDefault();
        $('.main_first, .main_b').fadeOut(100);
        $('.main_m').delay(310).fadeIn(1000);
        $('#sec, #trd').empty();
        $('#first').empty().append('<a href="#">Меню</a>');
        $('.tovat_item').empty();
    });
    $('.bar_btn').on('click', function(e) {
        e.preventDefault();
        $('#sec, #trd').empty();
        $('#first').empty().append('<a href="#">Бар</a>');
        $('.main_first, .main_m').fadeOut(100);
        $('.main_b').delay(350).fadeIn(1000);
        $('.tovat_item').empty();
    });
//    $('.eat').on('click', function(e) {
//        e.preventDefault();
//        var data = $(this).attr('data-id');
//        $('.tovat_item').empty();
//        for(var i = 0; i <= menu[data].length; i++) {
//            boostMenu (menu[data][i].t_img, menu[data][i].t_name, menu[data][i].t_dose, menu[data][i].t_price);
//        }
//        console.log(data);
//    });
//    $('.bar').on('click', function(e) {
//        e.preventDefault();
//        var q = $(this).attr('data-q');
//        $('.tovat_item').empty();
//        for(var i = 0; i <= bar[q].length; i++) {
//            boostBar (bar[q][i].t_img, bar[q][i].t_name, bar[q][i].t_dose, bar[q][i].t_price);
//        }
//    });
    $('#zakaz').on('click', function (e) {
        $('.z_list').slideToggle(200);
    });
//    function boostMenu (card, name, dose, price) {
//        $('.tovat_item').append('<li class="food_item"><div class="imgg"><img src="'+card+'" alt=""></div><div class="desk"><p class="t_name">'+name+'</p><p class="t_dose">Выход: '+dose+' гр.</p><p class="t_price">'+price+' грн.</p></div></li>');
//        
//    }
//    function boostBar (card, name, dose, price) {
//        $('.tovat_item').append('<li class="food_item"><div class="imgg"><img src="'+card+'" alt=""></div><div class="desk"><p class="t_name">'+name+'</p><p class="t_dose">Бутылка: '+dose+' гр.</p><p class="t_price">'+price+' грн.</p></div></li>');
//    }
    var slider1 = new Swiper('.slider1', { //swiper
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },
    });
    var slider2 = new Swiper('.slider2', {
      slidesPerView: 13,
      spaceBetween: 5,
      freeMode: true,
    });
    var slider3 = new Swiper('.slider3', {
      direction: 'vertical',
      slidesPerView: 7,
        spaceBetween: 5,
      freeMode: true,
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      mousewheel: true,
    });
});