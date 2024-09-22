let container =document.querySelector(".container");

let span =document.querySelectorAll("span");

span.forEach(e=>{

    container.addEventListener("click",x=>{

        if(x.target.tagName ==="SPAN"){
            x.target.parentElement.remove();

                }

    });


})