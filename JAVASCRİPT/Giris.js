// alert("Selam")


//  Console log Kullanımı  Neden Kullanılır
//  Hata Ayıklama (Debugging),Bilgi Verme (Informational),Kod Akışını Takip Etme

console.log("Arda Çimen")

console.log(5)

console.log(5 +5)

let x =4 ;
let y =5 ;

console.log(x+y)



// Değişken Tanımlama 

// JavaScript'te let, const ve var anahtar kelimeleri değişken tanımlamak için kullanılır.


// Temporal Dead Zone (TDZ)
/*
Temporal Dead Zone (TDZ), JavaScript'te let ve const ile tanımlanan değişkenlerin, tanımlanmadan önce erişilemediği süreyi ifade eder.
 TDZ, kod yürütülmeden önce değişkenlerin hoist edilmesiyle ortaya çıkar, 
 ancak let ve const değişkenlerinin tanımlanmadan önce kullanılmasına izin verilmez. 

Bu nedenle, tanımlanmadan önce bu değişkenlere erişmeye çalışmak bir ReferenceError ile sonuçlanır.


var da ise böyle bir durum yoktur 


 */

/* 
var: Modern JavaScript kodunda var kullanımı genellikle önerilmez. Yerine let ve const tercih edilmelidir.
let: Değerinin değişmesi gereken değişkenler için kullanılır.
const: Sabit kalması gereken ve değeri değiştirilmeyecek değişkenler için kullanılır.



*/






/*
let
Kapsam: let ile tanımlanan değişkenler blok kapsamına sahiptir. 
Bu, değişkenin tanımlandığı blok içinde geçerli olduğu anlamına gelir.

Hoisting: let de hoisting yapar, ancak Temporal Dead Zone (TDZ) nedeniyle tanımlandığı yerden önce kullanılamaz.

Yeniden Atanabilirlik: let ile tanımlanan değişkenler yeniden atanabilir, ancak yeniden tanımlanamaz.


*/

/*
const

Kapsam: const da let gibi blok kapsamına sahiptir.

Hoisting: const de hoisting yapar ve TDZ geçerlidir.

Yeniden Atanabilirlik: const ile tanımlanan değişkenler yeniden atanamaz ve yeniden tanımlanamaz.
Tanımlandıktan sonra sabit kalırlar.


*/


/*

var
Kapsam: var ile tanımlanan değişkenler fonksiyon kapsamına sahiptir.
Yani, bir fonksiyon içinde tanımlandıysa sadece o fonksiyon içinde erişilebilir. 
Fonksiyon dışında tanımlandıysa global kapsamda olur.


Hoisting: var değişkenleri hoisting yapar, yani değişken tanımlamaları kodun başına kaldırılır.
Ancak, bu durum undefined değerine sahip olmasına neden olur.


Yeniden Atanabilirlik: var ile tanımlanan değişkenler yeniden atanabilir ve yeniden tanımlanabilir.

*/
