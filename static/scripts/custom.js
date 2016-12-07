$(document).ready(function() {
    // turns off scroll while loader is active
    $("#includedContent").load("../../build/custom.html");
    $('body').css('overflow','hidden');
    // makes container full-width
    $(".full-width").closest("section").removeClass("container").addClass("container-fluid");
    // when everything is loaded, do these things
    $(window).load(function() {
        $('.full-width').show();
        $("html, body").scrollTop(0);
        $(".loader").fadeOut("slow");
        $('body').css('overflow','auto');
    });
});
