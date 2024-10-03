function softScroll(id) {
    $("html, body").animate({
        scrollTop: $(id).offset().top - 100
    }, 400) 
    return false;
}

$('.video-play, .close-btn').on('click', () => {
    $('#modal-youtube').toggle();
    $('body').toggleClass('overflow-hidden');
    $('iframe').attr('src', 'https://www.youtube.com/embed/dQw4w9WgXcQ?si=RLhxiSksQdec-l-d;&amp;controls=0;&autoplay=1');
    let video = $('iframe').attr('src');
})

$('.close-btn').on('click', () => {
    $('iframe').attr('src', '');
});

$(window).on('resize', () => {
    resizeVideo();
}).resize();

function resizeVideo() {
    $('iframe').each(() => {
        let width = $(this).width();
        $(this).css('height', width / 1.77 + "px");
    })
}