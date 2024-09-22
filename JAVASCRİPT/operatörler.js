


// || veya 
// && ve 
// ! değildir.



    let dbKullanici ="admin";
    let db_psw="1234";

    let kullanici ="admin";
    let psw ="1234";

    if(kullanici ==dbKullanici && psw ==db_psw)
    {
        console.log("Kullanici adi ve şifresi eşit")
    }
    else if(kullanici !=dbKullanici || psw!=db_psw)
    {
        console.log("kullanici adi veya şifre eşit değil");
    }
    

//Break ve Continue 


let sayilar = [1,23,4,5,6,6,7,8,9,"ARDA",0];

    for (let i =0;i<sayilar.length;i++)
    {
        if(sayilar[i] =="ARDA"){
            continue;
        }
        console.log(sayilar[i])
    }

    console.log("---------------------------------------------------")

let sayilar2 = [1,2,3,45,6,7,8,8,9];

for(let i =0;sayilar2.length;i++){
    if(sayilar2[i]==45){
        break;
    }
    console.log(sayilar2[i])
}






//SWİTCH CASE 

let not =50;


switch(not)
{
    case 50:
        console.log("Puan yeterlidir.")
        break;
    case 40:
        console.log("Puan yetersiz.")
        break;
    case 30:
        console.log("Puan yetersiz ve düşük")
        break;
    default:
        console.log("Puanınız çok düşük")
        break;
}



































