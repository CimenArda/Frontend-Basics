// sessionStorage.setItem("İsim","Arda");
// sessionStorage.setItem("İsim","Ahmet");
// sessionStorage.setItem("İsim1","Ali");


// localStorage.setItem("İsim","Abdullah");


let add =document.querySelector(".add");
let delete_item =document.querySelector(".delete");
let clear_item =document.querySelector(".clear");


let anahtar =document.querySelector(".anahtar");
let deger =document.querySelector(".deger");
let sil_ =document.querySelector(".sil_");


add.addEventListener("click",e=>{
    e.preventDefault();
    sessionStorage.setItem(anahtar.value,deger.value);
});

delete_item.addEventListener("click",e=>{

    sessionStorage.removeItem(sil_.value);
})

clear_item.addEventListener("click",e=>{

    sessionStorage.clear();
})