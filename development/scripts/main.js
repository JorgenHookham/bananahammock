$('.grid-item').on('mouseover', function (e) {
    clearTimeout(window.fuckinTimer);
    $('.grid').addClass('pause');
});

$('.grid-item').on('mouseout', function (e) {
    window.fuckinTimer = setTimeout(function () {
        $('.grid').removeClass('pause');
    }, 320);
});
