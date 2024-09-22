

let formSec =document.querySelector("form");


formSec.addEventListener("submit",e =>{
    e.preventDefault();
    console.log("Veri Gönderildi")
    console.log(formSec.isimal.value)
    console.log(formSec.facebook.value)
    console.log(formSec.twitter.value)
    console.log(formSec.instagram.value)
})




//Regex sifreleme mantıgı

let parola ="333333aA";

let sorgulama = /^[a-zA-Z0-9]{8,12}$/;
let sorgulama2 = /^.{8,12}$/;


let sonuc =sorgulama.test(parola);

console.log(sonuc)

if(sonuc==true){
    console.log("Sifre gecerli.Sifreniz:"+parola);
}
else{
    console.log("Sifreniz gecersiz");
}