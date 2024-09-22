
let isim ="Arda";
let soyisim ="Çimen";

let tam_İsim= "Kişinin tam ismi:"+isim +soyisim;

console.log(tam_İsim)

console.log(tam_İsim[0]) //  0. indexte ne var

console.log(tam_İsim.length) //değişkenin uzunluğunu verir.

console.log(tam_İsim.toUpperCase()) //harflerin hepsini büyük yapar

console.log(tam_İsim.toLowerCase()) //harflerin hepsini küçüğe cevirir.

console.log(tam_İsim.indexOf("n"))  //belirtilen harfinkaçıncı indexte oldugunu arar.



let sporKulubu ="Galatasaray SK";

console.log(sporKulubu.lastIndexOf("a"))
//belirtilen harfin en son kaçıncı indexte oldugunu arar.


let secilen_bolum_yaz =sporKulubu.slice(0,11);
console.log(secilen_bolum_yaz)  //belirtlien index aralıgı kadar yaz



let tc_kimlik = "/" + 33333333333;
let temizle =tc_kimlik.replace("/","");
console.log(temizle)
//   / işareti yerine başka bir şey yaz/değiştir 



let adres ="Merkez/24 İstanbul&Kağıthane";

let revizeAdres = adres.replace("/"," ").replace("&"," ");

console.log(revizeAdres)

//üst üste iki defa kullandım farklı yerleri değiştirdim




//Yavaş Yavaş sayılarla oynayalım

let üstünü_al =2**5;

console.log(üstünü_al); //iki defa * ifadesi üssünü alır


let hatalı =5/0;

console.log(hatalı)



let yarı =15;
const pisayisi =3.14;

let daire_hesapla =pisayisi*yarı**2;

console.log(daire_hesapla)



//String kısayol
let Ad ="Arda";
let Soyad ="Çimen";
let instagram ="cimenarda";

let birlestir ="Bilgiler: " +Ad + " " +Soyad +" "+ "Instagram adresi" +instagram;

console.log(birlestir)

// bu sekilde uzun uzun ugrasmak yerine 

let birlestir2 = `Kişinin adı: ${isim}, Soyadı:${Soyad}, İnstagram Adresi:${instagram}`;

console.log(birlestir2)
