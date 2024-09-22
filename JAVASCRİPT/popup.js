let buttonSec =document.querySelector("button");

let kapsayiciSec =document.querySelector(".kapsayiciPop");

let kapali =document.querySelector(".kapa");

buttonSec.addEventListener("click",()=>{

    kapsayiciSec.style.display="block";
})

kapali.addEventListener("click",()=>{

    kapsayiciSec.style.display="none";
});

