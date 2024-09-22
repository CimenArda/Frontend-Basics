
//Aç,kapa mantıgı 
$(document).ready(function(){

$(".btn-dark").click(function(){
    $("p").hide(1000);
})

$(".btn-primary").click(function(){

    $("p").show(1000);
})
})


//Toggle Mantıgı

$(document).ready(function(){
    $(".btn-outline-dark").click(function(){

        $("#p2").toggle();

    })
})