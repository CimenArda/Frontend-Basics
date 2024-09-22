

// $(document).ready(function(){

//     $(".btn-primary").click(function(){
//         $(".kutu1").fadeIn();
//         $(".kutu2").fadeIn("slow");
//         $(".kutu3").fadeIn(5000);

//     })
//     $(".btn-dark").click(function(){
//         $(".kutu1").fadeOut();
//         $(".kutu2").fadeOut("slow");
//         $(".kutu3").fadeOut(2000);

//     })




$(document).ready(function(){

    $(".btn-primary").click(function(){
        $(".kutu1").fadeToggle();
        $(".kutu2").fadeToggle("slow");
        $(".kutu3").fadeToggle(5000);

    })

});

