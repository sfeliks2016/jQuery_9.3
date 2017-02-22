$(function(){
    
   var carouselList = $('#carousel ul'); 
   var interval;
   var moveFirstSlide;
    
    
    startSlider();
    
    function startSlider(){
        interval = setInterval(function(){
            carouselList.animate({'margin-left': '-=400'}, 500, moveFirstSlide);
        }, 2000);
    
        moveFirstSlide = function() {
            var firstItem = carouselList.find('li:first');
            var lastItem = carouselList.find('li:last');

            lastItem.after(firstItem);
            carouselList.css({'margin-left': 0});
        };
    };
    
    function stopSlider(){
        clearInterval(interval);    
    }
    
    carouselList.on('mouseenter', stopSlider).on('mouseleave', startSlider);
    
    
});

$("#toggle1").click(function(){
    $(".one").fadeToggle();
});

$("#toggle2").click(function(){
    $(".two").fadeToggle();
});


