$(function() {
    /* 言語ボタン */
    $('#en-btn').click(function() {
        $(this).addClass('lang-select');
        $('#jp-btn').removeClass('lang-select');
    });

    $('#jp-btn').click(function() {
        $(this).addClass('lang-select');
        $('#en-btn').removeClass('lang-select');
    });

    /* スクロール時のヘッダー表示切替 */
    var topLink = $('.top-link-wrapper');
    var topNavi = $('.top-navi');
    var topLogo = $('.top-logo-wrapper');
    var headerLogo = $('.header-logo-wrapper');
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            topLink.hide();
            topLogo.hide();
            topNavi.css('background-color', 'rgba(0, 0, 0, 0.8)');
            headerLogo.show();
        } else {
            topLink.show();
            topLogo.show();
            topNavi.css('background-color', 'transparent');
            headerLogo.hide();
        }
    });
});
