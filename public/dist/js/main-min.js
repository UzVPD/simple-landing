function softScroll(e){return $("html, body").animate({scrollTop:$(e).offset().top-100},400),!1}function resizeVideo(){$("iframe").each(()=>{let e=$(this).width();$(this).css("height",e/1.77+"px")})}$(".video-play, .close-btn").on("click",()=>{$("#modal-youtube").toggle(),$("body").toggleClass("overflow-hidden"),$("iframe").attr("src","https://www.youtube.com/embed/dQw4w9WgXcQ?si=RLhxiSksQdec-l-d;&amp;controls=0;&autoplay=1");$("iframe").attr("src")}),$(".close-btn").on("click",()=>{$("iframe").attr("src","")}),$(window).on("resize",()=>{resizeVideo()}).resize(),$("#subscribe").on("click",()=>{2!=$("#email").val().trim().split("@").length?($("#formId label").text("You entered incorrect email adress."),$("#formId label").addClass("error"),$("#formId label").fadeIn()):($("#formId label").text("Email submitted successfully!"),$("#formId label").addClass("success"),$("#formId label").fadeIn(),$("#email").val("")),setTimeout(()=>{$("#formId label").fadeOut(()=>{$("#formId label").removeClass("error success")})},2e3)});