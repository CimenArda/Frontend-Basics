
$(document).ready(function(){

    $("input").on("keyup",function(){
    let veriAl=$(this).val().toLowerCase();
    $("tbody tr").filter(function(){

        $(this).toggle($(this).text().toLowerCase().indexOf(veriAl) >-1);
    })

    
    })

});