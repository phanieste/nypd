// smooth scroll
$('a[href^="#"]').on('click', function(event) {
    var target = $.attr(this, 'href');

    event.preventDefault();
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 1000, 'easeInOutSine');
});

