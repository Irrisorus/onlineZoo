new Swiper(".swiper",{
    navigation:{

        nextEl:".slider__button_next",
        prevEl:".slider__button_prev"
    },
   
});

new Swiper(".swiper-feedback",{


    scrollbar:{
        el:'.swiper-scrollbar',
        draggable:true
    },
    slidesPerView:4,
    
    
});



 nextButton= document.querySelector(".slider__button_next");
 prevButton= document.querySelector(".slider__button_prev");
 sliderButtons =[];
 sliderButtons.push(nextButton,prevButton)
console.log(sliderButtons);
sliderButtons.forEach(element => {
    element.addEventListener('click',function(e){

        element.classList.add("slider__button_active");
        setTimeout(() => {element.classList.remove("slider__button_active");} , 1000);
       
    })
    
});
