let ogren =document.querySelector("p");

console.log(ogren)

console.log(ogren.classList);




ogren.classList.remove("lale");

console.log(ogren.classList)



ogren.classList.add("lale2");
console.log(ogren.classList);



let psec = document.querySelectorAll("p");

psec.forEach(x=>{

    if(x.textContent.includes("Başarılı"))
    {
        x.classList.add("basarili"); //css deki basarili classı
    }
});

//bütün pleri secip içerigini foreachle döndük eğer textin içeriginde Başarılı kelimesi varsa
//cssdeki basarili kısmı calıssın dedim 




let kutuSec =document.querySelector(".kutu");

kutuSec.addEventListener("click",()=>{

    kutuSec.style.borderRadius="25px";
})
//.kutu classı  adında bir divim var Click olduğunda Radius ver 25 px diyorum



let tümliSec =document.querySelectorAll("li");

tümliSec.forEach(x=>{

    x.addEventListener("click",()=>{

        x.remove();
    })
});

//lilerim var listem yani ve diyorum ki bu listenin üzerindeki tıkladığım veriyi sil

