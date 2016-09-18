$('.grid-item').on('mouseover', function (e) {
    clearTimeout(window.fuckinTimer);
    $('.grid').addClass('pause');
});

$('.grid-item').on('mouseout', function (e) {
    window.fuckinTimer = setTimeout(function () {
        $('.grid').removeClass('pause');
    }, 320);
});

$('.carousel-nav > li').on('click', function (e) {
    for (var i = 0; i < $('.carousel-nav > li').length; i++) {
        $('.carousel').removeClass('active-item-' + (i + 1));
    }
    $('.carousel').addClass('active-item-' + $(e.currentTarget).data('index'));
});
