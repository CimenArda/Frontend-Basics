

//For Döngüsü
    let sayi =25 ;
    for(let i=0; i<sayi;i++){
        console.log("Galatasaray")
    }


    let list =["ARDA","CİMEN","CİMENARDA","deneme@gmail.com"];

    let i =0;

    for(i; i<list.length; i++){

        console.log(list[i])

    }

    
 
//While Döngüsü

let baslangic = 3;

let b =0;
while(b<baslangic){

    
    console.log(b)
    b++;
}


let listeler =["AHMET","MEHMET","VELİ","HÜSEYİN"];

let sayac =0;

while(sayac<listeler.length){
    console.log(listeler[sayac]);
    sayac++;
}


let sifre ="ARDA";

let alinanSifre ="ARDA";

    while(alinanSifre.includes(sifre)){
        console.log("Tebrikler Giriş Yaptınız");
        break;
    }