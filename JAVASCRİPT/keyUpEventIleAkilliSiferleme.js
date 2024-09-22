

let form =document.querySelector("form");
let mesaj =document.querySelector(".mesaj");

let sifredenetleme =document.querySelector(".sifredenetleme");

const test_et =/^[a-zA-Z0-9]{8,12}$/;


form.addEventListener("submit",e=>{
    e.preventDefault();
    const deger_al =form.isimal.value;

    if(test_et.test(deger_al))
    {

        mesaj.textContent ="Giriş Başarılı";
        mesaj.setAttribute("style","color:white;background-color:green;text-align:center;")

    }
    else
    {
        mesaj.textContent ="Giriş Başarısız";
        mesaj.setAttribute("style","color:white;background-color:red;text-align:center;")
    }


})

let inputCek =document.querySelector("#arda");
inputCek.addEventListener("keyup",e=>{

    if(test_et.test(e.target.value))
    {
        sifredenetleme.textContent="Şifre Güvenlidir.";
        e.target.setAttribute("style","background-color:green");
    }
    else
    {
        sifredenetleme.textContent="Şifreniz Güvenli Değildir.";
        e.target.setAttribute("style","background-color:red");
    }



})