function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
});

$('.header__burger').click(function() {
//    $('.header__menu').addClass('header__menu_active')
    $('.header__menu').fadeToggle(400);
});

$('h1').hover(function () { 
    $('h1').addClass('animate__animated animate__bounce')
});

$('h1').mouseleave(function () { 
    $('h1').removeClass('animate__animated animate__bounce')
});

