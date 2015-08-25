window.onload = function () {

// grab an element
var myElement = document.querySelector("header");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(myElement);
// initialise
headroom.init();

//<!-- You should bundle all SVG/Icons into one file using a build tool such as gulp and svg store -->
(function(d, p) {
    var a = new XMLHttpRequest(),
        b = d.body;
    a.open("GET", p, !0);
    a.send();
    a.onload = function() {
        var c = d.createElement("div");
        c.style.display = "none";
        c.innerHTML = a.responseText;
        b.insertBefore(c, b.childNodes[0])
    }
})(document, "//cdn.plyr.io/1.0.19/sprite.svg");

// Picture element HTML5 shiv
document.createElement( "picture" );

//<!-- Load SVG defs -->
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

        if (target.length) {
            $('html,body').animate({ scrollTop: target.offset().top }, 1000);
            return false;
        }
    }
    });
});

};//end of window.onload