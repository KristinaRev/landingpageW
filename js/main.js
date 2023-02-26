$(document).ready(function(){
    $('nav a[href^="#"]').click(function () {
        let target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offfset().top //скролл сверху вниз
    }, 500);
    return false;
    });
});