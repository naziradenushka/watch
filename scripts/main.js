$(document).ready(function(){
    /* условие, чтобы прижать к подвалу футер */
    function Footer() {
        $("main").removeAttr("style");
        if (($(".header").outerHeight() + $(".footer").outerHeight() + $("main").outerHeight()) < $(window).outerHeight()) {
            $("main").css("height", $(window).outerHeight() - ($(".header").outerHeight() + $(".footer").outerHeight()) + "px");
        } else {
            $("main").removeAttr("style");
        }
    }
    Footer();
    $(window).resize(function () {
        setTimeout(function () {
            Footer();
        }, 300)
        if ($(window).width() > 900) {
            $(".header nav").css("display", "block");
        } else {
            $(".header nav").css("display", "none");
        }
    });
    /* поиск */
    $(".search i").click(function() {
        $(".search").toggleClass("show")
    })
    /* меню */
    $(".header__bottom-menu").click(function() {
        $(".header nav").slideToggle();
    })
    /* отзывы-таб на стр карточка товара */
    if ($("div").is(".rateyo-stars")) {
        $(".rateyo-stars").rateYo({
            readOnly: true,
            starWidth: "21.6px",
            normalFill: "#ccc",
            ratedFill: '#f3c520',
            spacing: "4px",
            /* если нужны более округлые звёздочки, то ниже строчку ставим */
            "starSvg": '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.0002 0.200195L14.6002 7.4002L21.8002 8.30019L16.8562 13.8442L18.2002 21.8002L11.0002 18.2002L3.8002 21.8002L5.1562 13.8442L0.200195 8.30019L7.4002 7.4002L11.0002 0.200195Z" fill=0"/></svg>'
        });
    }
    /* войти/регистрация и забыли пароль */
    $(document).on('click', '.btn-login', function(){
        var logIn =  $.fancybox.open({
            src: '#logIn',
            type: 'inline',
        });
    });
});
//# sourceMappingURL=../maps/scripts/main.js.map
