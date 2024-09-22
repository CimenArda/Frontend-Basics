let ulsec =document.querySelector(".Liste");

let liste =["Arda","Ahmet","Mehmet","Ceren","Fatma"];

let html = ``;

liste.forEach(function(kisiler){

    html+=`<li>${kisiler}</li>`

})

ulsec.innerHTML=html;



//Objeler

let sinifYönetimi ={

    Ad :"Arda",
    Soyad:"Cimen",
    No:1234
}

console.log(sinifYönetimi.No)


let sinifYönetimi2 ={

    Ad :"Arda",
    Soyad:"Cimen",
    No:1234,
    mail:"ARDACİMEN@GMAİL.COM",

    yazdir()
    {
        console.log(this.Ad)
    }

}

sinifYönetimi2.yazdir()


let x =6.0;

console.log(Math.round(x)) //En yakın sayıya yuvarlar.

console.log(Math.floor(x)) //En yakın alt sayıya yuvarlar.

console.log(Math.pow(x,2)) //Üssünü alır.

console.log(Math.trunc(x)) //belirtilen sayının küsüratlarını göstermez.

let rastgele =Math.random(); //Rastgele sayı verir 0-1 arasında
console.log(rastgele)