(function(){
    const parallaxMainContainer = $(".parallax"),
          image = $(".parallax .parallax__image")

    $(window).on("scroll", function() {
        setImagePosition();
    })

    function setImagePosition(){
        image.css("top", $(window).scrollTop()/4);
    }
})();