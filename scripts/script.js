new Swiper(".swiper",{
   
    spaceBetween:30,
    navigation:{

        nextEl:".slider__button_next",
        prevEl:".slider__button_prev"
    },
    breakpoints:{
       1:{
            slidesPerView:1,
        },
        638:{
            slidesPerView:2,
        },
        850:{
            slidesPerView:2.5,
            spaceBetween:0,
        },
       
        900:{
            slidesPerView:3,
            spaceBetween:30,
        },
       
    },
    

    
 
   
    
});

new Swiper(".swiper-feedback",{


    scrollbar:{
        el:'.swiper-scrollbar',
        draggable:true
    },
    slidesPerView:4,

    breakpoints:{
        0:{
            slidesPerView:1,
            
        },
        580:{
            slidesPerView:2,
            
        },
        850:{
            slidesPerView:3,
            
        },
        1100:{
            slidesPerView:4,
           
        }
    }
   
    
});



let nextButton= document.querySelector(".slider__button_next");
let prevButton= document.querySelector(".slider__button_prev");
let burgerMenu=document.querySelector(".header__menu-burger");
let headerTop=document.querySelector(".header__top");
let headerMenu=document.querySelector(".header__top-menu")
let infoBox=document.querySelector(".info-box");
let logoBox=document.querySelector(".logo__box")
let logoName=document.querySelector(".logo__name")
let wrapper=document.querySelector(".wrapper")


let sliderButtons =[nextButton,prevButton];
console.log(sliderButtons);
sliderButtons.forEach(element => {
    element.addEventListener('click',function(e){
        console.log("aaaa");
        element.classList.add("slider__button_active");
        setTimeout(() => {
            element.classList.remove("slider__button_active");
        } , 1000);
       
    })
    
});
//////////////////////////----фиксить

// 

burgerMenu.addEventListener('click',()=>{
  
    console.log("aaaa")
    
        
    

    burgerMenu.classList.toggle("header__menu-burger_active");
    headerMenu.classList.toggle("header__top-menu_active");
    logoBox.classList.toggle("logo__box_active");
    logoName.classList.toggle("logo__name_active");
    
    
   
})
