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

$('.header-top .burger-menu').on('click', function() {
    $(this).find('i').toggleClass('fa-bars fa-xmark');
    $('header .mobile-menu').slideToggle();
});


$('#subscribe').on("click", () => {
    let email = $('#email').val().trim();
    if(email.split('@').length != 2) {
        $('#formId label').text("You entered incorrect email adress.")
        $('#formId label').addClass('error');
        $('#formId label').fadeIn();
    } else {
        $('#formId label').text("Email submitted successfully!");
         $('#formId label').addClass('success');
        $('#formId label').fadeIn();
        $('#email').val(''); 
    }

    setTimeout(() => {
        $('#formId label').fadeOut(() => {
             $('#formId label').removeClass('error success');
        });
    }, 2000)
})