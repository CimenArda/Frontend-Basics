

let form =document.querySelector("form");
let mesaj =document.querySelector(".mesaj");


form.addEventListener("submit",e=>{
    e.preventDefault();
    const deger_al =form.isimal.value;
    const test_et =/^[a-zA-Z0-9]{8,12}$/;

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
