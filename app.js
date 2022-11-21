$(function(){
// smooth scroll
 
    $("[data-scroll").on("click", function(event){
            event.preventDefault();


        let elementId = $(this).data("scroll");
        let elementOffset = $(elementId).offset().top;

        $("html, body").animate({
            scrollTop: elementOffset - 60
        }, 700)

        
    });


    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
   
});