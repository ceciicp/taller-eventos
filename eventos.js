document.addEventListener('DOMContentLoaded',() =>
    { let midiv= document.getElementById("divv");

    let botoncito= document.getElementById("btn");
        botoncito.addEventListener('click',(event)=>{alert("Hola!");
        event.stopPropagation();})

    midiv.addEventListener('click',()=>{
    alert("Hola! Soy el div");})

})

