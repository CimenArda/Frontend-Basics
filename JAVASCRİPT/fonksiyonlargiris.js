
    function topla(){
        console.log("Toplandı")
    }

    topla()
    topla()
    topla()

    let arda =function(){
        console.log("SLM")
    }

    arda()


function kisibilgileri(adi,soyadi)
{
    console.log(`Kişinin Adı:${adi} Kişinin Soyadı:${soyadi}`)
}


kisibilgileri("Arda","Çimen")



function üstünüal(sayı,üssü)
{
    let sonuc =sayı**üssü;

    console.log("Girilen Değerlerin sonucu:"+sonuc)
}

üstünüal(3,5)


function isim_soyisim(isim="Değer girilmedi",soyisim="Değer girilmedi")
{
    console.log(isim+ " " +soyisim)
}


isim_soyisim()






function toplama(a,b)
{
    let sonuc =a +b ;
    return sonuc ;
}

let yazdır =toplama(2,5);

console.log(yazdır);



//Arrow function
let merhaba =()=> "Merhaba";
console.log(merhaba())




let toplama1 = (sayi1,sayi2) => sayi1+sayi2;

console.log(toplama1(2,4))


//foreach

let liste=["Arda","Veli","Ahmet","Ömür","Süleyman"];

liste.forEach(element => {
    console.log(element)

});


liste.forEach(function(item,index){
    index=index+1 +".kişi";
        console.log(index,item)
})