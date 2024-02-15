let ArrayOfElipses = Array.from(document.querySelectorAll(".pay-amount__elipse"));
let activeEllipse = document.querySelector(".pay-amount__elipse_active");
let ArrayOfMoneyNumbers = Array.from(document.querySelectorAll(".amount-of-money"));
let amountOfDiets = document.querySelector(".amount-of-diets");

let nextButton= document.querySelector(".slider__button_next");
let prevButton= document.querySelector(".slider__button_prev");
let burgerMenu=document.querySelector(".header__menu-burger");
let headerTop=document.querySelector(".header__top");
let headerMenu=document.querySelector(".header__top-menu")
let infoBox=document.querySelector(".info-box");
let logoBox=document.querySelector(".logo__box")
let logoName=document.querySelector(".logo__name")
let wrapper=document.querySelector(".wrapper")




let elipseNumber=0;
let MoneyNumber=0;
let donationValue=ArrayOfMoneyNumbers[(activeEllipse.dataset.indexNumber)-1].dataset.moneyAmount;



ArrayOfElipses.forEach((element)=>{
    element.addEventListener('mouseover',(event)=>{
        element.classList.add("pay-amount__elipse_active");
        elipseNumber=element.dataset.indexNumber;
        MoneyNumber=elipseNumber-1
        // console.log(elipseNumber);
        ArrayOfMoneyNumbers[MoneyNumber].classList.add("amount-of-money_active");
    })
    element.addEventListener('mouseout',(event)=>{
        if(element!==activeEllipse){
            element.classList.remove("pay-amount__elipse_active");
            ArrayOfMoneyNumbers[MoneyNumber].classList.remove("amount-of-money_active");
        }
       
        

    })
    element.addEventListener("click",(event)=>{
        activeEllipse.classList.remove("pay-amount__elipse_active");
        ArrayOfMoneyNumbers[(activeEllipse.dataset.indexNumber)-1].classList.remove("amount-of-money_active");  
        activeEllipse=element;
        donationValue=ArrayOfMoneyNumbers[(activeEllipse.dataset.indexNumber)-1].dataset.moneyAmount;
        amountOfDiets.textContent=donationValue/250;
    })
})
burgerMenu.addEventListener('click',()=>{
  
    console.log("aaaa")
    
        
    

    burgerMenu.classList.toggle("header__menu-burger_active");
    headerMenu.classList.toggle("header__top-menu_active");
    logoBox.classList.toggle("logo__box_active");
    logoName.classList.toggle("logo__name_active");
    
    
   
})



