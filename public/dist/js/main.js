function softScroll(id) {
    $("html, body").animate({
        scrollTop: $(id).offset().top - 100
    }, 400) 
    return false;
}