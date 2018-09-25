AOS.init();

jQuery(document).ready(function(e) {
    var a = e(window).width();
    e(document).mousemove(function(o) {
            a > 1024 && 
            (e(".ball1").parallax(3, o), 
             e(".ball2").parallax(-3.5, o), 
             e(".ball3").parallax(1.5, o), 
             e(".ball4").parallax(2.5, o), 
             e(".ball5").parallax(10, o), 
             e(".ball6").parallax(-4, o),
             e(".ball7").parallax(-4, o),
             e(".ball8").parallax(-10, o))   
    })
});