
 
let liste =["Arda","Cimen","Galatasaray","İstanbul"];

console.log(liste[0] +liste[1])


let sayılar =[1,2,3,4,5,6,7];

console.log(sayılar)


let listeuzunluk =[1,2,4,5,5,6,12,4,12,4,124];

console.log(listeuzunluk.length)


let bilgi =["AHMET","şeker","Bursa","Aslan"];

let araya_at =bilgi.join(`/`);

console.log(araya_at)



//Veri EKkleme Yöntemleri
let bilgiyeVeriEkle =bilgi.concat(["1.90"]);
//concat birleştirme işlemi yapar yani bilgi arrayini cagırdıgınızda 1.90 ifadesini görmeyeceksin
console.log(bilgiyeVeriEkle)

//peki ya bilgi arrayine eklemek-stersem

bilgiyeVeriEkle2 =bilgi.push("Matematik");
console.log(bilgi)


//Veri silme

let bilgi_sil =bilgi.pop();
console.log(bilgi)




//Null ve undifend Ne Demek

let sayi;
console.log(sayi)

console.log(sayi + 5) //not a number 

let sayi1 =null;
console.log(sayi1 +5)

//null lar değerdir undifend ise yokluğu temsil eder.



let isim5 ="Arda";

let icinde_var_mi =isim.includes("r");
//içeriyor mu içeriyorsa true içermiyorsa false 

console.log(icinde_var_mi)


let sayi2 =36;

console.log(sayi2>36)
console.log(sayi2<36)
console.log(sayi2==36)
console.log(sayi2!=36)

