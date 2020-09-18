(function () {
    const film = $(".slider__item-list"),
        nextBtn = $(".slider__button--right"),
        prevBtn = $(".slider__button--left"),
        slides = $(".slider__item");


    let currentSlideIndex = slides.index($(".slider__item--active")),
        displayWidth = $(window).width(),
        slideWidth = slides.eq(0).width();

    $(window).on('resize', function () {
        displayWidth = $(window).width();
        slideWidth = slides.eq(0).width();
        SetFilmCenter();
    })

    $(nextBtn).on("click", function () {
        currentSlideIndex++;

        if (currentSlideIndex > slides.length - 2) {
            film.addClass("disableTransition");
            $(".slider__item").last().after($(".slider__item").eq(0));
            currentSlideIndex = currentSlideIndex - 2;
            SetFilmCenter();
            film[0].offsetHeight; //Trigger a reflow, flushing the CSS changes
            film.removeClass("disableTransition");
            currentSlideIndex++;
        }

        SetActiveSlides();
        SetFilmCenter();
    })

    $(prevBtn).on("click", function () {
        currentSlideIndex--;

        if (currentSlideIndex < 1) {
            film.addClass("disableTransition");
            $(".slider__item").eq(0).before($(".slider__item").last());
            currentSlideIndex = currentSlideIndex + 2;
            SetFilmCenter();
            film[0].offsetHeight; //Trigger a reflow, flushing the CSS changes
            film.removeClass("disableTransition");
            currentSlideIndex--;
        }

        SetActiveSlides();
        SetFilmCenter();
    })

    function SetActiveSlides() {
        $(".slider__item").removeClass("slider__item--active");
        $(".slider__item").eq(currentSlideIndex).addClass("slider__item--active");
    }

    function SetFilmCenter() {
        let marginLeft = currentSlideIndex * slideWidth - (displayWidth - slideWidth) / 2;
        film.css('margin-left', -marginLeft);
    }

    /////Thread
    SetFilmCenter();
})();



