function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('.file-upload-image').attr('src', e.target.result);
            $('.example').hide();
            $('.image-upload-wrap').show();
            // $('.image-title').html(input.files[0].name);
        };
        reader.readAsDataURL(input.files[0]);
    }
    else {
        $('.image-upload-wrap').hide();
    }
}

function removeUpload() {
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.image-upload-wrap').hide();
    $('.image-upload-wrap img').attr('src', '');
    $('.example').delay(100).show();
}

$(document).ready(function() {
    $('.item a').on('click', function(e) {
        e.preventDefault();
        var _this = $(this),
            item = _this.closest('.item'),
            dir = _this.attr('href').replace('#', ''),
            selectSection = $('.panel').filter("[data_id="+dir+"]");
        item.add(selectSection).addClass('active').siblings().removeClass('active');
        
    });
    $('.btn').click(function(e) {
        e.preventDefault();
        var action = $(this).data("action"),
            aValueArgument = $(this).val(),
            aShowDefaultUI = false,
            filter = $('.btn').filter("[data_id="+action+"]");
        if (action == "bold" || action == "italic") document.execCommand(action, aShowDefaultUI, aValueArgument);
        if (action == "underline") document.execCommand(action);
        if (action == 'createLink') document.execCommand(action, true, 'http://google.com.ua');
        if (action == 'foreColor') document.execCommand(action, true, 'red');
        if (action == 'backColor') document.execCommand(action, 0, 'purple');
        if (action == 'undo') document.execCommand(action);
    });
    $('.sub').click(function(e) {
        e.preventDefault();
        var name = $('.notes_title').text(),
            content = $('.notes_cont').text(),
            img = $('.image-upload-wrap img').attr('src');
        var slide = $('.notes_slide');
        var sld = $('.slide').size();
        console.log(sld);
        slide.prepend('<div class="slide"><div class="slide_item"><img src="'+img+'" alt=""></div><p class="slide_name">'+name+'</p></div>');
        if (name) {
            if (content) {
                sendPost(name, content);
            } else {
                content = $('.notes_cont').text('Need content');
            }
            
        } else {
            $('.notes_title').text('Need title');
        }
        $('.notes_title').text('Название');
        removeUpload();
        $('.notes_cont').text('Описание');
    });
    function sendPost (name, content) {
        $.ajax({
            url: "../components/add.php",
            
        });
    }
});
