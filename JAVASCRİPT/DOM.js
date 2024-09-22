

let sec =document.querySelector("p");

console.log(sec)


let sec2 =document.querySelector("#gala");
console.log(sec2)


let sec3 =document.querySelectorAll("p");
console.log(sec3)

sec3.forEach(x=>{
    console.log(x)
})


sec4 =document.querySelector("div .araba");

console.log(sec4)




let idsec =document.getElementById("Türkiye");

console.log(idsec)




let classsec =document.getElementsByClassName("Ordu");
console.log(classsec)



let icerikSecInnerHtml =document.querySelector(".Ordu");

console.log(icerikSecInnerHtml.innerHTML);





let sec7 =document.querySelector(".t1");

console.log(sec7.innerHTML); //veya 

sec7 =sec7.textContent;

console.log(sec7)


//Get ve Set Attiribute 
let asec =document.querySelector("a");

 let linkigetir =asec.getAttribute("href");

 console.log(linkigetir)
 



asec.setAttribute("href","https://www.youtube.com/");

 console.log(asec.getAttribute("href"));


 asec.setAttribute("target","_blank");

 
let ahrefgetir =document.querySelector(".ahref");
console.log(ahrefgetir)




let psec = document.querySelector(".pcss");

psec.style.border="1px solid black";

psec.style.letterSpacing ="5px";
console.log(psec)



let cerceve = () =>{
    a= "3px solid red";
    return a;
}

psec.style.border =cerceve();





let ogren =document.querySelector("p")





