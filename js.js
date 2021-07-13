var delay = 3500;

$('.herobutton').on("click", function(){
    $('.hideMe').slideToggle();
  });



function switchhero(){
    setTimeout(function() {
    $(".jbhero").css("display", "grid");
    $(".heropane").css("animation", "fadein 3s forwards");

    console.log("switched");
}, delay);
}

function switchheroback(){
    setTimeout(function() {
        $(".heropane").css("animation", "fadein 3s forwards");
    $(".jbhero").css("display", "none");
    console.log("switched back");
}, delay);
}


switchheroback();

function fade() {
    $('.jbhero').fadeOut("slow");
    }
    setTimeout(fade, 3000);