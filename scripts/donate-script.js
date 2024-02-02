let ArrayOfElipses = Array.from(document.querySelectorAll(".pay-amount__elipse"));
let activeEllipse = document.querySelector(".pay-amount__elipse_active");
let ArrayOfMoneyNumbers = Array.from(document.querySelectorAll(".amount-of-money"));
let amountOfDiets = document.querySelector(".amount-of-diets");
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



