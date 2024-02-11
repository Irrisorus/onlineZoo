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

    breakpoints:{
        780:{
            slidesPerView:3,
            spaceBetween:30,
        },
        1024:{
            slidesPerView:4,
        }
    }
   
    
});



nextButton= document.querySelector(".slider__button_next");
prevButton= document.querySelector(".slider__button_prev");
burgerMenu=document.querySelector(".header__menu-burger");
headerTop=document.querySelector(".header__top");
headerMenu=document.querySelector(".header__top-menu")
infoBox=document.querySelector(".info-box");

sliderButtons =[];
sliderButtons.push(nextButton,prevButton)
console.log(sliderButtons);
sliderButtons.forEach(element => {
    element.addEventListener('click',function(e){

        element.classList.add("slider__button_active");
        setTimeout(() => {element.classList.remove("slider__button_active");} , 1000);
       
    })
    
});

if(window.innerWidth<900){
    infoBox.append(headerMenu);
}

burgerMenu.addEventListener('click',()=>{
   
    console.log("aaaa")
    
        
    
    
    // headerTop.classList.toggle("header__top_active");
    burgerMenu.classList.toggle("header__menu-burger_active");
    headerMenu.classList.toggle("header__top-menu_active")
  
   
})
