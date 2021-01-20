$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        dots:true,
        adaptiveHeight:true,
        slidesToShow:3,
        slidesToSkroll:1,
        speed:700,
        easing:'ease',
        infinite: true,
        initialSlide:0,
        autoplay:true,
        autoplaySpeed:1000,
        pauseOnFocus:true,
        pauseOnHover:true,
        pauseOnDotHover:true,
        draggable:true,
        swipe:true,
        touchTreshold:10,
        touchMove:true,
        waitForAnimate:false,
        centerMode:true,
        wariableWidth:true,
        rows:1,
        slidesPerRow:1,
        
    });
});