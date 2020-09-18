const logo = $(".nav__logo");
const toggle = $(".nav__toggle");
const nav = $(".nav");

logo.on("click", function(){

})

toggle.on("click", function(){
    if (nav.hasClass("nav--open")) {
        nav.removeClass("nav--open")
    } else{
        nav.addClass("nav--open");
    }
})