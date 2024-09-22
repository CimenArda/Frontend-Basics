let body =document.querySelector("body");

console.log(body.parentElement)//body nin bir üst elemneti nedir?<html> kısımdan itibaren verir.

console.log(body.childElementCount) // alt element saıyısı

let divGoster = document.querySelector("div");

console.log(divGoster.children)



Array.from(divGoster.children).forEach(element => {
    
    console.log(element)
});


let sec =document.querySelector(".deneme");
console.log(sec.parentElement.parentElement) //iki üst  elementi

console.log(sec.nextElementSibling.textContent) //sec elementinden sonraki elementin içeriği

console.log(sec.previousElementSibling.textContent) //sec elementinden önceki elementin içeriği



