let tarih =new Date();



console.log(typeof tarih) //object


console.log(tarih.getFullYear()) //yılı verir.

console.log(tarih.getMonth() +1) //ayı bir eksik verir 0 dan baslanıldıgından dolayı +1 eklenmeli

console.log(tarih.getDay()) //kaçıncı gündeysek onu verir.




let zamanal =document.querySelector(".saat");

let saat = () =>{
    let zaman =new Date();

    let saatal =zaman.getHours();

    let dakikaal =zaman.getMinutes();

    let saniyeal =zaman.getSeconds();


    let htmlgöm = `
    
    <span>${saatal}: </span>
    <span>${dakikaal}: </span>
    <span>${saniyeal} </span>
    
    `
    zamanal.innerHTML=htmlgöm;
}
setInterval(saat,1000)