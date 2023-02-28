$(document).ready(function(){
    /* плавная прокрутка меню */
    $('nav a[href^="#"]').click(function () {
        let target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top //скролл сверху вниз
    }, 1000);
    /* добавить/удалить класс active */
    $('nav a[href^="#"]').parent().removeClass('active');
    $(this).parent().addClass('active');
    $('.menu_mobile .menu').toggle(500);
    $('.menu__burger').toggleClass('close');
    return false;
    });
    /* мобильное меню */
    $('.menu__burger').click(function(){
        $('.menu_mobile .menu').toggle(500);
        $(this).toggleClass('close');
    });
});