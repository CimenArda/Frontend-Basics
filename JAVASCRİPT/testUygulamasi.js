

let cevap = ["D","D","D"];


let form = document.querySelector("form");

let bilgilendir =document.querySelector(".bilgilendir");

form.addEventListener("submit",e=>{
    e.preventDefault();

    let puan = 0;
    let kullaniciCevaplari =[form.s1.value,form.s2.value,form.s3.value];

    kullaniciCevaplari.forEach((x,index) =>{

        if(x===cevap[index])
        {
            puan+=25;

        }
    })
   if(puan ==0 ) {
    bilgilendir.style.backgroundColor ="red";
    bilgilendir.textContent ="Rezalet bir puan :" +puan;
   }
   if(puan ==25 ) {
    bilgilendir.style.backgroundColor ="yellow";
    bilgilendir.textContent ="Daha Çok Çalışmalısın :" +puan;
   }
   if(puan ==50 ) {
    bilgilendir.style.backgroundColor ="orange";
    bilgilendir.textContent ="İdare eder.Ha Gayret ! :" +puan;
   }
   if(puan ==75 ) {
    bilgilendir.style.backgroundColor ="green";
    bilgilendir.textContent ="Evet!Başardın!! :" +puan;
   }

});